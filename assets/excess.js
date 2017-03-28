document.addEventListener('DOMContentLoaded', function(){
  var windowWidth = window.innerWidth
  var tiggers = document.getElementById('tigger')





  window.addEventListener('click', function(e){
    for (var i = -400; i<-200; i+=10) {
    tiggers.style.left = (e.x+i) + 'px'
    tiggers.style.right = (e.x+i) + 'px'}
    // tiggers.style.top = (e.y) + 'px'
    // tiggers.style.bottom = (e.y-i) + 'px'
    // tiggers.gravity = 0.05
    // if(e.x > windowWidth/2){
    //   console.log(e.x)
    //   tiggers.style.transform = 'scaleX(1)'
    // } else {
    //   tiggers.style.transform = 'scaleX(-1)'
    // }
})
})

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href= />
    <title>Clickkkkkkkkkkk</title>
  </head>
  <body>
    <h1></h1>
  <img id ='tigger' src = 'assets/tiggger.png' width = '50'/>
  <script src = charset ='utf-8'></script>
  </body>
</html>
