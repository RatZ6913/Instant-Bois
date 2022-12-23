let boxCarousel = document.querySelector('#carousel');
let imgCarousel = document.createElement('div');
imgCarousel.classList.add('imgCarousel');
let next = document.querySelector('#next');

let arrChantier1 = [
  "url(/public/img/chantier1_1.jpg)",
  "url(/public/img/chantier1_2.jpg)",
  "url(/public/img/chantier1_3.jpg)",
  "url(/public/img/chantier1_4.jpg)",
  "url(/public/img/chantier1_5.jpg)",
  "url(/public/img/chantier1_6.jpg)"
];

imgCarousel.style.backgroundImage = arrChantier1[0];
next.before(imgCarousel);
let i = 0;


next.addEventListener('click', () => {
  imgCarousel.style.transform = "translate( 50%)";
  imgCarousel.style.transition = "2s ease-in-out";
  i++;

  if (i == arrChantier1.length) {
    i = 0;
  }
  imgCarousel.style.backgroundImage = arrChantier1[i];

});





