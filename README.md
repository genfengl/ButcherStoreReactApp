
# Butcher Store Application

### App Concept and implementation thoughts:

Nice to Meat you is your friendly online butcher providing quality meat products across Beef, Pork, Poultry, Lamb & Seafood.
Our theme was boiled down froma  few shared ideas around building out a retail/shopping based idea, testing the waters on an 'uber eats' style clone, and working with nested data structures across multiple categories. Overall we wanted something that would take our current knowledge and expand with new learning in things like Payment API, multiple layers of state and displaying nested datasets in a variety of ways.

The app itself is a shopping cart application that gives a user (defaulting to a 'guest' profile) the ability to browse a variety of meat, filter by category (beef, pork, etc) view more details on said items, like, add to cart, and process a purchase. There are some intricacies with the authenticated users having their own profile page which displays previously liked items and purchase history as well. We've also manually built an Admin profile to conditionally render a more editable selection of the 'for sale' items including a full edit and delete suite updated individual elements or the entire object, reducing stock or deleting an option completely, as well as the ability to add more selections if you are an administrator. 

![figma diagram of mockup for the app](./readmefiles/initialDesign.png "Initial Figma mockup of main customer screen")
![figma diagram of mockup for the app 2](./readmefiles/initialAdminView.png "Initial Figma mockup of admin screen")

A few future addition notes here: Pagination, we didn't reach critical mass on the provided data yet to warrant, but pagination is going to be the first thing added in the next feature release. We are also interested in a 'choose a store' section (for delivery, another future goal) that would integrate with the GoogleMaps API for locational based delivery service.

The Original MVP was to create a linked Database through to Backend and Frontend Routes, with major technology choices being MongoDB, Node.JS/Express/Mongoose and React.JS Hooks & Component based architecture. We used GitHub for managing our workflow process. Figma for some initial wireframing designs and Zoom/Discord/Slack for collaboratively messaging each other (mostly what files we were touching on so we didnt infinite merge conflict ourselves!).


### Installation instructions & requirements:

A lot of our required packaging is in the package.json, so you should be able to ```npm i``` in the main 'ButcherStoreReactApp'
For hosting locally we recommend using Nodemon ```npm i nodemon``` for the server side (ButcherStoreReactApp) folder.

This app was strapped up by the CreateReactApp, i've included some basic available scripts below here as well.

we have strict ENV variables that are not included in this package, including a proxy port, you will need to reach out to an original creator to gain this material if you want to edit the source code.

#### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### How to use the application

![current app display](./readmefiles/final-design.png "Final UI display")
![gif of the cart dropdown menu](./readmefiles/cartgif.gif "Cart Dropdown working well")

All our data is hosted through MongoDB including User & product information.

To view product details simply click on a product image and it will take you to a page displaying more information.

To view your cart of items at any time the dropdown menu at the top right with the shopping cart icon will let you view and scroll through your current selected products, with a real time update on your subtotal.

Each subheading on the navigation bar will take you to a particular category of items, however if you can't find what you are searching for, the magnifying class symbol represents our search function which should be able to assist you further.

### This app was brought to you by:

Jack Dyball: Backend, Payment and Database extraordinaire.  

Max Nash: Component man, figma monkey and Author.  

Gerald (Genfeng) Liu: StyleBot, Bootstrap and Array method powerhouse.  


