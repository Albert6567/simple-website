document.getElementById('registerForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  
    alert('Regisztráció sikeres!');
    window.location.href = 'index.html';
  });
  
  document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;
  
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
  
    if (loginUsername === storedUsername && loginPassword === storedPassword) {
      alert('Bejelentkezés sikeres!');
      window.location.href = 'fooldal.html';
    } else {
      alert('Hibás felhasználónév vagy jelszó!');
    }
  });
  
  document.getElementById('logoutButton')?.addEventListener('click', function () {
    alert('Kijelentkezés sikeres!');
    window.location.href = 'index.html';
  });
  
