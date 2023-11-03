import "../../components/export";
import { addObserver} from "../../store/index";
import { screens } from "../../types/navigation";
import { ScreenActions } from "../../types/store";
import { appState, dispatch } from "../../store/index";

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
      
        const editProfileInpage = this.ownerDocument.createElement('section');
        editProfileInpage.classList.add('editprofile-page');
        this.shadowRoot?.appendChild(editProfileInpage);

        const editprofilecard = this.ownerDocument.createElement('section');
        editprofilecard.classList.add('editprofile-card');
        editProfileInpage.appendChild(editprofilecard);

        const editprofilecontainer = this.ownerDocument.createElement('profile-form');
        editprofilecontainer.classList.add('editprofile-container');
        editprofilecard.appendChild(editprofilecontainer);

      }
    }
  }
  
  customElements.define("edit-profile", EditProfile);
  export default EditProfile;