// MENU BURGER 
let nav = document.querySelector('nav');
let burger = document.querySelector('#burger');
burger.style.display = "flex";
let burgerIcon = document.createElement('span');
burgerIcon.classList.add('burgerIcon');

window.addEventListener('resize', () => {
  if (window.innerWidth <= 550) {
    nav.appendChild(burgerIcon);
    burger.style.display = "none";
  } else {
    burger.style.display = "flex";
    if (nav.contains(burgerIcon)) {
      nav.removeChild(burgerIcon);
    }
  }
});

burgerIcon.addEventListener('click', () => {
  let menuBurger = burger.style.display;
  menuBurger == "flex" ? burger.style.display = "none" : burger.style.display = "flex";
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

// PARTIE : PHOTOS ( CARROUSEL )
let btnPrevious = document.querySelectorAll('.previous');
let btnNext = document.querySelectorAll('.next');
let imgSite = document.querySelectorAll('.img-site .imgSite');

let arrImgSite = [
  site1 = ["./public/img/chantier1_1.jpg",
    "./public/img/chantier1_2.jpg",
    "./public/img/chantier1_3.jpg",
    "./public/img/chantier1_4.jpg",
    "./public/img/chantier1_5.jpg",
    "./public/img/chantier1_6.jpg"
  ],
  site2 = ["./public/img/chantier2_1.jpg",
    "./public/img/chantier2_2.jpg",
    "./public/img/chantier2_3.jpg",
    "./public/img/chantier2_4.jpg",
    "./public/img/chantier2_5.jpg"
  ],
  site3 = ["./public/img/chantier3_1.jpg",
    "./public/img/chantier3_2.jpg",
    "./public/img/chantier3_3.jpg",
    "./public/img/chantier3_4.jpg",
    "./public/img/chantier3_5.jpg"
  ],
  site4 = ["public/img/chantier4_1.jpg",
    "public/img/chantier4_2.jpg",
    "public/img/chantier4_3.jpg",
    "public/img/chantier4_4.jpg",
    "public/img/chantier4_5.jpg",
    "public/img/chantier4_6.jpg",
    "public/img/chantier4_7.jpg",
    "public/img/chantier4_8.jpg"
  ]
];

imgSite.forEach((element, index) => {
  if (index == index) {
    let countSite = 0;

    btnNext[index].addEventListener('click', () => {
      countSite++;
      if (countSite < arrImgSite[index].length) {
        element.src = arrImgSite[index][countSite];
      } else {
        countSite = 0;
        element.src = arrImgSite[index][0];
      }
    });

    btnPrevious[index].addEventListener('click', () => {
      countSite--;
      if (countSite < 0) {
        countSite = arrImgSite[index].length - 1;
      }
      element.src = arrImgSite[index][countSite];
    });
  }
});



