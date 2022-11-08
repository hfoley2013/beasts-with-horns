# Gallery of Horns

A React application that displays images and associated information of horned animals to the user. The user is able to filter the images by number of horns and chose/vote for their favorite image.

## Features

### Feature #1: Display images

* **Why are we implementing this feature?**
  * As a user, I want to view the images on the page so that I can browse the photo collection.
* **What are we going to implement?**
  * Given that a user opens the application in the browser
  * When the user navigates to the home page
  * Then the photo gallery should display all of the images in the gallery.
* **How are we implementing it?**
  * The `Main` component should pass props for the title, image and description to each `HornedBeast` component. You will find this information in the provided JSON file.
* **Time Estimates**
  * **Number and name of feature:** #1: Display Images
  * **Estimate of time needed to complete:** 1 hour
  * **Start time:** 11/7/2022, 2:06pm PDT
  * **Finish time:** 11/7/2022, 3:30pm PDT
  * **Actual time needed to complete:** 1:24

### Feature #2: Allow users to vote for their favorite beast

* **Why are we implementing this feature?**
  * As a user, I want to be able to interact with the site and pick my favorite beast.
* **What are we going to implement?**
  * Given that a user opens the application in the browser
  * When a user clicks on an image
  * Then the number of "favorites" displayed on that image will increase by one.
* **How are we implementing it?**
  * Create state inside of the `HornedBeast` component that keeps track of the number of times an image was clicked.
  * Put a heart in each horned beast with the number of times it was “favorited” next to it.
* **Time Estimates**
  * **Number and name of feature:** #2: Allow users to vote for their favorite beast
  * **Estimate of time needed to complete:** 30 minutes
  * **Start time:** 11/8/2022, 12:30pm PDT
  * **Finish time:** 11/8/2022, 12:50pm PDT
  * **Actual time needed to complete:** :20

### Feature 3: Bootstrap

* **Why are we implementing this feature?**
  * As a user, I want to see a visually pleasing application that is also reponsive when I view this application on different screen sizes.
* **hat are we going to implement?**
  * Given that a user opens the application in the browser
  * When the images are displayed on the screen
  * Then each image should be rendered in a visually pleasing way: in columns, as screen width allows.
* **How are we implementing it?**
  * Bring in the `react-bootstrap` library and use it to style your application making sure that it is responsive.
* **Time Estimates**
  * **Number and name of feature:** #3: Bootstrap
  * **Estimate of time needed to complete:** 2 hours
  * **Start time:** 11/8/2022, 1:22pm PDT
  * **Finish time:** 11/8/2022, 3:11pm PDT
  * **Actual time needed to complete:** 1:49

### Stretch Goal: Add Interaction

* **Why are we implementing this feature?**
  * As a user, I want to be able to interact with each item on the page.
* **What are we going to implement?**
  * Given that a user opens the application in the browser
  * When a user clicks on an item other than the horned beasts, such as the title of the page or the footer,
  * Then the information and styles should change.
* **How are we implementing it?**
  * When the user clicks on elements such as the header, footer or title of page, make something change using state.
  * You can update the words, change the styles or add something new. Be creative.
* **Time Estimates**
  * **Number and name of feature:** #4: Add Interaction
  * **Estimate of time needed to complete:**
  * **Start time:**
  * **Finish time:**
  * **Actual time needed to complete:**
