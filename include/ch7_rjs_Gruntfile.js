"use strict";

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Task configuration.
        clean: {
            files: ["dist"] // <1>
        },
        requirejs: {        // <2>
            compile: {
                options: {
                    name: "config",
                    mainConfigFile: "app/config.js",
                    out: "<%= concat.dist.dest %>",
                    optimize: "none"
                }
            }
        },
        concat: {       // <3>
            dist: {
                src: ["components/requirejs/require.js", "<%= concat.dist.dest %>"],
                dest: "dist/require.js"
            }
        },
        uglify: {       // <4>
            dist: {
                src: "<%= concat.dist.dest %>",
                dest: "dist/require.min.js"
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");      // <5>
    grunt.loadNpmTasks("grunt-contrib-requirejs");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("default", ["clean", "requirejs", "concat", "uglify"]);  // <6>
};