<img src="https://i.imgur.com/vUOu9NW.jpg">


# Express Lab
# My Dev Skills - Part 2
---

## Intro

In the last lesson you saw how to use HTML forms and Express middleware, such as:

- `express.urlencoded` (AKA body-parser middleware)
- `method-override`

to perform a **Create** data operation in an Express application.

This lab builds upon the `express-dev-skills` project you created in the _My Dev Skills - Part 1_ lab where the **Read** data operation was implemented.


## Exercises

The goal of the lab is to do put in a rep doing everything that you did during the _Express - Middleware_ lesson by adding the following functionality to the `express-dev-skills` project:

1. Display an _Add Skill_ link on the **index** view that when clicked, displays a **new** view that displays a form for entering a new Dev Skill.

2. When a new Dev Skill is submitted, the skill is added to the "database" and redirect the user to the **index** view.

## Hints

As explained in the forms lesson, you will have to do the following:
1. first, your form must send a POST request to her server `<form action="/...some address..." method="POST">` and your input must be inside your form and have a name, eg., `<input name="newskill" ....`
2. second, your server must have a route handler ready to handle this POST request `(router.post('/...someaddress...')`
3. this route handler must access the `req.body` object and access the property matching the name of your input (eg., our input name was `newskill` so we need to access `req.body.newskill` to get access to whatever or user typed in). This data can then be saved inside a variable inside the route handler
4. This should then be pushed into your array, so the user's skill gets saved into your "database"
5. This post route handler should then, as a final step, res.redirect to the skills index page so the user can see their skill show up

## Bonuses

Add styling! Try out boostrap or materialize CSS.

### This lab is a deliverable. Submit it as a separate link from part 1 and part 3.
