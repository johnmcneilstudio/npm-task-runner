# NPM TASK RUNNER

A NPM task runner, without a task runner. For the world.

[CONTRIBUTE](./CONTRIBUTE.md)

## Doc
- [http://substack.net/task_automation_with_npm_run](http://substack.net/task_automation_with_npm_run)
- [http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)


## List of plugins

### JS
- [uglify](https://www.npmjs.com/package/uglify-js) - also takes care of generating sourcemaps ( ```--source-map``` )
- [jshint](https://www.npmjs.com/package/jshint)
- [browserify](https://www.npmjs.com/package/browserify) - generate sourcemaps


### STYLES
- [node-sass](https://www.npmjs.com/package/node-sass)
- [autoprefixer](https://www.npmjs.com/package/autoprefixer)
- [cssmin](https://www.npmjs.com/package/cssmin)
- [modernizr](https://www.npmjs.com/package/modernizr)
- [dss](https://www.npmjs.com/package/dss)
- [compass](https://www.npmjs.com/package/compass)
- cmq


### IMAGES
- [imagemin](https://www.npmjs.com/package/imagemin)
- [svgo](https://www.npmjs.com/package/svgo)
- [grunticon-lib](https://www.npmjs.com/package/grunticon-lib) (beta version)


### HTML / TEMPLATES
- [html-minifier](https://www.npmjs.com/package/html-minifier)
- [zetzer](https://www.npmjs.com/package/zetzer)


### UTILS
- [fs-extra](https://www.npmjs.com/package/fs-extra): copy/empty/make/move/writeJSON/...
- [watch](https://www.npmjs.com/package/watch) (watch file trees) / [onchange](https://www.npmjs.com/package/onchange) (lighter ?) / [nodemon](https://github.com/remy/nodemon)
- [live-reload](https://www.npmjs.com/package/live-reload) / [watchr](https://www.npmjs.com/package/watchr) ? / [connect-livereload](https://www.npmjs.com/package/connect-livereload)
- bump (use [```npm version```](https://docs.npmjs.com/cli/version))
- concat
- [zip](https://www.npmjs.com/package/adm-zip)


### TESTS
- [jasmine](https://www.npmjs.com/package/jasmine)
- E2E: [protractor](https://www.npmjs.com/package/protractor)
- [tape](https://www.npmjs.com/package/tape)
- [karma](https://www.npmjs.com/package/karma)


### TOOLS
- [parallelshell](https://www.npmjs.com/package/parallelshell): run tasks/commands in parallel


## List of tasks
- clean: ```$ rm -r dist/*```
- archive
- watch
- build
- test
- styles
- scripts
- dev
