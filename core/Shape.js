export default class Shape {
	constructor(opts) {
		let options = Object.assign({ 
			id: `${Shape.name.toLowerCase()}`,
			top: 0,
			left: 0,
			width: 100,
			height: 100,
			backgroundColor: '#fd9727',
			color: '#000',
			borderRadius: '0',
			borderWidth: '2px',
			borderColor: '#000',
			borderStyle: 'solid',
			text: '',
			fontSize: 14
		}, {...opts})
		this.id = `${options.id}-${new Date().getTime()}`
		this.top = options.top
		this.left = options.left
		this.width = options.width
		this.height = options.height
		this.backgroundColor = options.backgroundColor
		this.color = options.color
		this.borderRadius = options.borderRadius
		this.borderWidth = options.borderWidth
		this.borderColor = options.borderColor
		this.borderStyle = options.borderStyle
		this.text = options.text
	}
	render(el) {
		let shapeEl = document.createElement('div')
		shapeEl.id = this.id
		shapeEl.classList.add(this.id)
		shapeEl.style.cssText = `box-sizing:border-box;font-size:${this.height > 30 ? this.height - 8 : 14}px;position:absolute;width:${this.width}px;height:${this.height}px;top:${this.top}px;left:${this.left}px;background-color:${this.backgroundColor};color:${this.color};border-radius:${this.borderRadius};border-width:${this.borderWidth};border-color:${this.borderColor};border-style:${this.borderStyle};box-shadow: 0px 0px 12px #ccc;line-height:${parseFloat(this.height) - 2 * parseFloat(this.borderWidth)}px;vertical-align:middle;text-align:center;cursor:move;user-select:none;`
		// shapeEl.style.cssText = `box-sizing:border-box;position:absolute;width:${this.width}px;height:${this.height}px;top:${this.top}px;left:${this.left}px;background-color:${this.backgroundColor};border-width: 4px 4px 100px 4px; border-style:solid; border-color: #000;border-radius:50%;line-height:${this.height}px;vertical-align:middle;text-align:center;overflow: hidden;z-index:1;cursor:move;user-select:none;background:line;`
		shapeEl.innerText = this.text
		if(el) {
			el.appendChild(shapeEl)
		} else {
			document.body.appendChild(shapeEl)
		}
		return shapeEl
	}
}