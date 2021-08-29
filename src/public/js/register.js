const checkbox = document.querySelector('.my-form input[type="checkbox"]');
const btns = document.querySelectorAll(".my-form button");

checkbox.addEventListener("change", function() {
  const checked = this.checked;
  for (const btn of btns) {
    checked ? (btn.disabled = false) : (btn.disabled = true);
  }
});

var btnOpenPopupTerm = document.getElementById('btn-open-popup-term'),
    overlayTerm = document.getElementById('overlay-term'),
    popupTerm = document.getElementById('popup-term'),
    btnClosePopupTerm = document.getElementById('btn-close-popup-term');

btnOpenPopupTerm.addEventListener('click', function(){
    overlayTerm.classList.add('active');
    popupTerm.classList.add('active');
});

btnClosePopupTerm.addEventListener('click', function(){
    overlayTerm.classList.remove('active');
    popupTerm.classList.remove('active');
});