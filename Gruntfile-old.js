// Generated on 2014-08-15 using generator-angular 0.9.5
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-text-replace');

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // configs for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist',
    // Google Analytics Profile IDs
    // sandboxGAID: 'UA-62604802-1',
    // demoGAID:'UA-62595914-1',
    // prodGAID:'UA-62602211-1',
    // devMixpanelID: grunt.option('track') ? 'f21c8bc9de2aeaad5f0ac8153cab1784': 'YOUR TOKEN',
    // sandboxMixpanelID:'026256d731c7cf618f03359bca1316e5',
    // demoMixpanelID:'240d77bc24a899baad36fbd9b0d5e557',
    prodMixpanelID:'3ea31bf92bd6d3ff13ac01ed76109d90'
  };

  // version for ng-include cache value
  var version =  Math.floor((Math.random() * 10000) + 1);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,
    // ngconstant: {
    //   // Options for all targets
    //   options: {
    //     space: '  ',
    //     wrap: '"use strict";\n\n {%= __ngModule %}',
    //     name: 'config',
    //   },
    //   // Environment targets
    //   development: {
    //     options: {
    //       dest: '<%= yeoman.app %>/scripts/config.js'
    //     },
    //     constants: {
    //       ENV: {
    //         track: grunt.option('track') || 0,
    //         name: 'development',
    //         APIURL: 'http://localhost:8000/api/'
    //       }
    //     }
    //   },
    //   test: {
    //     options: {
    //       dest: '<%= yeoman.app %>/scripts/config.js'
    //     },
    //     constants:{
    //       ENV: {
    //         track: grunt.option('track') || 0,
    //         name: 'test',
    //         APIURL: 'http://localhost:8000/api/',
    //         SHIPPERUSERNAME: 'jennifer+testcarrier@traansmission.com',
    //         PASSWORD: 'testpassword',
    //         COMPANY:'test company',
    //         PHONENUMBER:'6666666666'
    //       }
    //     }
    //   },
    //   demo: {
    //     options: {
    //       dest: '<%= yeoman.dist %>/scripts/config.js'
    //     },
    //     constants: {
    //       ENV: {
    //         name: 'demo',
    //         APIURL: 'http://demo.traansmission.com/api/',
    //         track: grunt.option('track') || 1
    //       }
    //     }
    //   },
    //   demoApp: {
    //     options: {
    //       dest: '<%= yeoman.app %>/scripts/config.js'
    //     },
    //     constants: {
    //       ENV: {
    //         name: 'demoApp',
    //         APIURL: 'http://demo.traansmission.com/api/',
    //         track: grunt.option('track') || 0
    //       }
    //     }
    //   },
    //   productionApp: {
    //     options: {
    //       dest: '<%= yeoman.app %>/scripts/config.js', 
    //     },
    //     constants: {
    //       ENV: {
    //         name: 'productionApp',
    //         APIURL: 'http://api.traansmission.com/api/',
    //         track: 0
    //       }
    //     }
    //   },
    //   production: {
    //     options: {
    //       dest: '<%= yeoman.dist %>/scripts/config.js', 
    //     },
    //     constants: {
    //       ENV: {
    //         name: 'production',
    //         APIURL: 'http://api.traansmission.com/api/',
    //         track: grunt.option('track') || 1
    //       }
    //     }
    //   },
    //   sandbox: {
    //     options: {
    //       dest: '<%= yeoman.app %>/scripts/config.js', 
    //     },
    //     constants: {
    //       ENV: {
    //         name: 'sandboxApp',
    //         APIURL: 'http://sandbox.traansmission.com/api/',
    //         track: grunt.option('track') || 0
    //       }
    //     }
    //   },
    //   sandboxApp: {
    //     options: {
    //       dest: '<%= yeoman.dist %>/scripts/config.js', 
    //     },
    //     constants: {
    //       ENV: {
    //         name: 'sandbox',
    //         APIURL: 'http://sandbox.traansmission.com/api/',
    //         track : grunt.option('track') || 0
    //       }
    //     }
    //   }
    // },  
    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
      compass: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['compass:server', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      }
    },
    // For adding a version argument to ng-include templates so they are reloaded from server
    replace: {
        // if you have version arguments in dev, clean them out
       cleanDev: {
        src: ['.html', '<%= yeoman.app %>/views/**/*.html', '<%= yeoman.app %>/scripts/**/*.html'],// source files array (supports minimatch)
        overwrite:true,
        replacements: [{
            from: /ng-include="'.*html\?version=\d*/g,      // find all ng-includes
            to: function (match) {   // callback replacement
              // generate random number for version
              var oldVersion = /\?version=\d*/;
              var newMatch = match.replace(oldVersion, ''); 
              return newMatch;
            },
          }]
      },
      // append version arg to ng-include urls
      build: {
        src: ['<%= yeoman.dist %>/{,*/}*.html', '<%= yeoman.dist %>/views/**/*.html', '<%= yeoman.dist %>/scripts/scripts*', '<%= yeoman.dist %>/scripts/**/*.html'],// source files array (supports minimatch)
        overwrite:true,
        replacements: [{
            from: /ng-include="'[^']*/g,      // find all ng-includes (e.g. ng-include="'views/carriers/navbar.html)
            to: function (match) {   // callback replacement
              // generate random number for version
              return match + '?version='+version;
            }
          },
          {
            from: /templateUrl:"views\/\w*.html/g, // find all templateUrls
            to: function (match) {   // callback replacement
              // add version number to template url
              return match + '?version='+version;
            }
        },
        {
            from: /templateUrl:"scripts\/\w*.html/g, // find all templateUrls
            to: function (match) {   // callback replacement
              // add version number to template url
              return match + '?version='+version;
            }
        }]
      },
     // devReps: {
     //      src: ['<%= yeoman.app %>/index.html'],// source files array (supports minimatch)
     //      overwrite:true,
     //      replacements: [
     //        {
     //          from: /mixpanel\.init\(\"(.+)\"\);/g,      // find all GA profile ids 
     //          to: function (match) {   // callback replacement
     //            return 'mixpanel.init("' +appConfig.devMixpanelID + '");';
     //          }
     //        }

     //      ],
     //  },
      // sandboxReps: {
      //     src: ['<%= yeoman.dist %>/index.html'],// source files array (supports minimatch)
      //     overwrite:true,
      //     replacements: [
      //       {
      //         from: /UA-[0-9]+-[0-9]+/g,      // find all GA profile ids 
      //         to: function (match) {   // callback replacement
      //           return appConfig.sandboxGAID;
      //         }
      //       },
      //       {
      //         from: /mixpanel\.init\(\"(.+)\"\);/g,      // find all GA profile ids 
      //         to: function (match) {   // callback replacement
      //           return 'mixpanel.init("' +appConfig.sandboxMixpanelID + '");';
      //         }
      //       }

      //     ],
      //   },
        // demoReps: {
        //   src: ['<%= yeoman.dist %>/index.html'],// source files array (supports minimatch)
        //   overwrite:true,
        //   replacements: [
        //     {
        //       from: /UA-[0-9]+-[0-9]+/g,      // find all GA profile ids 
        //       to: function (match) {   // callback replacement
        //         // generate random number for version
        //         return appConfig.demoGAID;
        //       }
        //     },
        //     {
        //       from: /mixpanel\.init\(\"(.+)\"\);/g,      // find all GA profile ids 
        //       to: function (match) {   // callback replacement
        //         return 'mixpanel.init("' +appConfig.demoMixpanelID + '");';
        //       }
        //     }
        //   ],
        // },
        prodReps: {
          src: ['<%= yeoman.dist %>/index.html'],// source files array (supports minimatch)
          overwrite:true,
          replacements: [
            // {
            //   from: /UA-[0-9]+-[0-9]+/g,      // find all GA profile ids 
            //   to: function (match) {   // callback replacement
            //   // generate random number for version
            //   return appConfig.prodGAID;
            //   }
            // },
            {
              from: /mixpanel\.init\(\"(.+)\"\);/g,      // find all GA profile ids 
              to: function (match) {   // callback replacement
                return 'mixpanel.init("' +appConfig.prodMixpanelID + '");';
              }
            }
          ],
        }
    },
    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath:  /\.\.\//
      },
      test: {
        devDependencies: true,
        src: '<%= karma.unit.configFile %>',
        ignorePath:  /\.\.\//,
        fileTypes:{
          js: {
            block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
              detect: {
                js: /'(.*\.js)'/gi
              },
              replace: {
                js: '\'{{filePath}}\','
              }
            }
          }
      },
      sass: {
        src: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        ignorePath: /(\.\.\/){1,2}bower_components\//
      }
    },


    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      options: {
        sassDir: '<%= yeoman.app %>/styles',
        cssDir: '.tmp/styles',
        generatedImagesDir: '.tmp/images/generated',
        imagesDir: '<%= yeoman.app %>/images',
        javascriptsDir: '<%= yeoman.app %>/scripts',
        fontsDir: '<%= yeoman.app %>/styles/fonts',
        importPath: './bower_components',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/styles/fonts',
        relativeAssets: false,
        assetCacheBuster: false,
        raw: 'Sass::Script::Number.precision = 10\n'
      },
      dist: {
        options: {
          generatedImagesDir: '<%= yeoman.dist %>/images/generated'
        }
      },
      server: {
        options: {
          debugInfo: true,
          sourcemap: true
        }
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= yeoman.dist %>/scripts/{,*/}*.js',
          '<%= yeoman.dist %>/styles/{,*/}*.css',
          '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= yeoman.dist %>/styles/fonts/*'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html', '<%= yeoman.dist %>/scripts/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= yeoman.dist %>','<%= yeoman.dist %>/images'],
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    cssmin: {
       dist: {
         files: {
          '<%= yeoman.dist %>/styles/main.css': [
             '.tmp/styles/{,*/}*.css'
           ]
          }
        },
        // options: {
        //   patterns: {
        //   css: [
        //     [/(\/bower_components\/bootstrap-sass-official\/assets\/fonts\/bootstrap)/g, 'god help me', function(match) {
        //       return match.replace('/bootstrap-sass-official/assets/fonts/bootstrap', '../fonts');
        //     }]
        //     ]
        //   }
        // }
      
     },
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/scripts/scripts.js': [
    //         '<%= yeoman.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    // concat: {
    //   dist: {}
    // },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html', 'views/**/*.html', 'scripts/**/*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    // ngmin tries to make the code safe for minification automatically by
    // using the Angular long form for dependency injection. It doesn't work on
    // things like resolve or inject so those have to be done manually.
    // ngmin: {
    //   dist: {
    //     files: [{
    //       expand: true,
    //       cwd: '.tmp/concat/scripts',
    //       src: '*.js',
    //       dest: '.tmp/concat/scripts'
    //     }]
    //   }
    // },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'views/**/*.html',
            'scripts/**/*.html',
            'images/{,*/}*.{webp}',
            'fonts/*',
            'config/**/*.js',
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: '.',
          src: 'bower_components/bootstrap-sass-official/assets/fonts/bootstrap/*',
          dest: '<%= yeoman.dist %>'
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'compass:server'
      ],
      test: [
        'compass'
      ],
      dist: [
        'compass:dist',
        'imagemin',
        'svgmin'
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    }
  });


  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist' || target === 'build') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }
    if (target === 'sandbox'){
      return grunt.task.run(['sandbox', 'connect:dist:keepalive']);
    }
    if (target === 'demo'){
      return grunt.task.run(['demo', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      // 'ngconstant:development',
      'wiredep',
      'replace:cleanDev',
      // 'replace:devReps',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  // grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
  //   grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
  //   grunt.task.run(['serve:' + target]);
  // });

  // grunt.registerTask('test', [
  //   'clean:server',
  //   'wiredep',
  //   'concurrent:test',
  //   'autoprefixer',
  //   'connect:test',
  //   'karma'
  // ]);


  // grunt.registerTask('demo', [
  //     'clean:dist',
  //     // 'ngconstant:demoApp',
  //     // 'ngconstant:demo',
  //     'wiredep',
  //     'useminPrepare',
  //     'concurrent:dist',
  //     'autoprefixer',
  //     'concat',
  //     // 'ngmin',
  //     'ngAnnotate',
  //     'copy:dist',
  //     'cdnify',
  //     'cssmin',
  //     'uglify',
  //     'filerev',
  //     'usemin',
  //     'htmlmin',
  //     'replace:build',
  //     'replace:demoReps'
  // ]);

  grunt.registerTask('build', [
    'clean:dist',
    // 'ngconstant:production',
    // 'ngconstant:productionApp',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    // 'ngmin',
    'ngAnnotate',
    'copy:dist',
    'cdnify',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin',
    'replace:build',
    'replace:prodReps'
  ]);
  
  // grunt.registerTask('sandbox', [
  //   'clean:dist',
  //   // 'ngconstant:sandbox',
  //   // 'ngconstant:sandboxApp',
  //   'wiredep',
  //   'useminPrepare',
  //   'concurrent:dist',
  //   'autoprefixer',
  //   'concat',
  //   // 'ngmin',
  //   'ngAnnotate',
  //   'copy:dist',
  //   'cdnify',
  //   'cssmin',
  //   'uglify',
  //   'filerev',
  //   'usemin',
  //   'htmlmin',
  //   'replace:build',
  //   'replace:sandboxReps' // search and replaces
  // ]);

  // grunt.registerTask('default', [
  //   'newer:jshint',
  //   'test',
  //   'build'
  // ]);
};
