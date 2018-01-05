# React Boilerplate

This file explains dependencies and scripts under [package.json](package.json)

## Content

0. [Project Bootstrap](#project-bootstrap)
1. [Scripts](#scripts)
2. [DevDependencies](#dev-dependencies)
3. [Dependencies](#dependencies)
4. [Redux Flux](#redux)


### General Info

 * [Webpack](https://webpack.js.org/concepts/)
  
    *Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of           transforming, bundling, or packaging just about any resource or asset.*

## Project Bootstrap
  
  0. If you aren't in the project folder open it on the terminal, using **cd ..path**
  
  1. Run npm install --verbose, to install all dependencies from package.json
  
  2. Run **npm run dev**, to run the [development](#development) environment
  
  3. If you want to build the production environment, run the [build](#production) script: **npm run build**
  
  4. **IMPORTANT!**, IF YOU DID BUILD, REMBEMBER TO DELETE ALL FILES EXCEPT **INDEX.HTML** UNDER THE PUBLIC FOLDER, OTHERWISE CHANGES WON'T BE MADE WHEN YOU RUN THE DEVELOPMENT SCRIPT

## Scripts

```javascript
"scripts": {
  "dev": "webpack-dev-server --progress --colors --inline --hot",
  "build": "webpack --progress -p"
},
```

 #### Development

  *"dev": "webpack-dev-server --progress --colors --inline --hot"*
  
  Builds the development server [webpack-dev-server](https://webpack.js.org/configuration/dev-server/)
   
  **Options:**
  
 * *--progress: Output running progress to console.*
  
 * *--colors: Enables/Disables colors on the console.*
  
*  *--inline: Toggle between the dev-server's two different modes. By default the application will be served with inline mode enabled. This means that a script will be inserted in your bundle to take care of live reloading, and build messages will appear in the browser console.*
            
* *--hot: Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload.
        More information at [HMR](https://webpack.js.org/concepts/hot-module-replacement/)*
        

#### Production

  *"build": "webpack --progress -p"*
  
  Builds webpack modules, that are mapped under *[webpack.config.js](webpack.config.js)*
  
  **IMPORTANT!!**
  
   If you did build and want to move to development again, remeber to delete all contents of the public folder! Otherwise changes won't be compiled
 
  **Options:**
  
  * *--progress: Output running progress to console.*
  
  
## Dev Dependencies

  This dependencies are only used while developing the project
  
  * [Axios](https://github.com/axios/axios)
  
      Promise based HTTP client for the browser and node.js, used for making promise based asynchronous requests.
  
  * [Babel](https://babeljs.io/)
  
      It's a "transpiler" for Javascript language, meaning that it takes modern Javascript (ES6) and transforms it to older versions, so      other browsers can support the site's Javascript.
  
    ```javascript
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-plugin-transform-class-properties": "^6.24.1",
    "babel-plugin-transform-object-rest-spread": "^6.26.0",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-env": "^1.6.1",
    "babel-preset-react": "^6.24.1",
    ```
    
     * [Babel Loader](https://github.com/babel/babel-loader)
        
        Loader for using Babel in webpack, configuration is done in: webpack.config.js.
      
     * Babel Presets
       
       Presets serve the purpose of taking sintax e.g (ES6, React, ...) and transpiling it to basic Javascript sintax.
       
       * [Preset Env](https://github.com/babel/babel/tree/master/packages/babel-preset-env)
       
       * [Preset React](https://babeljs.io/docs/plugins/preset-react/)
       
     * Babel Plugin Transform
       
       Generally to transform plain Javascript into ES6 sintax stuff...
       
       * [Class Properties](https://babeljs.io/docs/plugins/transform-class-properties/)
       * [Object Rest Spread](https://babeljs.io/docs/plugins/transform-object-rest-spread/)
       * [Runtime](https://www.npmjs.com/package/babel-plugin-transform-runtime)
         
       
* [Copy Webpack Plugin](https://github.com/webpack-contrib/copy-webpack-plugin)
  
  Copies individual files or entire directories to the build directory.
        
* [Css Loader](https://github.com/webpack-contrib/css-loader)
     
  The css-loader interprets @import and url() like import/require() and will resolve them.
        
* [Extract Text Webpack Plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)
       
  Extract text from a bundle, or bundles, into a separate file. It moves all the required .css modules in entry chunks into a    separate CSS file. So your styles are no longer inlined into the JS bundle, but in a separate CSS file (styles.css). If your total stylesheet volume is big, it will be faster because the CSS bundle is loaded in parallel to the JS bundle.
  
* [Imagemin Webpack Plugin](https://github.com/Klathmon/imagemin-webpack-plugin)
  
  This is a simple plugin that uses Imagemin to compress all images in your project.

* [Node Sass](https://github.com/sass/node-sass)

  Node-sass is a library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass.
It allows you to natively compile .scss files to css at incredible speed and automatically via a connect middleware.
  
* [React](https://reactjs.org/)
  
  A JavaScript library for building user interfaces
  
  * [React DOM](https://www.npmjs.com/package/react-dom)
  
    This package serves as the entry point of the DOM-related rendering paths.
  
* [React Redux](https://github.com/reactjs/react-redux)
    
  Official React bindings for Redux.
    
 * [Redux](https://redux.js.org/)
    
   Redux is a predictable state container for JavaScript apps.
      
 * [Redux Saga](https://github.com/redux-saga/redux-saga)
  
    Redux Saga is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, simple to test, and better at handling failures.
    
* [Sass Loader](https://github.com/webpack-contrib/sass-loader)
   
  Loads a SASS/SCSS file and compiles it to CSS.
    
 * [Style Loader](https://github.com/webpack-contrib/style-loader)
   
   Adds CSS to the DOM by injecting a <style> tag
  
 * [Webpack Dev Server](https://webpack.js.org/configuration/dev-server/)
  
    Webpack development server 
    
## Dependencies

  This are needed dependencies on production
  
  * [Boostrap](https://getbootstrap.com/)
    
    Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.

  * [React Router Dom](https://reacttraining.com/react-router/web)
    
    Manages application routing, see the docs for more info.
    
  * [React Router Redux](https://github.com/reactjs/react-router-redux)
  
    You're a smart person. You use Redux to manage your application state. You use React Router to do routing. Good boi. But the two libraries don't coordinate. You want to do time travel with your application state, but React Router doesn't navigate between pages when you replay actions. It controls an important part of application state: the URL.
  
  * [Reacstrap](http://reactstrap.github.io/)
  
    Stateless React Components for Bootstrap 4.
    
  * [Redux Form](https://redux-form.com/7.2.0/docs/gettingstarted.md/)
  
    A library to manage redux's incoming form data. The docuemntation explains about Redux flux, and redux-form usage. Examples about it will be generated in the future.
    
  * [Redux Logger](https://github.com/evgenyrodionov/redux-logger)
    
    LogRocket is a production Redux logging tool that lets you replay problems as if they happened in your own browser. Instead of guessing why errors happen, or asking users for screenshots and log dumps, LogRocket lets you replay Redux actions + state, network requests, console logs, and see a video of what the user saw.

## Redux

  Redux is a predictable state container for JavaScript apps (Not to be confused with a WordPress framework – Redux Framework.) It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger. See more under redux [documentation](https://redux.js.org/). [This tutorial](https://egghead.io/courses/getting-started-with-redux) can help you achieve some redux basic understanding, it's from redux's co-creator Dan Abramov, and it's free.
  
### Redux flux in this boilerplate

    1. 
  
  
  


