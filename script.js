const themeSwitch = document.getElementById('theme-switch');

// Apply saved theme on page load
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('darkmode');
}

themeSwitch.addEventListener('click', () => {
  document.body.classList.toggle('darkmode');

  // Save preference
  if (document.body.classList.contains('darkmode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});