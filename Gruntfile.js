module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt); 

  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'assets/miapower/css/importer.css': 'assets/miapower/sass/importer.scss'
        }
      }
    },
  });
  grunt.registerTask('default', ['sass']);
}
