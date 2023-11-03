import "../../components/export";
import { addObserver} from "../../store/index";
import { screens } from "../../types/navigation";
import { ScreenActions } from "../../types/store";
import { appState, dispatch } from "../../store/index";

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
      
        const ProfileInpage = this.ownerDocument.createElement('section');
        ProfileInpage.classList.add('profile-page');
        this.shadowRoot?.appendChild(ProfileInpage);

        const profilecard = this.ownerDocument.createElement('section');
        profilecard.classList.add('profile-card');
        ProfileInpage.appendChild(profilecard);

        const profilecontainer = this.ownerDocument.createElement('profile-app');
        profilecontainer.classList.add('profile-container');
        ProfileInpage.appendChild(profilecontainer);

      }
    }
  }
  
  customElements.define("my-profile", MyProfile);
  export default MyProfile;