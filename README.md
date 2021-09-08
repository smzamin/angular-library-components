# CompLibrary

Angular 12, Bootstrap 5, bootstrap-icons, ngx-bootstrap, ng-packagr

## Development server
Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

This application is responsible for capturing the following user data.
- FirstName, second name, and hobbies.
- All saved data should reside in LocalStorage

** Create a library that has two components "z-list-item" and "z-input" which you will import into your main project.
- "z-list-item" should be the element that will be used to list all of the users that are captured in the form
- "z-input" should be the element used to capture the user's details.

You should show / use:
- a good project structure, the cleaner the better
- a popout for user creation,
- *ngFor to list all of the users,
- ControlValueAccessor usage for the "z-input" so that you can use [(ngModel)] to get the item's data in the main application
- Reactive Forms

# Commands used

- ng new comp-library --create-application=false
- cd comp-library
- ng generate library z-list-item --prefix=z-list-item
- ng generate application user-listing
- ng build z-list-item
- ng build user-listing --prod
- ng serve user-listing
