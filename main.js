/**
 * Created by Guy on 27/02/2017.
 */

/**
 View
 */


/*=====================================================================

 Templates
 //===================================================================*/

// const membersTemplateWrapper = `
// <span class="members-header">Taskboard Members</span>
// <ul class="list-group col-sm-8 members-list">`;

//   const membersTemplate =
//     `<form class="members-page-form normal-mode">
//         <input type="text" class="form-control edit-input" placeholder="Current">
//       </form>
//
//       <div class="align-members-buttons">
//
//         <button type="button"
//                 class="btn btn-info btn-sm none-edit">Edit
//         </button>
//
//         <button type="button" class="btn btn-danger btn-sm none-edit delete-member">Delete</button>
//
//         <button type="button" class="btn btn-default btn-sm edit-buttons cancel-data">Cancel</button>
//
//         <button type="button" class="btn btn-success btn-sm edit-buttons save-data">Save</button>
//
//       </div>
//
//     </li>`;
//
//   const membersTemplateAddMember =
//     `<li class="list-group-item">
//
//       <form class="members-page-form input-members">
//         <input type="text" class="form-control input-fix-members" placeholder="Add new member">
//         <button type="submit" class="btn btn-primary">Add</button>
//       </form>
//
//     </li>
//   </ul>
//
// </div>`;
//
//   const addListTemplate =
//     `<div class="add-list-btn-wrapper">
//     <button class="btn add-list-btn" id="add-list"> Add a list...</button>
//   </div>`;
//   /*=====================================================================
//
//    Feature related functions
//    //===================================================================*/

//    chat box

const chatBox = document.querySelector('.chat-box');

function chatBoxClickHandler(event) {

  const chatBoxParent = document.querySelector('.chat-window-options');

  // ulInsideButton.style.display = 'none';

  chatBoxParent.addEventListener('click', (e) => {
    const target = e.target;
  if (target.innerText === "Chat") {
    chatBox.style.display = 'block';
    chatBoxCountdown();
  }

  if (target.innerText !== Number.isInteger(target.innerText)) {
    const phoneNumber = target.innerText;
    window.open(phoneNumber);
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

