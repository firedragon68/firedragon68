import Shape from './Shape.js'
export default class Taiji extends Shape {
	constructor(opts) {
		super(opts)
		this.id = `${Taiji.name.toLowerCase()}`
	}
}