# rvshare-polyfills

This monorepo contains packages related to polyfilling non-modern browsers.

## Publishing

With proper permissions, you can publish a new version to npm via the commands below. These commands will create and push a git tag which in turn will be picked up by a GitHub Action which will then determine if that version has been published yet.

* `yarn publish-canary` - to publish a canary release, run this command
* `yarn publish-stable` - to publish a stable release, run this command
