# 🤖 Using the API

Booklore provides an API that allows programmatic access to the stored books and metadata.
You can use this API to add books, remove books, search for books, modify metadata, and virtually anything else that you can do through the web-based UI.

---

## Accessing the API

The API is exposed on port 8080.
If you are running Booklore in a container, such as Docker, you must expose this port externally.
When using Docker Compose, you can do this by adding the port in the `ports:` section of `docker-compose.yml` and restarting the container.

```yaml
services:
  booklore:
    image: booklore/booklore-app:latest
[...]
    ports:
      - "6060:6060"
      - "8080:8080"
[...]
```

:::warning[Security warning]
If your Booklore instance is exposed on the public Internet, be careful about exposing the API port.
Although it requires authentication, there may be vulnerabilities that could let someone into your Booklore instance, and from there into your internal network.
Use a firewall or similar to block access to this port from anywhere that does not need it.
:::

Once the API is exposed, you can access the live API documentation at the following URL.

```
http://localhost:8080/swagger-ui/index.html
```

Or from another device on your network:

```
http://YOUR_SERVER_ADDRESS:8080/swagger-ui/index.html
```

## Authenticating to the API

Using the API requires that you provide an API token in your requests.
This includes accessing the live documentation.

Booklore does not yet have the capability of generating API tokens through the UI for administrators or users.
To get an API token you can use, you will need to sniff the requests being made by your web browser.
Open the Booklore UI in your web browser and log in as an administrator user.
Then, open the web developer tools for your browser.
In Firefox and Google Chrome, this is done using the keyboard shortcut `Ctrl-Shift-I`.

Select the `Console` tab in the web developer tools, and then click on the `Settings` button in Booklore.
After the page has loaded. the console will have a list of requests made to the server.
Open the request for the address `https://YOUR_SERVER_ADDRESS/api/v1/settings`.
Within the request information, look for a field named `Authorization`.
The long string of random characters after `Bearer` is the API token.
