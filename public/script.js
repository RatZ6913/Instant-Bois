// MENU BURGER 
let nav = document.querySelector('nav');
let burger = document.querySelector('#burger');
let burgerIcon = document.createElement('span');
burgerIcon.classList.add('burgerIcon');

window.addEventListener('load', () => {
  if (window.innerWidth <= 550) {
    nav.appendChild(burgerIcon);
  }
});

burgerIcon.addEventListener('click', () => {
  let menuBurger =  burger.style.display;

  menuBurger == "none" ? burger.style.display = "flex" : burger.style.display = "none";
});


// Partie : À PROPOS
let activityBox = document.querySelectorAll('.content-act');
let arrImgBackground = [
  "url(./public/img/activity1.jpg)",
  "url(./public/img/activity2.jpg)",
  "url(./public/img/activity3.jpg)"
];

let arrTitleActivity = document.querySelectorAll('.title-act');
let arrTextActivity = document.querySelectorAll('.textActivity');

activityBox.forEach((element, index) => {
  console.log(activityBox[index]);
  element.style.backgroundImage = arrImgBackground[index];

  element.addEventListener('mouseenter', () => {
    element.style.background = "none";
    arrTitleActivity[index].style.display = "none";
    arrTextActivity[index].style.display = "block";
  });

  element.addEventListener('mouseleave', () => {
    element.style.background = arrImgBackground[index];
    element.style.backgroundSize = "";
    arrTitleActivity[index].style.display = "";
    arrTextActivity[index].style.display = "";
  });
});


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

for ({ id, limit } of sitesData) {

  for (let numImg = 1; numImg < limit; numImg++) {
    tabSites[id - 1].push(`./public/img/chantier${id}_${numImg}.jpg`);
  }

}

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
      next.before(imgCarousel);

      imgAnim = (param) => {
        param.style.transition = "transform 0.1s ease";
        param.style.transform = "scaleY(0.9)";

        setTimeout(() => {
          param.style.transform = "scaleY(1)";
        }, 90);
      };

      break;
  }

})
