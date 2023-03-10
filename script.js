function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle('dark-mode');
    var button = document.getElementById('toggleButton');
    button.textContent = 'Switch to Dark Mode'
    if (body.classList.contains('dark-mode')) {
      button.textContent = 'Light Mode';
    } else {
      button.textContent = 'Dark Mode';
    }
  }