import json
from flask import Flask, render_template, request, session

app = Flask(__name__)

@app.route("/")
def main():
    return 'Start page'


def main():
    app.debug = True
    app.run(host='0.0.0.0', port=5050)

if __name__ == '__main__':
    main()
