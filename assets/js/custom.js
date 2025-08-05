// Custom JavaScript for Dinithi's portfolio

document.addEventListener('DOMContentLoaded', function() {
  // Add animation classes to elements as they appear in viewport
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.project-card, .skill-column, .contact-section, .blog-post, section h1, section h2, section h3');
    
    elements.forEach(function(element) {
      if (isElementInViewport(element) && !element.classList.contains('animated')) {
        element.classList.add('animated');
      }
    });
  };
  
  // Check if element is in viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Dark mode toggle
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  if (prefersDarkScheme.matches) {
    document.body.classList.add('dark-mode');
  }
  
  // Add dark mode toggle button
  const header = document.querySelector('header');
  const darkModeToggle = document.createElement('button');
  darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  darkModeToggle.className = 'dark-mode-toggle';
  darkModeToggle.title = 'Toggle Dark Mode';
  
  darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
      darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      darkModeToggle.title = 'Toggle Light Mode';
    } else {
      darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      darkModeToggle.title = 'Toggle Dark Mode';
    }
  });
  
  header.appendChild(darkModeToggle);
  
  // Initialize animations
  animateOnScroll();
  
  // Listen for scroll events
  window.addEventListener('scroll', animateOnScroll);
  window.addEventListener('resize', animateOnScroll);
  
  // Add styles for dark mode toggle
  const style = document.createElement('style');
  style.textContent = `
    .dark-mode-toggle {
      position: absolute;
      top: 20px;
      right: 20px;
      background: transparent;
      border: none;
      color: #0366d6;
      font-size: 20px;
      cursor: pointer;
      padding: 5px;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.3s ease;
    }
    
    .dark-mode-toggle:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
    
    body.dark-mode .dark-mode-toggle {
      color: #58a6ff;
    }
    
    body.dark-mode .dark-mode-toggle:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
    
    @media (max-width: 768px) {
      .dark-mode-toggle {
        top: 10px;
        right: 10px;
      }
    }
  `;
  
  document.head.appendChild(style);
});