let boxCarousel = document.querySelector('#carousel');
let imgCarousel = document.createElement('div');
imgCarousel.classList.add('imgCarousel');
let chantier1 = document.querySelector('#arr1');
let chantier2 = document.querySelector('#arr2');
let chantier3 = document.querySelector('#arr3');
let chantier4 = document.querySelector('#arr4');
let next = document.querySelector('#next');

let arrChantier1 = [
  "url(/public/img/chantier1_1.jpg)",
  "url(/public/img/chantier1_2.jpg)",
  "url(/public/img/chantier1_3.jpg)",
  "url(/public/img/chantier1_4.jpg)",
  "url(/public/img/chantier1_5.jpg)",
  "url(/public/img/chantier1_6.jpg)"
];

let arrChantier2 = [
  "url(/public/img/chantier2_1.jpg)",
  "url(/public/img/chantier2_2.jpg)",
  "url(/public/img/chantier2_3.jpg)",
  "url(/public/img/chantier2_4.jpg)",
  "url(/public/img/chantier2_5.jpg)"
];

let arrChantier3 = [
  "url(/public/img/chantier3_1.jpg)",
  "url(/public/img/chantier3_2.jpg)",
  "url(/public/img/chantier3_3.jpg)",
  "url(/public/img/chantier3_4.jpg)",
  "url(/public/img/chantier3_5.jpg)"
];

let arrChantier4 = [
  "url(/public/img/chantier4_1.jpg)",
  "url(/public/img/chantier4_2.jpg)",
  "url(/public/img/chantier4_3.jpg)",
  "url(/public/img/chantier4_4.jpg)",
  "url(/public/img/chantier4_5.jpg)",
  "url(/public/img/chantier4_6.jpg)",
  "url(/public/img/chantier4_7.jpg)",
  "url(/public/img/chantier4_8.jpg)"
];

next.before(imgCarousel);

chantier1.addEventListener('click', () => {
  let i = 0;
  imgCarousel.style.backgroundImage = arrChantier1[0];
  next.addEventListener('click', () => {
    i++;
    if (i == arrChantier1.length) {
      i = 0;
    }
    imgCarousel.style.backgroundImage = arrChantier1[i];
  });
})

chantier2.addEventListener('click', () => {
  let j = 0;
  imgCarousel.style.backgroundImage = arrChantier2[0];
  next.addEventListener('click', () => {
    j++;
    if (j == arrChantier2.length) {
      j = 0;
    }
    imgCarousel.style.backgroundImage = arrChantier2[j];
  });
})

chantier3.addEventListener('click', () => {
  let k = 0;
  imgCarousel.style.backgroundImage = arrChantier3[0];
  next.addEventListener('click', () => {
    k++;
    if (k == arrChantier3.length) {
      k = 0;
    }
    imgCarousel.style.backgroundImage = arrChantier3[k];
  });
})

chantier4.addEventListener('click', () => {
  let l = 0;
  imgCarousel.style.backgroundImage = arrChantier4[0];
  next.addEventListener('click', () => {
    l++;
    if (l == arrChantier4.length) {
      l = 0;
    }
    imgCarousel.style.backgroundImage = arrChantier4[l];
  });
})




