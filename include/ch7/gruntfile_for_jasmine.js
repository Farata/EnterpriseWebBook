module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        jasmine: { // <1>
            src: ['app/Player.js', 'app/Song.js'], // <2>
            options: {
                specs: 'test/spec/PlayerSpec.js', // <3>
                helpers: 'test/spec/SpecHelper.js' // <4>
            }
        }
    });

    // Alias the `test` task
    grunt.registerTask('test', 'jasmine');
    // loading jasmine grunt module
    grunt.loadNpmTasks('grunt-contrib-jasmine'); // <5>
};