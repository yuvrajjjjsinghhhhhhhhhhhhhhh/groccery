// ===============================
// FRESH GROCERY INTERACTIVE JS
// ===============================

// ----- MOBILE NAV TOGGLE -----
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('open');
  });
}

// ----- SMOOTH SCROLL -----
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// ----- SCROLL ANIMATIONS -----
const fadeElems = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
fadeElems.forEach(el => observer.observe(el));

// ----- FAQ TOGGLE -----
document.querySelectorAll('.faq-item h4').forEach(question => {
  question.addEventListener('click', () => {
    const parent = question.parentElement;
    parent.classList.toggle('open');
    const answer = parent.querySelector('p');
    answer.style.maxHeight = parent.classList.contains('open')
      ? answer.scrollHeight + 'px'
      : 0;
  });
});

// ----- SEARCH SUGGESTIONS -----
const searchInput = document.querySelector('.search-box input');
if (searchInput) {
  const suggestionBox = document.createElement('ul');
  suggestionBox.className = 'suggestion-box';
  document.querySelector('.search-box').appendChild(suggestionBox);
  const suggestions = [
    'Fresh Fruits',
    'Organic Vegetables',
    'Dairy Products',
    'Bakery Items',
    'Snacks & Beverages'
  ];

  searchInput.addEventListener('input', () => {
    const val = searchInput.value.toLowerCase();
    suggestionBox.innerHTML = '';
    if (val.length > 0) {
      const matched = suggestions.filter(s => s.toLowerCase().includes(val));
      matched.forEach(s => {
        const li = document.createElement('li');
        li.textContent = s;
        li.onclick = () => {
          searchInput.value = s;
          suggestionBox.innerHTML = '';
        };
        suggestionBox.appendChild(li);
      });
    }
  });
}

// ----- BACK TO TOP BUTTON -----
const backToTop = document.createElement('button');
backToTop.textContent = '↑';
backToTop.className = 'back-to-top';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
