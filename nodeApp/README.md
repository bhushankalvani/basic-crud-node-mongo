This repo contains the server side portion of the MEAN Stack Application. This is an Express - Node App which interacts with MongoDB (database) to access data and perform operations on it.

A very useful feature provided by Node Applications is that they have API support and thus it makes Node Server App very suitable for SPA and non-memory[CPU] intensive applications.
The details for the database is as : 
Database: pb_db [phonebook_database]
Collection : contacts
Schema :

      {
        name: string
        phonenumbers: [{
              type: string,
              number: string
        }]
      }

All the files in this repo [nodeApp] should replace the files in the express - node app created on your local machine.
to create such an app, use:

    express app_name [Example here: express nodePB]

Replace the repos 'views','routes' and file app.js within the app with these files to run this project along with Angular portion of the app, without much change. Also add dependencies for the different modules in the 'package.json' file, or just clone this one.

To run the app, use

    npm start [inside the repo, Ex: 'nodePB' here]
