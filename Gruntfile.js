// Generated on 2013-04-30 using generator-webapp 0.1.7
'use strict';
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            coffee: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.coffee'],
                tasks: ['coffee:dist']
            },
            coffeeTest: {
                files: ['test/spec/{,*/}*.coffee'],
                tasks: ['coffee:test']
            },
            compass: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:server']
            },
            livereload: {
                files: [
                    '<%= yeoman.app %>/*.html',
                    '{.tmp,<%= yeoman.app %>}/styles/{,*/}*.css',
                    '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ],
                tasks: ['livereload']
            }
        },
        connect: {
            options: {
                port: 9000,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'app')
                        ];
                    }
                }
            },
            test: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'test')
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, 'dist')
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/{,*/}*.js',
                '!<%= yeoman.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://localhost:<%= connect.options.port %>/index.html']
                }
            }
        },
        coffee: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/scripts',
                    src: '{,*/}*.coffee',
                    dest: '.tmp/scripts',
                    ext: '.js'
                }]
            },
            test: {
                files: [{
                    expand: true,
                    cwd: 'test/spec',
                    src: '{,*/}*.coffee',
                    dest: '.tmp/spec',
                    ext: '.js'
                }]
            }
        },
        compass: {
            options: {
                sassDir: '<%= yeoman.app %>/styles',
                cssDir: '.tmp/styles',
                imagesDir: '<%= yeoman.app %>/images',
                javascriptsDir: '<%= yeoman.app %>/scripts',
                fontsDir: '<%= yeoman.app %>/styles/fonts',
                importPath: 'app/components',
                relativeAssets: true
            },
            dist: {},
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        concat: {
            dist: {
                files: {
                    'app/components/qTip2/dist/jquery.qtip.js': [
                        'app/components/qTip2/src/core/intro.js',
                        'app/components/qTip2/src/core/constants.js',
                        'app/components/qTip2/src/core/class.js',

                        'app/components/qTip2/src/core/options.js',
                        'app/components/qTip2/src/core/content.js',
                        'app/components/qTip2/src/core/position.js',
                        'app/components/qTip2/src/core/toggle.js',
                        'app/components/qTip2/src/core/focus.js',
                        'app/components/qTip2/src/core/disable.js',
                        'app/components/qTip2/src/core/button.js',
                        'app/components/qTip2/src/core/style.js',
                        'app/components/qTip2/src/core/events.js',

                        'app/components/qTip2/src/core/jquery_methods.js',
                        'app/components/qTip2/src/core/jquery_overrides.js',

                        'app/components/qTip2/src/core/defaults.js',

                        'app/components/qTip2/src/tips/tips.js',
                        'app/components/qTip2/src/viewport/viewport.js',

                        'app/components/qTip2/src/core/outro.js',

                        'app/components/imagesloaded/jquery.imagesloaded.js'
                    ],
                    'app/components/qTip2/src/_core.scss': 'app/components/qTip2/src/core.css',
                    'app/components/qTip2/src/_css3.scss': 'app/components/qTip2/src/css3.css',
                    'app/components/qTip2/src/tips/_tips.scss': 'app/components/qTip2/src/tips/tips.css',
                    'app/components/select2/_select2.scss': 'app/components/select2/select2.css'
                }
            }
        },
        requirejs: {
            dist: {
                // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
                options: {
                    // `name` and `out` is set by grunt-usemin
                    baseUrl: 'app/scripts',
                    optimize: 'none',
                    // TODO: Figure out how to make sourcemaps work with grunt-usemin
                    // https://github.com/yeoman/grunt-usemin/issues/30
                    //generateSourceMaps: true,
                    // required to support SourceMaps
                    // http://requirejs.org/docs/errors.html#sourcemapcomments
                    preserveLicenseComments: false,
                    useStrict: true,
                    wrap: true,
                    //uglify2: {} // https://github.com/mishoo/UglifyJS2
                    paths: {
                        timetableData: 'empty:'
                    }
                }
            }
        },
        rev: {
            dist: {
                files: {
                    src: [
                        // '<%= yeoman.dist %>/scripts/{,*/}*.js',
                        '<%= yeoman.dist %>/styles/{,*/}*.css',
                        '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
                        '<%= yeoman.dist %>/styles/fonts/*'
                    ]
                }
            }
        },
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>'
            }
        },
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                dirs: ['<%= yeoman.dist %>']
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
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
        cssmin: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/styles/exports.css': '.tmp/styles/exports.css',
                    '<%= yeoman.dist %>/styles/main.css': '.tmp/styles/main.css'
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: '*.html',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.*',
                        '.htaccess',
                        'font/*',
                        'media/*',
                        'json/*',
                        'scripts/nus_timetable_data.js',
                        'snappy/**',
                        'styles/*.{gif,png}'
                    ]
                }]
            }
        },
        concurrent: {
            server: [
                'coffee:dist',
                'compass:server'
            ],
            test: [
                'coffee',
                'compass'
            ],
            dist: [
                'coffee',
                'compass:dist',
                'imagemin',
                'svgmin',
                'htmlmin'
            ]
        },
        bower: {
            options: {
                exclude: ['modernizr']
            },
            all: {
                rjsConfig: '<%= yeoman.app %>/scripts/main.js'
            }
        },
        crawlNTU: {
            academicYear: 2012,
            baseUrl: 'https://wish.wis.ntu.edu.sg/webexe/owa/',
            cachePath: 'cache',
            dest: 'app/json/ntu_module_info.json',
            maxCacheAge: 24 * 60 * 60, // in seconds
            maxConcurrentFiles: 64,
            maxConcurrentSockets: 8,
            refresh: false,
            semester: 2
        },
        crawlNUS: {
            academicYear: 2012,
            baseUrl: 'https://sit.aces01.nus.edu.sg/cors/jsp/report/',
            cachePath: 'cache',
            dest: 'app/json/nus_module_info.json',
            maxCacheAge: 24 * 60 * 60, // in seconds
            maxConcurrentFiles: 64,
            maxConcurrentSockets: 8,
            refresh: false,
            semester: 2
        },
        download: {
            ntu: {
                options: {
                    dest: 'app/json/ntu_module_info.json',
                    src: 'http://nusmods.com/json/ntu_module_info.json'
                }
            },
            nus: {
                options: {
                    dest: 'app/json/nus_module_info.json',
                    src: 'http://nusmods.com/json/nus_module_info.json'
                }
            }
        },
        jsifyNTU: {
            destModuleFinder: 'app/scripts/ntu_module_data.js',
            destTimetable: 'app/scripts/ntu_timetable_data.js',
            src: 'app/json/ntu_module_info.json'
        },
        jsifyNUS: {
            destModuleFinder: 'app/scripts/nus_module_data.js',
            destTimetable: 'app/scripts/nus_timetable_data.js',
            src: 'app/json/nus_module_info.json'
        }
    });

    grunt.loadTasks('tasks');

    grunt.renameTask('regarde', 'watch');

    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concat',
            'concurrent:server',
            'livereload-start',
            'connect:livereload',
            'open',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'connect:test',
        'mocha'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concat',
        'concurrent:dist',
        'requirejs',
        'cssmin',
        'concat',
        'uglify',
        'copy',
        'rev',
        'usemin'
    ]);

    grunt.registerTask('default', [
        // 'jshint',
        // 'test',
        'build'
    ]);
};