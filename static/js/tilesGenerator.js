
function generateTiles () {
    var i;
    for (i = 2; i < 61; i++) {
        var firstTile = document.getElementById('1');
        var copy = firstTile.cloneNode(true);
        var insertPlace = document.getElementById('toInsertTiles');
        copy.setAttribute('id', i);
        if (i % 2 == 0) {
            copy.setAttribute('class', 'everySecond');
        }
        if (i % 3 == 0) {
      copy.setAttribute('class', 'everyThird');
    }
        if (i % 5 == 0) {
      copy.setAttribute('class', 'everyFifth');
    }





        insertPlace.appendChild(copy);
    }


}

generateTiles();
