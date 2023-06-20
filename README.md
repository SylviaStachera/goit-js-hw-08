# Parcel template

This project was created with Parcel. For familiarization and setting additional features [refer to documentation](https://parceljs.org/).

## Preparing a new project

1. Make sure you have an LTS version of Node.js installed on your computer.
   [Download and install](https://nodejs.org/en/) if needed.
2. Clone this repository.
3. Change the folder name from `parcel-project-template` to the name of your project.
4. Create a new empty GitHub repository.
5. Open the project in VSCode, launch the terminal and link the project to the GitHub repository
   [by instructions](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url).
6. Install the project's dependencies in the terminal with the `npm install` command.
7. Start development mode by running the `npm start` command.
8. Go to [http://localhost:1234](http://localhost:1234) in your browser.
   This page will automatically reload after saving changes to the project files.

## Files and folders

- All stylesheet parshas should be in the `src/sass` folder and imported into the page stylesheets. For example, for `index.html` the style file is named `index.scss`.
- Add images to the `src/images` folder. The assembler optimizes them, but only when deploying the production version of the project. All this happens in the cloud so as not to burden your computer, as it can take a long time on weak machines.

## Deploy

To set up a project deployment, you need to perform a few additional steps to set up your repository. Go to the `Settings` tab and in the `Actions` subsection select the `General` item.

![GitHub actions settings](./assets/actions-config-step-1.png)

Scroll the page to the last section, in which make sure the options are selected as in the following image and click `Save`. Without these settings, the build will not have enough rights to automate the deployment process.

![GitHub actions settings](./assets/actions-config-step-2.png)

The production version of the project will be automatically built and deployed to GitHub Pages, in the `gh-pages` branch, every time the `main` branch is updated. For example, after a direct push or an accepted pull request. To do this, you need to edit the `homepage` field and the `build` script in the `package.json` file, replacing `your_username` and `your_repo_name` with your own, and submit the changes to GitHub.


```json
"homepage": "https://your_username.github.io/your_repo_name/",
"scripts": {
  "build": "parcel build src/*.html --public-url /your_repo_name/"
},
```

Next, you need to go to the settings of the GitHub repository (`Settings` > `Pages`) and set the distribution of the production version of files from the `/root` folder of the `gh-pages` branch, if this was not done automatically.

![GitHub Pages settings](./assets/repo-settings.png)

### Deployment status

The deployment status of the latest commit is displayed with an icon next to its ID.

- **Yellow color** - the project is being built and deployed.
- **Green color** - deployment completed successfully.
- **Red color** - an error occurred during linting, build or deployment.

More detailed information about the status can be viewed by clicking on the icon, and in the drop-down window, follow the link `Details`.

![Deployment status](./assets/status.png)

### Live page

After some time, usually a couple of minutes, the live page can be viewed at the address specified in the edited `homepage` property. For example, here is a link to a live version for this repository
[https://goitacademy.github.io/parcel-project-template](https://goitacademy.github.io/parcel-project-template).

If a blank page opens, make sure there are no errors in the `Console` tab related to incorrect paths to the CSS and JS files of the project (**404**). Most likely you have the wrong value for the `homepage` property or the `build` script in the `package.json` file.

## How it works

![How it works](./assets/how-it-works.png)

1. After each push to the `main` branch of the GitHub repository, a special script (GitHub Action) is launched from the `.github/workflows/deploy.yml` file.
2. All repository files are copied to the server, where the project is initialized and built before deployment.
3. If all steps are successful, the built production version of the project files is sent to the `gh-pages` branch. Otherwise, the script execution log will indicate what the problem is.


------------------------------------------------------------------------
## Task 1 - SimpleLightbox Library:
In this task, you'll work with the files 01-gallery.html and 01-gallery.js. Here are the steps to complete the task:

1. Add the SimpleLightbox library as a project dependency using npm.
2. Refactor your JavaScript code from the previous homework, considering that the library has been installed via npm (use import/export syntax).
3. Import the library's CSS styles by adding another import statement in addition to the one described in the documentation.

## Task 2 - Video Player:
In the HTML file, there is an <iframe> with a Vimeo video. Write a script that saves the current playback time of the video in local storage and resumes playback from that point when the page is reloaded.

1. Familiarize yourself with the Vimeo player library's documentation.
2. Add the library as a project dependency using npm.
3. Initialize the player in the JavaScript file as described in the "pre-existing player" section, taking into account that the player has been added as an npm package, not through a CDN.
4. Explore the documentation for the on() method and start tracking the timeupdate event, which represents updates to the playback time.
5. Save the playback time in local storage using the key "videoplayer-current-time".
6. Use the setCurrentTime() method to resume playback from the saved time when the page is reloaded.
7. Add the lodash.throttle library to the project and ensure that the playback time is updated in storage no more than once per second.
   
## Task 3 - Feedback Form:
In the HTML file, there is a form element. Write a script that saves the field values in local storage whenever a user enters something into the fields.

1. Listen for the input event on the form and save an object with the email and message fields containing the current values entered by the user. Use the key "feedback-form-state" to store this data in local storage.
2. Upon page reload, check the storage state, and if there are saved data, populate the form fields with those values. Otherwise, leave the fields empty.
3. After submitting the form, clear the storage and form fields. Also, log the object with the email and message fields and their current values to the console.
4. Use the lodash.throttle library to ensure that the storage is updated no more than once every 500 milliseconds.
