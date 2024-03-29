
![](https://i.imgur.com/vUOu9NW.jpg)
<br>
# Express<br>Routers & Models

---

### Learning Objectives
<br>

- Students Will Be Able To:
	- Use the Express Generator to Scaffold a Skeleton App
	- Implement Best Practice Routing
	- Organize App Logic Into Routers, Models, and (tomorrow) Controllers

---
### Roadmap
<br>

- Setup
- Express Generator
- MVC Code Organization
- Best Practice Routing
- To-Do Refactor
- Controllers
- MVC Organization Revisited
- URL/Route Parameters
- Adding Show a To-Do Functionality

---
#### Setup
<br>

### <span style="text-transform:lowercase">express-generator</span>

---
#### <span style="text-transform:lowercase">express-generator</span>
<br>

- Okay, so we've had big fun getting an Express app up and running from scratch.

- We defined some basic routes and rendered a couple of views using the EJS view engine.

- Later today we're going to learn about middleware and see how we can create and update data.

---
#### <span style="text-transform:lowercase">express-generator</span>
<br>

- In this lesson, the first thing we'll take a look at is a popular tool - `express-generator`.

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

---
#### Renaming <span style="text-transform:lowercase">app.js</span>
<br>

- MERN/MEAN Stack apps often have a client-side file named `app.js` and this could get confusing having two `app.js` files. This is why many developers name their main Express file `server.js`.

- So let's rename it...

---
#### Renaming <span style="text-transform:lowercase">app.js</span>
<br>

- First, rename `app.js` to `server.js`.

- Then, inside of `bin/www`, change line 7 from:

	```js
	var app = require('../app');
	```
	
	to:
	
	```js
	var app = require('../server');
	```

- That's it, however, you might need to restart `nodemon`.

---
### MVC Code Organization

---
#### MVC Code Organization
<br>

- Model-View-Controller (MVC) has been a proven approach for successfully organizing code for decades.

- In fact, many web frameworks such as Ruby on Rails, ASP.net, Spring MVC (Java), and others implement the MVC architectural pattern.

- Express on the other hand, just like it states on its landing page, is _unopinionated_.  That means we are free to structure and organize our Express apps anyway we please.

---
#### MVC Code Organization
<br>

- However, since MVC is a proven pattern that works, most Express developers use MVC to organize their Express applications - so we will too :)

- Express generator has already organized the view templates into a `views` folder. 

- Let's make folders to hold our models and controllers:

	```sh
	$ mkdir models controllers
	```

---
### Best Practice Routing

---
#### Best Practice Routing
<br>

- In our `first-express` app, we used the `app.get` method to define routes.

- Although it works, the better practice is to:
	- Use Express `router` objects to organize related routes, for example, routes dedicated to a data resource such as `todos`.
	- Create each `router` in its own module from which it is exported.
	- `require` the exported `router` inside of **server.js**.
	- Mount the `router` object in the request pipeline (`route` objects are also middleware functions).

---
#### Best Practice Routing
<br>

- The `Router` objects can provide more flexible and powerful routing in complex apps.

- `Router` objects are actually mini-Express apps! They can even have their own middleware.

---
#### Best Practice Routing
<br>

- As an example of using this better approach to routing, let's look at how `express-generator` sets up routing...

- First, there's a `routes` folder containing two router modules:
	- **index.js**: Great for defining general purpose routes, e.g., the root route.
	- **users.js**: An example of a router dedicated to a _resource_, in this case, _users_. 

---
#### The Express <em>Router</em> Object
<br>

- Note how routes are defined on those two `router` objects using a `get` method just like we did with `app`:<br>`router.get()` instead of `app.get()`

- Each `router` object has one route defined - compare those two routes, notice the _method_ and the _paths_?  They're the same - isn't that a problem?  Not in this case...

---
#### The Express <em>Router</em> Object
<br>

- The two route modules are required on lines 7 & 8 of `server.js`.

- Lastly, the routers are mounted in the middleware pipeline with the `app.use` method on lines 22 & 23:

	```js
	app.use('/', indexRouter);
	app.use('/users', usersRouter);
	```
	
<hr>
	
- You may also use this one-liner:

```js
// any routes with prefix VIDEO are defined in video.js
app.use('/video', require('./routes/video.js'))
```

- It's **important** to realize that the path in `app.use` is **combined** with the path specified on the router objects...

---
#### The Express <em>Router</em> Object
<br>

- Let's say you have a `router` object that defines a route like this:

	```js
	router.get('/', function(req, res) {...
	```
	
	and mounted like this:
	
	```js
	app.use('/todos', todoRouter);
	```
	**What is the actual path of the route?**

---
#### The Express <em>Router</em> Object
<br>

- Another example, let's say you have a `router` object that defines a route like this:

	```js
	router.get('/today', function(req, res) {...
	```
	
	and mounted like this:
	
	```js
	app.use('/calendar', calendarRouter);
	```
	**What is the actual path of that route?**

---
#### To-Do Refactor
<br>

- We're going to refactor the To-Do code from yesterday to follow best practices...

- We'll put the todos "database" into the `models` folder.

- Then we'll incorporate best-practice routing.

- Then we'll copy over the **index.ejs** view and 

- Finally, tomorrow, we'll learn how to organize code into _controllers_, well, that's what we'll do.

---
#### To-Do Refactor - Todo Model
<br>

- Now let's create and copy over our model.

- Create **models/todo.js**:

	```sh
	$ touch models/todo.js
	```

- Note that modules for _models_ should be named singularly.

---
#### To-Do Refactor - Todo Model
<br>

- Here's the code from yesterday, just slightly refactored:

	```js
	const todos = [
	  {id: "125223", todo: 'Feed Dogs', done: true},
	  {id: "127904", todo: 'Learn Express', done: false},
	  {id: "139608", todo: 'Buy Milk', done: false}
	];
	
	module.exports = {
	  getAll
	};
	
	function getAll() {
	  return todos;
	}
	```

---
#### To-Do Refactor - Routing
<br>

- Since we need a router for our **todos** resource and don't need the **routes/users.js** router module that Express Generator created, we'll modify it instead of having it lay around unused.

- First, rename the **routes/users.js** route module to a name that's more appropriate for our resource - **routes/todos.js**.

---
#### To-Do Refactor - Routing
<br>

- The renaming of **routes/users.js** to **routes/todos.js** requires a couple of changes in **server.js**; both when the router module is being _required_:

	One way to do this is like so:
	```js
	// around line 8
	const todosRouter = require('./routes/todos.js');
	```
	and when it's being _mounted_:
	
	```js
	// around line 23
	app.use('/todos', todosRouter);
	```
	
	<hr>
	
	<strong>Alternatively</strong>, you can combine them into one statement:
	```js
	// any HTTP requests with URL starting with /todos is handled by the file routes/todos.js - eg., /todos/users or /todos/1 or /todos
	app.use('/todos', require('./routes/todos.js');
	```
	
	I find the latter form more clear and concise, but you are welcome to use either way.

---
#### To-Do Refactor - Routing
<br>

- The following is the **index** route code for the to-dos we used yesterday.

- Copy it into **routes/todos.js** below the existing route and then we'll refactor it:

	```js
	// existing route above
	
	app.get('/todos', function(req, res) {
	  res.render('todos-index.ejs', {
	    todos: todoFile.getAll()
	  });
	});
	```

- Now for the refactor...

---
#### To-Do Refactor - Routing
<br>

- We'll delete that existing route in a moment, but first note its **path**...<br>**Why is it only a forward slash?**

- Okay, update our route's path to `/` and delete the existing route.

- Notice how we're calling `todoFile.getAll()` - this will currently cause an error...

---
#### To-Do Refactor - Routing
<br>

- We first need to require the Todo model as follows:

	```js
	const router = express.Router();
	// require the Todo model
	const TodoFile = require('../models/todo.js');
	```

- Note: the more correct convention we will soon adopt is to name model variables singularly and with upper-camel-casing (ie., "Todo" not "TodoFile") but we will be using TodoFile for pedagogical reasons, today only, to more clearly express what we are importing.

---
#### To-Do Refactor - Routing
<br>

- With the model required, **do we need to change on this line of code?**

	```js
	todos: todoFile.getAll()
	```


---
#### To-Do Refactor - Routing
<br>

- There's another change that need to be made<br>**does anybody see it?**

- Hint: What's that `app` object doing there?

---
#### To-Do Refactor - <span style="text-transform:lowercase">index.ejs</span>
<br>

- Create **todos-index.ejs**:

	```sh
	$ touch views/todos-index.ejs
	```

- Add the HTML boilerplate.

- Update the title to: `<title>Express To-Do</title>`

---
#### To-Do Refactor - <span style="text-transform:lowercase">index.ejs</span>
<br>

- Here's the EJS from yesterday to copy/paste:

	```html
	 <body>
	   <h1>Todos</h1>
	   <ul>
	     <% todos.forEach(function(item) { %>
	       <li>
	         <%= item.todo %>
	           - 
	         <%= item.done ? 'done' : 'not done' %>
	       </li>
	     <% }); %>
	   </ul>
	 </body>
	```


---
#### To-Do Refactor
<br>

- With the refactor complete, browsing to `localhost:3000/todos` should render the to-dos just like yesterday!

- Hey, let's add a link on **views/index.ejs** so that we can click it to see the to-dos instead of navigating via the address bar...

---
#### To-Do Refactor
<br>

- In **views/index.ejs**:

	```html
	<!DOCTYPE html>
	<html>
	  <head>
	    <title><%= title %></title>
	    <link rel='stylesheet' href='/stylesheets/style.css' />
	  </head>
	  <body>
	    <h1><%= title %></h1>
	    <a href="/todos">To-Do List</a>
	  </body>
	</html>
	```

- For styling, let's copy that `<link>` over to **todos-index.ejs** and...

---
#### To-Do Refactor
<br>

- In **routes/index.js**, fix the value of the `title` property being passed to the view:

	```js
	res.render('index', { title: 'Express To-Do List' });
	```

- That's better.

- On to **controllers**...

---
### Controllers (Preview)
<br>

---
#### Controllers (Preview)
<br>

- In a web application that follows the MVC architectural pattern, **controllers**:
	- Use Models to perform CRUD (create, retrieve, update & delete) data operations.
	- Implement any additional application logic, often relying on other services and utility modules; and
	- Pass data to Views to be rendered then return the resulting markup to the browser.

---
#### Controllers (Preview)
<br>

- Controllers are functions, but wait, we already wrote functions that perform those responsibilities in our route modules!

- Exactly!  Those functions _are_ controllers, we just need to separate our concerns, i.e., as a best practice, we need to separate the **route definitions** from their respective **controller functions**.

- We will look at this organizational best practice in more detail <strong>tomorrow</strong>


### URL/Route Parameters Review

---
#### URL/Route Parameters
<br>

- In our web apps, we will often need to pass information, such as an identifier for a certain data resource, in the **path** of the HTTP request.

- **URL Parameters**, also known as **Route Parameters**, just like parameters in functions, provide a way for data to be passed in to the router & controller via the URL of the request.

- Let's look at this analogy...

---
#### URL/Route Parameters
<br>

<img src="https://i.imgur.com/X8Cj85b.png">

---
#### URL/Route Parameters
<br>

- In Express, we define route parameters in the path string using a colon, followed by the parameter name.

- Let's say we want to view a details page for a resource.

- Just like how we use an **index** route/action to list all of a resource, we will use a **show** route/action when displaying the details of a single resource.

- Let's add the functionality to view a single To Do...

---
### Adding Show To-Do Functionality
 
---
#### Adding Show a To-Do Functionality
<br>

- When adding functionality to your apps, start by identifying what route makes sense - this is usually based on [RESTful/Resourceful Routing conventions](https://gist.github.com/jim-clark/17908763db7bd3c403e6).

- We'll definitely be reviewing RESTful/Resourceful Routing later, in fact we just might quiz you on it one day - it's that important 😊

---
#### Adding Show a To-Do Functionality
<br>

- According to REST, the "proper" route to display a<br>single To Do would be:

	```sh
	GET /todos/:id
	```

- With the proper route identified, the next step is to create some UI that will send a request that matches that route...

---
#### Adding Show a To-Do Functionality
<br>

- Let's refactor **todos-index.ejs** as follows:

	```html
	    <% todos.forEach(function(t) { %>
	      <li>
	        <a href="/todos/<%= t.id %>"><%= t.todo %></a>
	```
	


- Refresh the page and hover over the links. Looking at the bottom-left of the window will verify the paths look correct!

- **Links always send an HTTP request using what HTTP method?**

---
#### Adding Show a To-Do Functionality
<br>

- The UI is set to send the proper HTTP requests to the server.

- However, clicking one of those links will display a<br>_Not Found 404_ error - this means that there is no route on the server that matches the HTTP request.

- Let's add one...

---
#### Adding Show a To-Do Functionality
<br>

- Add the **show** route below the **index** route as follows:

	```js
	router.get('/:id', function(req, res) {
	  res.render('todos-show.ejs', {
	    todo: TodoFile.getOne(req.params.id)
	  });
	});
	```
	**The actual path is `/todos/:id` - right?**


- Express's `req.params` object will have a property for each **route parameter** defined, for example...

---
#### Adding Show a To-Do Functionality
<br>

- A route defined like this:

	```js
	router.get('/category/:catName/page/:pageNo', ...);
	```
	and a link like this:
	
	```html
	<a href="/category/socks/page/2">Next Page</a>
	```
	would have a `req.params` available in the controller of:
	
	```js
	console.log(req.params.catName) //=> "socks"
	console.log(req.params.pageNo) //=> "2"
	```

- Note that all route param values are strings.

---
#### Adding Show a To-Do Functionality
<br>

- Another refresh informs us that the `show` action in the controller is calling a `TodoFile.getOne` method that doesn't exist.

- Let's fix that error! In **models/todo.js**:

	```js
	module.exports = {
	  getAll,
	  getOne
	};
	
	function getOne(requestedProductID) {
	  // Use a loop to search the todos array to see if we have the productID that our client is requesting
	  for (let item of todos) {
	     if (item.id == requestedProductID) { // product exists in our database!
	        return item
	     }
	  }
	  // okay so we looped through the entire thing and found nothing
	  return null;
	}
	
	function getOneAlternate(requestedProductID) {
	  // Use the Array.prototype.find iterator method
	  return todos.find(item => item.id === parseInt(requestedProductID));
	}
	```

---
#### Adding Show a To-Do Functionality
<br>	

- Refresh and of course there's an error because we haven't created  the **views/todos-show.ejs** that we're trying to render.

- Copy the boilerplate from **views/todos-index.ejs** and then add this:

	```html
	<body>
	  <h1>Todo #<%= todo.id %></h1>
	  <h3><%= todo.todo %></h3>
	  <h3>Complete: <%= todo.done ? 'Yes' : 'No' %></h3>
	</body>
	```

- Refresh - BAM!

---
### Routing Quiz
<br><br>

#### Use the [Routing Guide](https://gist.github.com/jim-clark/17908763db7bd3c403e6) as necessary...

---
#### Routing Quiz
<br>

**Assume a data resource of `cats` when answering the following:**

1. What will the name of the router module be? (include its parent directory)

2. Write the line of code within **server.js** that would require the above router and assign it to a variable named `catsRouter`.

3. Write the line of code within **server.js** that would mount the above router object prefixing the proper path.

---
#### Routing Quiz
<br>

**Using the `router` object within `routes/cats.js` and assuming a cats controller assigned to a variable named `catsCtrl`:**

1. Write the line of code that defines the proper route that would read/display all cats (cats **index** route).

2. Write the line of code that defines the proper route that would read/display a single cat (cats **show** route).

---
#### Routing Quiz
<br>

**Using the `router` object within `routes/cats.js` and assuming a cats controller assigned to a variable named `catsCtrl`:**

1. Write the line of code that defines the proper route that would display a view that includes a form for submitting a new cat (cats **new** route).

2. Write the line of code that defines the proper route that would handle the cat form being submitted and creates a new cat (cats **create** route).

---
### Congrats!<br><br>You Did It!

---
## References
<br>

<p style="text-align:left"><em>Note: When searching for info on the Express framework, be sure that you search for the info for version 4 only - there were significant changes made from earlier versions.</em> Also note that version 5 is currently in alpha although all of the code we've written should be compatible.</p>


