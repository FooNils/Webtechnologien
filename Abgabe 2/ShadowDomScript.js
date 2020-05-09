
class AbgabeButton extends HTMLElement {
    constructor() {
        //Super muss immer zuerst aufgerufen werden
        super();
        // Element-Funktionalität wird ab hier definiert
        const shadow = this.attachShadow({
            mode: "open"
        });
        var image = this.getAttribute('imgSrc');
        this.shadowRoot.innerHTML = `<figure class="image is-3by4"><img src=${image}></figure><p><slot name="name">Test</slot></p>`
        const bulmaLink = document.createElement("LINK");;
        bulmaLink.setAttribute("rel", "stylesheet");
        bulmaLink.setAttribute(
            "href",
            "https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"
            );
        shadow.appendChild(bulmaLink);  
        
    }
    

}
customElements.define('my-title', AbgabeButton);

function addCard() {
    var parentNode = document.getElementById('componentroot')
    var img = 'split.jpg'
    var name = 'Test'
    var ChildNode = `<my-title class="column is-one-quarter" imgSrc=${img}><span slot="name">${name}</span></title>`;
    parentNode.insertAdjacentHTML("beforeend", ChildNode); 
  }


  