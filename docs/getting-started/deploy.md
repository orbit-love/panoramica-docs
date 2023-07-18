---
sidebar_position: 2
---

# Deployment

Deploy Panoramica to Vercel or another Next.js hosting provider.
This assumes you have a GitHub repository for your Panoramica instance.
This guide will be for Vercel.

## Create a Vercel Project

On the Vercel Dashboard, click `Add New...`. On the next page, choose the
GitHub repository of your Panoramica instance.

On the next step, keep the defaults and add some environment variables.

![Alt text](<CleanShot 2023-07-17 at 17.09.10@2x.jpg>)

The environment variables you need to provide are:

- `NEXTAUTH_SECRET` - [guide to generate](https://next-auth.js.org/configuration/options#secret)
- `NEXTAUTH_URL` - the URL for magic link email login e.g. `https://my-panoramica.vercel.app`
- `SMTP_FROM`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USERNAME`, `SMTP_PASSWORD` for sending login emails

Click Deploy once you've provided the variables. This process will take a minute or two and should fail since we haven't added environment
variables yet.

## Set up databases

Next, we need to add databases for our deployment to connect to.

### PostgreSQL

You can use Vercel PostgreSQL. Click Storage in the header of the project. Follow the steps and create a PostgreSQL instance in
the region of your choice.

Choose to use the database for all environments (or at least the
production environment). That will set up environment variables
automatically.

If you already have a PostgreSQL instance you'd like to use,
add these environment variables manually:

```text
POSTGRES_PRISMA_URL=postgresql://...
POSTGRES_URL_NON_POOLING=postgresql://...
```

They can point to the same database.

### Memgraph

You can deploy Memgraph to any cloud provider via the Docker image.
You can also sign up for a free Memgraph instance with [Memgraph Cloud](https://cloud.memgraph.com/).

Add the environment variables once you have an instance:

```text
MEMGRAPH_URI=bolt+ssc://<hostname>:<port>
MEMGRAPH_PASSWORD=<password>
MEMGRAPH_USERNAME=<username>
```

## Redeploy

Now that all the environment variables and databases are in place,
go to the last build that failed in the Vercel project and click
"Redeploy".

During this step, the database tables and schema will be created thanks
to the `vercel-build` command in `package.json`. This command will
run on every deployment and run any outstanding migrations via Prisma.

## Log in for the first time

If the deployment succeeded, you should be able to log in and create a user.

Verify that you can log in via email, create a project, import data,
and see the data on the UI.

## Additional options

### Add a custom domain

In the Settings of your Vercel app, you'll find a Domains tab.
Here you can point a domain that you own to your Vercel deployment.

### Link the project locally

To be able to run commands with `vercel` and interact with your
deploymnet, link your local project to your vercel deployment.

```shell
npm install -g vercel # if you don't have it
vercel link
```
