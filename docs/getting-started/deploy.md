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

Click Deploy once you've provided the variables. This process will take a minute or two.

## Set up databases

Next, we need to add databases for our deployment to connect to.

### PostgreSQL

You can use Vercel PostgreSQL. Click Storage in the header of the project.

Add these environment variables once you have an instance:

```text
POSTGRES_PRISMA_URL=postgresql://...
POSTGRES_URL_NON_POOLING=postgresql://...
```

### Memgraph

You can deploy Memgraph to any cloud provider via Docker image.
You can also sign up for a free Memgraph instance with Memgraph Cloud.

Add the environment variables once you have an instance:

```text
MEMGRAPH_URI=bolt+ssc://<hostname>:<port>
MEMGRAPH_PASSWORD=<password>
MEMGRAPH_USERNAME=<username>
```

## Log in for the first time

Now that all the environment variables and databases are in place,
you should be able to log in and create a user.

Verify that you can log in via email, create a project, import data,
and see the data on the UI.

## Additional options

### Add a custom domain

In the Settings of your Vercel app, you'll find a Domains tab.
Here you can point a domain that you own to your Vercel deployment.
