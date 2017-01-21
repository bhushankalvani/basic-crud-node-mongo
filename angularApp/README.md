Angular JS App - 'phonebook'

angularApp repo contains the AngularJS App of the MEAN Stack Task.
It is the front-end with basic bootstrap, focusing more on the SPA, CRUD operations in the AngularJS. This app is the basic phonebook designed to keep the contacts along with their numbers and number types.

The database schema is as:

{
    name: string
    phonenumbers: [{
      type: string,
      number: string
    }]
}

Following this schema, after the welcome page, all the contacts, already present in the database load and show up as a list.(as shown in '/screenshots/screenshot2').

Basic CRUD functionalities have been performed through modals. As given below with specific screenshots.

screenshot3 - Create/Add a contact.

screenshot4 - Read/Display Contact Info. Displays name as well as multiple numbers of that particular contact.

screenshot5 - Update/Edit a contact.

screenshot6 - Delete/Remove a contact.
