//加载配置文件
require(["js/requirejs.config"], function() {
	//加载clouse_2模块
	require(["clouse_2"], function(clouse_2) {
		var btnModel = {
			name: "btnModel",
			click: function() {
				alert(this.name);
			}
		};
		var btn = document.getElementById('btn');
		//调用clouse_2.bind方法
		btn.addEventListener('click', clouse_2.bind(btnModel, "click"), false);
	});

});