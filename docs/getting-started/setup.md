---
sidebar_position: 1
---

# Installation

Clone Panoramica and get it working locally.

## Clone the repository

```sh
git clone https://github.com/orbit-love/panoramica.git
```

We use yarn as the package manager, if you don't have it installed, you can get it with `npm install -g yarn`. Then run `yarn`

## Set up dependencies

### next-auth

Set these variables in `.env`:

```shell
NEXTAUTH_URL=http://localhost:3001
NEXTAUTH_SECRET=<your-secret>
```

Generate a unique secret with the following command:

```shell
openssl rand -base64 32
```

### PostgreSQL
If you don't have it installed, you can follow the instructions here: https://www.postgresql.org/download/
Then, set these variables in `.env`:

```text
POSTGRES_PRISMA_URL=postgresql://...
POSTGRES_URL_NON_POOLING=postgresql://...
```

### Memgraph
You'll need Memgraph running locally: https://memgraph.com/docs/memgraph/installation

```shell
MEMGRAPH_URI=bolt://localhost:7687
MEMGRAPH_USERNAME=
MEMGRAPH_PASSWORD=
```

### Nodemailer / SMTP

Set up variables for sending emails locally and receiving them inside
of a local client, without them actually being sent. Nodemailer is a
convenient solution for this. If you're using Nodemailer, set the
environment variables like this:

```shell
SMTP_HOST=127.0.0.1
SMTP_USERNAME=project.1
SMTP_PASSWORD=secret.1
SMTP_PORT=1025
SMTP_FROM=contact@yourcompany.com
```

## Start the server

- set env vars
- login
