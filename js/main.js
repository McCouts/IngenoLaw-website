/**
 * Ingenio Law - Main JavaScript
 * Handles: Language toggle, mobile navigation, scroll effects,
 * animations, active nav links, and contact form.
 */

document.addEventListener('DOMContentLoaded', function () {

  /* ==========================================================================
     1. LANGUAGE TOGGLE SYSTEM
     Switches all translatable content between English and French using
     data-en / data-fr attributes. Persists the choice in localStorage.
     ========================================================================== */

  const langButtons = document.querySelectorAll('.lang-toggle button[data-lang]');
  const translatableElements = document.querySelectorAll('[data-en][data-fr]');

  /**
   * Apply the given language to every translatable element on the page.
   * @param {string} lang - "en" or "fr"
   */
  function setLanguage(lang) {
    // Update each element's text with the matching data attribute value.
    // Using innerHTML because translations may contain HTML entities (&eacute; etc.)
    translatableElements.forEach(function (el) {
      el.innerHTML = el.getAttribute('data-' + lang);
    });

    // Toggle the active class on the language buttons
    langButtons.forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update the html lang attribute for accessibility / SEO
    document.documentElement.lang = lang;

    // Persist the choice
    localStorage.setItem('ingenio-lang', lang);
  }

  // Attach click handlers to each language button
  langButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLanguage(this.getAttribute('data-lang'));
    });
  });

  // On page load, restore saved language (default to English)
  var savedLang = localStorage.getItem('ingenio-lang') || 'en';
  setLanguage(savedLang);


  /* ==========================================================================
     2. MOBILE NAVIGATION
     Hamburger menu toggle with overlay and body-scroll lock.
     ========================================================================== */

  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const nav = document.getElementById('nav');
  const navOverlay = document.getElementById('navOverlay');
  const navLinks = nav ? nav.querySelectorAll('.nav-links a') : [];

  /**
   * Open or close the mobile menu.
   * @param {boolean} open - true to open, false to close
   */
  function toggleMobileMenu(open) {
    if (!mobileMenuBtn || !nav || !navOverlay) return;

    mobileMenuBtn.classList.toggle('active', open);
    nav.classList.toggle('active', open);
    navOverlay.classList.toggle('active', open);

    // Prevent background scrolling when menu is open
    document.body.style.overflow = open ? 'hidden' : '';
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function () {
      // If already active, close; otherwise open
      var isOpen = nav.classList.contains('active');
      toggleMobileMenu(!isOpen);
    });
  }

  // Close menu when the overlay is clicked
  if (navOverlay) {
    navOverlay.addEventListener('click', function () {
      toggleMobileMenu(false);
    });
  }

  // Close menu when any nav link is clicked (useful on single-page sections)
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      toggleMobileMenu(false);
    });
  });


  /* ==========================================================================
     3. HEADER SCROLL EFFECT
     Adds a "scrolled" class to the header after scrolling past 50px,
     enabling CSS transitions (shadow, background, shrink, etc.).
     ========================================================================== */

  const header = document.querySelector('.header');

  function handleHeaderScroll() {
    if (!header) return;

    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });

  // Run once on load in case the page is already scrolled (e.g. browser restore)
  handleHeaderScroll();


  /* ==========================================================================
     4. SCROLL ANIMATIONS (Intersection Observer)
     Watches elements with class "fade-in" and adds "visible" when they
     enter the viewport. Sibling fade-in elements receive staggered delays.
     ========================================================================== */

  const fadeElements = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window && fadeElements.length > 0) {
    var observerOptions = {
      threshold: 0.1
    };

    var fadeObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;

          // Calculate stagger delay based on position among siblings
          var parent = el.parentElement;
          if (parent) {
            var siblings = Array.from(parent.children).filter(function (child) {
              return child.classList.contains('fade-in');
            });
            var index = siblings.indexOf(el);
            if (index > 0) {
              el.style.transitionDelay = (index * 0.1) + 's';
            }
          }

          el.classList.add('visible');

          // Stop observing once the animation has been triggered
          observer.unobserve(el);
        }
      });
    }, observerOptions);

    fadeElements.forEach(function (el) {
      fadeObserver.observe(el);
    });
  } else {
    // Fallback: make all fade-in elements visible immediately
    fadeElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }


  /* ==========================================================================
     5. ACTIVE NAVIGATION LINK
     Highlights the nav link that matches the current page's pathname.
     ========================================================================== */

  function setActiveNavLink() {
    var currentPath = window.location.pathname;

    // Extract just the filename (e.g. "about.html") from the path
    var currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    // Treat empty or "/" as the index page
    if (!currentPage || currentPage === '/') {
      currentPage = 'index.html';
    }

    var allNavLinks = document.querySelectorAll('.nav-links a');
    allNavLinks.forEach(function (link) {
      // Compare the href attribute's filename to the current page
      var linkPage = link.getAttribute('href');
      if (linkPage === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  setActiveNavLink();


  /* ==========================================================================
     6. CONTACT FORM (Formspree)
     Sets the correct redirect URL based on the current language before
     the form submits to Formspree.
     ========================================================================== */

  var contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function () {
      // Set the thank-you redirect URL with the correct base path
      var nextField = contactForm.querySelector('input[name="_next"]');
      if (nextField) {
        // Build an absolute URL so Formspree redirects back correctly
        var basePath = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1);
        nextField.value = basePath + 'contact-thank-you.html';
      }
      // Form submits naturally to Formspree — no preventDefault
    });
  }

});
