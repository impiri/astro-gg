---
title: 'Hello world!'
date: 2022-11-04
description: "Taking Astro out for a spin."
image:
    url: '/img/posts/astro-logo.png' 
    alt: 'The Astro logo'
tags: ['development']
layout: '@blog'
---
It's been a while since I've had a reason to build a site from scratch. Now, though, it's late 2022, and I have several reasons!

1. I quit my job a month ago, and it's time to start looking for a new one. Apparently, employers like to see portfolio sites, and my current one is very outdated.
2. Everything I write on the Internet now lives on someone else's service. (Occasionally, that someone else is just awful.) I'd like a place to put my thoughts that is at least easily portable.
3. I quit my job a month ago, and I _need to make something_ before I go nuts.

I decided to put together this personal site using [Astro](https://astro.build), the hot new site generator. It has the feel of making a good old-fashioned PHP site with all of the modern niceties that come along with modern JavaScript tooling and components. So far, it's been a nice experience.

Astro provides a [bunch of sample sites](https://astro.new) along with links to open each one in an in-browser development environment, so there's extremely little friction if you want to go kick the tires. I cloned the [Just the Basics](https://github.com/withastro/astro/tree/latest/examples/basics) project and set it up to deploy on [Netlify](https://netlify.com). From there, it was mostly a matter of adding the [Tailwind](https://tailwindcss.com) integration and pulling in some [Mamba UI](https://www.mambaui.com) components to get things off the ground.

This is my first real experience using Tailwind, and... it's a rough adjustment. I'm used to systems like [Bootstrap](https://getbootstrap.com) and [Bulma](https://bulma.io), so using utility classes for everything feels like thinking backwards. It's fine for a small project like this, but any sort of large project would require real discipline in order to keep everything consistent. Breaking things out into components helps a lot, at least.

This is also my first experience with [Netlify Forms](https://www.netlify.com/products/forms), and it couldn't have been easier. Just throw a `netlify` attribute on your `<form>` element, and it'll capture the form submissions for you. It even pops up a success message and redirects the user back to the previous page by default.

The next step is to create a blog post list page, then a portfolio section on the main page, then a thousand other improvements. I made the [GitHub repository](https://github.com/impiri/astro-gg) public, so feel free to point and laugh at all the commits that are within a few minutes of each other. (Yes, I forgot the `name`s on the form inputs.)
