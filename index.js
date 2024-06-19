const secretButton = document.getElementById('secret_button')
const dialog = document.getElementById("dialog");
const closeButton = document.getElementById('close_modal');

secretButton.addEventListener('click', (e) => {
  dialog.showModal();
});

closeButton.addEventListener('click', () => {
  dialog.close();
});
