function fillall () {
  for (var i = 0; i < 36; i++) {
    document.lightsform.elements[i].checked = 1
  }
}
function clearall () {
  for (var i = 0; i < 36; i++) {
    document.lightsform.elements[i].checked = 0
  }
}
// $buttons.on('click',
function level1 () {
  clearall()
  document.lightsform.elements[2].checked = 1
  document.lightsform.elements[8].checked = 1
  document.lightsform.elements[12].checked = 1
  document.lightsform.elements[13].checked = 1
  document.lightsform.elements[15].checked = 1
  document.lightsform.elements[16].checked = 1
  document.lightsform.elements[20].checked = 1
  document.lightsform.elements[26].checked = 1
}
// )
function level2 () {
  clearall()
  document.lightsform.elements[12].checked = 1
  document.lightsform.elements[16].checked = 1
  document.lightsform.elements[17].checked = 1
  document.lightsform.elements[18].checked = 1
  document.lightsform.elements[20].checked = 1
  document.lightsform.elements[21].checked = 1
  document.lightsform.elements[22].checked = 1
  document.lightsform.elements[23].checked = 1
  document.lightsform.elements[24].checked = 1
}
function level3 () {
  fillall()
  document.lightsform.elements[4].checked = 0
  document.lightsform.elements[6].checked = 0
  document.lightsform.elements[7].checked = 0
  document.lightsform.elements[8].checked = 0
  document.lightsform.elements[11].checked = 0
  document.lightsform.elements[12].checked = 0
  document.lightsform.elements[13].checked = 0
  document.lightsform.elements[16].checked = 0
  document.lightsform.elements[17].checked = 0
  document.lightsform.elements[18].checked = 0
  document.lightsform.elements[24].checked = 0
}
function level4 () {
  clearall()
  document.lightsform.elements[2].checked = 1
  document.lightsform.elements[6].checked = 1
  document.lightsform.elements[8].checked = 1
  document.lightsform.elements[10].checked = 1
  document.lightsform.elements[12].checked = 1
  document.lightsform.elements[14].checked = 1
  document.lightsform.elements[16].checked = 1
  document.lightsform.elements[18].checked = 1
  document.lightsform.elements[22].checked = 1
}
function random () {
  clearall()
document.lightsform.elements[Math.floor(Math.random() *10)].checked = 1
document.lightsform.elements[Math.floor(Math.random() *20)].checked = 1
document.lightsform.elements[Math.floor(Math.random() *32)].checked = 1
document.lightsform.elements[Math.floor(Math.random() *30)].checked = 1
document.lightsform.elements[Math.floor(Math.random() *28)].checked = 1
document.lightsform.elements[Math.floor(Math.random() *36)].checked = 1
}
function checkall () {
  var win = 1
  for (var i = 0; i < 36; i++) {
    if (document.lightsform.elements[i].checked == 1) {
      win = 0
    }
  }
  if (win == 1) {
    alert('\nYou Won!!\n')
  }
}
function check (value) {
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

  if (document.lightsform.elements[bottomAdd].checked == 1) {
    document.lightsform.elements[bottomAdd].checked = 0
  } else {
    document.lightsform.elements[bottomAdd].checked = 1
  }
  if (document.lightsform.elements[topAdd].checked == 1) {
    document.lightsform.elements[topAdd].checked = 0
  } else {
    document.lightsform.elements[topAdd].checked = 1
  }
  if (document.lightsform.elements[rightAdd].checked == 1) {
    document.lightsform.elements[rightAdd].checked = 0
  } else {
    document.lightsform.elements[rightAdd].checked = 1
  }
  if (document.lightsform.elements[leftAdd].checked == 1) {
    document.lightsform.elements[leftAdd].checked = 0
  } else {
    document.lightsform.elements[leftAdd].checked = 1
  }
  checkall()
}
