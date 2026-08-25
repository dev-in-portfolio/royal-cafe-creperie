/**
 * Royal Cafe & Creperie - Official Site Script
 * Centralized Business Config & Client Navigation
 */

(function() {
  'use strict';

  // Centralized Business Configuration
  window.ROYAL_CAFE_CONFIG = {
    name: 'Royal Cafe & Creperie',
    legalName: 'ROYAL CAFE AND CREPERIE LLC',
    phone: '(980) 701-0566',
    phoneRaw: '+19807010566',
    address: '131 Matthews Station Street, Suite 1-E, Matthews, NC 28105',
    hours: 'Everyday: 9:00 AM – 3:00 PM',
    orderUrl: 'https://royalcreperie.smartonlineorder.com',
    mapsUrl: 'https://maps.google.com/?q=131+Matthews+Station+Street+Suite+1-E+Matthews+NC+28105',
    facebookUrl: 'https://www.facebook.com/royal.creperie',
    twitterUrl: 'https://twitter.com/royalcreperie'
  };

  document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const toggleBtn = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (toggleBtn && navMenu) {
      toggleBtn.addEventListener('click', function() {
        const isOpen = navMenu.classList.toggle('open');
        toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      // Close mobile menu when clicking outside
      document.addEventListener('click', function(e) {
        if (!toggleBtn.contains(e.target) && !navMenu.contains(e.target)) {
          navMenu.classList.remove('open');
          toggleBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // Accessible focus outlining for keyboard users
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
      }
    });
  });
})();