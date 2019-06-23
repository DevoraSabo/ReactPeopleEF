# ReactPeopleEF

Using React Router, users can now keep track of many different people managed in their backend database in a one-page application, where the page never reloads, even after adding, selecting or deleting people from the database/application.

Features:

  1. Select - users can select as many people as they'd like from the people currently listed. They can then apply any of the additional funtionalities all at once, instead of doing it step by step. When a person is selected, that row will highlight in red.

  2. Select All - with the click of just one button, all people in the database are checked, and users can see fit to use any other functionality on all information at once.

  3. Delete - when this button is clicked, all people with checked checkboxes will be cleared from the database. The application will not refresh; the updated database is immediately incorporated into the page in real time.

  4. Clear All - users can delete all information stored in the database and start anew.

Coming soon:

  1. Edit - when a person is selected, you can edit that particular person's information directly to the database. When submit is clicked, changes are saved to the application with virtually no delay and the page will not refresh - the updates will show immediately.
  
  2. Edit #2 - if a user clicks update without selecting a person first, he can choose a person to edit from the dropdown list shown. Then, he can edit to his heart's content, and changes will update on the page that same second.

Technologies Utilized:

- ASP.NET MVC
- Entity Framework Core
- React, Axios, React Router

