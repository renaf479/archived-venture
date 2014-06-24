module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	
	grunt.initConfig({
		/** Copies SRC to BUILD folder **/
		copy: {
			build: {
				cwd: 'src',
				src: ['**'],
				dest: 'build',
				expand: true
			},
	    },
	    /** Wipes BUILD folder when finished **/
	    clean: {
			build: {
				src: ['build']
			},
		},
		/** Adds CSS vendor prefixes **/
		autoprefixer: {
			build: {
				expand: true,
				cwd: 'build',
				src: [ '**/*.css' ],
				dest: 'build'
			}
		},
		/** Minifies CSS **/
		cssmin: {
			build: {
				files: {
					'public/css/main.css': ['src/**/*.css']
				}
			}
		},
		/** Minifies JS **/
		uglify: {
			build: {
				options: {
					mangle: false
				},
				files: {
					'public/js/main.js': ['src/**/*.js']
				}
			}
		},
		/** Combines and minifes Angular templates */
	    ngtemplates: {
			ventureApp: {
				cwd:		'public/',
				src:        'views/**/*.html',
				dest:       'src/js/app/global/ventureTemplates.js',
				options: {
					htmlmin: {
						collapseBooleanAttributes:      true,
						collapseWhitespace:             true,
						removeAttributeQuotes:          true,
						removeComments:                 true,
						removeEmptyAttributes:          true,
						removeRedundantAttributes:      true,
						removeScriptTypeAttributes:     true,
						removeStyleLinkTypeAttributes:  true
					}
				}
			}
		},
		watch: {
			stylesheets: {
				files: 'src/**/*.css',
				tasks: ['stylesheets']
			},
			scripts: {
				files: 'src/**/*.js',
				tasks: ['scripts']
			},
			templates: {
				files: ['public/views/**/*.html'],
				tasks: ['templates']
			},
			copy: {
				files: ['src/**'],
				tasks: ['copy']
			}
		},
	});
    
    grunt.registerTask(
		'default', 
		'Watches the project for changes, automatically builds them', 
		['build', 'watch']
	);
    
    grunt.registerTask(
		'stylesheets', 
		'Compiles the stylesheets.', 
		['autoprefixer', 'cssmin']
	);
	
	grunt.registerTask(
		'scripts', 
		'Compiles the JavaScript files.', 
		['uglify']
	);

	grunt.registerTask(
		'templates',
		'Combines and minifies AngularJS template partials',
		['ngtemplates']
	);
    
    grunt.registerTask(
		'build', 
		'Compiles all of the assets and copies the files to the build directory.', 
		['ngtemplates', 'stylesheets', 'scripts']
	);
}