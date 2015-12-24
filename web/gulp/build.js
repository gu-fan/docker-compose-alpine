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
    // gutil.log('Build Task Finished.')
    console.log(process.cwd())
    process.chdir('./app')
    console.log(process.cwd())

    // p = spawn('gulp', ['build-0'], {
    //     stdio:'inherit',
    //     cwd: path.join(process.cwd(), 'app'),
    //     env: process.env
    //     })
})

// gulp.task('build', function(){
//     gutil.log('Build Task Finished.')
//     p = spawn('gulp', ['build-0'], {
//         stdio:'inherit',
//         cwd: path.join(process.cwd(), 'app'),
//         env: process.env
//         })
// })
