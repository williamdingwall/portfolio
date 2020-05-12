---
title: "TeamSnap Search Patterns"
intro: Simplifying search patterns for TeamSnap's enterprise app.
thumb: img/search-patterns/portfolio_search_cover.jpg
collection: portfolioWork
collection_label: UX + UI Design, Visual Design
project_link: true
featured: true
layout: article.html
id: TS-Search
date: 2020-01-01
order: 1
---

<div class="Article-section">

### Problem

Our search experiences weren’t great to say the least. We had adopted an advanced search approach across most of our search experiences. We were getting a lot of feedback from customers saying things like.

* Search is intimidating and hard to use
* Inputs like "Born Before", "Born After" and others are hard to understand
* It’s not always certain why some results show for certain searches

### Audience

The key thing to know about our user base is that a lot of times they're volunteers and in some cases they're volunteers trying to manage thousands of members; up to 10,000. Typically they volunteer for their kids that are playing in the league, either to spend a little more time with them, to get a discount, or just to help out because it's a community based non-profit organization. Managing sports organizations isn't necessarily their day job and they may be doing some of these tasks on the weekends or after work.

So when people start hitting snags in searching because it's hard to understand, slow to use, or just plain confusing, the dropoff rates for that session skyrocket and the customer satisfaction plummets.

### Goals

#### Members Tab
* Decrease time to search results
* Decrease time to action on a member

#### Rostering Tab
* Decrease time to search results
* Decrease time to moving a member to a team or division
* Decrease the percentage of invalid searches triggered

### KPIs

Logo Retention. Our hypothesis was that by improving these primary search experiences and experiences moving forward, we could decrease friction and overall dropoff rates for sessions in these features, ultimately improving customer satisfaction and reducing churn.

### Strategy

Looking ahead at our product strategy, reporting and member management across multiple seasons were going to be a big focus moving forward. I view “search” as the backbone for both. So this project focuses on two specific search implementations but we needed patterns that could influence our search experiences moving forward. We needed a strategy for how we approach searching in the sports org product moving forward.

</div>

<div class="Reverse-text">

![Search Cover](/../../img/search-patterns/cover_image_behance.jpg)

<div class="Article-section">

## Search Research

Started by reviewing searches in FullStory, a little UserTesting and parsing data from our API calls to see how users are searching on both the Members Tab and Rostering Tab. I was looking for potential points of conflict in the user trying to find results as well as indications of intent for running a search in the first place.

### FullStory & UserTesting Findings

During the qualitative analysis a few issues in our current searches became pretty clear. These weren’t the only issues, but quickly proved out to be the most glaring issues. Things like hidden search criteria skewing the data set, forcing users to understand computer logic, false indications of options selected and forcing a search. 

</div>

![Search Cover](/../../img/search-patterns/Findings_nehance.jpg)

<div class="Article-section">

### Measuring Intent

Looking at the data it became clear the intent of the user was very different between the two tabs. Users in the members tab focused on direct searches for individuals in order to take a specific action on them, while Rostering Tab searches focused on creating member segments in order to evaluate them as a whole for team building.

</div>

![Search Cover](/../../img/search-patterns/comparing_usage_behance.jpg)

<div class="Article-section">

### Mapping Searches

After watching people interact with our UIs, too often failing to come up with meaningful results, I became curious if there are certain types of searches that are generally more successful than others. Simple searches were clearly more successful than complex ones, but how much did the search criteria being combined matter? One pattern I noticed is the combination of more narrow search criteria like name, email and team often lead to failed searches more consistently. First name combined with first name was almost guaranteed to fail, except that vary rare case of “Billy Joe”. First name plus email generally was just unnecessary and greatly narrowed the scope of search. Organizing search criteria by primary and secondary types, then only allowing a single primary criteria to be selected was a good way to set our users up for success while still allowing them to combine criteria.

</div>

![Search Cover](/../../img/search-patterns/mapping-searches_behance.jpg)

<div class="Article-section">

### Turning Research into Principles

This is a lot of data that can be difficult to discuss offhand in meetings as were brainstorming ideas, so I worked on distilling it down to a few basic principles for how we can approach our search experiences. So as ideas came up we can discuss as a group what it does to the experiences vs what experience were trying to give. What does it do vs what are you trying to do is the core of any creative process and having principles combined with user tasks acts as a nice framework for discussion.

</div>

![Search Cover](/../../img/search-patterns/ux_rinciples_behance.jpg)

<div class="Article-section">

### Building up the UI

The three primary patterns that emerged were categorizing search criteria based on user needs in order to guide them to successful searches, condense fields down to singular interactions to make the process more direct and only provide what’s needed for the feature. The UI and visual design of these patterns can vary but the basic concepts help provide a consistent experience.

</div>

![Search Cover](/../../img/search-patterns/defining-patterns-behance.jpg)

<div class="Article-section">

## Turning Those Patterns Into Features

Working with some of those outlined patterns I started building those up into variations that we could discuss. Not all variations are shown below but wanted to illustrate some of the differing iterations and compare to the old interface to the new to see how we can build them up based on those patterns, how they can benefit our users and how they tie back into the goals of the project.

</div>

[//]: # (End revers section)
</div>

<div class="MiddleGround">

![Search Cover](/../../img/search-patterns/Old_Members_Tab_Breakdown.jpg)
![Search Cover](/../../img/search-patterns/New_Members_Tab_Breakdown.jpg)
![Search Cover](/../../img/search-patterns/Type_Ahead_Tab_Breakdown.jpg)
![Search Cover](/../../img/search-patterns/compoun_search_one.jpg)
![Search Cover](/../../img/search-patterns/compound-search_two.jpg)
![Search Cover](/../../img/search-patterns/compound_search_three.jpg)
![Search Cover](/../../img/search-patterns/UI-Kit_behance.jpg)

[//]: # (End revers section)
</div>
