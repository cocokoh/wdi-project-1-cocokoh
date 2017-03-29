// alert('START GAME')
var data = []
var table = document.getElementById('mytable')
var inputs = table.getElementsByTagName('input')
for (var z=0; z < inputs.length; z++)
  data.push(inputs[z]);

function fillall () {
  for (var i = 0; i < 36; i++) {
    data[i].checked = 1
  }
}
function clearall () {
  for (var i = 0; i < 36; i++) {
    data[i].checked = 0
  }
}
// $buttons.on('click',
var l1 = [2,8,12,13,15,16,20,26]
level1(l1)
function level1 (l1) {
  clearall()
  for (var i = 0; i<l1.length; i++){
    var x = l1[i]
    data[x].checked = 1
  }}

$('#l2').on('click', function (){
var l2 = [12,16,17,18,20,34,2,7]
  clearall()
  for (var i = 0; i<l2.length; i++){
    var y = l2[i]
    data[y].checked = 1
  }})

$('#l3').on('click', function (){
var l3 = [6,7,20,34,21,35]
  clearall()
  for (var i = 0; i<l3.length; i++){
    var z = l3[i]
    data[z].checked = 1
  }})

$('#l4').on('click', function (){
var l4 = [2,4,6,8,10,28,30,32,34]
  clearall()
  for (var i = 0; i<l4.length; i++){
    var t = l4[i]
    data[t].checked = 1
  }})

$('#random').on('click', function (){
  clearall()
data[Math.floor(Math.random() *10)].checked = 1
data[Math.floor(Math.random() *20)].checked = 1
data[Math.floor(Math.random() *32)].checked = 1
data[Math.floor(Math.random() *30)].checked = 1
data[Math.floor(Math.random() *28)].checked = 1
data[Math.floor(Math.random() *36)].checked = 1
})
function checkall () {
  var win = 1
  for (var i = 0; i < 36; i++) {
    if (data[i].checked == 1) {
      win = 0
    }
  }
  if (win == 1) {
    alert('\nYou Won!!\n')
  }
}
function check(value) {
  colLength = 6
  w = 1
  rowNumber = parseInt(value / colLength) + w
  if (isNaN(rowNumber)) {
    rowNumber = 1
  }
  intv = parseInt(value)
  bottomAdd = eval(intv + colLength)
  topAdd = eval(intv - colLength)
  rightAdd = eval(intv + w)
  leftAdd = eval(intv - w)
  if (bottomAdd < 0 || bottomAdd > 35) {
    bottomAdd = 36
  }
  if (topAdd < 0 || topAdd > 35) {
    topAdd = 36
  }
  if (rightAdd < 0 || rightAdd > 35) {
    rightAdd = 36
  }
  if (leftAdd < 0 || leftAdd > 35) {
    leftAdd = 36
  }
  rowNum1 = (parseInt(rightAdd / colLength) + w)
  rowNum2 = (parseInt(leftAdd / colLength) + w)
  kv = rowNumber
  if (rowNum1 != kv) {
    rightAdd = 36
  }
  if (rowNum2 != kv) {
    leftAdd = 36
  }
  if (value == 6) leftAdd = 36 // correction for strange bug

  if (bottomAdd !== 36) {
  if (data[bottomAdd].checked == 1) {
    data[bottomAdd].checked = 0
  } else {
    data[bottomAdd].checked = 1
    }
  }
  if (topAdd !== 36) {
    if (data[topAdd].checked == 1) {
      data[topAdd].checked = 0
    } else {
      data[topAdd].checked = 1
    }
  }
  if (rightAdd !== 36) {
    if (data[rightAdd].checked == 1) {
      data[rightAdd].checked = 0
    } else {
      data[rightAdd].checked = 1
    }
  }
  if (leftAdd !== 36) {
    if (data[leftAdd].checked == 1) {
      data[leftAdd].checked = 0
    } else {
      data[leftAdd].checked = 1
    }
  }
  checkall()
}
