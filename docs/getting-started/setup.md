---
sidebar_position: 1
---

# Installation

Clone Panoramica and get it working locally.

## Clone the repository

Clone the repository and change to the new directory:

```shell
git clone git@github.com:orbit/panoramica.git
cd panoramica
```

We use yarn as the package manager, if you don't have it installed, you can get it with `npm install -g yarn`. Then run `yarn` to install packages:

```shell
yarn
```

## Prepare the environment

### next-auth

Create a `.env` file in the project directory and add these variables:

```shell
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<your-secret>
```

Substitute `3000` for the port you will run the local server on,
if it is different.

Generate a unique value for `NEXTAUTH_SECRET` with the following command:

```shell
openssl rand -base64 32
```

### PostgreSQL

If you don't have it installed, you can follow the instructions here: [https://www.postgresql.org/download/](https://www.postgresql.org/download/).

Then, set these variables in `.env`:

Set environment variables that point to a PostgreSQL database, it
will be created if it doesn't exist. The username and password should
be place into the connection string. Both variables can point to
the same database.

```text
POSTGRES_PRISMA_URL=postgresql://...
POSTGRES_URL_NON_POOLING=postgresql://...
```

### Memgraph

You'll need Memgraph running locally: [https://memgraph.com/docs/memgraph/installation](https://memgraph.com/docs/memgraph/installation).

To run Memgraph locally, we recommend the Docker image.
Check out [this guide](https://memgraph.com/docs/memgraph/how-to-guides/work-with-docker) to see how to set up Memgraph with Docker.
Once it's set up, add these variables to your `.env` file.

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

## Create the database schema

Once your environment variables are in place, use Prisma to create
the database schema.

```shell
npx prisma migrate dev --name init
```

This will create the database and database tables.

## Start the server

Now you're ready to start the server and log in for the first time.

```shell
yarn dev
```

This will start the server at `localhost:3000`, or another port if
port 3000 is already taken.

Head to [http://localhost:3000](http://localhost:3000) and you should
see a page to put in your email. Make sure that your Nodemailer instance
is started. Put in any email and submit. Check Nodemailer and you
should see an email from Panoramica with a link to log in.
Click the button and you should be logged in.

The next step is to create your first project. Check out the user guide
to Create a Project to see how.
