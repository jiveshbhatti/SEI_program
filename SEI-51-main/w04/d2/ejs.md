# Dynamic Templating using EJS

### Roadmap
1. embedding javascript statements in an EJS file <% %>
2. embedding javascript expressions into an EJS file <%= %>
3. passing in variables into an EJS file
4. creating a visitor counter

### Overview

We've looked at how EJS allows us to render a static HTML file.

This is great, but not scaleable.

A websites like amazon has thousands of HTML pages corresponding to millions of products. Are they manually creating a separate file for each of these?
What about spotify, which has thousands of song pages, or album pages. Are they manually creating an HTML file for each of these web pages?

Of course not. They are using dynamic templates.

### 0. Preamble - Javascript statements vs. expressions

#### Question: What is the difference between a javascript statement, and a javascript expression, and what are some examples?

Answer: 
- a javascript statement <strong>does</strong> something (eg., declare a variable, a looping statement which "does" something a few times, an "if" statement which does something based on some condition, a function definition which defines a function)
- a javascript expression <strong>is</strong> something (ie., it evaluates to <strong>a single value</strong>. Examples: the number 5, the value 5+5, the value "hello", a function call like getRandomNumber() if it returns a number

More examples:

|Statements|Expressions|
|----------|-----------|
|let x = 5|anything that evaluates to a number,string,array eg., 5 or 5+5, or `["apple","pear","kiwi"]`|
|console.log("hello")|"hello" is an expression beacause it evaluates to a single value like a string|
|if (status == "active") {x++} is an if statement|status=="active" is an expression because the comparison evaluates to a single value true or false|
|while(x>6){ x-- } is a looping statement||
|x-- a statement because it is doing something - it's decrementing x, so it's a statement||
|any loops or conditionals because they do something many times||
|any function definitions like function add(x,y) {return x+y}|any function calls like add(x,y) or Math.random(500)|


### 1. Embedding javascript statements in an EJS File <% %>

In an EJS File, you can write any amount of javascript statements you would like within `<% %>` brackets.
For example:

```js
<% console.log('hello') %>
```

### 2. Embedding javascript into an EJS file <%= %>

You can also <strong><em>embed</em></strong> javascript expressions within "alligator" braces `<%= %>`

Without embedded javascript:
`<p>My favourite number is: 7 </p>`

With embedded javascript:
`<p>My favourite number is: <%= Math.random() * 10 %> </p>`

### 3. Dynamic Templating Overview
<br>

- As we mentioned yesterday, view engines can be used to dynamically generate HTML on the server before sending it to the client.

- Yesterday we just used the `render` method, passing in a single argument: the view name - eg., `res.render('landing.ejs')`

- We can also pass in a JavaScript **object** as a second argument, and all of its properties will be accessible in the view within `ejs` tags! - 

For example, you can write a route handler like this:

```js
app.get('/home', function(req,res) {
  let someObject = {
     name: 'aidan',
     status: 'coolcoolcool',
  }
  res.render('landing.ejs', someObject)
})
```


And then within landing.ejs that object's properties are accessible directly:
```js
<p>
Name: <%= name %>
Status: <%= status %>
</p>
```



### 4. Creating a visitor counter

You do: 

Try to create a page that displays the number of times this webpage has been created.

We will go over the answers together after a few minutes.
