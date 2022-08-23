<img src="https://i.imgur.com/uW0X1sl.jpg">

# Walk-thru on Updating State in React
---

# State in React Pt. 1/2: Initializing, Accessing, Updating State

## Learning Objectives

| Students Will Be Able To: |
|---|
| Initialize a class component's state |
| Access a component's state |
| Change a component's state |

## Road Map

1. Starter Code / Setup
2. What is State?
3. Initializing State
4. Accessing State
6. Updating State (Trigger)


## Setup

To get set up for this lesson, please:

- Create a React Sandbox in [CodeSandbox](https://codesandbox.io/) and name it "Updating State".

- Since we will be working with state, we will want `<App>` to be a class component.  Please replace the current function component with this starting code:

	```js
	class App extends React.Component {
	  render() {
	    return <div>Hello!</div>;
	  }
	}
	```

## What is State?

#### State In General

Simply put, **state** is important data or information an application needs.

Examples of state includes:

- An object representing the currently logged-in <strong>user</strong>
- In a hangman game, state would contain the secret word, and maybe even the progress of the secret word. 
- A boolean representing whether a menu should be visible or hidden
- A number representing the currently selected category in a food ordering app.

I really like <a href="https://daveceddia.com/visual-guide-to-state-in-react/#what-react-state-looks-like">Dave Ceddia's explanation of state</a>.

I also really like the <a href="https://reactjs.org/docs/thinking-in-react.html#step-3-identify-the-minimal-but-complete-representation-of-ui-state">thinking in react guide's 3 questions</a> about whether a piece of data is part of the application `state` or not.

#### State in React

State in a React app is held in a class component's `state` property.

Since data/information can only be passed **down** the component hierarchy, not up, it's a good idea to keep state as high up in the hierarchy as possible, at least initially. Usually, the top of the hierarchy is the `<App>` component so this is where we put the state variable.

For this lesson, we will pretend only class components have state (we'll focus on "hooks" in a future lesson, which let you add state to a functional component. That said, you are welcome to look ahead.)

#### Why do I need to care about this 'state' thing?

For one thing, whenever our app's state changes, react re-renders the component and its children. This updates the screen visually. This is one of the **killer features** of react. Remember assessment 1? When someone clicked a button, you had to:
- add an event listener to the button and when it was clicked, you had to:
- write code to go get the current increment value from the DOM (eg., +2 vs +3)
- do some calculations
- update state variables
- write code to manually visually update the "total" DOM element `myElement.innerHTML = new_value`. 

With react, you don't need to reach out into the DOM and grab values or update values. All you have to do is <strong>trigger</strong> a state update, and react will do the dom stuff for you AUTOMATICALLY to make the right value to show up.


## High-level Checklist for implementing State in a react app

1. **Initializing state** - for each piece of state (eg., "has the user paid yet?"), you have to give your app an initial value when it first loads (eg., false). Example:

```js
class App extends React.Component {
  // Initialize the state property using a class field
  state = {
    emotion: 'Happy'
  };
```

2. **Accessing (or Displaying) your state** - Components can access or display the current state by simply rendering it in JSX (or passing it down as a prop). Example:

```js
    return (
        <h1>Current Emotion: {this.state.emotion}</h1>
```


3. **Updating state (with "setState" + a trigger)** - this is the fun part! Your components will often need a way to trigger a state update too. For example, clicking a button can call a function to update state. Eg., the Logout button can trigger a state update, and set the "username" and "user email" state to be blank. Clicking "add to cart" should make an item show up in the cart. This is where it all pays off!


```js
  updateEmotion(incoming_emotion) {
    this.setState({emotion: incoming_emotion});
  }

  render() {
    return (
      <>
        <h1>Current Emotion: {this.state.emotion}</h1>
        <button onClick={() => this.updateEmotion("Excited")}>Excited</button>
```

# Updating State using `setState` + a trigger

#### Add Some State, Etc. to the Sandbox

Let's add some basic state to the sandbox using _property initializer_ syntax (which eliminates the need for creating a `constructor` method, an older way of initializing state):

```js
class App extends React.Component {
  // Initialize the state property using a class field
  state = {
    emotion: 'Happy'
  };
  
  render() {
``` 

Now let's render the state and some buttons (informally, I call these buttons triggers) because we can use it to change the emotion state:

```js
  render() {
    return (
      <>
        <h1>Current Emotion: {this.state.emotion}</h1>
        <button onClick={() => this.updateEmotion("Excited")}>Excited</button>
        <button onClick={() => this.updateEmotion("Surprised")}>
          Surprised
        </button>
        <button onClick={() => this.updateEmotion("Happy")}>Happy</button>
      </>
    );
  }
```

Finally, let's add the `updateEmotion` method above `render`:

```js
  updateEmotion = (incoming_emotion) => {
    this.setState({emotion: incoming_emotion});
  }
```

The sandbox's browser should display something like this:

<img src="https://i.imgur.com/6kgAgZS.png">

Clicking the buttons should update the state and the display.

#### How `setState` Works

<img src="https://www.freecodecamp.org/news/content/images/2019/10/o60oxupyz8cfce0cknvz.png">

The following is a great reference on how the `setState` method can be used to update state:

- Don't modify state directly:

	```js
	// Don't do this, always call setState instead
	this.state.emotion = 'Happy';
	```

- `setState` has two primary signatures:

	Passing an `object` as the argument...
	
	```js
	this.setState({emotion: 'Excited'});
	```
	
	Passing a `function` as the argument...
	
	```js
	this.setState(function(state) {
	  return {emotion: 'Excited'};
	});
	```
	The function passed as an argument needs to return an object that is merged with state.<br><br>Use the above approach when you need to rely on the current value of state or props to determine the new state:
	
	```js
	this.setState(state => ({count: state.count + 5}));
	```

- `setState` merges the new object into the component's current state object:

	```js
	// Assuming this.state is currently {emotion: 'Happy'}
	this.setState({notes: ['Woke up feeling great']});
	// Now this.state is {emotion: 'Happy', notes: ['Woke up feeling great']}
	```

- `setState` is asynchronous:

	```js
	this.setState({emotion: 'Surprised'});
	console.log(this.state.emotion) //-> Won't be 'Surprised'
	```
	
	Both signatures (passing an object or a function) accept an optional callback function as a second argument which is invoked after state has been updated.
	
	```js
	this.setState({emotion: 'Surprised'}, () => {
	  console.log(this.state.emotion) //-> Will be 'Surprised'
	});
	```

**Any questions? The lab will help you consolidate this information!**

## Optional Exercise: You do: Click Counter ##

This is an exercise that is a preview of your lab. Make a click counter that goes up when you click the button. It should look something like this:

<img src="https://media.git.generalassemb.ly/user/29550/files/67015200-3bb2-11ec-82fc-91a9c8719e2f">




# Further Study: This Afternoon

## Updating Object/Array Properties in `state`

## You may fork this codesandbox if yours isn't quite working:

https://codesandbox.io/s/cocky-cerf-lklui?file=/src/App.js

#### Set Up an Array on `state`

Let's update `state`'s initialization to include a `history` array:

```js
state = {
  emotion: 'Happy',
  history: ['Happy']
};
```

Now for some additional code to render the contents of the `history`:

```js
render() {
  return (
    <>
      ...
      
      <button onClick={() => this.updateEmotion("Happy")}>Happy</button>
      {/* New JSX below */}
      <h1>Emotional History:</h1>
      <ul>
        {this.state.history.map(emotion => <li>{emotion}</li>)}
      </ul>
    </>
  );
}
```

#### 💪 Exercise - Add New Emotions to `history` (5 min)

Without peeking below, write the code to refactor the `updateEmotion` method to add the clicked emotion to the `history` array.

#### Thou Shall Not Mutate State

When we click one of the "emotion" buttons, we are **replacing** a piece of state, `state.emotion`, with a new string.

However, when the state property is a reference type, such as an Object or an Array, we should not mutate (change) that Object/Array:

```js
updateEmotion(emotion) {
  // The following "works", but is not a good practice
  this.state.history.push(emotion);
  this.setState({emotion});
}
```

The above will work in non-optimized components, however, we are mutating the array, which is a no, no...

#### Always Replace Top-Level Objects & Arrays With New Ones

The rule is, if something inside of an Object/Array that's assigned to a **top-level** state property changes, that Object/Array must be replaced with a **new** Object/Array.

Here's the latest and greatest way to create a new array by using the `...` [spread operator within an array literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_array_literals):

```js
updateEmotion(emotion) {
  // implicitly returning an object from the arrow function
  this.setState(state => ({
    emotion,
    // assigning a new array
    history: [...state.history, emotion]
  }));
}
```

> As we saw in the styling lesson, the spread operator works with object literals as well:
`const objCopy = {...existingObj};`

Notice that because we needed to access the current `history` array, we converted to the function signature of `setState`. 

### Why Not Mutate State?

There are two reasons to replace an object/array in state instead of mutating it:

1. It provides for improved performance.
2. It makes it possible to implement features such as undo and time travel.

#### 1. Performance 

It's possible to optimize React to prevent unnecessary re-renders.

Currently, when we inherit from `Component`, React re-renders that component (and its children) every time `setState` is invoked.  We can provide improved performance by ensuring that we don't mutate **top-level** state properties and replace them with new objects/arrays instead.

Although we saw the app work when we mutated `this.state.history`, it did so because `Component` does not have any optimizations built in, allowing us to mutate the existing array instead of replacing it.

However, React comes with an optimized `PureComponent` that we can extend that performs reference checks on all of the top-level state properties and won't re-render unless at least one of them has changed.  Let's check out `PureComponent`...

First, let's update `App` to inherit from `PureComponent`:

```js
class App extends React.PureComponent {
```

Click on a new emotion button to verify that it still works.

Now let's revert back to mutating `state.history`:

```js
updateEmotion(emotion) {
  this.state.history.push(emotion);
  this.setState({emotion});
}
```

Now, the component is optimized to trigger a re-render only if some top-level state has changed.  Thus, clicking a different emotion works okay, however, try clicking the same emotion several times, then click a different emotion - yikes!

#### 2. Features

Replacing object/arrays **at all levels** in state instead of mutating them enables the implementation of features such as undo and "time travel", where the app can return to a previous "state".

"Time travel" can easily be implemented by persisting the history of `the.state` upon each update.

Not mutating state also helps prevent subtle bugs from appearing in complex apps.

> Perhaps you've heard of an alternative approach to state management - [Redux](https://redux.js.org/). Unlike with React, you can't cheat with Redux as it demands that all state not be mutated. In fact, there's even a library that helps you implement immutable state called [Immutable.js](https://github.com/immutable-js/immutable-js).

