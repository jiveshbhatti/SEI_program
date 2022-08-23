
# URL PARAMS LAB: Spotify Clone

<img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Spotify_logo_with_color_system.gif" width="300">

## Task 1: Generate a webserver using the express generator
- Make sure you have `express-generator` installed (`npm i -g express-generator`)
- Hints: 
- Run the express generator command with the -e option to include EJS: `express -e url_params_lab`, and then 
- `cd` into the url_params_lab folder and then 
- run `npm install` to install all of the modules that are listed in `package.json` (a node_modules folder should show up with the source code of these now-installed modules)

## Task 2: Add a route handler and render a view
- ### 2A:
  - Add a "localhost:3000/albums" route handler that sends a simple "welcome to the albums page" message to the user to test your route handler
- ### 2B:
  - Update the previous route to instead send a nice HTML file to your user with some text.
  
## Task 3: "Index" functionality - User can view <em>all</em> albums in the "Database"
- Create & render a database of albums that your user can view in nicely formatted HTML at your "/albums" route
- Your database should be in the form of **an array of objects**. For now, you may declare your fake database in the same file as your route handler as we will move it to models/ in a later step. Your database may look something like this:
    ```javascript
    let albumsArray = [
      {id: "a0", name: "Thriller", artist: "Michael Jackson"},
      {id: "001", name: "Baby One More Time", artist: "Britney Spears"},
      {id: "002", name: "Ladies' Night", artist: "Kool & the Gang"}
    ]
    ```
 - Example: 
 
 > ![example 1](https://i.imgur.com/9fp1fZN.png)
 
 ## Task 4: "Show" functionality - User can view a single album
 - Create a route handler that accepts an id as a route parameter. Your route handler will respond with the name and artist for that album.
  - If your user goes to `localhost:3000/albums/a0`, they should be able to view the corresponding album. Example:
  
 > ![example 2](https://imgur.com/7MbhypW.png)
 
 - Now try using `res.render` to generate a nice HTML file out of an EJS template. Your user should be able to view the name and artist for that album. Visiting localhost:3000/albums/a0 or localhost:3000/albums/001 or localhost:3000/albums/002 should display the album as long as it's a valid id in your database!
 
 ## Task 5: Linking from "Index" Page to "Show" Page
 - When your user goes to `/albums`, they see the list of albums (Index view)
 - When your user goes to `/albums/a0`, they see one single album (Details/Show view)
 - Wouldn't it be nice if the user could just click a link to get from the index to the details?
 - Refactor your `albums.ejs` code so that each album has a `<a href=...>` hyperlink that directs them to the appropriate details page
  - This should be a .ejs file only change! Your route handler is already doing a great job.

## Task 6: Move database to the `models/` directory:
 - Once you've got things working, organize your code to be more professional and scalable. Move your database and database-related functions to a file called `albumModel.js` in the `models/` directory. 
 - Make sure you give some attention to your imports! You'll have to import this new model file into the file that contains your route handlers, so that everything continues to work.

## Task 7: Styling (optional) (bonus):
- Add some styling to make it look like the real spotify page (maybe throw a disclaimer on there saying this is for educational purposes only!)
- There are lots of sources online that you can use to simulate the spotify-like look and feel (for example, <a href="https://github.com/IvanDF/html-css-spotifyweb">this</a> git repo has a reasonably similar html/css)

## Task 8: Tracks (optional)(bonus):
- Update each album in your albums database to contain another property called `tracks: []`. Tracks will be an array of objects as well, and each track should be in the form of `{id: "t0", name: "Wanna be Startin' Somethin'"}`
- Implement similar functionality of `/albums`:
  - When the user goes to '/albums/a0', they should see the album details (Details view), and a list of tracks (Index view)
  - When the user goes to 'albums/a0/t0, they should see the track details 
  - Each track in the album details view should be a hyperlink to a track details view
> Hints: Route parameters are very flexible. When we write `/home/:id`, the `id` is simply a variable that we can pull out later using `req.params.id`. That variable could be called `banana`, and we could still pull it out using `req.params.banana`. Express will also keep track of mulitple parameters for us, which we can build up dynamically. How many different paramaters can we pull out of a url matching this route, and how could we do it? `localhost:3000/home/users/:userId/appt/:apptId/payment/:paymentId`

## Task 9: Adding forms (optional)(bonus):
- Add a form to your site such that the user can submit albums
- Add a form to your site such that the user can submit tracks FOR an album
> Hints: 
> - You'll need to code out new routes for each of these operations. Remember that a `GET` request is for receiving data from the server. What verb would we need if we wanted to send some data to our server?
> - What route parameters are we going to need in our URL if we need to create tracks for a specific album?
