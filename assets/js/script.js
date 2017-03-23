$(document).ready(function() {

  var $box1 = $('#1')
  var $box2 = $('#2')
  var $box3 = $('#3')
  var $box4 = $('#4')
  var $box5 = $('#5')
  var $box6 = $('#6')
  var $box7 = $('#7')
  var $box8 = $('#8')
  var $box9 = $('#9')
  var $restart = $('#restart')
  var $boxes = $('.box')

  $boxes.on('click', function () {
    playTurn()
    var $names = $($.parseHTML('$'+'box'+this.id))
console.log($names)
    if (player ===1) {
      $names.text('sd')

}

    // alert('clicked')
  })

var grid = [null, null, null, null, null, null, null, null, null]
var player = 1
function playTurn (index) {
  if (grid[index] || isGameOver()) {
    return false
  } else {
    grid[index] = player
    if (player === 1) player = 2
    else player = 1
    return true
  }
}

function whoWon () {
  if ($box1 && $box1 === $box2 && $box1 === $box3) return $box1
  if ($box4 && $box4 === $box5 && $box4 === $box6) return $box4
  if ($box7 && $box7 === $box8 && $box7 === $box9) return $box7
  if ($box1 && $box1 === $box4 && $box1 === $box7) return $box1
  if ($box2 && $box2 === $box5 && $box2 === $box8) return $box2
  if ($box3 && $box3 === $box6 && $box3 === $box9) return $box3
  if ($box1 && $box1 === $box5 && $box1 === $box9) return $box1
  if ($box3 && $box3 === $box5 && $box3 === $box7) return $box3
  if ($box1 && $box2 && $box3 && $box4 && $box5 &&
    $box6 && $box7 && $box8 && $box9) return 3
  return 0
}

function isGameOver () {
  if (whoWon()) return true
  return false
}

$restart.on('click', function restart () {
  grid = [null, null, null, null, null, null, null, null, null]
  player = 1
})
})
