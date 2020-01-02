# AngularSpa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Configuring FCM for Web Push

Go to firebase console and log in with your Google account. Hit ‘Create New Project’ button and follow the instructions.

After you create your project, you will see a dashboard. Click the menu ‘Cloud Messaging’ on the left.

Click </> icon. This will add a web application to your firebase project.

The site will ask you to give a name for your application and then it will ask you to put a script that adds SDK to your site. Just skip that.
Then, go back to the dashboard and go to the project settings by following the menu on the upper left corner.

The information that we need is in the Cloud Messaging page. We are going to use that information while sending and receiving notifications.

