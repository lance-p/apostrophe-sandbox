var apos = require('apostrophe')({
  shortName: 'apostrophesandbox',
  title: 'Apostrophe Sandbox 2.0.0',
  demo: true,
  
  bundles: ['apostrophe-blog'],

  // These are the modules we want to bring into the project.
  modules: {
    
    'apostrophe-templates': { viewsFolderFallback: __dirname + '/views' },
    'apostrophe-express': {
      session: {
        secret: 'ksajhfkdsfha43fahif3a8asdfkyfsd7f'
      }
    },
    
    // Standard Apostrophe Modules
    'apostrophe-search': {},
    'apostrophe-assets': {},
    'apostrophe-blog': {},
    'apostrophe-blog-pages': {},
    'apostrophe-blog-widgets': {},
    'apostrophe-users': {},
    'apostrophe-pages': {
          // other configuration, then ...
          park: [
            {
              slug: '/search',
              type: 'apostrophe-search',
              label: 'Search',
              published: true
            }
          ]
        },
    // Apostrophe Sandbox (as-) specific modules
    'as-helpers': {},
    'as-two-column-block-widgets': {}

    // REMOVE ME IMMEDIATELY if you are not running a public demo
    // that should let EVERYBODY be INSTANTLY loggged in AS ADMIN!
    //'demo-autologin': {},

  }

});
