## **Recommended: Cloudflare Tunnel (free)**

Install:

`sudo apt install cloudflared`

Login:

`cloudflared tunnel login`

Expose port 3000:

`cloudflared tunnel --url http://localhost:3000`

It gives you a **public HTTPS URL**, e.g.:

`https://myserver123.cloudflareTunnel.com`

This works through ANY network → no port forwarding needed.