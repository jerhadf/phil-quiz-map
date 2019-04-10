# phil-quiz-map

The Quora answer that started it all: https://www.quora.com/Where-do-you-place-yourself-on-this-map-of-philosophical-positions/answer/Jeremy-Hadfield

## Overview

I'll send you more details of what I'm planning on, but for now I'm just thinking of it as two major components:
1. **A data-based quiz on philosophical positions** to find someone's "philosophical personality" or beliefs, and then outputs their results, and shows them their similarity to major philosophers (e.g. the same way a political position quiz might output "Your political beliefs are closest to Ghandi" our quiz will output something like "Your philosophy is the most similar to Plato/Nietzsche/Aristotle/Lao Tzu/etc", and then give recommendations and resources for the person to further explore their philosophical beliefs. E.g. a reading list or helpful links.

2. **An interactive map of philosophical ideas**, where you can click on an individual component (which represents an idea) to expand it and learn more about it. The location of the ideas and the specific structure of the map will be based on data from the PhilPapers survey and other data we can find about the proximity of philosophical ideas.

## Team

### Jeremy Hadfield

https://www.linkedin.com/in/jeremy-hadfield-d

I'm just a freshman, I've taken CS1 & CS10, I've been working at a QA / automated testing job in Utah for about 8 months, and I just got back to campus for spring term. I'm fumbling around and trying to learn as far as web dev and CS in general go.

### Alexander Bailey

https://www.linkedin.com/in/alexander-bailey-057158105/

I like computers.

## Tools / Technical Stack and Planning

I'm also not sure what the tech stack should be. Maybe the JAMstack (javascript, APIs, markup) would work? So far I've only ever built single-page serverless websites in Vue.js with Netlify, and I like it a lot so I'm kinda inclined to use that, but I'm not sure if it's the best solution. I need to do more research into that and maybe you'd have some insights. I like the way 16personalities.com is designed and the way their quizzes work (although I'm not sure about the science behind it), and it's possible we could take some inspiration from their tech stack, whatever it is. After all we're essentially making a personality test for philosophers here (both professionals and amateurs like me).

So first off, your second component, an interactive map, makes me really excited because I was recently playing around with the perfect tool for it. Most of my side projects are at least somehow related to virtual reality, which I’m really excited about and have been trying to develop for, and I stumbled across a library called react-360. React-360 is a very easy and powerful way to render 3D stuff on a webpage, and I’m currently imagining a 3D interactive map. I’m also imagining an algorithm that could place each node in 3D space according to the weight of statistical correlation. Just like that picture on quora which so neatly grouped together correlated beliefs, I think an algorithm to automatically do that in 3D for any given dataset is fun extra credit. Let me know what you think about making the map 3D, and google some react-360 examples if you want to kickstart the imagination.

Now for which stack to use. I want to preface this by saying that this is entirely your project and I’m just letting you know that I can offer free work and consult, so of course all decisions and preference of webstack are entirely up to you. I took CS53 (webdev, I think 53 is the right number. Also that class is awesome, try to get it every term they offer it, the waitlist gets crazy), and we used vue.js on an in-class assignment thing. I’ve never heard of Netlify. So I have basically no experience with either, but all this shit is basically the same, so if you want to use that then I can definitely still be helpful. My recommendation is to use React, which can give you a server-less dynamic webpage. It uses a virtual DOM to do everything in the user’s browser, which is really cool and makes it as powerful as we need it to be. Also if you like the react-360 idea for the interactive map, then that makes integration really easy. Anyways, that’s my plug for react, keep in mind that part of the reason I prefer it may be related to the fact that we spent like half of CS53 using it and I’ve been using it since, and also that there’s a small learning curve but that could be a positive as well (could be a good learning experience if you haven’t used it before).

React 360
React 360 is incredible! I looked at a few examples and videos, but I didn't have time to set it up on my local machine to try it out. An ideal, immersive way to create a map of philosophy. My only concern would be that creating a 3D map might be a lot more work and expertise-intensive than a 2D map. But I'm not at all the expert here and don't really know what I'm talking about when it comes to VR or 3D technologies — if you're good with React 360 and think it would be the most useful tool for the map part of the project, let's do it.
Also, here is an incredible example of an interactive map of the relationships between philosophers (they did network analysis on Wikipedia pages to figure out the sizes of nodes/distance between them). This is another source of inspiration for me, as we can use this same concept to create a map of philosophical positions. It is very slow and painful to use though, even on Chrome with my fast-ish computer. That's another potential problem with React 360 - I don't know how well it runs on legacy browsers and machines.

React vs Vue
I'm somewhat comfortable using React too, I just don't like it as much as Vue. 😉 Vue was inspired by React but it fixed some design issues that make React so unwieldy. (See this short video by the Vue creators). But then again the React 360 - React integration makes much more sense, React has a massive community, and it also has React Native, which makes it much easier to port the website to mobile if we ever decide to make an iOS/Android app. And also I do want to prep for CS53 which I think I'll inevitably take, and React will be super useful for that.

I did some playing around a couple days ago with embedding react-360 into a 2D webpage. It looks like you have to launch it as its own application and then have it linked in via an iframe html component. Not sure what that means for deploying the site, but we can cross that bridge when we get to it. The more general point about this is that the webpage can be whatever the hell we want it to be, and react-360 (if we choose to use it) will be separate from the main application. So vue is just fine.
Also it looks like you can even mix vue components and react components. So I vote that we just write a bunch of code in whatever form we want and paste it all in to a jumbled mess that works, and then worry about cleanliness and organization later. This may not often be a good approach, but with working together remotely and this being a side project, I vote we do this helter smelter-like. Plus everyone at work has been getting super anal about micromanaging stuff lately (we’re switching to the agile model of software development), and I would love a healthy dose of chaos if you don’t mind. Let me know what you think.

One more note about a 3D map. Obviously this isn’t actually necessary for the map we want to create, I’m just nerding out a little and have really wanted to create something like this for a while. We could do both a 2D and a 3D map (Especially since react-360 is a separate component that you basically just link in, I’ll have that as a separate folder in the code, and you can pretend it doesn’t exist for now if you prefer). It might even be more useful for users to be able to see it 2D, and then if they want to dive deeper then perhaps they have a 3D option.

Last order of business would be throwing something on github so that we can start the damn thing, and make sure our work isn’t overlapping. If you like then I can toss the react-redux webpack that I still have (I think) from CS53, along with a folder for including react-360. If you prefer a certain file structure or want to start off with something more vue-friendly right off the back, then I invite you to create something on github and then I can add the react-360 part after.

## Why?

I think this will be way impactful in promoting a basic level of philosophy education everyone can benefit from. People are into Buzzfeed quizzes and this'll be like that, but much better. And personally I just would love for this to exist, and it doesn't. So I want to make it exist.

## Installation

* `git clone https://github.com/vintners/phil-quiz-map.git`
* `cd phil-quiz-map`
* `npm install`
* `npm start`
* `cd vr`
* `npm install`
* `npm start`
* visit http://localhost:3000/

If the react-360 part isn't working then you can try deleting the node_modules directory, installing the react-360-cli, and trying again. If it still doesn't work after that, let me know.
* `cd vr`
* `rm -r nod_modules`
* `npm install -g react-360-cli`
* `npm install`
* `npm start`
