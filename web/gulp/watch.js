var gulp = require('gulp')
var gutil = require("gulp-util");

var chalk = gutil.colors

var path = require('path')
var rel = require('path').relative

// var nodemon = require('nodemon');
var lr = require('./lib/lr')
var gulp_config = require('gulp/config')
var watch_list = gulp_config.watch_list

var config = require('config')

var is_start = false ;

var spawn=require('child_process').spawn

var s 
function restart_server() {
   if (s && !s.killed) {
        console.log('RESTART: kill server: ' + s.pid)
        s.kill()
    }
   setTimeout(function() { 
    start_server()
   }, 20);
}
function start_server(){

    console.log('ssssss')
    s = spawn('node',['/web/app/bin/www'], {
        stdio:'inherit',
        env : {
            "NODE_ENV": "development",
            "PORT": "3000",
            "LIVERELOAD": "TRUE",
        },
    })


    console.log('ssssss')
    console.log('ssssss')
    console.log('start server:'+ s.pid)

    // if (!is_start) { 
    //     lr.listen() 
    //     is_start = true
    // } else {
    //     lr.reload() 
    // }

    // Start nodemon server
//     nodemon({
//         script: 'bin/www',
//         ext : 'js',
//         watch: 'server#<{(||)}>#*.js',
//         ignore: ['client#<{(||)}>#*.*'],
//         exec: process.env.DEBUG ? 'node --debug' : 'node',
//         verbose: true,
//         env : {
//             "NODE_ENV": "development",
//             "PORT": "3000",
//             "LIVERELOAD": "TRUE",
//         },
//         stdout: true
//     }).on('start', function() { // The start event will emit on every reload.
//         if (!is_start) {
//             gutil.log(chalk.green('Start server at 3000'))
//             is_start = true
// // livereload server should be same with server reload.
//             // TODO
//             // To active the livereload server on main process, we should use
//             // fork and send message.
//             lr.listen() 
//         }
//     }).on('restart', function() {
//         // NOTE: Emit reload after server started,
//         // so no CONNECTION-FAILED page will appear.
//         setTimeout(function() { 
//             gutil.log(chalk.green('Restart server'))
//             lr.reload()
//         }, 40);
//     }).on('exit', function(){
//         gutil.log('[nodemon] quit')
//                                 
//     // NO LOG
//     // }).on('log', function(log){
//     //     gutil.log('[nodemon] ' + log.message)
//     })
}


// NOTE:
// This task shoold be run as a child process of default task
gulp.task('watch', function(){

    process.chdir('./app')

    // watch files for tasks
    // gulp.watch('server/views#<{(||)}>#*.html', function(file){
    //     gutil.log('html ' + chalk.yellow(file.path) + ' changed')
    //     lr.reload(rel(config.public_dir, file.path))
    // })
    gulp.watch('client/**/*.html', function(file){
        gutil.log('html ' + chalk.yellow(file.path) + ' changed')
        lr.reload(rel(config.public_dir, file.path))
    })

    gulp.watch('../public/**/*.js', function(file){
        gutil.log('js ' + chalk.yellow(file.path) + ' changed')
        lr.reload(rel(config.public_dir, file.path))
    })

    gulp.watch('../public/**/*.css', function(file){
        gutil.log('css ' + chalk.yellow(file.path) + ' changed')
        lr.reload(rel(config.public_dir, file.path))
    })

    for (var i=0; i < watch_list.length; ++i) {
        gulp.watch(watch_list[i][0], watch_list[i][1])
    }

    gulp.watch('server/**/*.js', function(file){
        gutil.log('server js' + chalk.yellow(file.path) + ' changed')
        restart_server()
    })
    start_server()

    process.on('exit', function(code) {
        // nodemon.emit('quit')
       if (s && !s.killed) {
            console.log('kill server:' + s.pid)
            s.kill()
        }
        gutil.log(chalk.blue('======= Finish Watch ======='))
    });
})
