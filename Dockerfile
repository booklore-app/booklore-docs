FROM nginx:alpine

# Copy the built website to nginx html directory
COPY build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# nginx will start automatically with the default CMD

