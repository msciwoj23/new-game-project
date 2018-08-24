import json
from flask import Flask, render_template, request, session
from flask_socketio import SocketIO, emit
import data_manager


app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)


@app.route("/")
def main():
    return render_template('index.html')

@app.route("/player")
def player():
    print('dupa')
    return render_template('player.html')

@app.route("/player", methods=['POST'])
def start_game():
    print('test')
    print(request.form['playerx'])
    print(request.form['playero'])
    
    playerx =request.form['playerx']
    playery =request.form['playero']

    return redirect("/game")

@app.route("/game")
def play():
    return render_template('display.html')

@socketio.on('my event', namespace='/test')
def test_message(message):
    emit('my response', {'data': message['data']})

@socketio.on('new_game', namespace='/test')
def new_game(message):
    data_manager.reset()


@socketio.on('field1', namespace='/test')
def test_message(message):
    print(message['data'])
    field_id=int(message['id'])
    player=message['data']
    data_manager.change_field(player, field_id)
    print(data_manager.refresh())
    emit('field'+message['id'], {'data': data_manager.refresh()})

@socketio.on('my broadcast event', namespace='/test')
def test_message(message):
    emit('my response', {'data': message['data']}, broadcast=True)

@socketio.on('connect', namespace='/test')
def test_connect():
    emit('my response', {'data': 'Connected'})
    

@socketio.on('disconnect', namespace='/test')
def test_disconnect():
    print('Client disconnected')

def main():
    app.debug = True
    app.run(host='0.0.0.0', port=5050)

if __name__ == '__main__':
    socketio.run(app, 
    host='0.0.0.0', debug=True, port=5050)
