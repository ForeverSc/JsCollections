module.exports=function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      //文件头部输出信息
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      my_target: {
        files: [
          {
            expand: true,
            //相对路径
            cwd: 'source/js/',
            src: '*.js',
            dest: 'dest/js/',
            rename: function (dest, src) {  
                  
                  var filename = src.substring(src.lastIndexOf('/'), src.length);  
                  //  var filename=src;  
                  filename = filename.substring(0, filename.lastIndexOf('.'));  
                  var fileresult=dest  + filename + '.min.js';  
                  grunt.log.writeln("现处理文件："+src+"  处理后文件："+fileresult);  
                  return fileresult;  
                  //return  filename + '.min.js';  
                } 
          }
        ]
      }
    }
  });

    // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify']);
}