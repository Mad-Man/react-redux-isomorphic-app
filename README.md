# react-redux-isomorphic-app
TODO: Write a project description
## Installation
1. Instal node(6.10)
2. npm install
## Usage
#Dev build
1. npm run build-dev
2. npm start
or
1. npm serve-dev

#Prod
1. npm run build-prod 

##Tests
1. npm test

###Additional tasks
- npm run clean > will clean bundled files from dist folder
- npm run gzip-js > zips the bundle.js file from dist to pre-zip the content
- npm run gzip-css > zips the main.css file from dist to pre-zip the content
- npm run build-webpack-prod > runs minified version of the bundles
- npm run watch-sass > runs a watch task over scss files 

#Project structure
```
|-- src
|   `-- app
|       |-- components
|       |-- details
|       |   |-- actions
|       |   |-- buy-now
|       |   |   |-- components
|       |   |   `-- styles
|       |   |-- components
|       |   |-- reducers
|       |   `-- styles
|       |-- list
|       |   |-- actions
|       |   |-- components
|       |   |-- reducers
|       |   `-- styles
|       |-- routes
|       |-- server
|       |   |-- handlers
|       |   |-- models
|       |   `-- views
|       |-- store
|       |-- styles
|       |-- client.js
|       `-- server.js
`-- dist
    `-- media
```
#comments
- las imagenes del listado son de una resolucion mas baja (80 x 80) que el 180 x 180 de los redlines.
- hay algunos tests de los modulos principales no de todos, se corren con npm test
- npm build-prod compila los bundles los minifica los zipea (99k y 7k  js y css respectivamente) y corre el server
- la app corre en http://localhost:1616