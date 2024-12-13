# Load Balancing with NGINX

Load balancing is the practice of distributing requests across multiple identical web servers to improve performance under heavy load. In this example, we’ll implement load balancing using the Round Robin algorithm. Essentially, the server will alternate between the given hosts one by one for every request it receives. You can explore other load balancing algorithms on your own as well.

To implement load balancing, we will further edit the 
```bash
/etc/nginx/sites-available/default
```
 configuration file as follows:
