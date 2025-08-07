# Installation Guide

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

---

### 📁 Step 1: Create Necessary Folders

Create folders on your computer to store Booklore’s data and your books.

Open a terminal and run the following commands (adjust the path as needed):

```bash
mkdir -p ~/booklore/config/mariadb
mkdir -p ~/booklore/data
mkdir -p ~/booklore/books
mkdir -p ~/booklore/bookdrop
```

Here’s what each folder is for:

- `config/mariadb`: MariaDB database configuration and data (persists your database)
- `data`: Booklore app data such as settings and cache
- `books`: Your main book library (store PDFs, EPUBs, CBZs here)
- `bookdrop`: Drop new books here to have Booklore import them automatically

---

### Step 2: Install Docker & Docker Compose

If you haven’t already, install:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

Follow the official installation instructions for your operating system.

---

### Step 3: Create the `docker-compose.yml` File

In your preferred folder, create a file named `docker-compose.yml` and add the following content:

```yaml
services:
  booklore:
    image: booklore/booklore-app:latest
    # Or use the GitHub Container Registry image:
    # image: ghcr.io/booklore-app/booklore:latest
    container_name: booklore
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Etc/UTC
      - DATABASE_URL=jdbc:mariadb://mariadb:3306/booklore
      - DATABASE_USERNAME=booklore
      - DATABASE_PASSWORD=your_secure_password
      - SWAGGER_ENABLED=false
    depends_on:
      mariadb:
        condition: service_healthy
    ports:
      - "6060:6060"
    volumes:
      - /your/local/path/to/booklore/data:/app/data
      - /your/local/path/to/booklore/books:/books
      - /your/local/path/to/booklore/bookdrop:/bookdrop
    restart: unless-stopped

  mariadb:
    image: lscr.io/linuxserver/mariadb:11.4.5
    container_name: mariadb
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Etc/UTC
      - MYSQL_ROOT_PASSWORD=super_secure_password
      - MYSQL_DATABASE=booklore
      - MYSQL_USER=booklore
      - MYSQL_PASSWORD=your_secure_password
    volumes:
      - /your/local/path/to/mariadb/config:/config
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "mariadb-admin", "ping", "-h", "localhost"]
      interval: 5s
      timeout: 5s
      retries: 10
```

> 💡 Replace `/your/local/path/to/...` with the actual paths to the folders you created in Step 1.

> ⚠️ Use strong, secure passwords for `MYSQL_ROOT_PASSWORD` and `MYSQL_PASSWORD`. These must match in both services.

> 💡 You can find more information and available tags on:
> - [Docker Hub: booklore/booklore-app](https://hub.docker.com/r/booklore/booklore-app)
> - [GitHub Container Registry: booklore-app/booklore](https://github.com/booklore-app/booklore/pkgs/container/booklore)
> - [GitHub Releases page](https://github.com/adityachandelgit/booklore/releases).

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