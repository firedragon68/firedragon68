export default class Drag {
  constructor(element) {
    this.element = element
    this.start()
  }
  start() {
    this.element.onmousedown = (e) => {
      e = e || window.event
      e.preventDefault()
      if (e.button === 0) {
        this.posX = e.clientX - this.element.offsetLeft
        this.posY = e.clientY - this.element.offsetTop
        this.move()
        this.stop()
      }
    }
  }
  move() {
    document.onmousemove = (e) => {
      var x = e.clientX - this.posX
      var y = e.clientY - this.posY
      this.element.style.left = x + 'px'
      this.element.style.top = y + 'px'
    }
  }
  stop() {
    document.onmouseup = () => {
      document.onmousemove = null
      document.onmouseup = null
    }
  }
}
