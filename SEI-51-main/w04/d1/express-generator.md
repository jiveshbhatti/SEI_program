## Using the Express Generator

#### <span style="text-transform:lowercase">express-generator</span>
<br>

- In this lesson, we'll take a look at is a popular tool - `express-generator`.

- `express-generator` creates a "skeleton" Express app that:
	- Separates the HTTP server code from our web app's logic.
	- Has best practice routing implemented.
	- Is configured to serve static assets from a `public` folder.
	- If we specify it, will configure the EJS view engine.
	- Has error handling configured.
	- Has key middleware configured and mounted by default.
 
---
#### <span style="text-transform:lowercase">express-generator</span>
<br>

- Let's install it:

	```sh
	$ npm install -g express-generator
	```

- `express-generator` is a CLI that can be run from anywhere, that's why we install it using the global `-g` flag.

---
#### <span style="text-transform:lowercase">express-generator</span>

Let's take a look at the options available to us

```sh
$ express -h

Usage: express [options] [dir]
	
	
Options:
	
    --version        output the version number
-e, --ejs            add ejs engine support
    --pug            add pug engine support
    --hbs            add handlebars engine support
-H, --hogan          add hogan.js engine support
-v, --view <engine>  add view <engine> support (dust|ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
    --no-view        use static html instead of view engine
-c, --css <engine>   add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
    --git            add .gitignore
-f, --force          force on non-empty directory
-h, --help           output usage information
```    

---
#### Generating Our App's Skeleton with<br><span style="text-transform:lowercase">express-generator</span>
<br>

- We will use the `-e` option to use the __ejs__ template engine instead of __pug__ (the default).

- From your new app's parent directory:

	```sh
	$ express -e express-todos
	$ cd express-todos
	```

- We then install the **node modules** that are listed in the `package.json`:

	```sh
	$ npm i
	```

---
#### Folder Structure

- Our scaffolded folder structure will look like this:

	```sh
	├── app.js
	├── bin
	│   └── www
	├── package.json
	├── public
	│   ├── images
	│   ├── javascripts
	│   └── stylesheets
	│       └── style.css
	├── routes
	│   ├── index.js
	│   └── users.js
	└── views
	    ├── error.js
	    └── index.js
	```

- Let's explore the above structure in our text editor...

---
#### Starting the Application
<br>

- One option to start the server is to type `npm start`. This will execute the start script specified in *package.json*. However, it doesn't restart the app when there's changes...

- `nodemon` is still our best option and we can now just type `nodemon` which will use that same `start` script.

---
#### Starting the Application

- Browsing to `localhost:3000` greets us with:

	<img src="https://i.imgur.com/kHXF4Qg.png">
