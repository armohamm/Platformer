# Platformer Specification

## Preface

The deliverable of this project is to produce a simple TypeScript library that can be used by Node.JS applications to spin up a suite of machines, add and remove JavaScript functions to them, and perform updates and maintenance. This TypeScript library will be fully scaffolded and well commented before the project begins. Each function in the library will be empty, waiting for an implementation.

This library is most likely going to be embedded within the context of an [Electron](https://electronjs.org/) application, running on a Mac or Windows desktop. The end user of this application is most likely not a developer. They will not have developer-specific software installed on their machines, and so this library needs to be completely self-supporting (it must install any missing software on it's own that it needs in order to run).

## Technologies To Use

- Terraform - https://www.terraform.io/
- Docker - https://www.docker.com/
- Kubernetes - https://kubernetes.io/
- Kops - https://github.com/kubernetes/kops
- DGraph - https://dgraph.io/
- Nuclio - https://nuclio.io
- Node.js - https://nodejs.org/
- TypeScript - https://www.typescriptlang.org/
- Puppeteer - https://pptr.dev/

## Service Providers To Use

- AWS
- Digital Ocean
- KeyCDN - https://www.keycdn.com/

## What To Do

Follow the contributor machine setup guidelines (link). Then clone the project found at (GitHub link). Open up the main TypeScript file, and the comments will explain the specifics of what needs to be implemented.

## Terraform

This library should use Terraform in order to perform it's configuration. Terraform is not guaranteed to be installed on the machine on which this library will be running, and so it needs the ability to be installed programmatically. Fortunately, Terraform is a single binary, so this can be as simple as automatically pulling it from some URL (https://www.terraform.io/downloads.html) and then executing it on the client machine.

## Multi-Cloud Deployment

The library must support deployment to both AWS and Digital Ocean.
