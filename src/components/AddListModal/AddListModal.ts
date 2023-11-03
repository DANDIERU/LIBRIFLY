export enum AttributeAddList {
    "cover_add" = "cover_add",
    "exit_button" = "exit_button",    
    "create_button" = "create_button",  

}

export class AddListModal extends HTMLElement{

    cover_add?: string = "";
    exit_button?: string = "";    
    create_button?: string = "";
    


    static get observedAttributes(){
        const attrs: Record <AttributeAddList, null> ={
            cover_add: null,
            exit_button: null,            
            create_button: null,           

        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeAddList,
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
            link.setAttribute("href", "../src/components/AddListModal/AddListModal.css")
            this.shadowRoot.appendChild(link)
            
            const modalDiv = this.ownerDocument.createElement("div")
            modalDiv.classList.add("modal-div")

            const coverCreateDiv = this.ownerDocument.createElement("div")
            coverCreateDiv.classList.add("cover-div")
            modalDiv.appendChild(coverCreateDiv)

            const coverCreateImg = this.ownerDocument.createElement("img")
            coverCreateImg.setAttribute("src", `${this.cover_add}`)
            coverCreateImg.classList.add("cover-img")
            coverCreateDiv.appendChild(coverCreateImg)

            const createInfoDiv = this.ownerDocument.createElement("div")
            createInfoDiv.classList.add("info-div")
            modalDiv.appendChild(createInfoDiv)

            const exitDiv = this.ownerDocument.createElement("div")
            exitDiv.classList.add("exit-div")
            createInfoDiv.appendChild(exitDiv)

            const exitIcon = this.ownerDocument.createElement("img")
            exitIcon.classList.add("exit-icon")
            exitIcon.setAttribute("src", `${this.exit_button}`)
            exitDiv.appendChild(exitIcon)

            const nameUrList = this.ownerDocument.createElement("p")
            nameUrList.classList.add("nameurlist")
            nameUrList.innerText = "Name your list"
            createInfoDiv.appendChild(nameUrList)

            const inputCreateName = this.ownerDocument.createElement("input")
            inputCreateName.classList.add("input-name")
            inputCreateName.placeholder = "Name"
            createInfoDiv.appendChild(inputCreateName)

            const btn_createDiv = this.ownerDocument.createElement("div")
            btn_createDiv.classList.add("btn-div")
            createInfoDiv.appendChild(btn_createDiv)

            const btn_Create = this.ownerDocument.createElement("button")
            btn_Create.classList.add("btn-create")
            btn_Create.innerText = `${this.create_button}`
            btn_createDiv.appendChild(btn_Create)

            this.shadowRoot.appendChild(modalDiv)

            
        }

       
    }
}

customElements.define('addlist-modal',AddListModal);