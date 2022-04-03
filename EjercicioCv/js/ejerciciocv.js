var opcs = document.querySelectorAll('a.nav-link');
for (var i=0; i<opcs.length; i++) {
   opcs[i].addEventListener('click', function(){
      var actual=document.getElementsByClassName("active");
      if (actual.length != 0) {
         actual[0].className= actual[0].className.replace("active","");
      };
      this.className += ' active';
   })
}