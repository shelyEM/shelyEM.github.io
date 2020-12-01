"use strict"

function toggleIcon() {
  $(".icon").on("click", function () {
    $(".icon").toggleClass("active")
    $(".menu-mobile").slideToggle(
      {
        direction: "up"
      },
      300
    )
  })
}

function closeMobileMenu() {
  $(".menu-mobile").on("click", "a", function () {
    $(".icon").trigger("click")
  })
}

//when the page loads call toggleIcon;
$(toggleIcon)
$(closeMobileMenu)

const stalker = document.getElementById('stalker');

let hovFlag = false;

document.addEventListener('mousemove', function (e) {
    if (!hovFlag) {
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    }
});

const linkElem = document.querySelectorAll('a:not(.no_stick_)');
for (let i = 0; i < linkElem.length; i++) {
    
    linkElem[i].addEventListener('mouseover', function (e) {
        hovFlag = true;

        
        stalker.classList.add('hov_');

        
        let rect = e.target.getBoundingClientRect();
        let posX = rect.left + (rect.width / 2);
        let posY = rect.top + (rect.height / 2);

        stalker.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';

    });
    
    linkElem[i].addEventListener('mouseout', function (e) {
        hovFlag = false;
        stalker.classList.remove('hov_');
    });
}