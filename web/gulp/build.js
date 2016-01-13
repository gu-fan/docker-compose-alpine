var gulp = require('gulp')
var gutil = require("gulp-util");
var normalizedPath = require("path").join(__dirname, "tasks");
var config = require('./config')
var spawn = require('child_process').spawn
var path = require('path')

require("fs").readdirSync(normalizedPath).forEach(function(file) {
    if ( config.file_list.indexOf(file.split('.')[0]) != -1  ) {
        require("./tasks/" + file);
    }

});

gulp.task('build', config.file_list, function(){
    gutil.log('Build Task Finished.')
})
gulp.task('cwd', function(){
    process.chdir('./app')
})
