export enum AttributeButtonsList {
    "add_to_list" = "add_to_list",
    "create_list" ="create_list",    

}

export default class AddButtonsList extends HTMLElement{

    add_to_list?: string = "";
    create_list?: string = "";
    


    static get observedAttributes(){
        const attrs: Record <AttributeButtonsList, null> ={
            add_to_list: null,
            create_list: null,           

        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeButtonsList,
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
            link.setAttribute("href", "../src/components/AddListButtons/AddListButtons.css")
            this.shadowRoot.appendChild(link)

            const bttnsDiv = this.ownerDocument.createElement("div")
            bttnsDiv.classList.add("bttns-div")

            const btnAddList = this.ownerDocument.createElement("button")
            btnAddList.classList.add("btn-add")
            btnAddList.innerText = `${this.add_to_list}`
            bttnsDiv.appendChild(btnAddList);

            const btnCreateList = this.ownerDocument.createElement("button")
            btnCreateList.classList.add("btn-create")
            btnAddList.innerText = `${this.create_list}`
            bttnsDiv.appendChild(btnCreateList);

            this.shadowRoot.appendChild(bttnsDiv)



            
        }

       
    }
}

customElements.define('buttons-component',AddButtonsList );