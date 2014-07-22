# README

The purpose of this boilerplate is to get you setup quickly on your projects using boostrap-sass and a modified version of HTML5 boilerplate.
We are using submodules to pull in bootstrap to the project which can be found in the `/bootstrap` folder.
To update bootstrap to the latest version at any time; make sure you are in the root directory and run the following command in terminal `git submodules update`.

To make changes to the default bootstrap values, you will find a `_variables.scss` file inside `/assets/scss` which you can change the values in. A complete list of the variable names can be found here http://getbootstrap.com/customize/#less-variables. Remember that these variable names are using the `@` symbol used in Less, so you will need to change this to `$` for use with Sass.

Inside the main.scss file you will see a comment for where you can include your own imports. Make sure these go after the bootstrap import or these will not override any of the bootstrap styling.

## Installing

To install this boilerplate for your own use; in terminal make sure you are in the `~/Sites` directory.

Run `git clone --depth 1 https://github.com/ywbc-chch/bootstrap-boilerplate.git YourProjectName`
Make sure to change `YourProjectName` to something meaningful. This will give you a nice clean history in the git log.

After the project has cloned successfully then run the following to pull in the bootstrap module.
`cd YourProjectName && git submodule update --init`

This will move you into your new project directory and initialize the bootstrap module and pull in the changes.