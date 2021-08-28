var btnOpenPopup = document.getElementById('btn-open-popup-login'),
    overlay = document.getElementById('overlay-login'),
    popup = document.getElementById('popup-login'),
    btnClosePopup = document.getElementById('btn-close-popup-login');
    // btnOpenPopup = document.getElementById('btn-open-popup-register'),
    // overlay = document.getElementById('overlay-register'),
    // popup = document.getElementById('popup-register'),
    // btnClosePopup = document.getElementById('btn-close-popup-register');


btnOpenPopup.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
});

btnClosePopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
});
