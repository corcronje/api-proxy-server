# Express HTTP Proxy Server

This repository contains a basic Express HTTP proxy server. The server is designed to proxy requests to an external API. This is especially useful in scenarios where additional headers, such as API keys, need to be added but hidden from the public.

## Overview

The server is built using Node.js and Express.js. It uses several middleware including `body-parser` for parsing incoming request bodies, `cors` for enabling Cross-Origin Resource Sharing, and `dotenv` for loading environment variables.

The server proxies both GET and POST requests to an external API. The API URL, App ID, and App Key are all configurable via environment variables. This allows you to add necessary headers and keep sensitive information like API keys hidden.

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Create a `.env` file in the root directory and set your `SERVER_PORT`, `API_URL`, `APP_ID`, and `APP_KEY`
4. Start the server with `npm start`

## Usage

Once the server is running, it will listen on the port specified by the `SERVER_PORT` environment variable. You can make requests to the server, and it will proxy those requests to the external API, adding any necessary headers.

The server also includes a root route (`/`) that simply responds with "Ready to proxy!" to confirm that the server is running correctly.

## License

This project is open source and available under the [MIT License](LICENSE).
