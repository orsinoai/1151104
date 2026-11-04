const year = document.querySelector('#year');
const toast = document.querySelector('.toast');
const emailButton = document.querySelector('[data-copy-email]');

year.textContent = new Date().getFullYear();

emailButton.addEventListener('click', async () => {
  const email = emailButton.dataset.copyEmail;
  try {
    await navigator.clipboard.writeText(email);
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 2200);
  } catch {
    window.location.href = `mailto:${email}`;
  }
});