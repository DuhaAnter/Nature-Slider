const imgs = document.querySelectorAll(".slider");

imgs[0].classList.add("active");

function removeActiveClass() {
  imgs.forEach((img) => {
    img.classList.remove("active");
  });
}
imgs.forEach((img) => {
  img.addEventListener("click", function () {
    removeActiveClass();
    img.classList.add("active");
  });
});


let hamburger = document.querySelector('.fa-bars');
// console.log(hamburger);
hamburger.addEventListener('click', function () {
  // console.log('clicked');
  hamburger.classList.toggle('fa-times');
  document.querySelector('nav').classList.toggle('nav-active');

});

