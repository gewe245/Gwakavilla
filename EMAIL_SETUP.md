Email server setup

1) Copy `.env.example` to `.env` and fill with your SMTP provider credentials and `OWNER_EMAIL` (where messages should be delivered).

2) Install dependencies and start the server (Node.js v16+ recommended):

   npm install
   node server.js

3) By default the server listens on port 3000. Ensure your site posts to `http://localhost:3000/api/contact` (the included client script will do this if no Formspree endpoint is set).

Security note: Keep `.env` private and never commit it to source control.
