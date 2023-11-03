import "../../components/export";
import { addObserver} from "../../store/index";
import { screens } from "../../types/navigation";
import { ScreenActions } from "../../types/store";
import { appState, dispatch } from "../../store/index";
import { AttributeNav } from "../../components/NavBar/NavBar";

class MyProfile extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      addObserver(this);
    }
  
    connectedCallback() {
      this.render();
    }
   
  
    render() {
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = ``;

        const link = this.ownerDocument.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "/src/screens/profile/My_Profile.css");
        this.shadowRoot?.appendChild(link);
      
        // page container
        const Profilepage = this.ownerDocument.createElement('section');
        Profilepage.classList.add('profile-page');
        this.shadowRoot?.appendChild(Profilepage);

        // Navbar
      
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

        Profilepage.appendChild(rectangleNav);

        const sectionContainer = this.ownerDocument.createElement('div');
        sectionContainer.classList.add('section-container');
        Profilepage.appendChild(sectionContainer);


        // Card

        const profilecard = this.ownerDocument.createElement('section');
        profilecard.classList.add('profile-container');
        sectionContainer.appendChild(profilecard);

        const profilecontainer = this.ownerDocument.createElement('profile-app');
        profilecontainer.classList.add('profile-card');
        profilecard.appendChild(profilecontainer);

        // listas

        const listContainer = this.ownerDocument.createElement('section');
        listContainer.classList.add('list-container');
        sectionContainer.appendChild(listContainer);

        const myList = this.ownerDocument.createElement('h2');
        myList.textContent = 'My Lists';
        listContainer.appendChild(myList);

        const hrlits = this.ownerDocument.createElement("hr");
        hrlits.classList.add("hr-nav");
        listContainer.appendChild(hrlits);

        const listCards = this.ownerDocument.createElement('section');
        listCards.classList.add('list-cards');
        listContainer.appendChild(listCards);

        const listCard = this.ownerDocument.createElement('');
        listCard.classList.add('list-card');
        listCards.appendChild(listCard);





      }
    }
  }
  
  customElements.define("my-profile", MyProfile);
  export default MyProfile;