var $dieAndNum = $('#die, #roll');
var $die = $('#die');
var $hillary = $('#player1');
var $trump = $('#player2');
var tiles = {};
var $roll = $('#roll');
var hillaryPos = 0;
var trumpPos = 0;
var gameOver = false;
var $winnerCircle = $('#winner-circle');


for (var i = 1; i <= 10; i++) {
    tiles[i] = $('#tile' + i);
}



var turn;
if (Math.random() > 0, 5) {
    turn = 'player1';
} else {
    turn = 'player2';
}


$dieAndNum.click(function() {
    if (gameOver === true) return false;
    $die.attr('src', './img/Dodecahedron3.gif');


    var num = Math.floor(Math.random() * 10 + 1);
    $roll.html(num);




    var $playerToMove;
    var playerTile;
    if (turn === 'player1') {
        $playerToMove = $hillary;
        turn = 'player2';
        hillaryPos += num;
        playerTile = hillaryPos;
    } else {
        $playerToMove = $trump;
        turn = 'player1';
        trumpPos += num;
        playerTile = trumpPos;
    }


    if (trumpPos > 10 || hillaryPos > 10) {
        onGameOver($playerToMove);
        return false;
    }


    var tilePos = tiles[playerTile][0].getBoundingClientRect();


    $playerToMove.css({
        'top': tilePos.top,
        'left': tilePos.left
    });



    function onGameOver($winner) {
        gameOver = true;
        var tilePos = $winnerCircle[0].getBoundingClientRect();
        $winner.css({
          'top':tilePos.top ,
          'left':tilePos.left
        }).addClass('winner-circle');

        setTimeout(function() {
          alert('Winner!');
        },400);
        console.log($winner);


    }


});
