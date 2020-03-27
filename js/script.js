/* Scroll To Sections */
var offsetObj = [],
    anchors = document.getElementsByClassName('anchor'),
    ele = document.getElementsByClassName('nav-links')[0],
    len = document.getElementsByClassName('nav-links')[0].children.length;

for(var x = 0; x < document.body.childElementCount - 8; x++){
    offsetObj[x] = document.body.children[x].offsetTop;
    anchors[x].setAttribute('data-offset',offsetObj[x]);
    
    anchors[x].onclick = function(e){
        e.preventDefault();
        document.documentElement.scrollTop = this.getAttribute('data-offset') - 60;
        
        // Remove Active Class From All Anchors
        for (var x = 0; x < len; x++) {
            ele.children[x].firstElementChild.classList.remove('active');
        }
        // Add Active Class For Current Anchor
        event.target.classList.add('active')
    };
}

/* When Click On Slide Button In Navigation */
var btn = document.getElementsByClassName('slide-up-down')[0];
var dropMenu = document.getElementsByClassName('nav-links')[0];
btn.onclick = () => {
    dropMenu.classList.toggle('auto-height')
};

/* Make Speakers Slider */
var ulSlider = document.getElementById('speaker-slider'),
 firstbtnSlider = document.getElementById('fbtn'),
 secondbtnSlider = document.getElementById('sbtn'),
 x = 0,
 interv,
 loader = document.getElementsByClassName('loader')[0];
window.onload = function () {
    
    loader.style.opacity = '0';
    loader.style.zIndex = '-10';
    document.body.style.overflow = 'visible';
    
    if (window.innerWidth <= 800) {
        clearInterval(interv);
    } else {
        interv = setInterval(function () {
            x -= 25;
            if (x == -125) {
                x = 0;
                ulSlider.style.left = x;
                firstbtnSlider.classList.add('active-btn');
                secondbtnSlider.classList.remove('active-btn');
            } else {
                ulSlider.style.left = x + '%';
                firstbtnSlider.classList.remove('active-btn');
                secondbtnSlider.classList.add('active-btn');
            }
        }, 7000);
    }
};

firstbtnSlider.onclick = function () {
    x = 0;
    ulSlider.style.left = x;
    firstbtnSlider.classList.add('active-btn');
    secondbtnSlider.classList.remove('active-btn');
};

secondbtnSlider.onclick = function () {
    x = -100;
    ulSlider.style.left = x + '%';
    firstbtnSlider.classList.remove('active-btn');
    secondbtnSlider.classList.add('active-btn');
};

/* Start Event */
var fDay = document.getElementById('first-day'),
    sDay = document.getElementById('second-day'),
    tDay = document.getElementById('third-day'),
    eventSlider = document.getElementById('event-slider');

fDay.onclick = function (event) {
    event.preventDefault();
    eventSlider.style.top = 0;
    this.classList.add('active');
    sDay.classList.remove('active');
    tDay.classList.remove('active')
}
sDay.onclick = function (event) {
    event.preventDefault();
    eventSlider.style.top = '-106%';
    this.classList.add('active');
    fDay.classList.remove('active');
    tDay.classList.remove('active')
}
tDay.onclick = function (event) {
    event.preventDefault();
    eventSlider.style.top = '-212%';
    this.classList.add('active');
    fDay.classList.remove('active');
    sDay.classList.remove('active')
}

/* Accordian */
var accToggle = document.getElementsByClassName('acc-tog');

function toggleDesc(event) {
    event.target.nextElementSibling.classList.toggle('desc-height');

    if (event.target.nextElementSibling.classList.contains('desc-height')) {
        event.target.firstElementChild.textContent = '-'
    } else {
        event.target.firstElementChild.textContent = '+'
    }

}

/* Back To Top */
var backToTop = document.getElementsByClassName('back-To-Top')[0];

window.onscroll = function(){
    if(document.documentElement.scrollTop > 500){
        backToTop.style.opacity = '1'
    }
    else{
        backToTop.style.opacity = '0'
    }
};

backToTop.onclick = function(){
    document.documentElement.scrollTop = 0
};