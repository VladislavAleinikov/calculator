# Description for Calculator App

## 1. Task link
[Click here](https://drive.google.com/file/d/15jVnBPXaZrjs99KOUxp4TGq6Inau6xq_/view$0)

## 2. How to run the app

### `npm run dev`

Build the app in the development mode.\
Open `/dist/index.html` to view it in the browser.

## 3. Other comands

### `npm run test`

Run `tests` for all the commands.

### `npm run lint`

Check all the `lint` rules in `.js` files

### `npm run lint:fix`

Fix all posible `lint` errors


### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles `html` and `js` in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## 3. Folders structure

`/src` folder is root directory, it contains `html` and `css` files, we are working with.

`/dist` folder needed for builded application.

`src/script/index.js` is entry point of application 

`/src/script/commands` folder contain all the commands this application uses.

`/src/receiver` folder with calculator receiver, wich care all the information about calculator

`src/invoker` folder with invoker, wich execute all the commands

`src/constats.js` contain keyboard sings associated with their commands

`src/utils.js` contain utility functions

`src/theme-swithcer.js` contain functionality for switching application theme
