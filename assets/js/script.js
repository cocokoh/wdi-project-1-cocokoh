alert('START GAME')

// getting the info on boxes from HTML
var data = []
var table = document.getElementById('mytable')
var inputs = table.getElementsByTagName('input')
for (var z=0; z < inputs.length; z++)
  data.push(inputs[z]);

// setting a function similar to level1() so that the table displays level1 settings upon entering the site.
function ll1 (l1) {
var l1 = [2,8,12,13,15,16,20,26]
  clearall()
  for (var i = 0; i<l1.length; i++){
    var x = l1[i]
    data[x].checked = 1
  }
}
  ll1()

// function to uncheck all boxes when a button is clicked so that the table would be refreshed.
function clearall () {
  for (var i = 0; i < 36; i++) {
    data[i].checked = 0
  }
}

// button functions. numbers passed in the array for the default boxes to be selected.
$('#l1').on('click', function(){
var l1 = [2,8,12,13,15,16,20,26]
  clearall()
  for (var i = 0; i<l1.length; i++){
    var x = l1[i]
    data[x].checked = 1
  }})

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

// winning function
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

// function that gets called when a box is checked. Refer to HTML for code that calls this function.
function check(value) {
  colLength = 6
  w = 1
  rowNumber = parseInt(value / colLength) + w
  if (isNaN(rowNumber)) {
    rowNumber = 1
  }

  // defining the calculation for the boxes to be selected
  intv = parseInt(value)
  bottomAdd = eval(intv + colLength)
  topAdd = eval(intv - colLength)
  rightAdd = eval(intv + w)
  leftAdd = eval(intv - w)

  // setting calculations to out of range
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
  // to prevent clicks on far left and right columns from checking out on other rows
  rowNum1 = (parseInt(rightAdd / colLength) + w)
  rowNum2 = (parseInt(leftAdd / colLength) + w)
  kv = rowNumber
  if (rowNum1 != kv) {
    rightAdd = 36
  }
  if (rowNum2 != kv) {
    leftAdd = 36
  }
  // if (value == 6) leftAdd = 36 // correction for strange bug

  //code for checking and unchecking boxes
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
  // to check winning function~
  checkall()
}
