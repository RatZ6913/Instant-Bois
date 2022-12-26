
///Selection de la div principale du carrousel///
const activeImg = document.querySelector("#activeImg"),
  img = document.querySelector("#activeImg img"),
  buttonLeft = document.querySelector('.left'),
  buttonRight = document.querySelector('.right');


///bouton choix du carrousel///
const sites = document.querySelectorAll('.site')

///déclaration des tableaux contenant les images des chantiers///
const tabSites = [];
for (let site = 0; site < 4; site++) {
  tabSites.push([]);
}

///ajout des photos dans chaque tableau///

var sitesData = [
  { id: 1, limit: 7 },
  { id: 2, limit: 6 },
  { id: 3, limit: 6 },
  { id: 4, limit: 9 }
];

<<<<<<< refs/remotes/PierreYEM/Working
<<<<<<< refs/remotes/PierreYEM/Working
=======
>>>>>>> update merge
for ({ id, limit } of sitesData) {

  for (let numImg = 1; numImg < limit; numImg++) {
    tabSites[id - 1].push(`./public/img/chantier${id}_${numImg}.jpg`);
  }

}
console.log(tabSites);

let imgCount = 0;

///Bouton de choix de chantier///
for (let i = 0; i < 4; i++) {

  sites[i].addEventListener('click', () => {
    imgCount = 0;
    img.setAttribute('data-id', `site${i + 1}`);
    img.setAttribute('alt', `chantier ${i + 1}`);
    img.classList.add('fadeIn');
    setTimeout(() => img.src = tabSites[i][0], 200);
    img.addEventListener('transitionend', () => {

      img.classList.remove('fadeIn');
    })


  })

}


///boutons du carrousel///


buttonRight.addEventListener('click', () => {

  ///désactivation du bouton///
  buttonRight.disabled = "true";

  imgCount++;

  switch (img.dataset.id) {
    case "site1":
      if (imgCount > tabSites[0].length - 1) {
        imgCount = 0;
      }

      img.classList.add('fadeIn');
      setTimeout(() => img.src = tabSites[0][imgCount], 200)

      img.addEventListener('transitionend', () => {

        img.classList.remove('fadeIn');

        ///activation du bouton///
        buttonRight.removeAttribute("disabled", "")

      })

      break;

    case 'site2':
      if (imgCount > tabSites[1].length - 1) {
        imgCount = 0;
      }

      img.classList.add('fadeIn');
      setTimeout(() => img.src = tabSites[1][imgCount], 200)

      img.addEventListener('transitionend', () => {

        img.classList.remove('fadeIn');
        buttonRight.removeAttribute("disabled", "")
      })
      break;

    case 'site3':
      if (imgCount > tabSites[2].length - 1) {
        imgCount = 0;
      }

      img.classList.add('fadeIn');
      setTimeout(() => img.src = tabSites[2][imgCount], 200)

      img.addEventListener('transitionend', () => {

        img.classList.remove('fadeIn');
        buttonRight.removeAttribute("disabled", "")
      })
      break;

    case 'site4':
      if (imgCount > tabSites[3].length - 1) {
        imgCount = 0;
      }

      img.classList.add('fadeIn');
      setTimeout(() => img.src = tabSites[3][imgCount], 200)

      img.addEventListener('transitionend', () => {

        img.classList.remove('fadeIn');
        buttonRight.removeAttribute("disabled", "")
      })
      break;
  }
  console.log(imgCount);
})

buttonLeft.addEventListener('click', () => {

  buttonLeft.disabled = "true";

  imgCount--;

  switch (img.dataset.id) {
    case "site1":
      if (imgCount < 0) {
        imgCount = tabSites[0].length - 1;
      }

      img.classList.add('fadeIn');
      setTimeout(() => img.src = tabSites[0][imgCount], 200)

      img.addEventListener('transitionend', () => {

        img.classList.remove('fadeIn');
        buttonLeft.removeAttribute("disabled", "")
      })

      break;

    case 'site2':
      if (imgCount < 0) {
        imgCount = tabSites[1].length - 1;
      }

      img.classList.add('fadeIn');
      setTimeout(() => img.src = tabSites[1][imgCount], 200)

      img.addEventListener('transitionend', () => {

        img.classList.remove('fadeIn');
        buttonLeft.removeAttribute("disabled", "")
      })

      break;

    case 'site3':
      if (imgCount < 0) {
        imgCount = tabSites[2].length - 1;
      }

      img.classList.add('fadeIn');
      setTimeout(() => img.src = tabSites[2][imgCount], 200)

      img.addEventListener('transitionend', () => {

        img.classList.remove('fadeIn');
        buttonLeft.removeAttribute("disabled", "")
      })

      break;

    case 'site4':
      if (imgCount < 0) {
        imgCount = tabSites[3].length - 1;
      }

      img.classList.add('fadeIn');
      setTimeout(() => img.src = tabSites[3][imgCount], 200)

      img.addEventListener('transitionend', () => {

        img.classList.remove('fadeIn');
        buttonLeft.removeAttribute("disabled", "")
      })
<<<<<<< refs/remotes/PierreYEM/Working
=======
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
  }, 90);
};
>>>>>>> Update Mentions
=======
>>>>>>> update merge

      break;
  }

})
