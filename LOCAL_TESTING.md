Local testing instructions for the gwakavilla_refactored_website

Options to serve the site locally so you can open http://localhost:8000 in your browser.

1) Preferred: PowerShell script (no external dependencies)
   - Run PowerShell in this folder (right-click -> "Open in Terminal" or use cd):
     cd 'C:\EXAMPLE\gwakavilla_refactored_website'
     .\serve.ps1
   - If you see an error about starting the listener or "Access is denied":
     - Try running PowerShell as Administrator.
     - If you cannot run as Administrator, use option 2 or 3 below.

2) If you have Python installed
   - In PowerShell run:
     cd 'C:\EXAMPLE\gwakavilla_refactored_website'
     python -m http.server 8000

3) If you have Node.js installed
   - In PowerShell run:
     cd 'C:\EXAMPLE\gwakavilla_refactored_website'
     npx http-server -p 8000

4) If you get 'Access is denied' with the PowerShell script
   - The script binds only to localhost, which normally avoids URL ACL registration. But some environments still require elevation.
   - Running PowerShell as Administrator usually resolves it.

5) After the server is running
   - Open http://localhost:8000 in your browser.
   - Use the language selector in the header to switch between English and Kiswahili. The selected language is stored in localStorage so it persists across pages.

If you run into problems starting the server, tell me the exact error text and I will provide a tailored workaround.