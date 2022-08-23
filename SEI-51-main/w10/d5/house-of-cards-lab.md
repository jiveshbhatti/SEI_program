# House of Cards Lab

# Theme

As always, feel free to change the theme/images to whatever you like.

# Setup


1. Run the starter code in the `house-of-cards-lab` folder, and you should be greeted with something like this. Hovering over a room reveals a button:


<img src="https://user-images.githubusercontent.com/24878576/126792643-c0dace40-2ecf-4098-8b68-d46151be1ddc.png">



# Task

1. When we click on one of the rooms, we want the SecretModalPopup to appear. It will have the room name. 
2. When we click on the 'X' on the SecretModalPopup, the secretModalPopup should disappear.
3. (optionally, you may insert a soundtrack appropriate for that room)

<img src="./house-of-cards-lab.gif">

# Hints

<img src="./house-of-cards-lab-popup.gif">

<summary>
Hint: 
<details>

  0. Any visual changes wil require some kind of state. So change your App from a function to a class component (click <a href="https://user-images.githubusercontent.com/24878576/126814144-dcce6012-5796-4a9c-bd03-d4330b2857ae.png">here</a> for the solution if you've forgotten how).

1. Figure out your state. Think about what is changing from moment to moment:
- sometimes the popup is there, and sometimes it's not. So, let's add "showPopup" as a state variable that can be true/false. If it's true, we can make the popup show. If it's false, we can hide the popup.

An example of initial initial state (note: you will need to add another state later to have the popup show specific rooms, but start with this for now):
![image](https://user-images.githubusercontent.com/24878576/126819714-7f9b1967-0ac6-4578-ab83-da0be53458d5.png)

2. There are three steps for state: initialize state. access state wherever it's needed. upate state. So let's see. We have a showPopup. If it's true, we want t ostyle the popup to display: flex. If it's false, we want to style the popup to display: none. So that means we need to add an inline style since the styling is dynamic.

![image](https://user-images.githubusercontent.com/24878576/126821119-68b63882-6391-4ab0-9e06-274ad9c67432.png)

3. And of course this `<SecretPopupModal>` component has no access to the showPopup state. How can `<SecretPopupModal>` get access to that showPopup state?   We pass it down as props.
![image](https://user-images.githubusercontent.com/24878576/126821520-a0e75911-7115-494e-b126-c8cfa7a9845a.png)

4. And verify with the inspector that our props are making it down to where they're needed:

![image](https://user-images.githubusercontent.com/24878576/126821669-656050b4-12d3-4e08-9dab-662872aa4989.png)

5. ok so the `<SecretPopup>` now has the showPopup coming in as a prop. How can we make it show up if showPopup is true, and how can we hide it if showPopup is false?

Let's fix our inline style from a few steps ago:
![image](https://user-images.githubusercontent.com/24878576/126821931-076c8d05-3afb-4811-8613-b59194ae40b5.png)

6. Now if the showPopup is true, it should display:flex, and if it's false, it should display:none. Test it out. Remember, baby steps. Slow and steady wins the race. Verify everything.

![hint-show-popup](https://user-images.githubusercontent.com/24878576/126822221-a95b29b8-ab7f-4f2a-8cfe-90e32be0babe.gif)

7. The last step of dealing with state is to update state. We want to update state to have showPopup true when the room button  is clicked. So find the room button in the `<Room>` component and put an onClick on it that will setState on showPopup
![image](https://user-images.githubusercontent.com/24878576/126822670-e3345b66-c3d2-4445-be03-972e02ad0e78.png)

8. As we start writing our onClick it should occur to us that, "oh crap" the state known as showpopup is actually in the parent, not the child. So maybe we need to do the setState in the parent in a method, and then pass that method down to where the onClick is -- ie., each of your `<Room>` components:

![image](https://user-images.githubusercontent.com/24878576/126829335-869ff0b3-2856-4741-abce-e8a877108ffb.png)

9. Verify that  `<Room />` is receiving the props via the inspector - 
![image](https://user-images.githubusercontent.com/24878576/126829614-f3316949-9df0-4eb7-9dc6-a6d478bc2f76.png)

10. Finally, have the button onClick in the <Room /> component call this method. -- you can do this one yourself!

11. the popup should now open when you click.

![hint-popup-open](https://user-images.githubusercontent.com/24878576/126830023-214ccd2f-ce0c-4a06-b225-3ad085c89fee.gif)


12. Your next steps: Figure out how to make the 'x' in `<SecretPopupModal>` actually set the state of showPopup to false.
13. Pass in the room name of the currently active/clicked room to the `<SecretPopupModal>` (this is going to involve quite a few steps)


</details>
</summary>


