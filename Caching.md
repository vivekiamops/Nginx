# Caching with NGINX

In our case, caching means that the NGINX server will save the web server’s response on the NGINX server itself. Then, when the same request, which results in the same response, comes to the NGINX server, it does not need to forward this request. The NGINX server will simply respond immediately to the client with the saved response from before. This reduces the workload for the web server and improves response time.

To implement caching, we will further edit the following file
```bash
/etc/nginx/sites-available/default
```

