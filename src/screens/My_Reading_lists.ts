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
        link.setAttribute("href", "/src/screens/My_Reading_lists.css")
        this.shadowRoot?.appendChild(link);

        const mainCont = this.ownerDocument.createElement("main")
        mainCont.classList.add("main-cont")        

        ////////////////// NAVBAR /////////////////////

        const rectangleNav = this.ownerDocument.createElement("navbar-component")
        rectangleNav.classList.add("rectangle-nav")
        rectangleNav.setAttribute(AttributeNav.logo, "../src/icon/Iconlogo.png")

        rectangleNav.setAttribute(AttributeNav.icon_user, "../src/icon/imgprofile.png")
        rectangleNav.setAttribute(AttributeNav.user_title, "Jezzini_03")

        rectangleNav.setAttribute(AttributeNav.dashboard_icon, "../src/icon/dashboardoff.png")
        rectangleNav.setAttribute(AttributeNav.dashboard_title, "Dashboard")

        rectangleNav.setAttribute(AttributeNav.readinglist_icon, "../src/icon/readingon.png")
        rectangleNav.setAttribute(AttributeNav.readinglist_title, "My reading lists")

        rectangleNav.setAttribute(AttributeNav.logout_icon, "../src/icon/logout.png")
        rectangleNav.setAttribute(AttributeNav.logout_title, "Logout")

        mainCont.appendChild(rectangleNav)

        

        ///////////////// READING COMPONENT //////////////

        const readingDiv = this.ownerDocument.createElement("solid-reading")
        readingDiv.classList.add("reading-div")
        readingDiv.setAttribute(AttributeReading.main_reading, "My reading List")
        readingDiv.setAttribute(AttributeReading.empty_desc, "Oh, you don't have lists yet.Create your first list")
        readingDiv.setAttribute(AttributeReading.btn_create, "Create list")
        readingDiv.setAttribute(AttributeReading.img_main, "../src/img/girlreadinglist.png")
        mainCont.appendChild(readingDiv)

        this.shadowRoot.appendChild(mainCont)
        
      }
    }
  }
  
  customElements.define("my-readinglist", MyReadingList);
  export default MyReadingList;