class ButtonCount extends HTMLElement {
    constructor() {
        super();
        let btn = document.createElement('button');
        btn.innerHTML = 'Times Clicked : ';

        let count = document.createElement('output');

        count.textContent=0;

        btn.append(count);

        let slot = document.createElement('slot');
        btn.append(slot);

        btn.addEventListener('click', () => {
            let currVal = Number(count.textContent);
            count.textContent=currVal+1;
        });

        this.attachShadow( {mode:'open'});
        this.shadowRoot.append(btn);
    }
}
customElements.define('button-count', ButtonCount);