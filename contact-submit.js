document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const nextField = document.getElementById('_next_field');
  if (!form || !nextField) return;

  // Prepare thank-you URL
  const thankYouUrl = window.location.origin + '/thank-you.html';
  nextField.value = thankYouUrl;

  form.addEventListener('submit', function () {
    try {
      const data = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        subject: form.subject.value.trim(),
        message: form.message.value.trim()
      };
      // store data in sessionStorage so thank-you page can read it
      sessionStorage.setItem('lastContact', JSON.stringify(data));
    } catch (e) {
      // ignore storage errors
    }
  });
});
