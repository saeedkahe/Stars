// Add Star Elements
for( var i = 0; i <= 75; i++ ) {

  let StarElements = document.createElement('div');
  let Size = Math.random() * 20;
  StarElements.style.fontSize = 10 + Size + 'px';
  StarElements.classList.add('star');
  StarElements.style.left = Math.random() * + innerWidth + 'px';
  StarElements.style.top = Math.random() * + innerHeight + 'px';
  StarElements.style.filter = `hue-rotate(${ i * 5 }deg)`; // Random Color
  document.querySelector('.sec').appendChild(StarElements);

}

// Animate Stars
function AnimateStars() {

  let GetAllStars = document.querySelectorAll('.star');
  let Num = Math.floor( Math.random() * GetAllStars.length );
  GetAllStars[Num].classList.toggle('animate');

}
setInterval(AnimateStars, 50);