---
sidebar_position: 1
---

# Installation

This doc will walk you through how to install Panoramica locally,
including each of the dependencies. At the end, you'll have a local
instance of Panoramica running on your machine that you can use to
explore the features.

## Clone the repository

First, clone the repository and change to the new directory:

```shell
git clone git@github.com:orbit/panoramica.git
cd panoramica
```

## Install NPM packages

We use yarn as the package manager, if you don't have it installed, you can get it with `npm install -g yarn`. Then run `yarn` to install packages:

```shell
yarn
```

## Setup PostgreSQL

If you don't have it installed, you can follow the instructions here: [https://www.postgresql.org/download/](https://www.postgresql.org/download/).

Once your PostgreSQL server is running, create a connection string in the following format:

```text
postgresql://<username>:<password>@<host>:<port>/<database>?schema=<schema>
```

For example:

```text
postgresql://postgres:postgres@localhost:5432/panoramica?schema=public
```

In this example, the username and password are both `postgres`, the host is `localhost`, the port is `5432`, the database is `panoramica`, and the schema is `public`.

Once you have your connection string, create a `.env` file in the project directory and
set the following variables to the connection string:

```text
POSTGRES_PRISMA_URL=<connection-string>
POSTGRES_URL_NON_POOLING=<connection-string>
```

## Memgraph

Next we'll install Memgraph, which is the graph database that Panoramica uses.
See the [installation guide here](https://memgraph.com/docs/memgraph/installation) for the correct instructions for your enviroment. Generally, we recommend using the Docker image,
which [this guide](https://memgraph.com/docs/memgraph/how-to-guides/work-with-docker) will
walk you through.

Once Memgraph is up and running, add these variables to your `.env` file.

```shell
MEMGRAPH_URI=bolt://localhost:7687
MEMGRAPH_USERNAME=
MEMGRAPH_PASSWORD=
```

If you set a username and password for Memgraph, add them to the
`MEMGRAPH_USERNAME` and `MEMGRAPH_PASSWORD` variables. Otherwise, leave
them blank.

## Set up NextAuth

[NextAuth](https://next-auth.js.org/) is the authentication library that Panoramica uses. It supports a number of different authentication providers. For Panoramica,
we use [email (magic link) authentication](https://next-auth.js.org/providers/email).

NextAuth requires a secret to be set in the environment as well as
a `NEXTAUTH_URL` variable that points to the URL of the server. This URL
is used to generate the magic link that is sent to the user's email.

To create a secret, run the following command:

```shell
openssl rand -base64 32
```

This will generate a random string of characters. Copy this string and
set it as the value of the `NEXTAUTH_SECRET` variable in your `.env` file.

Next, set the `NEXTAUTH_URL` variable to the URL of your local server.
Once you have done that, your environment variables should look like this:

```shell
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<your-secret>
```

## SMTP + Nodemailer

Next, we will set up a way to send email from the development enviroment.
This is necessary for the magic link authentication to work. We recommend
using [NodeMailer](https://nodemailer.com/about/) to establish a local SMTP server
that does not send real emails, but instead records them to be viewed
from the NodeMailer app.

Once you have NodeMailer installed, create a project in the app and start the server.
Using the information from the project, set the following environment variables:

```shell
SMTP_HOST=127.0.0.1
SMTP_USERNAME=project.1
SMTP_PASSWORD=secret.1
SMTP_PORT=1025
SMTP_FROM=contact@yourcompany.com
```

## The full .env file

Once you've followed all the steps above, your `.env` file should look like this:

```shell
POSTGRES_PRISMA_URL=<connection-string>
POSTGRES_URL_NON_POOLING=<connection-string>
MEMGRAPH_URI=bolt://localhost:7687
MEMGRAPH_USERNAME=
MEMGRAPH_PASSWORD=
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<your-secret>
SMTP_HOST=127.0.0.1
SMTP_USERNAME=project.1
SMTP_PASSWORD=secret.1
SMTP_PORT=1025
SMTP_FROM=contact@yourcompany.com
```

## Create the database schema

Now that all the environment variables are set, we can create the database
schema using Prisma. Here is the command:

```shell
npx prisma migrate dev --name init
```

This will create the database tables that NextAuth needs to process
authentication requests.

## Start the server

Now, go ahead and start the server:

```shell
yarn dev
```

This will start the server at `localhost:3000` or another port if
port 3000 is already taken.

## Create the first user

Head to [http://localhost:3000](http://localhost:3000) and you
will see a page with a form to sign you in via email. This will create
a user when it doesn't exist.

Before you submit the form, make sure that your Nodemailer instance
is started so that you can receive the email. Once you receive the email,
click the button and you will be taken to the Panoramica app and be logged in.

## Create the first project

Now, you're ready to create your first project. Head over to the
[user guide for projects](/docs/user-guides/create-a-project) to see the
next steps.

Once you're ready to deploy Panoramica, check out the [deployment guide](/docs/getting-started/deployment) for further instructions.
