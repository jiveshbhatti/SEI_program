# Working with URL Parameters

<img src="https://user-images.githubusercontent.com/24878576/121357308-b5f6d400-c8ff-11eb-8956-f4d5e95d6f34.png" width="500">
<img src="https://user-images.githubusercontent.com/24878576/121357566-e6d70900-c8ff-11eb-83fd-8c252345081e.png" width="500">

## I. Amazon Clone Setup

By the end of this lecture, we will be equipped to build an amazon clone. Let's set this up together.

0. Let's cd into today's folder and create a `student` folder.
1. Let's cd into `student` and then generate a new express project called `amazonClone`
2. Let's define a "database" of products in the form of an array of objects in global scope. We're simulating amazon's database, so each object in the array should have an `id` property, as well as a `name` and a `price` and a `description`.
3. (Review) Let's define an index route handler like we did yesterday, along with a productIndex.ejs file that will list all our products using a loop.
4. (New) Make sure each product links to a page like /products/whateverid. Inspecting the browser should show, for example `<a href="/products/0">Iphone</a>` or `<a href="/products/1">LG Big Screen TV</a>`
5. Leave the links as broken .. we will implement them at the end of this lecture.

## II. Motivation

The question now is: How is it possible that amazon serves up 350 million different product pages, without:
1. writing 350 million different HTML files and 
2. 350 million route handlers?

<summary>The solution to problem 1 (avoiding writing many HTML files), we looked at yesterday:
  <details>
    Dynamic templating with EJS! (ie., a single "product.ejs" template can be injected with a product object containing price, product name, etc instead of having multiple "product1.ejs", "product2.ejs", "product3.ejs", etc...)
  </details>
</summary>

But then, don't we still need to write 350 million different route handlers - app.get('/product/1',..   app.get('/product/2',... etc?

<summary>The solution to problem 2 (avoiding writing 350 million route handlers) is what we'll look at today:
  <details>
    Route parameters! Using route parameters, we can create 1 route handler to handle different URLS, like <a href="https://user-images.githubusercontent.com/24878576/121357308-b5f6d400-c8ff-11eb-8956-f4d5e95d6f34.png">this one</a> or <a href="https://user-images.githubusercontent.com/24878576/121357566-e6d70900-c8ff-11eb-83fd-8c252345081e.png">this one</a>
  </details>
</summary>

Let's see how below...




## III. Overview
  
URL Parameters or Route parameters are a crucial feature of express, and most web app frameworks, and the <a href="https://expressjs.com/en/guide/routing.html#route-parameters">Express documentation on route parameters</a> is very useful reading.

In a nutshell, URL parameters are <strong>named URL segments</strong> that are used to <strong>capture values</strong>.

<br>

## LO 1. Capturing URL values with :placeHolder

In Express, we define these route parameters using <strong>a colon</strong>, followed by the parameter name (placeholder).

For example:

```js
app.get('/students/:studentId', function(req, res) {
```

This allows your route handler to match URLs like:

![image](https://user-images.githubusercontent.com/24878576/121351906-4205fd00-c8fa-11eb-8852-addbb4a2744a.png)
![image](https://user-images.githubusercontent.com/24878576/121351957-521ddc80-c8fa-11eb-9b67-6aadc98e4ae5.png)
![image](https://user-images.githubusercontent.com/24878576/121351991-5f3acb80-c8fa-11eb-972d-e8ec77e3a382.png)

And then your route handler can access the captured values using a special object called `req.params`.

<br>

## LO 2. Accessing captured values with req.params

The captured values are populated in the `req.params` object - accessible inside every route handler.

The `req.params` object will have a key for each route parameter. So in the routehandler above, to access the incoming student values, we could do something like this

```js
app.get('/students/:studentId', function(req, res) {
   let incomingStudentId = req.params.studentId  // <--- req.params.studentId contains the captured value
   console.log(incomingStudentId)                // <-- console.log the number 0 or 1 or 30 or whatever was captured
   ...
```

And in our terminal, we would see the captured value that was sent from the user's browser. We can then use this studentID to look up student 

<strong>Note:</strong> our callback function - `function(req,res) {..` will run whenever someone sends a matching GET request - eg., `localhost:3000/students/1230909` or `localhost:3000/students/9999`


### Simple Example 1

1. Define a route handler like this:

```js
app.get('/users/:userId/books/:bookId', function (req, res) {
  console.log('req.params:',req.params)
  console.log('userId',req.params.userId)
  console.log('bookId',req.params.bookId)
  res.send('hello world')
})
```

2. Have your browser/client visit this URL ---  http://localhost:3000/users/34/books/8989

3. In your webserver terminal, you should see that we have a `req.params` object being logged, which captures the userId and bookId values that the user is requesting. In this case:

```js
req.params: { "userId": "34", "bookId": "8989" }
```

So req.params is a very important object. It lets us determine which route our user is trying to access. In the case of amazon, this may mean the product Id being requested. In the case of spotify, this may be the artistId or albumId being requested.

We can see in the terminal that:
    - the `:userId` param in the URL has been given a value of `34`
    - the `:bookId` param in the URL has been given a value of `8989`

4. So since our webserver can now figure out what userId and bookId our user is requesting (thanks to the req.params object), we can then search our database for the appropriate bookId and userId and send back a detail page to the user.


### Example 2- Using our amazon product "Database" to implement "show" functionality

Using what we just learned, let us now write some code to make our index page links show some sort of "product details" page.

1. Let's add a route handler to handle the route `/products/0` and `/products/1` and.. `/products/anyIdWhatsoever` by putting in a URL parameter called `:productID` to capture the incoming productID. So your route handler look something like app.get('/products/:productID', func... )
2. Once captured, the req.params object will contain a property "productId" with value based on whatever the user typed into the URL bar. For convenience, inside your route handler, save the incoming productID into a variable. (in the route handler) So now your route handler should look something like:
```js
app.get('/products/:productID', function(req,res) {
   const requestedProduct = req.params.productID
   res.render('productDetails.ejs')
}
```

To verify, console.log the req.params object contains the productID property. What is its value? Why?
Add a second console.log to verify that req.params.productID can be accessed directly.

3. Still in the route handler, let's write some code to step through our array to see if we can find a matching product matching what the user is requesting.
4. If we find a matching ID, respond to the user with a product details template (with this particular product's details injected into it). This is called <strong>show</strong> or <strong>detail</strong> functionality. 
5. If we can't find a product matching the user's request, send the user a 404 page.
6. (you do) Style your "index" and "show" pages correctly!
7. (you do) Create an "index" page with a llist of all the products - and have each product link to individual product pages.

Voila. We now have a basic amazon clone.
