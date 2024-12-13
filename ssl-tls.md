# How to Install SSL to Nginx Web Server Using OpenSSL


---

## Step 1: Install OpenSSL

To check if OpenSSL is installed, run the following command:
---



```bash
dpkg -l | grep openssl
```
If it is not installed, then install it using the following command:

```bash
sudo apt-get install openssl
```

## Step 2: Install Nginx
```bash
sudo apt install nginx
```
## Step 3: Check
```bash
sudo systemctl start nginx
sudo systemctl enable nginx
```
## Step4: Key Generate
```bash
openssl req -new -newkey rsa:2048 -nodes -keyout web-service.key -out web-service.csr
```
## Step5: After received CRT files, keep those .crt files in /etc/ssl/mysite with your private key (web-service.key).

Then update the nginx.conf file which is contain in path /etc/nginx,
```bah
vi /etc/nginx/nginx.conf
```
