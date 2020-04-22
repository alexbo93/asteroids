# NASA Near Earth Object Approaches Portal

## Description
This is the portal that will bring NEOs 'closer' the the users.

By consuming official NASA [Official Open Apis](https://api.nasa.gov/), this site provides information related to NEOs whose orbit will approach the earth in the coming 7 days. 

As they orbit the Sun, NEOs can occasionally approach close to Earth. Note that a “close” passage astronomically can be very far away in human terms: millions or even tens of millions of kilometers. CNEOS software detects predicted Earth close approaches for all known NEOs, in both the past and the future.

Check it out [here](https://bezzy-asteroids.herokuapp.com/)

## Astronomy Picture of the Day
Not only the portal will display information about upcoming approaches, but will also delight the user with the Astronomy Picture of the Day, also provided by the NASA.

Access [here](https://bezzy-asteroids.herokuapp.com/pod) to test it yourself!

## Build de portal in your machine

Once the repo has been cloned locally, run:

### `npm install`

To properly run the app, then run:

### `npm run startdev`

This will run the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Check that app is properly tested

To do so run:

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Generate a production artifact

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### To check if the bundle is properly build...

Run this right after creating the bundle

### `npm run start`


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
