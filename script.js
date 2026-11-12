'use strict';
const posterDialog = document.querySelector('#poster-dialog');
for (const button of document.querySelectorAll('[data-open-poster]')) {
  button.addEventListener('click', () => posterDialog.showModal());
}
document.querySelector('#close-poster').addEventListener('click', () => posterDialog.close());
posterDialog.addEventListener('click', (event) => {
  if (event.target !== posterDialog) return;
  const box = posterDialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) posterDialog.close();
});
document.querySelector('#copy-setup').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(document.querySelector('#setup-commands').textContent);
    status.textContent = 'Setup commands copied.';
  } catch {
    status.textContent = 'Select and copy the commands above.';
  }
});
