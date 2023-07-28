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


## HTTP Request Example
```http
POST /api/projects/<PROJECT_ID>/activities/batch_create HTTP/2
Host: <YOUR_HOST>
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
Accept: application/json
Connection: close

{
  "data": [
    {
      "actor": "sally-tech",
      "actorName": "Han Sally",
      "globalActor": "sally-tech",
      "globalActorName": "Han Sally",
      "mentions": [],
      "source": "github",
      "sourceChannel": "stardust/fastsearch",
      "sourceId": "stardust/fastsearch#112",
      "sourceParentId": "",
      "sourceType": "issue_activity",
      "text": "I've noticed a slow response time when searching for larger data sets. I think it's related to the search algorithm.",
      "timestamp": "2023-05-20T08:15:30.000Z",
      "timestampInt": 1691238930000,
      "url": "https://github.com/stardust/fastsearch/issues/112",
      "textHtml": "<p>I've noticed a slow response time when searching for larger data sets. I think it's related to the search algorithm.</p>"
    },
    {
      "actor": "karl",
      "actorName": "Karl Oz",
      "globalActor": "karl",
      "globalActorName": "Karl Oz",
      "mentions": ["sally-tech"],
      "source": "github",
      "sourceChannel": "stardust/fastsearch",
      "sourceId": "stardust/fastsearch#112-1156971255",
      "sourceParentId": "stardust/fastsearch#112",
      "sourceType": "issue_comment_activity",
      "text": "I've made a profiling and it seems like the hashing function is taking the most time. Maybe we should look into more efficient hash functions?",
      "timestamp": "2023-05-20T08:58:00.000Z",
      "timestampInt": 1691241480000,
      "url": "https://github.com/stardust/fastsearch/issues/112#issuecomment-1156971255",
      "textHtml": "<p>I've made a profiling and it seems like the hashing function is taking the most time. Maybe we should look into more efficient hash functions?</p>"
    },
    {
      "actor": "dave",
      "actorName": "Dave",
      "globalActor": "dave",
      "globalActorName": "Dave",
      "mentions": ["karl"],
      "source": "github",
      "sourceChannel": "stardust/fastsearch",
      "sourceId": "stardust/fastsearch#112-1156971288",
      "sourceParentId": "stardust/fastsearch#112",
      "sourceType": "issue_comment_activity",
      "text": "@karl I can help with that. I've worked with Rust's SipHasher, and it could be a good alternative.",
      "timestamp": "2023-05-20T09:07:45.000Z",
      "timestampInt": 1691242065000,
      "url": "https://github.com/stardust/fastsearch/issues/112#issuecomment-1156971288",
      "textHtml": "<p>@karl I can help with that. I've worked with Rust's SipHasher, and it could be a good alternative.</p>"
    },
  ]
}
```




