# 🛠️ Installation Guide

This guide will help you install and run **Booklore** quickly using Docker Compose.

---

## 📦 Prerequisites

Before you start, make sure you have the following installed on your system:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- `git` (only needed if you want to clone the repository)
- (Optional) A domain and a reverse proxy like Nginx or Traefik if you want HTTPS support

---

## 🐳 Deploy with Docker

You can easily set up and run **Booklore** using Docker containers.

**Official Booklore Docker Images:**
- [Docker Hub: booklore/booklore-app](https://hub.docker.com/r/booklore/booklore-app)
- [GitHub Container Registry: booklore-app/booklore](https://github.com/booklore-app/booklore/pkgs/container/booklore)

You can use either registry to pull the Booklore image. Replace the `image:` field in your `docker-compose.yml` as needed.

Example for Docker Hub:
```yaml
image: booklore/booklore-app:latest
```

Example for GitHub Container Registry:
```yaml
image: ghcr.io/booklore-app/booklore:latest
```

### Step 1: Install Docker & Docker Compose

If you haven’t already, install:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

Follow the official installation instructions for your operating system.

---

### Step 2: Create the `docker-compose.yml` File

In your preferred folder, create a file named `docker-compose.yml` and add the following content:

```yaml
name: booklore
services:
  booklore:
    image: booklore/booklore:${BOOKLORE_IMAGE_TAG}
    container_name: booklore_server
    env_file:
      - .env
    environment:
      - DATABASE_URL=jdbc:mariadb://mariadb:3306/${MYSQL_DATABASE}
      - DATABASE_USERNAME=${MYSQL_USER}
      - DATABASE_PASSWORD=${MYSQL_PASSWORD}
    depends_on:
      mariadb:
        condition: service_healthy
    ports:
      - "6060:6060"
    volumes:
      - ${BOOKLORE_DATA_PATH}:/app/data
      - ${BOOKLORE_BOOKS_PATH}:/books

  mariadb:
    image: lscr.io/linuxserver/mariadb:11.4
    container_name: booklore_mariadb
    env_file:
      - .env
    volumes:
      - ${MARIADB_CONFIG_PATH}:/config
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "mariadb-admin", "ping", "-h", "localhost"]
      interval: 10s
      timeout: 5s
      retries: 5
```

---

### Step 3: Create the `.env` File

```env
# Docker Image Version
# This determines which version of the Booklore image to pull from GitHub Container Registry (GHCR).
# Use "latest" for the most recent version or specify a tag like "v1.0.0".
BOOKLORE_IMAGE_TAG=latest

# User and Timezone Settings
# PUID and PGID define the user/group running the container.
# Avoid using "user" property because system won't work with it.
# TZ sets the timezone for correct time-related operations.
PUID=1000      # Default user ID (Check with `id -u` on Linux/Mac)
PGID=1000      # Default group ID (Check with `id -g` on Linux/Mac)
TZ=Etc/UTC     # Change this to your timezone (e.g., America/New_York, Asia/Kolkata)

# Database Credentials (Replace with a secure password)
# This password is used by MariaDB. Make sure to keep it secure.
MYSQL_ROOT_PASSWORD=super_secure_password
MYSQL_DATABASE=booklore
MYSQL_USER=booklore
MYSQL_PASSWORD=your_secure_password

# Paths for Docker Volumes (Update these paths as per your system)
# These paths store persistent data for Booklore and MariaDB.
# Replace "/path/to/..." with actual directories on your system.
BOOKLORE_DATA_PATH=/path/to/booklore/data       # Example: /home/user/booklore/data (Stores app-related data)
BOOKLORE_BOOKS_PATH=/path/to/booklore/books     # Example: /home/user/booklore/books (Stores book files)
MARIADB_CONFIG_PATH=/path/to/mariadb/config     # Example: /home/user/booklore/mariadb/config (Stores database config)

# How to find your correct paths?
# 1. Choose a location where you want to store persistent data.
# 2. Create the required folders if they don’t exist.
# 3. Use `pwd` in your terminal inside those directories to get the full path.
# 4. Replace `/path/to/...` above with your actual paths.
```


> ⚠️ Use strong, secure passwords for `MYSQL_ROOT_PASSWORD` and `MYSQL_PASSWORD`. These must match in both services.

> 💡 You can find more information and available tags on:
> - [Docker Hub: booklore/booklore](https://hub.docker.com/r/booklore/booklore)
> - [GitHub Container Registry: booklore-app/booklore](https://github.com/booklore-app/booklore/pkgs/container/booklore)
> - [GitHub Releases page](https://github.com/booklore-app/booklore/releases).

---

### Step 4: Start Booklore and MariaDB Containers

Navigate to the folder containing your `docker-compose.yml` file and run:

```bash
docker compose up -d
```

This will download the necessary images (if not already cached) and start Booklore and MariaDB in the background.

---

### Step 5: Access Booklore

Once the containers are running, open your web browser and go to:

```
http://localhost:6060
```

You should see the Booklore web interface ready for use.

---

If you have any issues, double-check folder paths, passwords, and ensure Docker is running correctly on your system.
