// 1. MOBILE MENU LOGIC (Open, Close on Click Outside, Close on Link Click)
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

if (mobileToggle && navMenu) {
  
  // Toggle Menu on Button Click
  mobileToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent this click from triggering the document listener
    navMenu.classList.toggle('active');
    
    // Toggle Icon between ☰ and ✕
    if (navMenu.classList.contains('active')) {
      mobileToggle.innerHTML = '✕';
    } else {
      mobileToggle.innerHTML = '☰';
    }
  });

  // Close Menu when clicking ANYWHERE outside
  document.addEventListener('click', (e) => {
    // If click is NOT inside menu AND NOT on the toggle button
    if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
      navMenu.classList.remove('active');
      mobileToggle.innerHTML = '☰';
    }
  });

  // Close Menu when a Link inside it is clicked
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      mobileToggle.innerHTML = '☰';
    });
  });
}

// // 2. HERO VIDEO HOVER PLAY/PAUSE LOGIC
// const mediaContainer = document.querySelector('.hero-media');
// const video = document.getElementById('heroVideo');

// if (mediaContainer && video) {
//   mediaContainer.addEventListener('mouseenter', () => {
//     const playPromise = video.play();
//     if (playPromise !== undefined) {
//       playPromise.catch(error => { console.log("Auto-play prevented"); });
//     }
//   });
  
//   mediaContainer.addEventListener('mouseleave', () => {
//     video.pause();
//     video.currentTime = 0; 
//   });
// }

// 3. SCROLL REVEAL ANIMATIONS
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// HOW IT WORKS TOGGLE LOGIC
function switchTab(type) {
  const clientContent = document.getElementById('content-client');
  const freelancerContent = document.getElementById('content-freelancer');
  const buttons = document.querySelectorAll('.works-toggle-btn');

  if (type === 'client') {
    // Show Client, Hide Freelancer
    clientContent.style.display = 'grid';
    setTimeout(() => clientContent.classList.add('active'), 10); // Small delay for animation
    
    freelancerContent.classList.remove('active');
    setTimeout(() => freelancerContent.style.display = 'none', 300);

    // Update Buttons
    buttons[0].classList.add('active');
    buttons[1].classList.remove('active');
  } else {
    // Show Freelancer, Hide Client
    freelancerContent.style.display = 'grid';
    setTimeout(() => freelancerContent.classList.add('active'), 10);

    clientContent.classList.remove('active');
    setTimeout(() => clientContent.style.display = 'none', 300);

    // Update Buttons
    buttons[1].classList.add('active');
    buttons[0].classList.remove('active');
  }
}
