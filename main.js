/**
 View
 **/

//    chat box

const chatBox = document.querySelector('.chat-box');

function chatBoxClickHandler(event) {

  const chatBoxParent = document.querySelector('.chat-window-options');

  chatBoxParent.addEventListener('click', (e) => {
    const target = e.target;
    console.info(target);
    console.info(target.textContent);

    if (target.innerText === "Chat") {
      chatBox.style.display = 'block';
      chatBoxCountdown();
    }

    if (target.innerText === 'E-mail') {
      window.open('mailto:demo@demo.demo');
    }
  });
}

function chatBoxCountdown() {
  let counter = 10;
  let countdown = setInterval(function () {
    counter--;
    document.querySelector(".countdown").textContent = counter;

    if (counter <= -1) {
      clearInterval(countdown);
      chatBox.style.display = 'none';
    }
  }, 1000);
}


chatBoxClickHandler();


const goToTopBtn = $(".go-to-top-button");

function initGoToTopBtn() {
  goToTopBtn.hide();
}

initGoToTopBtn();

$(document).ready(function () {

  $(window).scroll(function () {

    if ((document.body.scrollTop / document.body.offsetHeight * 100) > 50) {
      goToTopBtn.show();
    } else {
      initGoToTopBtn();
    }
  });
});

goToTopBtn.click(function () {
  $('html,body').animate({
      scrollTop: $(".header").offset().top
    },
    'slow');
});

