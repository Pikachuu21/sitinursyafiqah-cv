// Aktifkan link nav saat scroll
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-menu a");

  window.addEventListener("scroll", () => {
    const fromTop = window.scrollY;

    links.forEach(link => {
      const section = document.querySelector(link.hash);
      if (
        section &&
        section.offsetTop <= fromTop + 100 &&
        section.offsetTop + section.offsetHeight > fromTop + 100
      ) {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  });
});

// Scroll smooth ke bagian "About"
function viewPortfolio() {
  const section = document.getElementById("about");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Animasi saat elemen masuk ke viewport
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    }
  });
}, {
  threshold: 0.1
});

// Mendaftarkan semua elemen yang ingin dianimasikan
document.querySelectorAll(".animate-up, .animate-fade").forEach(el => {
  observer.observe(el);
});

// Dark/Light Mode Toggle
const themeSwitch = document.getElementById('themeSwitch');
const themeLabel = document.getElementById('themeLabel');
const currentTheme = localStorage.getItem('theme');

// Set default ke light mode jika belum ada
if (!currentTheme || currentTheme === 'light') {
  document.body.classList.add('light-mode');
  themeLabel.textContent = 'Dark Mode';
  themeSwitch.checked = false;
} else {
  document.body.classList.add('dark-mode');
  themeLabel.textContent = 'Light Mode';
  themeSwitch.checked = true;
}

// Toggle event
themeSwitch.addEventListener('change', () => {
  if (themeSwitch.checked) {
    document.body.classList.replace('light-mode', 'dark-mode');
    themeLabel.textContent = 'Light Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.replace('dark-mode', 'light-mode');
    themeLabel.textContent = 'Dark Mode';
    localStorage.setItem('theme', 'light');
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileMenu = document.querySelector(".nav-menu.mobile-menu");
  const mobileLinks = mobileMenu.querySelectorAll("a");

  // Toggle menu saat hamburger diklik
  hamburgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
  });

  // Tutup menu saat item diklik
  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("show");
    });
  });
});

const themeSwitchDesktop = document.getElementById('themeSwitch');
const themeSwitchMobile = document.getElementById('themeSwitchMobile');

function toggleTheme(darkMode) {
  document.body.classList.toggle('dark-mode', darkMode);
  themeSwitchDesktop.checked = darkMode;
  themeSwitchMobile.checked = darkMode;
  localStorage.setItem('darkMode', darkMode);
}

// Sinkronisasi antara dua switch
themeSwitchDesktop.addEventListener('change', () => {
  toggleTheme(themeSwitchDesktop.checked);
});

themeSwitchMobile.addEventListener('change', () => {
  toggleTheme(themeSwitchMobile.checked);
});

// Load dari localStorage
const savedTheme = localStorage.getItem('darkMode') === 'true';
toggleTheme(savedTheme);

