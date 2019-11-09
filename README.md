# Food Devlivering app

## Folder Structure

```
food-delivering-app/
  README.md
  package.json - manges dependencies
  public/
    index.html
  src/
    assets - store all images and json used across the application
    components -  stores the app components
      App - Wrapper for the app
      Header - Stateless component to show the Header of the app i.e location and "change location" button
      NavBar: Stateless component to show navigation bar
      Restaurant: Stateless component to show details of each restuarant
      RestaurantImg: Stateless component to show restaurant image
      RestaurantDetails: Stateless component to show details of each restaurant
      RestaurantTags: Stateless component to show tags associated with each restaurant
      RestaurantListBuilder: Stateful component to build the restaurant list builder
    index.js: javascript entry point
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser(It will automtically opens the window in browser).

The page will reload automatically, if you do any modifications. Watchers has been added.<br>

### `npm test`

Runs test tasks in the interactive watch mode.<br>
Added snapshot testing for all the components

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, unglified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## How to run the app -

### In development mode -

    - Unzip the food-delivering-app.zip
    - Go to `food-delivering-app` folder
    - Run `npm install`
    - Run 'npm start`, which will show the url(generally its `http://localhost:3000/`) in the logs
    - Open the url in the browser(generally - http://localhost:3000/)
    - Now you should see the application running
    - It will also add the watchers, which will automatically reflect the code changes in the browser

###  In production mode -

    - Unzip the food-delivering-app.zip
    - Go to `food-delivering-app` folder
    - Run `npm install`
    - Run 'npm run build`, it will minify and obfuscate the code for production environment.
    - It will create a `build` folder.
    - If you want to run the app, go to the build folder
    -  You can run any server here - for eg. http-server(you have to install the server, if not already installed - sudo npm install http-server -g, and then run `http-server` command)
    - Type the url exposed by the server in the browser
    - Now you can see the application running

## My approach - 
 
   - Created a SPA using ReactJS library.
   - Modularized the views based on their responsibility
   - Build a responsive web application
   - Written snapshot tests for all the components which can be seen by running npm run test or npm test.
   - Added TypeScript
      
## Technology Stack Used -
  - ReactJS
  - JavaScript - ES6 
  - HTML
  - SCSS
  - TypeScript
  - Webpack - for module bundling
  - Babel - for converting ES6 code to browser supported code
  - npm - package manager
  - jest - test runner
  - react-test-renderer - reactjs inbuilt testing support
