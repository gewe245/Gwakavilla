document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const statusEl = document.getElementById('form-status');
  const submitBtn = document.getElementById('contact-submit');

  function setStatus(message, ok = true) {
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.className = 'form-status ' + (ok ? 'ok' : 'error');
  }

  function validate() {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();
    if (!name) { setStatus('Please enter your name', false); return false; }
    if (!phone) { setStatus('Please enter your phone number', false); return false; }
    if (!email) { setStatus('Please enter your email', false); return false; }
    if (!message) { setStatus('Please enter a message', false); return false; }
    return true;
  }

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    setStatus('');
    if (!validate()) return;

    const formData = new FormData(form);
    const fsEndpoint = form.getAttribute('data-formspree');
    const toEmail = form.getAttribute('data-email') || 'petergewe500@gmail.com';

    // If a Formspree endpoint is configured, POST there.
    if (fsEndpoint) {
      submitBtn.disabled = true;
      setStatus('Sending...', true);
      fetch(fsEndpoint, { method: 'POST', body: formData, headers: { 'Accept': 'application/json' } })
        .then(response => response.json ? response.json() : response)
        .then(() => {
          setStatus('Message sent — thank you!', true);
          form.reset();
        })
        .catch(err => {
          console.error(err);
          setStatus('Sending failed — please try again or email ' + toEmail, false);
        })
        .finally(() => { submitBtn.disabled = false; });
      return;
    }

    // If no Formspree endpoint is set, POST to the local server endpoint /api/contact
    submitBtn.disabled = true;
    setStatus('Sending...', true);

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    fetch((form.getAttribute('data-api') || '/api/contact'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(() => {
        setStatus('Message sent — thank you!', true);
        form.reset();
      })
      .catch(err => {
        console.error(err);
        setStatus('Sending failed — please try again or email ' + toEmail, false);
      })
      .finally(() => { submitBtn.disabled = false; });
  });
});
