# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 1

This project demonstrates knowledge of implementing responsive design patterns, accessibility, and the use of a simple service worker to cache the pages and its resources for offline use.  

### Files modified

A simulated restaurant review app is used to accomplish these tasks.  Starter files were provided by Udacity.  I had to modify [styles.css](css/styles.css), [main.js](js/main.js), and [restaurant_info.js](js/restaurant_info.js) to make the page responsive and optimized for accessibility.  I then had to code a simple servie worker in [sw.js](sw.js) to load the pages into a cache for offline use.  

### Installation

1. Download this project to your local machine.

2. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer. 

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

3. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.

4. Check the "offline" box under the Network tab of your dev tools to test the caching.  

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). 



