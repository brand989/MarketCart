export default class Button {

    
    constructor( html, fn, classButton = 'button' ) {
        this.classButton = classButton
        this.html = html
        this.fn = fn
    }

    render() {

        const btn = document.createElement('button')
        btn.classList.add(this.classButton)
        btn.innerHTML = this.html
        // btn.addEventListener('click', () => this.fn)
        btn.onclick = (event) => {
            event.preventDefault()
            this.fn()
          };
        
        return btn
    }


} 