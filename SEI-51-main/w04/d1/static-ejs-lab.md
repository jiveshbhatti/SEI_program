# Static Express Server Lab

<img src="https://i.pinimg.com/originals/d4/52/3a/d4523a58d9b9ecfd2befb8175f99b131.gif">

Congratulations! After today's lesson, you are now a fullstack developer. You know how to create a very basic server, and to serve up static content.
This lab will give you some practice creating route handlers, and delivering static ejs files.

## Setup

0. `cd` into your `w04/d1` folder
1. Use the express generator to create a new nodeJS server and directory structure: `express -e static-ejs-lab`
2. `cd` into this new folder. (Once inside, type `ls` and `pwd` to verify that you are inside the folder and you can see `package.json` and `app.js` and a few folders)
3. Do `npm install` to install the packages listed in `package.json`. 
4. Type `ls` to verify that a node_modules/ folder has appeared which contains the installed packages.
5. Type `code .` to open up this `static-ejs-lab` folder in VSCode
6. Inside VSCode, open up the VSCode terminal (View->Terminal or Ctrl+backtick)
7. Type `nodemon` to run your server.
8. On your browser, pretend to be a customer and visit localhost:3000 to verify that your server is generating an HTML file out of the `index.ejs` view:

<img src="https://camo.githubusercontent.com/85a35a4945a2d9d57e87391d221ccd137ed4bdb80619a4b8fa4a491e9b01e5f9/68747470733a2f2f692e696d6775722e636f6d2f6b4858463451672e706e67" width="300">

# Part 1: Delivering static webpages (ie., the long way!)

<img src="https://user-images.githubusercontent.com/24878576/121018635-a6935180-c76c-11eb-9c95-754a4f7e0b40.png" width="400">
<img src="https://user-images.githubusercontent.com/24878576/134058615-83a17e83-8b6d-4a13-bd4b-677b77577684.png" width="400">


## Objective

The goal of part1 is to create 6 route handlers and 6 .ejs files to deliver to your customer. In particular, you will:
- create a landing page, which has links to 5 product pages (you can choose the products/theme. A fun challenge might be to try to replicate the style of an amazon product page)
- start to understand the use case for dynamic webpage templates

## Example / Live demo

<a href="https://radiant-castle-19641.herokuapp.com/home">Click here to see a Demo</a> of a previous student's weather-themed landing page featuring "index" functionality + detail pages.

## Tasks

1. Create a route handler that handles the address `/home`. Your route handler should <strong>render</strong> the file `landing.ejs` which should be placed in your `views/` folder. `landing.ejs` should have some HTML code to representing a landing page for an e-commerce site. It should also have links to 5 product pages.
2. Test your code by visting localhost:3000/home in your web browser.
3. If you need hints for task 1:
    - click <a href="https://user-images.githubusercontent.com/24878576/121012497-c5421a00-c765-11eb-9f46-f41f5ae8351f.png">here</a> to see where in app.js to add your route handler. 
    - click <a href="https://user-images.githubusercontent.com/24878576/121019321-4f41b100-c76d-11eb-8123-856a03d72d21.png">here</a> to see what a route handler looks like. 
    - click <a href="https://user-images.githubusercontent.com/24878576/121018421-6a5ff100-c76c-11eb-9fbe-6d44bf15676c.png">here</a> to see what landing.ejs might look like.)
5. Create 5 route handlers that handle 5 addresses of your choosing (eg., `/product1`, `/product2`,...), and make each route handler deliver a separate `.ejs` file representing one of the products that your website is selling.
6. Make sure that the landing page links to the 5 product pages so that your user can click between pages.
7. (optional) If you want to add CSS, you can find a stylesheet in the public/ folder, and you can import it in by adding `<link rel='stylesheet' href='/stylesheets/style.css' />` into your .ejs file
8. Answer this question as a comment in `app.js` - Are there any downsides to creating 5 separate product pages in this way? Is this scaleable?

You can be as creative (or uncreative) as you wish in designing your landing page, and 5 product pages.


# Part 2: Dynamic templates (optional) (bonus)

If you're very astute, in most real e-commerce websites, such as Amazon, you will observe that all of the product pages look almost exactly the same, except for the product name, and the image, and a few other things.

Are they creating separate webpages for each product? Are amazon developers creating different HTML files for every single one of their 353 million products?

Wouldn't it be nice, if we had a way to just create a single product page <strong>template</strong> rather than have 5 nearly-identical-looking product pages?

Try to make it happen! If you can't figure out the trick, not to worry - Dynamic templates with EJS is our topic tomorrow.

# Deliverable

This is a deliverable. To submit, please:

1. Push this to your fork of the class repo.
2. On your web browser, use the web interface to navigate to the location of the code you just pushed
3. Copy and paste this into your deliverables file.

