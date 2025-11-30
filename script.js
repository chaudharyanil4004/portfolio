// Basic interactivity: mobile nav toggle, smooth scroll, contact form handling
document.addEventListener('DOMContentLoaded', () => {
  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  toggle?.addEventListener('click', () => {
    if (!nav) return;
    if (nav.style.display === 'flex') {
      nav.style.display = '';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
    }
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (ev) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      ev.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // close mobile nav if open
      if (window.innerWidth <= 900 && nav) nav.style.display = '';
    });
  });

  // Contact form handling (progressive enhancement)
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const emailBtn = document.getElementById('contact-email');

  emailBtn?.addEventListener('click', () => {
    window.location.href = 'mailto:you@example.com';
  });

  if (form) {
    form.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      if (!form.checkValidity()) {
        status.textContent = 'Please fill the required fields.';
        status.style.color = 'tomato';
        return;
      }
      status.textContent = 'Sending...';
      status.style.color = 'var(--muted)';

      // If you set up Formspree (or similar), the action attribute will post directly.
      // Below is an example of AJAX POST to the form's action (uncomment if you want AJAX).
      try {
        const action = form.getAttribute('action');
        if (action && action.includes('formspree.io')) {
          const formData = new FormData(form);
          const response = await fetch(action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
          });
          if (response.ok) {
            status.textContent = 'Thanks — message sent!';
            status.style.color = 'var(--accent)';
            form.reset();
          } else {
            status.textContent = 'Sorry — there was a problem sending your message.';
            status.style.color = 'tomato';
          }
        } else {
          // Fallback: open user's email client
          const name = form.elements['name'].value;
          const email = form.elements['email'].value;
          const message = form.elements['message'].value;
          window.location.href = `mailto:you@example.com?subject=${encodeURIComponent('Contact from ' + name)}&body=${encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)}`;
          status.textContent = 'Opening email client...';
        }
      } catch (err) {
        console.error(err);
        status.textContent = 'Network error. Try again later.';
        status.style.color = 'tomato';
      }
    });
  }
});