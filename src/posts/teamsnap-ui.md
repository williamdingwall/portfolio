---
title: TeamSnap Design System
intro: Modernizing TeamSnap's web presence with a pattern-driven approach.
thumb: img/TeamSnap_UI_cover.jpg
collection: portfolioWork
collection_label: UI Design + Development, Visual Design
project_link: true
featured: true
layout: article.html
id: TS-UI
date: 2020-02-01
order: 3
---

<div class="Article-section">

### Problem:

Our web app design was out dated, HTML and CSS was inconsistent, components scattered and there was little direction for getting us to a modern state. Our mobile apps looked great! They were clean, simple, sleek and most of all were component-driven. We needed to bring our web presence up to speed too.

### Goals:

• Update the style of our web app to match our mobile apps
• Adopt a framework that could support our entire web presence
• Apply guidelines around what our components are and usage
• Speed up our design and development processes

### KPIs:

Individual adoption. This one is a little difficult to tie back to a business metric because we didn't have a way to measure things like brand consistency or product production speed. So while there is no defined company KPI this project builds the foundation for starting to measuring things like brand consistency.

### Strategy:

We looked at a few solutions that could support our needs, but ultimately decided to roll our own framework and create our own design system. Given how closely related design is to CSS and how the amount of flexibility we wanted, it just made sense.

</div>

<div class="Article-image Article-image--center">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/ui-before.jpg" />
</div>

<div class="Article-section">

## Where to Start?
A little design and a lot of functionality

Our web team product designer had a nice UI kit to start with, a few screens, a few components, some good color and type decisions, but we had no plans on how to implement or how to scale it to our entire web presence. We have a suite of products and a marketing site to tie together, we needed a design system. I was on the marketing team at the time, but thought this was a problem I could solve so asked to move over and help.

</div>

<div class="Article-image Article-image--center">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/ui-start.jpg" />
</div>

<div class="Article-section">

## Scaling a Design System
Spacing, Color, Typography, Functions and Variables

To accomplish the level of flexibility we were targeting we had to break things down to the smallest atoms. So I created a sliding set of scales for our basic design elements to ensure that no matter what the design project or the components needed we could have consistency through repetition at the core.

</div>

<div class="Article-image Article-image--center">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/ui-scope.jpg" />
</div>

<div class="Article-section">

### A System for Color (the linear color scale)

Starting with color I created a scale that extended our brand colors to lighter and darker variations without affecting the hue. A lot of times designers and developers will use the color picker to get a lighter or darker version but end up adjusting the hue in the process. The brand green for example can take on a more yellow or blueish hue. Now it’s easy to create this in sketch and share with other designers, but the problem is there’s a lot of room for error in the various handoffs from person to person, so I wrote a SASS function to directly reflect the scale being created in sketch to code. So instead of trying to figure out the hex value for the shade of green that’s 10% darker, you could simply call the function scaleColor($colorVariable, x). X as a value could be positive or negative to make the color lighter of darker.

</div>

<div class="Article-image Article-image--center">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/ui-colorscale.jpg" />
</div>

<div class="Article-section">

### A System for Typography (the modular scale)

Then taking that notion of scaling further to typography, a modular scale was adopted so the way we size and space fonts all follow a consistent progression. With a modular scale of 1.125 every aspect of our typography progresses either by continually multiplying or dividing by 1.125; a 1/8 increment. The base of the scale could also be changed to adjust the font size throughout a project too. While a 16px base works well for marketing purposes, product needing to fit more content on the page could shift to a 13 or 14 pixel base and still remain consistent across the board. See more at modularscale.com

</div>

<div class="Article-image Article-image--center">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/ui-typescale.jpg" />
</div>

<div class="Article-section">

### A System for Sizing and Spacing (the 8 point grid)

Continuing with sizing and spacing, we decided on using an 8pt grid. Much of the time a standard increment for design and development is 5, but the difference between 5, 10, 15 and 20 can be pretty minimal at times leaving the creator left to make decisions around which value to use. A slightly more distanced set of values like 8, 16 and 24 however is much easier to see the difference in values and ultimately leads to more consistent decisions. Starting from a base unit of 8px, every step forward is an increment of 8 (16, 24, 32…) and every step backwards halves the base unit (4, 2, 1…), so every defined unit is a either a multiple or factor of 8. These units can be used to define the height of elements like buttons, inputs, and progress bars, as well as spacing of block elements like table cells, feedback, and panels, so as each progresses in size for various uses they do so in symmetry. Learn more about the 8pt grid at here

</div>

<div class="Article-image Article-image--center">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/ui-spacescale.jpg" />
</div>

<div class="Article-section">

## Building Components
Designing, Defining, Documenting and Using

Next we took those basic atoms and started applying them to molecules. We designed and built things like buttons, panels, tabs, tables, form inputs and stepped navigation, then documented them in a pattern library which highlighted the HTML structures and stored the CSS for reuse. Then of course took those further to build components, screens, features and products for our customers to use.

</div>

<div class="Article-image Article-image--center">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/ui-components.jpg" />
</div>

<div class="Article-section">

### Defining Usage

One thing I realized was that it didn’t matter if the components were consistent if the usage was inconsistent. Or if the details of the component were shifting based on who implemented. Our team liked to move fast, design in the browser and discuss flows, rather than be handed huge sets of mocks. This lead to a lot of questions from both development and QA as to things like “which button do I use?”, “what spacing should I use here?”, “which alignment?” and so on. So I started defining all these decisions ahead of time so in the flow of a project I just could simply hand over a link. One side benefit is that these component based decisions could be tested and reused across any number of projects.

</div>

<div class="Article-image Article-image--center">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/ui-component-breakdown.jpg" />
</div>

<div class="Article-section">

## A Framework for Themes

One large benefit of the design scales backed by a function and variable architecture was that it opened the door for creating themes. On the team product I found that by using the same color scale and simply resetting the base color value, it allowed us to pretty widely change the color schemes, but since the underplaying structure for everything was still consistent they themes were too.

</div>

<div class="Article-image Article-image--center">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/ui-themes.jpg" />
</div>

<div class="Article-section">

## Product Branding

Extending this idea out further, it could even be applied to our various products to brand them in different ways for different personas. For example while our team product could lean towards the light brand colors and open up the spacing for a more open and easy going look, our sports org product could swing towards the darker brand colors and tighten up the spacing for a more buttoned up professional look. These shifts in visual design details could be extended down to the things like border radius and component settings too.

</div>

<div class="Article-image Article-image--center">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/ui-productbrand.jpg" />
</div>

<div class="Article-section">

## Adoption

Adoption of these systems was difficult at first and took a bit of persistence. Building for yourself is easy, other designers more difficult, but getting other parts of the company to adopt a single system is a bit more challenging.

### Building a Team

There’s always differing opinions on how things should be done and awareness can be challenging at times; especially in a remote company without a dedicate systems team. Basically it came down to finding individuals who share the vision and finding ways to work with them. Find how we can work together to build on each others ideas and both benefit in our own day to day responsibilities. The more interest you can drive in the system the more you can build up a core set of contributors and advocates to help push things forward and hand over the lead. 

</div>

<div class="Article-image Article-image--center">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/ui-adoption.jpg" />
</div>

<div class="Article-section">

### Analyzing Adoption

As time went on this became easier and was more a matter of inserting it into other company processes like designer, developer and QA on-boarding, as well as the hiring processes. Analyzing where and how our design system could be included became increasingly important over time. It helped answer questions like “where do I need to put my focus to further progress” and “why isn’t it being used in other areas but is in some”. Mapping employee flows could provide insight as to what parts of the process could be helped, but also looking at which teams were using it was a nice way to see how I needed to reach out to and see if the system could benefit them more too.

</div>

<div class="Article-image Article-image--center">
  <img class="u-centerBlock" src="/../../img/teamsnap-ui/ui-adoption2.jpg" />
</div>

<div class="Article-section">

### My Role

• Led initial development moving to the new design
• Designed the system for scaling our basic design elements
• Developed the function and variable architecture for the CSS framework
• Designed and developed multiple components in HTML, CSS, vanilla JS and React
• Detailed usage of multiple design patterns
• Advocated and educated the use of the system as part of our process
• Paired with other designers and developers to find the best ways to implement

### Lessons Learned

This was a long project that extended across my time at TeamSnap at a 10% capacity and I learned a lot along the way getting TeamSnap’s web app to a modern workflow.

### Start Small

I new right from the start where I wanted to take us, but my initial mistake was trying to get us there right off the bat. Trying to implement a framework and update the HTML to support both old and new styles was overly ambitious. In hindsight I wish I would’ve just hacked on what’s there to get us to the new styles ASAP then implement the new framework after the old styles where gone. Trying to do both lead to some decisions that didn’t serve the longer term visions as well.

### Map out Milestones

Similar to starting small and hitting more immediate goals, it’s equally important to start by defining those goals at the very least so they can be communicated out. It’s a lean principle to provide value early and often, and I think that very much applies here too. This allows you to paint the larger picture too while setting expectations of what will be delivered when.

### Be Persistent

It can be a long hard fought road to follow when it’s not your primary job, but look to make time when possible, keep chipping away and just keep adjusting the your process to fit your time and needs.

### Find Advocates and Champion their Contributions

Lastly, implementing a process is hard and ultimately it comes down to finding people that want the same thing as you. Reach out to those that can help and try to set up times to work with them, discuss the vision and see how it can serve you both. Make adjustments as needed. Most importantly, find and pair people with different skills than you. At the very least you can learn a ton in the process.

### Thanks to...

The designers and developers that took lead on parts like the initial UI kit and the current CSS and React component libraries. The ones who collaborated to best fit everything into the various code bases. QA specialists that reached out about questions regarding design patterns and especially the ones that advocated to others. Thanks to everyone who played a part in this project and the contributions not shown above.

</div>
