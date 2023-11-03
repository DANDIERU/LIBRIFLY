export enum AttributeReading {
    "main_reading" = "main_reading",
    "btn_create" ="btn_create",
    "empty_desc" = "empty_desc",
    "img_main" = "img_main"

}

export class SolidReading extends HTMLElement{

    main_reading?: string = "";
    btn_create?: string = "";
    empty_desc?: string = "";
    img_main?: string = "";   


    static get observedAttributes(){
        const attrs: Record <AttributeReading, null> ={
            main_reading: null,
            btn_create: null,
            empty_desc: null,
            img_main: null,
            

        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeReading,
        _: unknown,
        newValue: string){

            switch (propName) {
                default:
                this[propName] = newValue;
                break;
            }
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) {
        
            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "../src/components/solidReading/solidReading.css")
            this.shadowRoot.appendChild(link)

            const readingBigDiv = this.ownerDocument.createElement("div")
            readingBigDiv.classList.add("reading-div")

            const readingInfoDiv = this.ownerDocument.createElement("div")
            readingInfoDiv.classList.add("reading-content")
            readingBigDiv.appendChild(readingInfoDiv)

            const imageinfoDiv = this.ownerDocument.createElement("div")
            imageinfoDiv.classList.add("img-infodiv")
            readingBigDiv.appendChild(imageinfoDiv)
            
            
            const listName = this.ownerDocument.createElement("h1")
            listName.classList.add("list-name")
            listName.innerText = `${this.main_reading}`
            readingInfoDiv.appendChild(listName);

            const emptyDesc = this.ownerDocument.createElement("p")
            emptyDesc.classList.add("empty-desc")
            emptyDesc.innerText = `${this.empty_desc}`
            readingInfoDiv.appendChild(emptyDesc);

            const buttonCreate = this.ownerDocument.createElement("button")
            buttonCreate.classList.add("button-create")
            buttonCreate.innerText = `${this.btn_create}`
            readingInfoDiv.appendChild(buttonCreate);

            const imgReading = this.ownerDocument.createElement("img")
            imgReading.classList.add("img-reading")
            imgReading.setAttribute("src", `${this.img_main}`)
            imageinfoDiv.appendChild(imgReading)

            this.shadowRoot.appendChild(readingBigDiv)

        }

       
    }
}

customElements.define('solid-reading',SolidReading);