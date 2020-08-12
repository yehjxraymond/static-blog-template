---
template: blog-post
title: Agility Under Uncertainty
publishedDate: 2020-08-12T16:02:46.329Z
description: In this post, I will share different choices the engineering team
  has made throughout the early phase of the product development to navigate
  uncertainty, to the extent of building uncertainty within the product. For
  those curious about how life is like building a product for the government,
  you get a rare peek into how one team does it.
featured: true
img: /images/photo-1597077392360-c01bc7963aeb.jpeg
imgAlt: Do you see a sea gull?
tags:
  - opnions
  - ocean
content: >-
  On 29th January 2020 (Wednesday), I received a call from Steven at 10:30 pm,
  asking for assistance on a product for distributing supplies to the whole of
  Singapore. The requirements were vague - "We need to distribute disposable
  surgical mask to our citizen. We need a system to track it. And we need it
  ready by Monday". I asked for more information but that was what I got. I've
  never received a call from him past office hours and understood the urgency
  and severity of the problem. Assembling a (crazy) team at midnight that day
  with RJ and Sebastian, we went on to build a product now known as SupplyAlly.
  An app used to maintain a central record of transactions across different
  distribution initiatives.


  In this post, I will share different choices the engineering team has made throughout the early phase of the product development to navigate uncertainty, to the extent of building uncertainty within the product. For those curious about how life is like building a product for the government, you get a rare peek into how one team does it.


  ## Designing for Uncertainty


  In the book Simultaneous Management, Alexander Laufer groups uncertainties into two categories: means uncertainty and end uncertainty. Means uncertainty refers to our uncertainty about exactly how we’ll design and develop a product; end uncertainty refers to uncertainty about exactly what a product will do.


  For SupplyAlly, there was a high degree of end uncertainty, to begin with. We weren't certain about the different aspects of the end product, for instance:


  - what are the policies (product, quantity & reset period if any) for these distribution exercises

  - who are eligible to collect

  - do we know in advance the identity of these people distributing

  - how many distribution exercises are there


  ## Agile Policy Making with Invariance


  Uncertainties like that tend to paralyse the entire product development. Instead, the team chose to bake most of these uncertainties into the product by making them configurable. This essentially decouples the product development from policymaking. However, this means that the product team has to present a set of invariances to policymakers.


  Some of the decisions made very early were:


  The policy is configurable and expressed as the set of products, quota reset period & quantity distributed.

  The app will identify an entity with an identifier. This identifier can take the form of an NRIC or other types of identifiers which uniquely differentiates one entity from another.

  Credentials will be pregrenerated and distributed to for app operators. We do not assume that they are known in advance.

  The app can connect to different endpoints that have different policies in place. Each distribution exercise warrants a different set of environments and endpoints.

  With this information, we form a contract where policymakers may navigate around these constraints and be certain that our application will deliver for them regardless of what they eventually propose.


  ## Communicate Certainties


  Speed is how fast something moves. Velocity is speed with direction.


  Moving fast is a double edge sword. When a team moves fast in different directions, the net velocity is near-zero. The difference between that and a team that gets things done fast is the team's ability to communicate and synchronize on the goals, directions and approach.


  On the midnight of 29th January, after a brief breakout, the team aligned immediately on a few designs:


  wireframe of the mobile app

  API of the backend

  We communicated these clearly to one another through writing clear API Readmes and Architecture Decision Records (ADRs).


  The team also agreed on who will work on what, so that we do not trip over one another:


  RJ will handle the backend API

  Seb will continue on the hi-fi app design and handle the frontend UI

  I will scaffold the frontend logic and mock the backend API

  Within a few hours, we have a working mobile app which can be used to communicate our idea. The application doesn't make real transactions and it looks and feels wonky. That was enough to build our confidence that we will be able to deliver. With that minor victory, we reward ourselves by heading to bed.
---
