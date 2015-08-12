require.config({
  baseUrl : '',

  paths: {
    'aurelia-bootstrapper': 'aurelia-latest/bootstrapper/dist/amd/aurelia-bootstrapper',
    'aurelia-loader-default': 'aurelia-latest/loader-default/dist/amd/aurelia-loader-default',
    'aurelia-path': 'aurelia-latest/path/dist/amd/aurelia-path',
    'aurelia-task-queue': 'aurelia-latest/task-queue/dist/amd/aurelia-task-queue',
    'aurelia-logging': 'aurelia-latest/logging/dist/amd/aurelia-logging',
    'aurelia-logging-console': 'aurelia-latest/logging-console/dist/amd/aurelia-logging-console',
    'aurelia-history': 'aurelia-latest/history/dist/amd/aurelia-history',
    'aurelia-history-browser': 'aurelia-latest/history-browser/dist/amd/aurelia-history-browser',
    'aurelia-event-aggregator': 'aurelia-latest/event-aggregator/dist/amd/aurelia-event-aggregator',
    'aurelia-html-template-element': 'aurelia-latest/html-template-element/dist/HTMLTemplateElement',
    'aurelia-loader': 'aurelia-latest/loader/dist/amd/aurelia-loader',
    'aurelia-framework': 'aurelia-latest/framework/dist/amd/aurelia-framework',
    'aurelia-metadata': 'aurelia-latest/metadata/dist/amd/aurelia-metadata',
    'aurelia-binding': 'aurelia-latest/binding/dist/amd/aurelia-binding',
    'aurelia-templating': 'aurelia-latest/templating/dist/amd/aurelia-templating',
    'aurelia-dependency-injection': 'aurelia-latest/dependency-injection/dist/amd/aurelia-dependency-injection',
    'aurelia-router': 'aurelia-latest/router/dist/amd/aurelia-router',
    'aurelia-templating-binding': 'aurelia-latest/templating-binding/dist/amd/aurelia-templating-binding',
    'aurelia-templating-router': 'aurelia-latest/templating-router/dist/amd/aurelia-templating-router',
    'aurelia-route-recognizer': 'aurelia-latest/route-recognizer/dist/amd/aurelia-route-recognizer',
    'aurelia-http-client': 'aurelia-latest/http-client/dist/amd/aurelia-http-client',
    'aurelia-validation': 'aurelia-latest/validation/dist/amd/aurelia-validation',
    'aurelia-animator-css': 'aurelia-latest/animator-css/dist/amd/aurelia-animator-css'  
  },

  packages : [
    {
      name: 'aurelia-templating-router',
      location: 'aurelia-latest/templating-router/dist/amd',
      main : 'aurelia-templating-router'
    },
   {
     name: 'aurelia-templating-resources',
     location: 'aurelia-latest/templating-resources/dist/amd',
     main : 'aurelia-templating-resources'
   },
   {
     name: 'aurelia-validation',
     location: 'aurelia-latest/validation/dist/amd',
     main : 'index'
   },
   { name: "core-js", location: "bower_components/core-js/client", main: "core" }  ]
});
