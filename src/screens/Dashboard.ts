import { AttributeNav } from "../components/NavBar/NavBar";
import "../components/export"

class Dashboard extends HTMLElement {
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
        link.setAttribute("href", "src/screens/Dashboard.css")
        this.shadowRoot?.appendChild(link);

        ////////////////// NAVBAR /////////////////////

        const rectangleNav = this.ownerDocument.createElement("navbar-component")
        rectangleNav.classList.add("rectangle-nav")
        rectangleNav.setAttribute(AttributeNav.logo, "../src/icon/Iconlogo.png")

        rectangleNav.setAttribute(AttributeNav.icon_user, "../src/icon/imgprofile.png")
        rectangleNav.setAttribute(AttributeNav.user_title, "Jezzini_03")

        rectangleNav.setAttribute(AttributeNav.dashboard_icon, "../src/icon/dashboardon.png")
        rectangleNav.setAttribute(AttributeNav.dashboard_title, "Dashboard")

        rectangleNav.setAttribute(AttributeNav.readinglist_icon, "../src/icon/readingoff.png")
        rectangleNav.setAttribute(AttributeNav.readinglist_title, "My reading lists")
        

        rectangleNav.setAttribute(AttributeNav.logout_icon, "../src/icon/logout.png")
        rectangleNav.setAttribute(AttributeNav.logout_title, "Logout")

        this.shadowRoot.appendChild(rectangleNav)
        
      }
    }
}
  
customElements.define("app-dashboard", Dashboard);
export default Dashboard;