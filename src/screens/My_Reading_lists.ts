import { AttributeReading } from "../components/solidReading/solidReading";
import { AttributeNav } from "../components/NavBar/NavBar";
import "../components/export"


class MyReadingList extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
    
  
    render() {
      if (this.shadowRoot) {

        const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "src/screens/My_Reading_lists.css")
        this.shadowRoot?.appendChild(link);

        



        /*const readingDiv = this.ownerDocument.createElement("solid-reading")
        readingDiv.classList.add("reading-div")
        readingDiv.setAttribute(AttributeReading.main_reading, "My reading List")
        readingDiv.setAttribute(AttributeReading.empty_desc, "Oh, you don't have lists yet.Create your first list")
        readingDiv.setAttribute(AttributeReading.btn_create, "Create list")
        readingDiv.setAttribute(AttributeReading.img_main, "../src/img/girlreadinglist.png")
        this.shadowRoot.appendChild(readingDiv)*/
        
      }
    }
  }
  
  customElements.define("my-readinglist", MyReadingList);
  export default MyReadingList;