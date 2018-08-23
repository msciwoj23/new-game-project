var active_player="x"
var socket = io.connect('http://' + document.domain + ':' + location.port + '/test');
let click_effect={
    add_click_event:function(id){
        let text_id = id.toString()
        console.log (text_id)
        document.getElementById(text_id).setAttribute("onclick", "click_effect.click(".concat(id).concat(")"))
        // send_to_server.check_board_status()  
    },

    add_all_events:function(){
        for (i = 1; i < 10; i++) { 
            this.add_click_event(i);}
    },

    click:function(id){
        let text_id = id.toString()


        socket.emit('field1', {data: $('#player').get(0).innerHTML, id: text_id});
            // document.getElementById('f1').submit();
        active_player=document.getElementById('player').innerHTML
        // document.getElementById(text_id).innerHTML=active_player
        // console.log (active_player)
        this.change_active_player()
        document.getElementById(text_id).removeAttribute("onclick")
    },

    change_active_player:function(){
        if (document.getElementById('player').innerHTML=="x"){document.getElementById('player').innerHTML="o"}
        else if (document.getElementById('player').innerHTML=="o"){document.getElementById('player').innerHTML="x"}

    },
}