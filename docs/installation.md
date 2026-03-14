# 🛠️ Installation Guide

Get BookLore up and running in minutes with Docker Compose.

:::tip[Quick Start]
If you're experienced with Docker, skip to [Step 2](#step-2-create-the-docker-composeyml-file) to grab the configuration.
:::

---

## 📦 Prerequisites

- **[Docker](https://docs.docker.com/get-docker/)** (v20.10+)
- **[Docker Compose](https://docs.docker.com/compose/install/)** (v2.0+)

**System requirements:** 2 GB RAM minimum, 4 GB+ recommended. Runs on Linux, macOS, and Windows (WSL2).

---

## 🚀 Installation Steps

### Step 1: Create the Directory Structure

```bash
mkdir -p ~/booklore/mariadb/config
mkdir -p ~/booklore/data
mkdir -p ~/booklore/books
mkdir -p ~/booklore/bookdrop
```

| Directory | Purpose |
|-----------|---------|
| `mariadb/config` | Database files. **Back this up.** |
| `data` | Application data, cache, logs |
| `books` | Your book library storage |
| `bookdrop` | Auto-import folder (see [Bookdrop](bookdrop)) |

---

### Step 2: Create the `docker-compose.yml` File

Navigate to your BookLore directory:

```bash
cd ~/booklore
```

Create a `.env` file:

```ini
# BookLore Application Settings
APP_USER_ID=1000
APP_GROUP_ID=1000
TZ=Etc/UTC
BOOKLORE_PORT=6060

# Database Connection (BookLore)
DATABASE_URL=jdbc:mariadb://mariadb:3306/booklore
DB_USER=booklore
DB_PASSWORD=ChangeMe_BookLoreApp_2025!

# MariaDB Container Settings
DB_USER_ID=1000
DB_GROUP_ID=1000
MYSQL_ROOT_PASSWORD=ChangeMe_MariaDBRoot_2025!
MYSQL_DATABASE=booklore
```

:::warning[Security]
Change default passwords before deploying!
:::

Create `docker-compose.yml`:

````yaml
services:
  booklore:
    image: booklore/booklore:latest
    container_name: booklore
    environment:
      - USER_ID=${APP_USER_ID}
      - GROUP_ID=${APP_GROUP_ID}
      - TZ=${TZ}
      - DATABASE_URL=${DATABASE_URL}
      - DATABASE_USERNAME=${DB_USER}
      - DATABASE_PASSWORD=${DB_PASSWORD}
      - BOOKLORE_PORT=${BOOKLORE_PORT}
    depends_on:
      mariadb:
        condition: service_healthy
    ports:
      - "${BOOKLORE_PORT}:${BOOKLORE_PORT}"
    volumes:
      - ./data:/app/data
      - ./books:/books
      - ./bookdrop:/bookdrop
    healthcheck:
      test: wget -q -O - http://localhost:${BOOKLORE_PORT}/api/v1/healthcheck
      interval: 60s
      retries: 5
      start_period: 60s
      timeout: 10s
    restart: unless-stopped

  mariadb:
    image: lscr.io/linuxserver/mariadb:11.4.5
    container_name: mariadb
    environment:
      - PUID=${DB_USER_ID}
      - PGID=${DB_GROUP_ID}
      - TZ=${TZ}
      - MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD}
      - MYSQL_DATABASE=${MYSQL_DATABASE}
      - MYSQL_USER=${DB_USER}
      - MYSQL_PASSWORD=${DB_PASSWORD}
    volumes:
      - ./mariadb/config:/config
    restart: unless-stopped
    healthcheck:
      test: [ "CMD", "mariadb-admin", "ping", "-h", "localhost" ]
      interval: 5s
      timeout: 5s
      retries: 10
````

#### Configuration Notes

- **User IDs:** Set `APP_USER_ID`/`APP_GROUP_ID` to your user ID (`id -u` / `id -g`). `DB_USER_ID`/`DB_GROUP_ID` is typically `1000`.
- **Passwords:** `DB_PASSWORD` must match in both `DATABASE_PASSWORD` and `MYSQL_PASSWORD`.
- **Timezone:** Set `TZ` to your timezone (e.g., `America/New_York`). List with `timedatectl list-timezones`.
- **Image registry:** Alternatively use `ghcr.io/booklore-app/booklore:latest` from GitHub Container Registry.

:::tip[Version Pinning]
For production, pin to specific versions (e.g., `booklore/booklore:v1.2.3`). Check [releases](https://github.com/booklore-app/booklore/releases).
:::

---

### Step 3: Start the Containers

```bash
docker compose up -d
```

Monitor startup with `docker compose logs -f`. Wait for MariaDB to show "(healthy)" before accessing BookLore.

---

### Step 4: Access BookLore

Open your browser and navigate to:

```
http://localhost:6060
```

Or from another device on your network: `http://YOUR_SERVER_IP:6060`

---

## 🐛 Troubleshooting

### Container Won't Start

```bash
docker compose logs booklore
docker compose logs mariadb
```

Common causes: incorrect volume paths, port 6060 already in use, database password mismatch, insufficient permissions.

### Database Connection Errors

Verify MariaDB is healthy with `docker compose ps mariadb`. Ensure `DATABASE_PASSWORD` matches `MYSQL_PASSWORD` and `DATABASE_USERNAME` matches `MYSQL_USER`.

**Reset database (last resort):**
```bash
docker compose down
rm -rf ~/booklore/mariadb/config/*
docker compose up -d
```

:::danger
This deletes all library metadata. Books remain but need re-importing.
:::

### Permission Errors

Find your user/group IDs with `id -u` and `id -g`, update `.env` accordingly, then fix directory ownership:
```bash
sudo chown -R $USER:$USER ~/booklore
```

### Port Already in Use

Check what's using port 6060 with `sudo lsof -i :6060`, or change the port mapping in `docker-compose.yml`:
```yaml
ports:
  - "8080:6060"  # Access via http://localhost:8080
```

### Can't Access from Network

Open the port in your firewall:
```bash
# UFW
sudo ufw allow 6060/tcp

# firewalld
sudo firewall-cmd --permanent --add-port=6060/tcp && sudo firewall-cmd --reload
```

---

## 📚 Next Steps

1. **[Setup Admin User](initial-setup)** to create your administrator account
2. **[Setup First Library](library/setup-first-library)** to configure your first library
3. **[Configure Bookdrop](bookdrop)** for automatic file imports
4. **[Metadata Fetch Configuration](metadata/metadata-fetch-configuration)** to set up metadata sources
