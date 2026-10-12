/**
 * KRK Interior - Modern Interactions & Features
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Current Year in Footer
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Navbar Background on Scroll
  const nav = document.getElementById('mainNav');
  const handleScroll = () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 3. Mobile Navigation Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking any nav link
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // 4. Highlight Active Nav Item on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');

  const highlightNav = () => {
    const scrollPos = window.scrollY + 140;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navItems.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };
  window.addEventListener('scroll', highlightNav, { passive: true });

  // 5. Contact / Inquiry Form Handler
  const contactForm = document.getElementById('contactForm');
  const toastMsg = document.getElementById('toastMsg');
  const toastText = document.getElementById('toastText');

  const showToast = (message) => {
    if (!toastMsg) return;
    toastText.textContent = message;
    toastMsg.classList.add('show');
    setTimeout(() => {
      toastMsg.classList.remove('show');
    }, 4500);
  };

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('fullName').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const service = document.getElementById('serviceType').value;
      const message = document.getElementById('message').value.trim();

      if (!name || !phone) {
        showToast('Please provide your name and phone number.');
        return;
      }

      // Offer immediate WhatsApp continuation or friendly confirmation
      showToast(`Thank you, ${name}! Your consultation request has been received. We will contact you shortly.`);

      // Optional: prompt user to connect via WhatsApp for instant response
      const waText = encodeURIComponent(
        `Hello KRK Interior, I am ${name} (${phone}). I would like to inquire about: ${service}. ${message ? 'Note: ' + message : ''}`
      );
      
      setTimeout(() => {
        const proceedWhatsApp = confirm(
          `Consultation request recorded!\nWould you also like to open WhatsApp to chat with KRK Interior directly now?`
        );
        if (proceedWhatsApp) {
          window.open(`https://wa.me/917498941215?text=${waText}`, '_blank');
        }
      }, 700);

      contactForm.reset();
    });
  }
});

