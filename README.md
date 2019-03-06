# Platformer

## Preface

The deliverable of this project is to produce a simple TypeScript library that can be used by Node.JS applications to spin up a fleet of machines, add and remove JavaScript FaaS functions to them, and perform updates and maintenance. This TypeScript library will be fully scaffolded and well commented before the project begins. Each function in the library will be empty, waiting for an implementation.

This library is most likely going to be embedded within the context of an [Electron](https://electronjs.org/) application, running on a Mac or Windows desktop. The end user of this application is most likely a business analyst, and is likely unfamiliar with opening the terminal and executing cryptic commands. They will not have developer-specific software installed on their machines, and so this library needs to be completely self-supporting (it must install any missing software on it's own that it needs in order to run).

# Requirements

In order to work on this project, you should have the following things installed on your machine:
- Visual Studio Code
- TypeScript
- RollupJS
- Jest


## Technologies To Use

- RancherOS - https://rancher.com/rancher-os/
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

Terraform supports both their own specialized DSL for configuration, as well as [JSON files](https://www.terraform.io/docs/configuration/syntax-json.html). This library should generate JSON configuration files internally.

## Configurations

The library must be able to spin up Kubernetes clusters on *both* AWS and Digital Ocean (based on inputs to the function). These clusters will mainly run Nuclio (an open-source FaaS platform) and DGraph (a graph database). The library will have two main base configurations: *Simple* and *Scalable*.

### Simple

This configuration method is used to spin up backing infrastructure to support test projects, and simplistic non-critical projects where operation costs should be kept to a minimum. This configuration doesn't need a high availability setup. It will run a node for the Nuclio installation, and another node for the DGraph installation, which will run in a single server setup. The library will default to the smallest instance available on each provider to keep costs down.

### Scalable

This configuration method is used to support mission-critical enterprise applications. Everything should be run in a high availability setup, and should be configured to auto-scale (using only a simple auto-scaling algorithm, custom auto-scaling can come later).

## Function Deployment

Deployment of JavaScript functions is the core purpose of this library. The library will provide a method that will accept a JavaScript function as text, deploy it to the cluster, and return an HTTPS URL that is an API gateway where the function can be invoked. Additional requirements are:

- Functions should be content-addressable so that there is no need to store state anywhere. For example, when accepting the function's text, it's ID would be computed by calculating the SHA-256 hash of the code.

## Server Updates

Updates will need to be deployed to the underlying systems (Kubernetes, DGraph, Nuclio) periodically. The library must be able to perform these actions when called upon. Inputs will be given to each function to specify which version of which package should be deployed.

## Linux Distribution

The Linux distribution we'll be using is [RancherOS](https://rancher.com/rancher-os/).

## About Kops

This is a Kubernetes installer that supposedly simplifies the installation of Kubernetes. Although not strictly necessary, this library should be used internally in the library if it's determined that it will simplify the construction of the library itself, and make the source code more understandable to non-Kubernetes experts.



## Future

- Platformer should enable programatic access to DGraph enterprise features, but these features are not yet implemented in DGraph. See the [DGraph roadmap](https://github.com/dgraph-io/dgraph/issues/2894) for more information.
- Platformer should eventually be able to to install [Prometheus](https://prometheus.io/) for monitoring, and [Sentry](https://sentry.io/welcome/) for bug tracking. The purpose of this would not necessarily to enable end-users to perform their own monitoring, but rather to have these tools on-hand for a system administrator to use in the event that something goes wrong.



## Unknowns

- [ ] What are the internal parameters to this library?
- [ ] Do we need default configurations? (i.e. Simple, Scalable, Custom)



