let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let btn = document.getElementById('btn');
let forest = document.getElementById('forest');
let rocks = document.getElementById('rocks');
let water = document.getElementById('water');
let header = document.getElementById('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    text.style.top = 50 + value * -0.5 + '%';
    bird1.style.top = value * -1.5 + 'px';
    bird1.style.left = value * 2 + 'px';
    bird2.style.top = value * -1.5 + 'px';
    bird2.style.left = value * -5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    rocks.style.top = value * -0.12 + 'px';
    forest.style.top = value * 0.25 + 'px';
    header.style.top = value * -0.5 + 'px';

})
//top button ucun olan.
window.addEventListener("scroll", function () {
    var scrollToTop = document.getElementById("scrollToTop");

    if (window.scrollY > 90) {
        scrollToTop.style.bottom = "30px"; 
    } else {
        scrollToTop.style.bottom = "-100px"; 
    }
});

document.getElementById("scrollToTop").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
});

function updateClock() {
    const footerClock = document.getElementById('footer-clock');
    const currentHour = moment().format('HH:mm:ss'); // Saat bilgisini alın
  
    footerClock.innerText = currentHour;
  }
  
  // Sayfa yüklendiğinde ve her saniye başında saati güncelle
  updateClock();
  setInterval(updateClock, 1000);
  

