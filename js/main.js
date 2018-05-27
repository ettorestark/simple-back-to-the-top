(function(window, document) {
	function backToTheTop() {
		document.documentElement.scrollTop = 0;
	}
	document.getElementById('backToTheTop').addEventListener('click', backToTheTop);
})(window, document);