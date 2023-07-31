---
sidebar_position: 7
---

# Live Demo

Want to see Panoramica in action? Check out the demo instance at:

https://demo.panoramica.ai/dashboard

Only you've loaded the URL, click on the project to load it up. This instance has a single project that is loaded with test data designed to resemble a real community. The data was generated with ChatGPT.

On the demo site, you can do read-only actions like viewing conversations and interacting with the search and AI assistant. You cannot bookmark conversations or change project settings.

## Running in Demo Mode

Any Panoramica instance can be run in demo mode by setting `DEMO_SITE=1` in the environment variables. In this mode, the creation of new projects is disabled.

## Public Projects

Independent of demo mode, any project can be made public by checking the `Make Project public` checkbox in the Edit Project widget and then saving the changes.

Once a project is public, the project URL can be loaded by anonymous visitors. These visitors will see a read-only version of the project. They will be able to use the search and the assistant, but they will not be able to bookmark conversations or change project settings.
