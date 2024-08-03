import Container from './core/Container.js'
window.onload = function() {
	let container = new Container()
	container
	// 六十甲子
	.generateChildren(6, 10)
	// 画八卦
	.generateBg()
	// 画太极
	.generateTaiji()
	.render()
}