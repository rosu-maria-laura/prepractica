# Use a suitable base image, for example, nginx for a static web app
FROM nginx:latest

# Copy the HTML, CSS, and JavaScript files to the appropriate location in the container
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
