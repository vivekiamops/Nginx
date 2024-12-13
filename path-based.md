# Step 1: Configure NGINX for Path-Based Routing

To enable path-based routing with NGINX, we need to configure NGINX to listen on a specific port and forward requests to the corresponding application based on the requested path.

1. Open the NGINX configuration directory (`/etc/nginx/sites-enabled`) and run the following command to create a new file:

    ```bash
    touch example.com
    ```

    This will create a new file where our NGINX configuration will be added. **Note**: You may need to use `sudo` if you encounter a "Permission Denied" error while running the command.

2. Add the following configuration blocks inside the `example.com` file by running:

    ```bash
    nano example.com
    ```

    Paste the following configuration inside the file.
