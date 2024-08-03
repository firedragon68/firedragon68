import Shape from './Shape.js'
import Taiji from './Taiji.js'
import Drag from './Drag.js'
export default class Container extends Shape{
	constructor(opts) {
		let options = Object.assign({ 
			id: `${Container.name}-${new Date().getTime()}`,
			width: window.innerWidth,
			height: window.innerHeight,
			backgroundColor: '#303841'
			// backgroundColor: '#022b35'
		}, {...opts}) 
		super(options)
		this.children = []
	}
	render() {
		let containerEl = document.createElement('div')
		containerEl.id = this.id
		containerEl.style.cssText = `position:relative;width:${this.width}px;height:${this.height}px;background-color:${this.backgroundColor};text-align:center;overflow: hidden;`
		document.body.appendChild(containerEl)
		if(this.children.length > 0) {
			this.children.forEach(child => {
				new Drag(child.render(containerEl))
			})
		}
		return this
	}
	generateChildren(r, c) {
		const colors = ['#19ab57', '#fc0d1b', '#8d6421', '#fac02d', '#22adeb']
		// 五行
		const wx = ['木', '火', '土', '金' , '水']
		// 天干
		const tg = ['甲', '乙', '丙', '丁' , '戊', '己' , '庚', '辛', '壬', '癸']
		// 地支
		const dz = ['子', '丑', '寅', '卯' , '辰', '巳' , '午', '未', '申', '酉', '戌', '亥']
		// 八卦
		const bg = ['乾☰', '兑☱', '离☲', '震☳' , '巽☴', '坎☵' , '艮☶', '坤☷']
		// 九星
		const jx = ['天蓬星', '天任星', '天冲星', '天辅星' , '天英星', '天芮星' , '天禽星', '天柱星', '天心星']
		// 八门
		const bm = ['开门', '休门', '生门', '伤门' , '杜门', '景门' , '死门', '惊门']
		// 八神
		const bs = ['直符', '塍蛇', '太阴', '六合' , '白虎', '玄武' , '九地', '九天']
		for(let i = 0; i < r; i++) {
			for(let j = 0; j < c; j++) {
				let shape = new Shape({
					width: 60,
					height: 30,
					borderRadius: '4px',
					left: j * 70 + 50,
					top: i * 40 + 50,
					text: tg[j] + dz[((i+j) + i * 10 - (i > 0 ? i : 0)) % dz.length]
				})
				this.children.push(shape)
			}
		}
		return this
	}
	generateBg() {
		const colors = ['#19ab57', '#fc0d1b', '#8d6421', '#fac02d', '#22adeb']
		// 五行
		const wx = ['木', '火', '土', '金' , '水']
		// 天干
		const tg = ['甲', '乙', '丙', '丁' , '戊', '己' , '庚', '辛', '壬', '癸']
		// 地支
		const dz = ['子', '丑', '寅', '卯' , '辰', '巳' , '午', '未', '申', '酉', '戌', '亥']
		// 八卦
		const bg = ['乾', '兑', '离', '震' , '巽', '坎' , '艮', '坤']
		const bgf = ['☰', '☱', '☲', '☳' , '☴', '☵' , '☶', '☷']
		// 九星
		const jx = ['天蓬星', '天任星', '天冲星', '天辅星' , '天英星', '天芮星' , '天禽星', '天柱星', '天心星']
		// 八门
		const bm = ['开门', '休门', '生门', '伤门' , '杜门', '景门' , '死门', '惊门']
		// 八神
		const bs = ['直符', '塍蛇', '太阴', '六合' , '白虎', '玄武' , '九地', '九天']
		for(let i = 0, len = bg.length; i < len; i++) {
				let shape = new Shape({
					width: 50,
					height: 50,
					backgroundColor: '#065347',
					color: '#fff',
					borderRadius: '4px',
					left: i * 70 + 50,
					top: 300,
					text: bg[i]
				})
				this.children.push(shape)
			}
		return this
	}
	generateTaiji() {
		let taiji = new Taiji({
			width: 240,
			height: 240,
			left: 800,
			top: 40,
			text: '',
			borderRadius: '50%',
			backgroundColor: '#fff',
			borderWidth: '2px 2px 120px 2px',
			borderStyle: 'solid',
			borderColor: '#000'
		})
		this.children.push(taiji)
		return this
	}
}