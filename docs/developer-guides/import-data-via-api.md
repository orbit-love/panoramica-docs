---
sidebar_position: 3
---

# Import Data via API

Panoramica has an endpoint to receive activities from any source, up to 100 at a time.

## Endpoint

The endpoint is `/api/projects/[id]/api/activities/bulk_create`. It accepts a POST request with a JSON body that contains an array of activities.

## Activity Fields

See what fields are supported in the [Core Concepts](/docs/developer-guides/core-concepts#activities) guide.

:::note

For now, you'll need to provide `globalActor` and `globalActor` name in the activity for Panoramica to correctly display activities. This will change soon. In the meantime, you can set them to the same values as `actor` and `actorName` if you don't have other identifiers.

:::

## Authentication

Authentication is handled via a JWT token. You can generate a token in the User widget in the UI. This token is valid for 24 hours. Set the token in the `Authorization` header of the request.
