---
sidebar_position: 2
---

# Import Data from Orbit

Currently there are two methods of bringing data into a Panoramica project.
The first method uses the [Orbit API](https://api.orbit.love/) to ingest activities
from an Orbit workspace.

The Orbit workspace name and API key are collected from
the user and stored in the [Project](/docs/developer-guides/core-concepts#projects) model. They are used to construct a URL for the Orbit API
[Activities Endpoint](https://api.orbit.love/reference/get_workspace-slug-activities).

An alternate Orbit API URL is accepted as an optional field. This can be used to filter
the activities returned by the Orbit API. For example, you can use this to only return
activities from a specific source platform, tag, or date range.

## Supported Orbit Data Sources

Panoramica supports a subset of the [Orbit integrations](https://orbit.love/integrations).
Here's the current list. The list will be updated each time new support is added.

- [Discord](https://orbit.love/docs/all/discord-integration)
- [GitHub](https://orbit.love/docs/all/github-integration)
- [Discourse](https://orbit.love/docs/all/discourse-integration)
- [Twitter](https://orbit.love/docs/all/twitter-integration)

If you'd like to see support for a specific integration, please [open an issue](https://github.com/orbit-love/panoramica/issues) and we'll prioritize it.
If you're like to see how the Panoramica-to-Orbit connection works, you can
[check out the code](https://github.com/orbit-love/panoramica/blob/main/src/integrations/orbit/api.js).
