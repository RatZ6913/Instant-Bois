let boxCarousel = document.querySelector('#carousel');
let imgCarousel = document.createElement('div');
imgCarousel.classList.add('imgCarousel');
let textChantier = document.createElement('p');
textChantier.classList.add('textChantier');
let chantier1 = document.querySelector('#arr1');
let chantier2 = document.querySelector('#arr2');
let chantier3 = document.querySelector('#arr3');
let chantier4 = document.querySelector('#arr4');
let next = document.querySelector('#next');
let previous = document.querySelector('#previous');

let arrChantier1 = [
  "url(public/img/chantier1_1.jpg)",
  "url(public/img/chantier1_2.jpg)",
  "url(public/img/chantier1_3.jpg)",
  "url(public/img/chantier1_4.jpg)",
  "url(public/img/chantier1_5.jpg)",
  "url(public/img/chantier1_6.jpg)"
];

let arrChantier2 = [
  "url(public/img/chantier2_1.jpg)",
  "url(public/img/chantier2_2.jpg)",
  "url(public/img/chantier2_3.jpg)",
  "url(public/img/chantier2_4.jpg)",
  "url(public/img/chantier2_5.jpg)"
];

let arrChantier3 = [
  "url(public/img/chantier3_1.jpg)",
  "url(public/img/chantier3_2.jpg)",
  "url(public/img/chantier3_3.jpg)",
  "url(public/img/chantier3_4.jpg)",
  "url(public/img/chantier3_5.jpg)"
];

let arrChantier4 = [
  "url(public/img/chantier4_1.jpg)",
  "url(public/img/chantier4_2.jpg)",
  "url(public/img/chantier4_3.jpg)",
  "url(public/img/chantier4_4.jpg)",
  "url(public/img/chantier4_5.jpg)",
  "url(public/img/chantier4_6.jpg)",
  "url(public/img/chantier4_7.jpg)",
  "url(public/img/chantier4_8.jpg)"
];

next.before(imgCarousel);

chantier1.addEventListener('click', () => {
  let i = 0;
  imgCarousel.style.backgroundImage = arrChantier1[0];
  boxCarousel.before(textChantier);
  previous.style.display = "flex";
  previous.style.visibility = "hidden";
  next.style.display = "flex";
  textChantier.textContent = "Chantier réalisé sur la commune de Risoul. Chantier en ossature bois, avec une couverture en bac acier.";

  next.addEventListener('click', () => {
    imgAnim(imgCarousel);
    i++;
    if (i == arrChantier1.length) {
      i = 0;
    }

    if (i == 0) {
      previous.style.visibility = "hidden";
    } else {
      previous.style.visibility = "visible";
    }

    imgCarousel.style.backgroundImage = arrChantier1[i];
  });

  previous.addEventListener('click', () => {
    imgAnim(imgCarousel);
    i--;
    if (i === 0) {
      previous.style.visibility = "hidden";
    }
    imgCarousel.style.backgroundImage = arrChantier1[i];
  });
});

chantier2.addEventListener('click', () => {
  let j = 0;
  imgCarousel.style.backgroundImage = arrChantier2[0];
  boxCarousel.before(textChantier);
  previous.style.display = "flex";
  previous.style.visibility = "hidden";
  next.style.display = "flex";
  textChantier.textContent = "Chantier réalisé sur la commune de Saint-André d'Embrun. Charpente pour un garage. Charpente en épicéa avec une couverture en bac acier.";

  next.addEventListener('click', () => {
    imgAnim(imgCarousel);
    j++;
    if (j == arrChantier2.length) {
      j = 0;
    }

    if (j == 0) {
      previous.style.visibility = "hidden";
    } else {
      previous.style.visibility = "visible";
    }

    imgCarousel.style.backgroundImage = arrChantier2[j];
  });

  previous.addEventListener('click', () => {
    imgAnim(imgCarousel);
    j--;
    if (j === 0) {
      previous.style.visibility = "hidden";
    }
    imgCarousel.style.backgroundImage = arrChantier2[j];
  });
});

chantier3.addEventListener('click', () => {
  let k = 0;
  imgCarousel.style.backgroundImage = arrChantier3[0];
  boxCarousel.before(textChantier);
  previous.style.display = "flex";
  previous.style.visibility = "hidden";
  next.style.display = "flex";
  textChantier.textContent = "Chantier réalisé à Saint Bonnet en Champsaur. Remplacement de la charpente, création de velux , et une couverture en tuile rouge.";

  next.addEventListener('click', () => {
    imgAnim(imgCarousel);
    k++;
    if (k == arrChantier3.length) {
      k = 0;
    }

    if (k == 0) {
      previous.style.visibility = "hidden";
    } else {
      previous.style.visibility = "visible";
    }

    imgCarousel.style.backgroundImage = arrChantier3[k];
  });

  previous.addEventListener('click', () => {
    imgAnim(imgCarousel);
    k--;
    if (k === 0) {
      previous.style.visibility = "hidden";
    }
    imgCarousel.style.backgroundImage = arrChantier3[k];
  });
});

chantier4.addEventListener('click', () => {
  let l = 0;
  imgCarousel.style.backgroundImage = arrChantier4[0];
  boxCarousel.before(textChantier);
  previous.style.display = "flex";
  previous.style.visibility = "hidden";
  next.style.display = "flex";
  textChantier.textContent = "Chantier réalisé à la bâtie neuve. Rénovation d'une ancienne grange. Remplacement des pannes et chevrons en conservant les anciennes fermes. Création de lucarne et de VELUX. La couverture est en bac acier.";

  next.addEventListener('click', () => {
    imgAnim(imgCarousel);
    l++;
    if (l == arrChantier4.length) {
      l = 0;
    }

    if (l == 0) {
      previous.style.visibility = "hidden";
    } else {
      previous.style.visibility = "visible";
    }

    imgCarousel.style.backgroundImage = arrChantier4[l];
  });

  previous.addEventListener('click', () => {
    imgAnim(imgCarousel);
    l--;
    if (l === 0) {
      previous.style.visibility = "hidden";
    }
    imgCarousel.style.backgroundImage = arrChantier4[l];
  });
});

imgAnim = (param) => {
  param.style.transition = "transform 0.1s ease";
  param.style.transform = "scaleY(0.9)";

  setTimeout(() => {
    param.style.transform = "scaleY(1)";
  }, 100);
};


