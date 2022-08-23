<img src="https://i.imgur.com/vUOu9NW.jpg">


# Express Lab
# My Dev Skills - Part 1
---

## Intro

You've now seen how we can generate a skeleton Express application and implement the **index** & **show** functionality for a **resource** (To Dos).

Now it's time to practice by doing the very same thing, but for a different data resource - _developer skills_.

##### This lab is a Deliverable

## Exercises

The goal of the lab is to put in a rep doing everything that you did during the _Express - Routers & Controllers_ lesson:

- Scaffold a new app named `express-dev-skills` using express generator.

- Be sure to create an array of "fake" data representing some of your awesome developer skills. The specific properties describing a skill object is up to you! 

- Implement **index** functionality for the `skills` resource (ie., list of all skills)

- Implement **show** functionality for the `skills` resource (ie., the ability to click on a skill from the list to get its details)

- You MUST use <a href="express-routers-controllers/express-routers-controllers.md#best-practice-routing">best practices routing</a> - ie., a routes/ folder and the express router module to organize your route handlers. Do NOT put your route handler in app.js or server.js.

## Examples

An "index" page from a previous student, Cindy:

- <a href="https://user-images.githubusercontent.com/24878576/121421380-1a378900-c93c-11eb-9d7e-f8913f5347cb.png">Cindy's Pt.3</a> (this one was <a href="https://user-images.githubusercontent.com/24878576/121421786-874b1e80-c93c-11eb-9b4c-8170bf2af134.png">responsive</a> which is totally not required!). Here we see Cindy's <strong>index</strong> page and clicking on the "details" link would show her details page.

<strong>Note:</strong>
- Keep in mind we just need "index" and "show"/"details" functionality for this lab (dev skills pt.1)
- "Add skill" is pt. 2 (tomorrow).
- Delete/Edit is pt. 3 (day after)

## Hints

- Keep the data resource name short and simple - something like `skills`.

- Following best-practice routing and MVC will result in the following modules for the `skills` resource:
	- **routes/skills.js**
	- **models/skill.js**
	- **views/skills**
	- **skills.js**

- Use [RESTful routes](https://gist.github.com/jim-clark/17908763db7bd3c403e6)


## Bonuses

- Use EJS partial views to make your templates more DRY (see link in Reference section of the lesson) and/or [this link](https://www.npmjs.com/package/ejs#includes).

- Add styling or use a CSS framework to make the app look better :)

### This lab is a deliverable.


