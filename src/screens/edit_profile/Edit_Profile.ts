import { addObserver} from "../../store/index";
import { screens } from "../../types/navigation";
import { ScreenActions } from "../../types/store";
import { appState, dispatch } from "../../store/index";
import { AttributeNav } from "../../components/NavBar/NavBar";

class EditProfile extends HTMLElement {
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
        link.setAttribute("href", "/src/screens/edit_profile/Edit_Profile.css");
        this.shadowRoot?.appendChild(link);
      // page
        const editProfileInpage = this.ownerDocument.createElement('section');
        editProfileInpage.classList.add('editprofile-page');
        this.shadowRoot?.appendChild(editProfileInpage);

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
 
         editProfileInpage.appendChild(rectangleNav);
 
         const sectionContainer = this.ownerDocument.createElement('div');
         sectionContainer.classList.add('section-container');
         editProfileInpage.appendChild(sectionContainer);

        // edit
        
        const profilecard = this.ownerDocument.createElement('section');
        profilecard.classList.add('profile-container');
        sectionContainer.appendChild(profilecard);

        const editprofilecard = this.ownerDocument.createElement('section');
        editprofilecard.classList.add('editprofile-card');
        sectionContainer.appendChild(editprofilecard);

        const profilecontainer = this.ownerDocument.createElement('profile-app');
        profilecontainer.classList.add('profile-card');
        profilecard.appendChild(profilecontainer);

        const editprofilecontainer = this.ownerDocument.createElement('profile-form');
        editprofilecontainer.classList.add('editprofile-container');
        editprofilecard.appendChild(editprofilecontainer);

      }
    }
  }
  
  customElements.define("edit-profile", EditProfile);
  export default EditProfile;