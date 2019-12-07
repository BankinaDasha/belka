const toggleElement = document.querySelector('.contacts__item-burger');
const navElement = document.querySelector('.main-nav');

toggleElement.addEventListener('click', () => {
  navElement.classList.toggle('main-nav--open');
  toggleElement.classList.toggle('contacts__item-burger--open')
});



const accordion = document.querySelectorAll('.price-mob__item');

for (let  i = 0; i <accordion.length; i++) {
accordion [i].addEventListener('click', () => {
  accordion [i].classList.toggle('price-mob__item--active')
});
};

var track = document.querySelector('.track');

  if (window.innerWidth < 1280) {
    var flkty = new Flickity( track, {
      cellAlign: 'left',
      contain: true,
      pageDots: false,
      autoPlay: true,
      wrapAround: true
      });
  };

var galery = document.querySelector('.galery__inner');
var flkty = new Flickity( galery, {
  cellAlign: 'center',
  contain: true,
  pageDots: false,
  autoPlay: true,
  wrapAround: true
});


var review= document.querySelector('.review__list');
var flkty = new Flickity( review, {
  cellAlign: 'center',
  contain: true,
  pageDots: false,
  autoPlay: true,
  wrapAround: true
});
