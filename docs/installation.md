# 🛠️ Installation Guide

Get Booklore up and running in minutes with Docker Compose. This comprehensive guide walks you through every step of the installation process, from prerequisites to your first login.

> 💡 **Quick Start:** If you're experienced with Docker, skip to [Step 3](#step-3-create-the-docker-composeyml-file) to grab the configuration and start deploying.

---

## 🌟 What You'll Achieve

By following this guide, you will:

- **Deploy Booklore** using Docker containers
- **Set up a MariaDB database** for persistent storage
- **Configure storage paths** for books, data, and automatic imports
- **Access the web interface** and start building your library
- **Understand the architecture** and how components work together

---

## 📦 Prerequisites

Before you start, ensure you have the following installed on your system:

### Required Software

- **[Docker](https://docs.docker.com/get-docker/)** - Container runtime (v20.10 or later recommended)
- **[Docker Compose](https://docs.docker.com/compose/install/)** - Multi-container orchestration (v2.0 or later recommended)

### Optional Tools

- **git** - For cloning repositories and version control
- **A reverse proxy** (Nginx, Traefik, Caddy) - For HTTPS and custom domain support
- **Basic terminal knowledge** - Familiarity with command-line operations

### System Requirements

- **Minimum:** 2GB RAM, 10GB disk space
- **Recommended:** 4GB+ RAM, 50GB+ disk space (varies based on library size)
- **OS:** Linux, macOS, Windows (with WSL2 recommended)

---

## 🐳 Understanding the Docker Setup

### Architecture Overview

Booklore uses a two-container architecture:

1. **booklore** - The main application container
   - Runs the web interface and API
   - Handles book processing and metadata enrichment
   - Manages file operations and library organization

2. **mariadb** - The database container
   - Stores user accounts, library metadata, and settings
   - Provides persistent data storage
   - Uses LinuxServer.io's optimized MariaDB image

### Official Docker Images

You can pull Booklore from two registries:

- **Docker Hub:** [booklore/booklore-app](https://hub.docker.com/r/booklore/booklore-app)
- **GitHub Container Registry:** [ghcr.io/booklore-app/booklore](https://github.com/booklore-app/booklore/pkgs/container/booklore)

Both registries host identical images. Choose based on your preference or network accessibility.

---

## 🚀 Installation Steps

### Step 1: Create the Directory Structure

Booklore needs several directories to store data, books, and database files. Create them with proper permissions:

```bash
# Create the main Booklore directory structure
mkdir -p ~/booklore/config/mariadb
mkdir -p ~/booklore/data
mkdir -p ~/booklore/books
mkdir -p ~/booklore/bookdrop
```

#### 📁 Directory Breakdown

| Directory | Purpose | Important Notes |
|-----------|---------|-----------------|
| `config/mariadb` | Database configuration and data files | **Critical:** Never delete - contains all metadata |
| `data` | Booklore application data, cache, logs | Stores settings and temporary processing files |
| `books` | Your main library storage | Add books here or import via Bookdrop |
| `bookdrop` | Automatic import folder | Drop files here for hands-free importing |

> ⚠️ **Backup Important Directories:** Always backup `config/mariadb` and `books` to prevent data loss.

> 💡 **Pro Tip:** Use absolute paths for volumes in production. Relative paths can cause issues with container restarts.

---

### Step 2: Install Docker & Docker Compose

If you haven't installed Docker yet, follow the official installation guides:

#### Installation by Platform

**Linux:**
```bash
# Ubuntu/Debian
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
# Log out and back in for group changes to take effect
```

**macOS:**
- Download and install [Docker Desktop for Mac](https://docs.docker.com/desktop/install/mac-install/)

**Windows:**
- Download and install [Docker Desktop for Windows](https://docs.docker.com/desktop/install/windows-install/)
- Enable WSL2 backend for better performance

#### Verify Installation

```bash
docker --version
docker compose version
```

You should see version numbers for both commands.

> ⚠️ **Important:** Ensure Docker daemon is running before proceeding. On Linux, use `sudo systemctl start docker`.

---

### Step 3: Create the `docker-compose.yml` File

Navigate to your Booklore directory and create the configuration file:

```bash
cd ~/booklore
nano docker-compose.yml  # or use your preferred text editor
```

Add the following configuration:

```yaml
services:
  booklore:
    image: booklore/booklore-app:latest
    # Or use the GitHub Container Registry image:
    # image: ghcr.io/booklore-app/booklore:latest
    container_name: booklore
    environment:
      # User/Group IDs (match your system user for proper permissions)
      - PUID=1000
      - PGID=1000
      # Timezone for accurate timestamps
      - TZ=Etc/UTC
      # Database connection settings
      - DATABASE_URL=jdbc:mariadb://mariadb:3306/booklore
      - DATABASE_USERNAME=booklore
      - DATABASE_PASSWORD=your_secure_password
      # Disable Swagger UI in production
      - SWAGGER_ENABLED=false
    depends_on:
      mariadb:
        condition: service_healthy
    ports:
      - "6060:6060"
    volumes:
      # Application data and cache
      - /your/local/path/to/booklore/data:/app/data
      # Your book library
      - /your/local/path/to/booklore/books:/books
      # Automatic import folder
      - /your/local/path/to/booklore/bookdrop:/bookdrop
    restart: unless-stopped

  mariadb:
    image: lscr.io/linuxserver/mariadb:11.4.5
    container_name: mariadb
    environment:
      # User/Group IDs (should match booklore container)
      - PUID=1000
      - PGID=1000
      # Timezone (should match booklore container)
      - TZ=Etc/UTC
      # Database root password (keep this secure!)
      - MYSQL_ROOT_PASSWORD=super_secure_password
      # Database name
      - MYSQL_DATABASE=booklore
      # Application database user
      - MYSQL_USER=booklore
      # Must match DATABASE_PASSWORD in booklore service
      - MYSQL_PASSWORD=your_secure_password
    volumes:
      # Database storage (critical for persistence)
      - /your/local/path/to/mariadb/config:/config
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "mariadb-admin", "ping", "-h", "localhost"]
      interval: 5s
      timeout: 5s
      retries: 10
```

#### 🔧 Configuration Details

##### Environment Variables

**PUID & PGID:**
- Set these to match your system user ID for proper file permissions
- Find your IDs with: `id -u` (PUID) and `id -g` (PGID)

**TZ (Timezone):**
- Set to your local timezone (e.g., `America/New_York`, `Europe/London`)
- Ensures accurate timestamps and scheduled tasks
- List available timezones: `timedatectl list-timezones`

**DATABASE_PASSWORD:**
- **Must be identical** in both `booklore` and `mariadb` services
- Use a strong, unique password
- Avoid special characters that might need escaping

**MYSQL_ROOT_PASSWORD:**
- Separate from `DATABASE_PASSWORD`
- Used for database administration
- Keep this extremely secure

**SWAGGER_ENABLED:**
- Set to `false` in production for security
- Set to `true` during development for API documentation

##### Volume Paths

> ⚠️ **Critical:** Replace `/your/local/path/to/...` with your actual directory paths from Step 1.

**Example for Linux/macOS:**
```yaml
volumes:
  - /home/username/booklore/data:/app/data
  - /home/username/booklore/books:/books
  - /home/username/booklore/bookdrop:/bookdrop
```

**Example for Windows (WSL2):**
```yaml
volumes:
  - /mnt/c/Users/YourName/booklore/data:/app/data
  - /mnt/c/Users/YourName/booklore/books:/books
  - /mnt/c/Users/YourName/booklore/bookdrop:/bookdrop
```

##### Image Versions

**Latest Tag (default):**
```yaml
image: booklore/booklore-app:latest
```

**Specific Version (recommended for production):**
```yaml
image: booklore/booklore-app:v1.2.3
```

> 💡 **Best Practice:** Pin to specific versions in production to prevent unexpected updates. Check [GitHub Releases](https://github.com/adityachandelgit/booklore/releases) for available versions.

---

### Step 4: Start the Containers

#### Initial Startup

From the directory containing your `docker-compose.yml`:

```bash
docker compose up -d
```

This command will:
1. Pull the required Docker images (first time only)
2. Create and start both containers
3. Initialize the database with proper schema
4. Run in detached mode (background)

#### Monitor Startup Progress

```bash
# View logs from both containers
docker compose logs -f

# View logs from specific container
docker compose logs -f booklore
docker compose logs -f mariadb
```

> ⏱️ **First Start:** Initial startup may take 1-2 minutes as the database initializes. Subsequent starts are much faster.

#### Verify Containers are Running

```bash
docker compose ps
```

You should see both containers with "Up" status:

```
NAME       IMAGE                                  STATUS
booklore   booklore/booklore-app:latest          Up 2 minutes
mariadb    lscr.io/linuxserver/mariadb:11.4.5    Up 2 minutes (healthy)
```

> ✅ **Healthy Status:** Wait until MariaDB shows "(healthy)" before accessing Booklore.

---

### Step 5: Access Booklore

#### Open the Web Interface

Once containers are running, open your web browser and navigate to:

```
http://localhost:6060
```

Or from another device on your network:

```
http://YOUR_SERVER_IP:6060
```

#### First-Time Setup

1. **Create Admin Account**  
   On first access, you'll be prompted to create an administrator account

2. **Configure Libraries**  
   Set up your first library pointing to the `/books` volume

3. **Optional: Configure Bookdrop**  
   Enable automatic imports from the `/bookdrop` folder

4. **Optional: API Keys**  
   Add Google Books API key for enhanced metadata enrichment

> 🎉 **Success!** You're now ready to start building your digital library.

---

## 🔧 Post-Installation Configuration

### Adjusting Container Resources

#### Memory Limits (Optional)

If running on limited hardware, add resource constraints:

```yaml
services:
  booklore:
    # ...existing configuration...
    deploy:
      resources:
        limits:
          memory: 2G
        reservations:
          memory: 512M
```

#### CPU Limits (Optional)

```yaml
services:
  booklore:
    # ...existing configuration...
    deploy:
      resources:
        limits:
          cpus: '2.0'
```

---

### Setting Up HTTPS with Reverse Proxy

For secure external access, use a reverse proxy:

#### Example: Nginx Configuration

```nginx
server {
    listen 443 ssl http2;
    server_name books.yourdomain.com;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    location / {
        proxy_pass http://localhost:6060;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

#### Example: Traefik Labels

```yaml
services:
  booklore:
    # ...existing configuration...
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.booklore.rule=Host(`books.yourdomain.com`)"
      - "traefik.http.routers.booklore.entrypoints=websecure"
      - "traefik.http.routers.booklore.tls.certresolver=myresolver"
      - "traefik.http.services.booklore.loadbalancer.server.port=6060"
```

---

### Network Storage (NAS/SMB/NFS)

If storing books on network storage:

#### SMB/CIFS Mount (Linux)

```bash
# Install cifs-utils
sudo apt-get install cifs-utils

# Create mount point
sudo mkdir -p /mnt/nas-books

# Add to /etc/fstab
//nas-server/books /mnt/nas-books cifs credentials=/home/user/.smbcredentials,uid=1000,gid=1000 0 0

# Mount
sudo mount -a
```

#### Update Docker Compose

```yaml
volumes:
  - /mnt/nas-books:/books
```

> ⚠️ **Bookdrop Warning:** Network storage may not support real-time file watching. See [Bookdrop documentation](bookdrop) for details.

---

## 🛠️ Common Operations

### Starting and Stopping

```bash
# Start containers
docker compose up -d

# Stop containers
docker compose down

# Restart containers
docker compose restart

# View status
docker compose ps
```

### Updating Booklore

```bash
# Pull latest image
docker compose pull booklore

# Recreate container with new image
docker compose up -d booklore
```

> 💡 **Backup First:** Always backup your database before major updates.

### Viewing Logs

```bash
# All logs
docker compose logs

# Follow logs in real-time
docker compose logs -f

# Last 100 lines
docker compose logs --tail=100

# Specific service
docker compose logs -f booklore
```

### Accessing Container Shell

```bash
# Booklore container
docker compose exec booklore /bin/bash

# MariaDB container
docker compose exec mariadb /bin/bash
```

---

## 🐛 Troubleshooting

### Container Won't Start

**Check logs for errors:**
```bash
docker compose logs booklore
docker compose logs mariadb
```

**Common issues:**
- Incorrect volume paths
- Port 6060 already in use
- Database password mismatch
- Insufficient permissions on mounted directories

### Database Connection Errors

**Verify MariaDB is healthy:**
```bash
docker compose ps mariadb
```

**Check database credentials:**
- Ensure `DATABASE_PASSWORD` matches `MYSQL_PASSWORD`
- Verify `DATABASE_USERNAME` matches `MYSQL_USER`

**Reset database (last resort):**
```bash
docker compose down
rm -rf ~/booklore/config/mariadb/*
docker compose up -d
```

> ⚠️ **Warning:** This deletes all library metadata. Books remain but need re-importing.

### Permission Errors

**Fix directory permissions:**
```bash
# Find your user/group IDs
id -u  # PUID
id -g  # PGID

# Update docker-compose.yml with correct PUID/PGID

# Fix directory ownership
sudo chown -R $USER:$USER ~/booklore
```

### Port Already in Use

**Check what's using port 6060:**
```bash
# Linux/macOS
sudo lsof -i :6060

# Windows
netstat -ano | findstr :6060
```

**Use different port in docker-compose.yml:**
```yaml
ports:
  - "8080:6060"  # Access via http://localhost:8080
```

### Can't Access from Network

**Check firewall rules:**
```bash
# Linux (UFW)
sudo ufw allow 6060/tcp

# Linux (firewalld)
sudo firewall-cmd --permanent --add-port=6060/tcp
sudo firewall-cmd --reload
```

**Verify Docker network:**
```bash
docker network inspect booklore_default
```

---

## 📊 Performance Optimization

### Database Tuning

Add to MariaDB environment in `docker-compose.yml`:

```yaml
mariadb:
  environment:
    # ...existing variables...
    - MYSQL_INNODB_BUFFER_POOL_SIZE=1G
    - MYSQL_MAX_CONNECTIONS=100
```

### Enable Caching

Booklore automatically caches:
- Metadata lookups
- Cover images
- Search results

Cache is stored in `/app/data` volume.

### Scheduled Maintenance

Create a cron job for regular database optimization:

```bash
# Add to crontab -e
0 3 * * 0 docker compose exec -T mariadb mariadb-admin optimize booklore
```

---

## 🔒 Security Best Practices

### Use Strong Passwords

```bash
# Generate secure password
openssl rand -base64 32
```

### Disable Root SSH (if exposing to internet)

### Use HTTPS

Never expose HTTP ports directly to the internet. Always use:
- Reverse proxy with SSL/TLS
- Let's Encrypt for free certificates
- Cloudflare for DDoS protection

### Regular Updates

```bash
# Update Booklore monthly
docker compose pull
docker compose up -d
```

### Backup Strategy

**Automated backup script:**
```bash
#!/bin/bash
DATE=$(date +%Y%m%d)
tar -czf backup-booklore-$DATE.tar.gz \
  ~/booklore/config/mariadb \
  ~/booklore/data
```

---

## 📚 Next Steps

Now that Booklore is installed, explore these essential features to get started:

1. **[Setup Admin User](initial-setup)** - Create your administrator account and secure your instance
2. **[Setup First Library](library/setup-first-library)** - Configure your first library and organize your collection
3. **[Configure Bookdrop](bookdrop)** - Enable automatic imports by dropping files into a folder
4. **[Metadata Fetch Configuration](metadata/metadata-fetch-configuration)** - Set up metadata sources for enriching book information
5. **[Magic Shelf](magic-shelf)** - Automatically organize books with smart shelving rules

### Optional Advanced Setup

- **[Email Setup](email-setup)** - Configure email notifications and password resets
- **[Kobo Integration](integration/kobo)** - Connect your Kobo e-reader
- **[OPDS Integration](integration/opds)** - Access your library from compatible reading apps
- **[System Task Manager](tools/task-manager)** - Monitor background tasks and system performance

---

## 💡 Additional Resources

- **[GitHub Repository](https://github.com/adityachandelgit/booklore)** - Source code and issue tracking
- **[GitHub Releases](https://github.com/adityachandelgit/booklore/releases)** - Version history and changelogs
- **[Docker Hub](https://hub.docker.com/r/booklore/booklore-app)** - Official container images
- **[Community Discord](#)** - Get help and share tips

---

Happy reading! 📚✨ If you encounter any issues not covered here, please check the GitHub issues or reach out to the community for support.
