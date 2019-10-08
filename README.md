In order to make this work:
-Download/Clone repository

-npm install to make sure all packages are in (requires JWT, Express, Express-fetch and some more)
-node backend.js to make the server run. Make sure you have port 5000 free!
-for now you will need Postman to play with the server
the routes are

localhost:5000/client/login. Use POST and in the body, the key is input. For value, use any email from the provided client list
This will provide you with the token needed to proceed around.

All the other routes are GET routes

localhost:5000/client/byId/:Id
localhost:5000/client/byName/:name
localhost:5000/policies/poliByName/:name
localhost:5000/policies/userByPol/:policy

will return with the correct data or error messages accoding to your specific inputs && user role.