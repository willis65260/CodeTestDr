# Code Test 
 usage

 first you gotta be sure that you have the most recent version of node and npm installed (tested with node v18.19.1 and npm 9.2.0)
 then go to the root folder of this repo (the one with the package.json and package-lock.json) and execute the next command
 ```
 npm install
 ```
then a quick 
```
npm start
```
to start the react app and you should be good to go :D

the usage is pretty straight forward except it has no database attached so everything is loaded with "default data" that will be loaded again if the page is refreshed but you can still "go" to the specific View of edit if you put it's id on the url i.e.
```
localhost:3000/2
```
will automatically fill the fields of the "View/Edit" component with the user number 2 (this only works on the local version of the app)

I did the deploy to Github Pages in case you wanna try it as soon as you get this email (the view on mobile devices is not tested this is meant to be used on a computer/laptop or a tablet)
```
https://willis65260.github.io/CodeTestDr/
```
