var gulp    = require("gulp"),
    jade    = require("gulp-jade"),
    tsConf  = require("./tsconfig"),
    ts      = require("gulp-typescript");
    
/*| dir structure |*/

var dir = {
    "bin":"./bin/",
    "pub":"./pub/",
    "pre":"./pre/",
    "test":"./test/"
}
var bin = {
    "jade":dir.bin + "/jade/**/*.jade",
    "script":dir.bin + "/script/**/*.ts",
    "scss":dir.bin + "/scss/**/*.scss"
}
var lst = {
    "scripts":"scripts",
    "scss":"css",
    "ts":"**/*.ts"

}
/*|watches|*/
gulp.task('default', function() {
    console.log(" i am in");
});

/*|compilers >>>>>>  |*/
gulp.task('tsc', function() {
    return gulp.src(bin.script)
    .pipe(ts(tsConf.compilerOptions))
      .pipe(gulp.dest(dir.pre + lst.scripts))
});
gulp.task('tst', function() {
    return gulp.src(dir.test + lst.ts)
    .pipe(ts(tsConf.compilerOptions))
      .pipe(gulp.dest(dir.pre + "test/"))
});