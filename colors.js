function LinksSetColor(color){
  // var alist = document.querySelectorAll('a');
  // var i = 0;
  // while(i<alist.length){
  //   alist[i].style.color = color;
  //   i = i+1;}
  $('a').css('color',color);
}
var Body = {
  setColor:function(color){
    // document.querySelector('body').style.color=color;
    $('Body').css('color',color);
  },
  setBackgroundColor:function(color){
    // document.querySelector('body').style.backgroundColor=color;
    $('Body').css('backgroundColor',color);

  }
}
function nightdayhandler(self){

  var target = document.querySelector('body');
  if (self.value === 'night') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value='day';
    LinksSetColor('powderblue');
  }

  else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value='night';
    LinksSetColor('blue');

  }
}
