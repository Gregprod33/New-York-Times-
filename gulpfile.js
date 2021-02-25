'use strict'; // oblige à déclarer les variables ou constantes (let, var, const)

var gulp  			= require('gulp'),
	sass 			= require('gulp-sass'),
	autoprefixer 	= require('gulp-autoprefixer'),
	sourcemaps 		= require('gulp-sourcemaps'),
	cleancss 		= require('gulp-clean-css'),
	rename 			= require('gulp-rename'),
	notify 			= require('gulp-notify'),
	browsersync 	= require('browser-sync');

sass.compiler 		= require('node-sass');

gulp.task('browser-sync', function() {
	browsersync.init({
		server: {
			baseDir: "./" // à utiliser en cas de site statique (html)
		}
		// proxy: "localhost/file_name/", au cas où vous êtes sur un serveur local type wamp, mamp ou xamp
	})
})
gulp.task('style', function () {
  return gulp.src('./assets/css/src/**/*.scss') //  on lui indique où sont les fichiers scss
  	.pipe(sourcemaps.init()) // va indexer tous les fichiers css
    .pipe(sass({outputStyle: 'compressed'}).on('error', notify.onError())) // on l'envoie au préprocesseur sass de façon compressé
    .pipe(rename({suffix: '.min', prefix: ''}))
    .pipe(autoprefixer(['last 15 versions'])) // autoprefixer automatiquement les propriétés css
    .pipe(cleancss({level: {1: {specialComments: 0}}})) // permet de nettoyer le fichier css des commentaires
    .pipe(sourcemaps.write()) // ecrit le sourcemaps dans le fichier css compilé
    .pipe(gulp.dest('./assets/css/dist')) // on lui indique où il envoie le fichier compilé css
    .pipe(notify({message: 'Super, le CSS est bien compilé !!!', onLast: true}))// afficher message succes si tout va bien
    .pipe(browsersync.stream()); // rafraichi le navigateur avec les modifs
});

gulp.task('watch', function() {
	gulp.watch('./assets/css/src/**/*.scss', gulp.parallel('style'))
})

gulp.task('default', gulp.parallel('style', 'watch', 'browser-sync'));
