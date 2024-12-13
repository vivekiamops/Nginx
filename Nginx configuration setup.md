
# Nginx Configuration Setup

## [ Install Nginx ](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04)
```
sudo apt update
sudo apt install nginx
```

## Link port with domain
Open this file in nano or vim `/etc/nginx/nginx.conf`
```
http{
  server{
    listen 80;
    server_name DOMAIN.com www.DOMAIN.com;
    location / {
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header Host $http_host;
      proxy_pass http://<IP_ADDRESS>:<PORT>; # Example http://127.0.0.1:3000
    }
  }
}
```
After updating nginx.conf apply this commands\
Test nginx.conf `sudo nginx -t`\
Restart nginx service `sudo systemctl restart nginx` or `sudo service nginx restart` \
Check nginx status `sudo systemctl status nginx` or `sudo service nginx status`

## Issue ssl certificate from certbot
Ref: https://www.nginx.com/blog/using-free-ssltls-certificates-from-lets-encrypt-with-nginx/

### Install certbot
```
sudo apt-get update
sudo apt-get install certbot
sudo apt-get install python-certbot-nginx ( Use python3-certbot-nginx if python3 is installed already )
```

### Obtain the SSL/TLS Certificate
`sudo certbot --nginx -d DOMAIN.com -d www.DOMAIN.com`

It'll handle the required modification for https in nginx.conf

### [Automatically Renew Let’s Encrypt Certificates](https://www.nginx.com/blog/using-free-ssltls-certificates-from-lets-encrypt-with-nginx/#auto-renewal)

`crontab -e`
`0 12 * * * /usr/bin/certbot renew --quiet`


# Manually setup SSL and https configuration on nginx
```
http{
  server{
    listen 80;
    server_name DOMAIN.com www.DOMAIN.com;
    return 301 https://$server_name$request_uri;
  }

  server {
    listen 443 ssl;
    server_name DOMAIN.com www.DOMAIN.com;

    ssl_certificate /etc/letsencrypt/live/spotcodes.in/cert.pem;
    ssl_certificate_key /etc/letsencrypt/live/spotcodes.in/privkey.pem;

    location / {
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header Host $http_host;
      proxy_pass http://<IP_ADDRESS>:<PORT>; # Example http://127.0.0.1:3000
    }
  }
}
```
<hr />

### Test SSL certificate installation
https://www.geocerts.com/ssl-checker

#### Usefull links and credits
- https://www.nginx.com/blog/using-free-ssltls-certificates-from-lets-encrypt-with-nginx/#auto-renewal
- https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-18-04
- https://levelup.gitconnected.com/how-to-install-ssl-certificate-for-nginx-server-in-amazon-linux-2986f51371fb
- https://www.youtube.com/watch?v=X3Pr5VATOyA
