var $section = $("section");
var $h3 = $("h3");

$h3.hide();

$(document).ready( function() {

	//
	$(".nav-btn").on("click", function(){
		$(".nav-content").slideToggle("slow");
	});

	$section.on("inview", function(event, isInView){
		$h3.show();
	});

});


module.exports = function(grunt){

	// Project configuration. 
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		
		concat: {
		    dist: {
		      src: '*.js',
		      dest: 'built.js',
		    }
		},

		uglify: {
			dist: {
				src: 'built.js',
				dest: 'built.min.js'
			}
		},

		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'css/style.css': 'scss/style.scss'
				}
			}
		},

		watch: {
			css: {
            	files: ['**/*.scss'],
            	tasks: ['sass'],
            	options: {
                spawn: false,
                livereload: true,
            	}
        	}
		}
});



	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat', 'uglify', 'sass']);
	grunt.registerTask('dev', ['watch']);

};
var $section=$("section"),$h3=$("h3");$h3.hide(),$(document).ready(function(){$(".nav-btn").on("click",function(){$(".nav-content").slideToggle("slow")}),$section.on("inview",function(s,t){$h3.show()})}),module.exports=function(s){s.initConfig({pkg:s.file.readJSON("package.json"),concat:{dist:{src:"*.js",dest:"built.js"}},uglify:{dist:{src:"built.js",dest:"built.min.js"}},sass:{dist:{options:{style:"compressed"},files:{"css/style.css":"scss/style.scss"}}},watch:{css:{files:["**/*.scss"],tasks:["sass"],options:{spawn:!1,livereload:!0}}}}),s.loadNpmTasks("grunt-contrib-concat"),s.loadNpmTasks("grunt-contrib-uglify"),s.loadNpmTasks("grunt-contrib-sass"),s.loadNpmTasks("grunt-contrib-watch"),s.registerTask("default",["concat","uglify","sass"]),s.registerTask("dev",["watch"])};

module.exports = function(grunt){

	// Project configuration. 
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		
		concat: {
		    dist: {
		      src: '*.js',
		      dest: 'built.js',
		    }
		},

		uglify: {
			dist: {
				src: 'built.js',
				dest: 'built.min.js'
			}
		},

		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'css/style.css': 'scss/style.scss'
				}
			}
		},

		watch: {
			css: {
            	files: ['**/*.scss'],
            	tasks: ['sass'],
            	options: {
                spawn: false,
                livereload: true,
            	}
        	}
		}
});



	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat', 'uglify', 'sass']);
	grunt.registerTask('dev', ['watch']);

};
var $section=$("section"),$h3=$("h3");$h3.hide(),$(document).ready(function(){$(".nav-btn").on("click",function(){$(".nav-content").slideToggle("slow")}),$section.on("inview",function(s,t){$h3.show()})}),module.exports=function(s){s.initConfig({pkg:s.file.readJSON("package.json"),concat:{dist:{src:"*.js",dest:"built.js"}},uglify:{dist:{src:"built.js",dest:"built.min.js"}},sass:{dist:{options:{style:"compressed"},files:{"css/style.css":"scss/style.scss"}}},watch:{css:{files:["**/*.scss"],tasks:["sass"],options:{spawn:!1,livereload:!0}}}}),s.loadNpmTasks("grunt-contrib-concat"),s.loadNpmTasks("grunt-contrib-uglify"),s.loadNpmTasks("grunt-contrib-sass"),s.loadNpmTasks("grunt-contrib-watch"),s.registerTask("default",["concat","uglify","sass"]),s.registerTask("dev",["watch"])};var $section=$("section");($h3=$("h3")).hide(),$(document).ready(function(){$(".nav-btn").on("click",function(){$(".nav-content").slideToggle("slow")}),$section.on("inview",function(s,t){$h3.show()})}),module.exports=function(s){s.initConfig({pkg:s.file.readJSON("package.json"),concat:{dist:{src:"*.js",dest:"built.js"}},uglify:{dist:{src:"built.js",dest:"built.min.js"}},sass:{dist:{options:{style:"compressed"},files:{"css/style.css":"scss/style.scss"}}},watch:{css:{files:["**/*.scss"],tasks:["sass"],options:{spawn:!1,livereload:!0}}}}),s.loadNpmTasks("grunt-contrib-concat"),s.loadNpmTasks("grunt-contrib-uglify"),s.loadNpmTasks("grunt-contrib-sass"),s.loadNpmTasks("grunt-contrib-watch"),s.registerTask("default",["concat","uglify","sass"]),s.registerTask("dev",["watch"])},module.exports=function(s){s.initConfig({pkg:s.file.readJSON("package.json"),concat:{dist:{src:"*.js",dest:"built.js"}},uglify:{dist:{src:"built.js",dest:"built.min.js"}},sass:{dist:{options:{style:"compressed"},files:{"css/style.css":"scss/style.scss"}}},watch:{css:{files:["**/*.scss"],tasks:["sass"],options:{spawn:!1,livereload:!0}}}}),s.loadNpmTasks("grunt-contrib-concat"),s.loadNpmTasks("grunt-contrib-uglify"),s.loadNpmTasks("grunt-contrib-sass"),s.loadNpmTasks("grunt-contrib-watch"),s.registerTask("default",["concat","uglify","sass"]),s.registerTask("dev",["watch"])};

module.exports = function(grunt){

	// Project configuration. 
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		
		concat: {
		    dist: {
		      src: '*.js',
		      dest: 'built.js',
		    }
		},

		uglify: {
			dist: {
				src: 'built.js',
				dest: 'built.min.js'
			}
		},

		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'css/style.css': 'scss/style.scss'
				}
			}
		},

		watch: {
			css: {
            	files: ['**/*.scss'],
            	tasks: ['sass'],
            	options: {
                spawn: false,
                livereload: true,
            	}
        	}
		}
});



	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat', 'uglify', 'sass']);
	grunt.registerTask('dev', ['watch']);

};
var $section=$("section"),$h3=$("h3");$h3.hide(),$(document).ready(function(){$(".nav-btn").on("click",function(){$(".nav-content").slideToggle("slow")}),$section.on("inview",function(s,t){$h3.show()})}),module.exports=function(s){s.initConfig({pkg:s.file.readJSON("package.json"),concat:{dist:{src:"*.js",dest:"built.js"}},uglify:{dist:{src:"built.js",dest:"built.min.js"}},sass:{dist:{options:{style:"compressed"},files:{"css/style.css":"scss/style.scss"}}},watch:{css:{files:["**/*.scss"],tasks:["sass"],options:{spawn:!1,livereload:!0}}}}),s.loadNpmTasks("grunt-contrib-concat"),s.loadNpmTasks("grunt-contrib-uglify"),s.loadNpmTasks("grunt-contrib-sass"),s.loadNpmTasks("grunt-contrib-watch"),s.registerTask("default",["concat","uglify","sass"]),s.registerTask("dev",["watch"])};var $section=$("section");($h3=$("h3")).hide(),$(document).ready(function(){$(".nav-btn").on("click",function(){$(".nav-content").slideToggle("slow")}),$section.on("inview",function(s,t){$h3.show()})}),module.exports=function(s){s.initConfig({pkg:s.file.readJSON("package.json"),concat:{dist:{src:"*.js",dest:"built.js"}},uglify:{dist:{src:"built.js",dest:"built.min.js"}},sass:{dist:{options:{style:"compressed"},files:{"css/style.css":"scss/style.scss"}}},watch:{css:{files:["**/*.scss"],tasks:["sass"],options:{spawn:!1,livereload:!0}}}}),s.loadNpmTasks("grunt-contrib-concat"),s.loadNpmTasks("grunt-contrib-uglify"),s.loadNpmTasks("grunt-contrib-sass"),s.loadNpmTasks("grunt-contrib-watch"),s.registerTask("default",["concat","uglify","sass"]),s.registerTask("dev",["watch"])},module.exports=function(s){s.initConfig({pkg:s.file.readJSON("package.json"),concat:{dist:{src:"*.js",dest:"built.js"}},uglify:{dist:{src:"built.js",dest:"built.min.js"}},sass:{dist:{options:{style:"compressed"},files:{"css/style.css":"scss/style.scss"}}},watch:{css:{files:["**/*.scss"],tasks:["sass"],options:{spawn:!1,livereload:!0}}}}),s.loadNpmTasks("grunt-contrib-concat"),s.loadNpmTasks("grunt-contrib-uglify"),s.loadNpmTasks("grunt-contrib-sass"),s.loadNpmTasks("grunt-contrib-watch"),s.registerTask("default",["concat","uglify","sass"]),s.registerTask("dev",["watch"])};var $section=$("section");($h3=$("h3")).hide(),$(document).ready(function(){$(".nav-btn").on("click",function(){$(".nav-content").slideToggle("slow")}),$section.on("inview",function(s,t){$h3.show()})}),module.exports=function(s){s.initConfig({pkg:s.file.readJSON("package.json"),concat:{dist:{src:"*.js",dest:"built.js"}},uglify:{dist:{src:"built.js",dest:"built.min.js"}},sass:{dist:{options:{style:"compressed"},files:{"css/style.css":"scss/style.scss"}}},watch:{css:{files:["**/*.scss"],tasks:["sass"],options:{spawn:!1,livereload:!0}}}}),s.loadNpmTasks("grunt-contrib-concat"),s.loadNpmTasks("grunt-contrib-uglify"),s.loadNpmTasks("grunt-contrib-sass"),s.loadNpmTasks("grunt-contrib-watch"),s.registerTask("default",["concat","uglify","sass"]),s.registerTask("dev",["watch"])};var $section=$("section");($h3=$("h3")).hide(),$(document).ready(function(){$(".nav-btn").on("click",function(){$(".nav-content").slideToggle("slow")}),$section.on("inview",function(s,t){$h3.show()})}),module.exports=function(s){s.initConfig({pkg:s.file.readJSON("package.json"),concat:{dist:{src:"*.js",dest:"built.js"}},uglify:{dist:{src:"built.js",dest:"built.min.js"}},sass:{dist:{options:{style:"compressed"},files:{"css/style.css":"scss/style.scss"}}},watch:{css:{files:["**/*.scss"],tasks:["sass"],options:{spawn:!1,livereload:!0}}}}),s.loadNpmTasks("grunt-contrib-concat"),s.loadNpmTasks("grunt-contrib-uglify"),s.loadNpmTasks("grunt-contrib-sass"),s.loadNpmTasks("grunt-contrib-watch"),s.registerTask("default",["concat","uglify","sass"]),s.registerTask("dev",["watch"])},module.exports=function(s){s.initConfig({pkg:s.file.readJSON("package.json"),concat:{dist:{src:"*.js",dest:"built.js"}},uglify:{dist:{src:"built.js",dest:"built.min.js"}},sass:{dist:{options:{style:"compressed"},files:{"css/style.css":"scss/style.scss"}}},watch:{css:{files:["**/*.scss"],tasks:["sass"],options:{spawn:!1,livereload:!0}}}}),s.loadNpmTasks("grunt-contrib-concat"),s.loadNpmTasks("grunt-contrib-uglify"),s.loadNpmTasks("grunt-contrib-sass"),s.loadNpmTasks("grunt-contrib-watch"),s.registerTask("default",["concat","uglify","sass"]),s.registerTask("dev",["watch"])},module.exports=function(s){s.initConfig({pkg:s.file.readJSON("package.json"),concat:{dist:{src:"*.js",dest:"built.js"}},uglify:{dist:{src:"built.js",dest:"built.min.js"}},sass:{dist:{options:{style:"compressed"},files:{"css/style.css":"scss/style.scss"}}},watch:{css:{files:["**/*.scss"],tasks:["sass"],options:{spawn:!1,livereload:!0}}}}),s.loadNpmTasks("grunt-contrib-concat"),s.loadNpmTasks("grunt-contrib-uglify"),s.loadNpmTasks("grunt-contrib-sass"),s.loadNpmTasks("grunt-contrib-watch"),s.registerTask("default",["concat","uglify","sass"]),s.registerTask("dev",["watch"])};

module.exports = function(grunt){

	// Project configuration. 
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		
		concat: {
		    dist: {
		      src: '*.js',
		      dest: 'built.js',
		    }
		},

		uglify: {
			dist: {
				src: 'built.js',
				dest: 'built.min.js'
			}
		},

		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'css/style.css': 'scss/style.scss'
				}
			}
		},

		watch: {
			css: {
            	files: ['**/*.scss'],
            	tasks: ['sass'],
            	options: {
                spawn: false,
                livereload: true,
            	}
        	}
		}
});



	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat', 'uglify', 'sass']);
	grunt.registerTask('dev', ['watch']);

};
var $section=$("section"),$h3=$("h3");$h3.hide(),$(document).ready(function(){$(".nav-btn").on("click",function(){$(".nav-content").slideToggle("slow")}),$section.on("inview",function(s,t){$h3.show()})}),module.exports=function(s){s.initConfig({pkg:s.file.readJSON("package.json"),concat:{dist:{src:"*.js",dest:"built.js"}},uglify:{dist:{src:"built.js",dest:"built.min.js"}},sass:{dist:{options:{style:"compressed"},files:{"css/style.css":"scss/style.scss"}}},watch:{css:{files:["**/*.scss"],tasks:["sass"],options:{spawn:!1,livereload:!0}}}}),s.loadNpmTasks("grunt-contrib-concat"),s.loadNpmTasks("grunt-contrib-uglify"),s.loadNpmTasks("grunt-contrib-sass"),s.loadNpmTasks("grunt-contrib-watch"),s.registerTask("default",["concat","uglify","sass"]),s.registerTask("dev",["watch"])};var $section=$("section");($h3=$("h3")).hide(),$(document).ready(function(){$(".nav-btn").on("click",function(){$(".nav-content").slideToggle("slow")}),$section.on("inview",function(s,t){$h3.show()})}),module.exports=function(s){s.initConfig({pkg:s.file.readJSON("package.json"),concat:{dist:{src:"*.js",dest:"built.js"}},uglify:{dist:{src:"built.js",dest:"built.min.js"}},sass:{dist:{options:{style:"compressed"},files:{"css/style.css":"scss/style.scss"}}},watch:{css:{files:["**/*.scss"],tasks:["sass"],options:{spawn:!1,livereload:!0}}}}),s.loadNpmTasks("grunt-contrib-concat"),s.loadNpmTasks("grunt-contrib-uglify"),s.loadNpmTasks("grunt-contrib-sass"),s.loadNpmTasks("grunt-contrib-watch"),s.registerTask("default",["concat","uglify","sass"]),s.registerTask("dev",["watch"])},module.exports=function(s){s.initConfig({pkg:s.file.readJSON("package.json"),concat:{dist:{src:"*.js",dest:"built.js"}},uglify:{dist:{src:"built.js",dest:"built.min.js"}},sass:{dist:{options:{style:"compressed"},files:{"css/style.css":"scss/style.scss"}}},watch:{css:{files:["**/*.scss"],tasks:["sass"],options:{spawn:!1,livereload:!0}}}}),s.loadNpmTasks("grunt-contrib-concat"),s.loadNpmTasks("grunt-contrib-uglify"),s.loadNpmTasks("grunt-contrib-sass"),s.loadNpmTasks("grunt-contrib-watch"),s.registerTask("default",["concat","uglify","sass"]),s.registerTask("dev",["watch"])};var $section=$("section");($h3=$("h3")).hide(),$(document).ready(function(){$(".nav-btn").on("click",function(){$(".nav-content").slideToggle("slow")}),$section.on("inview",function(s,t){$h3.show()})}),module.exports=function(s){s.initConfig({pkg:s.file.readJSON("package.json"),concat:{dist:{src:"*.js",dest:"built.js"}},uglify:{dist:{src:"built.js",dest:"built.min.js"}},sass:{dist:{options:{style:"compressed"},files:{"css/style.css":"scss/style.scss"}}},watch:{css:{files:["**/*.scss"],tasks:["sass"],options:{spawn:!1,livereload:!0}}}}),s.loadNpmTasks("grunt-contrib-concat"),s.loadNpmTasks("grunt-contrib-uglify"),s.loadNpmTasks("grunt-contrib-sass"),s.loadNpmTasks("grunt-contrib-watch"),s.registerTask("default",["concat","uglify","sass"]),s.registerTask("dev",["watch"])};var $section=$("section");($h3=$("h3")).hide(),$(document).ready(function(){$(".nav-btn").on("click",function(){$(".nav-content").slideToggle("slow")}),$section.on("inview",function(s,t){$h3.show()})}),module.exports=function(s){s.initConfig({pkg:s.file.readJSON("package.json"),concat:{dist:{src:"*.js",dest:"built.js"}},uglify:{dist:{src:"built.js",dest:"built.min.js"}},sass:{dist:{options:{style:"compressed"},files:{"css/style.css":"scss/style.scss"}}},watch:{css:{files:["**/*.scss"],tasks:["sass"],options:{spawn:!1,livereload:!0}}}}),s.loadNpmTasks("grunt-contrib-concat"),s.loadNpmTasks("grunt-contrib-uglify"),s.loadNpmTasks("grunt-contrib-sass"),s.loadNpmTasks("grunt-contrib-watch"),s.registerTask("default",["concat","uglify","sass"]),s.registerTask("dev",["watch"])},module.exports=function(s){s.initConfig({pkg:s.file.readJSON("package.json"),concat:{dist:{src:"*.js",dest:"built.js"}},uglify:{dist:{src:"built.js",dest:"built.min.js"}},sass:{dist:{options:{style:"compressed"},files:{"css/style.css":"scss/style.scss"}}},watch:{css:{files:["**/*.scss"],tasks:["sass"],options:{spawn:!1,livereload:!0}}}}),s.loadNpmTasks("grunt-contrib-concat"),s.loadNpmTasks("grunt-contrib-uglify"),s.loadNpmTasks("grunt-contrib-sass"),s.loadNpmTasks("grunt-contrib-watch"),s.registerTask("default",["concat","uglify","sass"]),s.registerTask("dev",["watch"])},module.exports=function(s){s.initConfig({pkg:s.file.readJSON("package.json"),concat:{dist:{src:"*.js",dest:"built.js"}},uglify:{dist:{src:"built.js",dest:"built.min.js"}},sass:{dist:{options:{style:"compressed"},files:{"css/style.css":"scss/style.scss"}}},watch:{css:{files:["**/*.scss"],tasks:["sass"],options:{spawn:!1,livereload:!0}}}}),s.loadNpmTasks("grunt-contrib-concat"),s.loadNpmTasks("grunt-contrib-uglify"),s.loadNpmTasks("grunt-contrib-sass"),s.loadNpmTasks("grunt-contrib-watch"),s.registerTask("default",["concat","uglify","sass"]),s.registerTask("dev",["watch"])};var $section=$("section");($h3=$("h3")).hide(),$(document).ready(function(){$(".nav-btn").on("click",function(){$(".nav-content").slideToggle("slow")}),$section.on("inview",function(s,t){$h3.show()})}),module.exports=function(s){s.initConfig({pkg:s.file.readJSON("package.json"),concat:{dist:{src:"*.js",dest:"built.js"}},uglify:{dist:{src:"built.js",dest:"built.min.js"}},sass:{dist:{options:{style:"compressed"},files:{"css/style.css":"scss/style.scss"}}},watch:{css:{files:["**/*.scss"],tasks:["sass"],options:{spawn:!1,livereload:!0}}}}),s.loadNpmTasks("grunt-contrib-concat"),s.loadNpmTasks("grunt-contrib-uglify"),s.loadNpmTasks("grunt-contrib-sass"),s.loadNpmTasks("grunt-contrib-watch"),s.registerTask("default",["concat","uglify","sass"]),s.registerTask("dev",["watch"])};var $section=$("section");($h3=$("h3")).hide(),$(document).ready(function(){$(".nav-btn").on("click",function(){$(".nav-content").slideToggle("slow")}),$section.on("inview",function(s,t){$h3.show()})}),module.exports=function(s){s.initConfig({pkg:s.file.readJSON("package.json"),concat:{dist:{src:"*.js",dest:"built.js"}},uglify:{dist:{src:"built.js",dest:"built.min.js"}},sass:{dist:{options:{style:"compressed"},files:{"css/style.css":"scss/style.scss"}}},watch:{css:{files:["**/*.scss"],tasks:["sass"],options:{spawn:!1,livereload:!0}}}}),s.loadNpmTasks("grunt-contrib-concat"),s.loadNpmTasks("grunt-contrib-uglify"),s.loadNpmTasks("grunt-contrib-sass"),s.loadNpmTasks("grunt-contrib-watch"),s.registerTask("default",["concat","uglify","sass"]),s.registerTask("dev",["watch"])},module.exports=function(s){s.initConfig({pkg:s.file.readJSON("package.json"),concat:{dist:{src:"*.js",dest:"built.js"}},uglify:{dist:{src:"built.js",dest:"built.min.js"}},sass:{dist:{options:{style:"compressed"},files:{"css/style.css":"scss/style.scss"}}},watch:{css:{files:["**/*.scss"],tasks:["sass"],options:{spawn:!1,livereload:!0}}}}),s.loadNpmTasks("grunt-contrib-concat"),s.loadNpmTasks("grunt-contrib-uglify"),s.loadNpmTasks("grunt-contrib-sass"),s.loadNpmTasks("grunt-contrib-watch"),s.registerTask("default",["concat","uglify","sass"]),s.registerTask("dev",["watch"])};var $section=$("section");($h3=$("h3")).hide(),$(document).ready(function(){$(".nav-btn").on("click",function(){$(".nav-content").slideToggle("slow")}),$section.on("inview",function(s,t){$h3.show()})}),module.exports=function(s){s.initConfig({pkg:s.file.readJSON("package.json"),concat:{dist:{src:"*.js",dest:"built.js"}},uglify:{dist:{src:"built.js",dest:"built.min.js"}},sass:{dist:{options:{style:"compressed"},files:{"css/style.css":"scss/style.scss"}}},watch:{css:{files:["**/*.scss"],tasks:["sass"],options:{spawn:!1,livereload:!0}}}}),s.loadNpmTasks("grunt-contrib-concat"),s.loadNpmTasks("grunt-contrib-uglify"),s.loadNpmTasks("grunt-contrib-sass"),s.loadNpmTasks("grunt-contrib-watch"),s.registerTask("default",["concat","uglify","sass"]),s.registerTask("dev",["watch"])};var $section=$("section");($h3=$("h3")).hide(),$(document).ready(function(){$(".nav-btn").on("click",function(){$(".nav-content").slideToggle("slow")}),$section.on("inview",function(s,t){$h3.show()})}),module.exports=function(s){s.initConfig({pkg:s.file.readJSON("package.json"),concat:{dist:{src:"*.js",dest:"built.js"}},uglify:{dist:{src:"built.js",dest:"built.min.js"}},sass:{dist:{options:{style:"compressed"},files:{"css/style.css":"scss/style.scss"}}},watch:{css:{files:["**/*.scss"],tasks:["sass"],options:{spawn:!1,livereload:!0}}}}),s.loadNpmTasks("grunt-contrib-concat"),s.loadNpmTasks("grunt-contrib-uglify"),s.loadNpmTasks("grunt-contrib-sass"),s.loadNpmTasks("grunt-contrib-watch"),s.registerTask("default",["concat","uglify","sass"]),s.registerTask("dev",["watch"])},module.exports=function(s){s.initConfig({pkg:s.file.readJSON("package.json"),concat:{dist:{src:"*.js",dest:"built.js"}},uglify:{dist:{src:"built.js",dest:"built.min.js"}},sass:{dist:{options:{style:"compressed"},files:{"css/style.css":"scss/style.scss"}}},watch:{css:{files:["**/*.scss"],tasks:["sass"],options:{spawn:!1,livereload:!0}}}}),s.loadNpmTasks("grunt-contrib-concat"),s.loadNpmTasks("grunt-contrib-uglify"),s.loadNpmTasks("grunt-contrib-sass"),s.loadNpmTasks("grunt-contrib-watch"),s.registerTask("default",["concat","uglify","sass"]),s.registerTask("dev",["watch"])},module.exports=function(s){s.initConfig({pkg:s.file.readJSON("package.json"),concat:{dist:{src:"*.js",dest:"built.js"}},uglify:{dist:{src:"built.js",dest:"built.min.js"}},sass:{dist:{options:{style:"compressed"},files:{"css/style.css":"scss/style.scss"}}},watch:{css:{files:["**/*.scss"],tasks:["sass"],options:{spawn:!1,livereload:!0}}}}),s.loadNpmTasks("grunt-contrib-concat"),s.loadNpmTasks("grunt-contrib-uglify"),s.loadNpmTasks("grunt-contrib-sass"),s.loadNpmTasks("grunt-contrib-watch"),s.registerTask("default",["concat","uglify","sass"]),s.registerTask("dev",["watch"])},module.exports=function(s){s.initConfig({pkg:s.file.readJSON("package.json"),concat:{dist:{src:"*.js",dest:"built.js"}},uglify:{dist:{src:"built.js",dest:"built.min.js"}},sass:{dist:{options:{style:"compressed"},files:{"css/style.css":"scss/style.scss"}}},watch:{css:{files:["**/*.scss"],tasks:["sass"],options:{spawn:!1,livereload:!0}}}}),s.loadNpmTasks("grunt-contrib-concat"),s.loadNpmTasks("grunt-contrib-uglify"),s.loadNpmTasks("grunt-contrib-sass"),s.loadNpmTasks("grunt-contrib-watch"),s.registerTask("default",["concat","uglify","sass"]),s.registerTask("dev",["watch"])};

module.exports = function(grunt){

	// Project configuration. 
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		
		concat: {
		    dist: {
		      src: '*.js',
		      dest: 'built.js',
		    }
		},

		uglify: {
			dist: {
				src: 'built.js',
				dest: 'built.min.js'
			}
		},

		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'css/style.css': 'scss/style.scss'
				}
			}
		},

		watch: {
			css: {
            	files: ['**/*.scss'],
            	tasks: ['sass'],
            	options: {
                spawn: false,
                livereload: true,
            	}
        	}
		}
});



	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat', 'uglify', 'sass']);
	grunt.registerTask('dev', ['watch']);

};