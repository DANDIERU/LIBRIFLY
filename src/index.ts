import * as components from "./components/export";
import "./components/export"
import "./screens/Book_Details"
import "./screens/Dashboard"
import "./screens/edit_profile/Edit_Profile"
import "./screens/Genre_Details"
import "./screens/List_Details"
import "./screens/profile/My_Profile"
import "./screens/My_Reading_lists"
import "./screens/register/Register"
import "./screens/Search_Details"
import "./screens/sign_in/Sign_In"
import "./screens/user_info/User_Info"
import { addObserver, appState } from "./store/index";
import { screens } from "./types/navigation";
import { navigate } from "./store/actions";
import { Actions } from "./types/store";


class AppContainer extends  HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }

    async render() {

        if(this.shadowRoot){ this.shadowRoot.innerHTML = ``;

        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``;

            switch (appState.screen) {
                case screens.SIGN_IN :
                const signIn = this.ownerDocument.createElement("sign-in")
                this.shadowRoot?.appendChild(signIn)
                break;


                case screens.REGISTER : 
                const register = this.ownerDocument.createElement("register-app")
                this.shadowRoot?.appendChild(register)
                break;

                case screens.DASHBOARD :
                const dashboard = this.ownerDocument.createElement("app-dashboard")
                this.shadowRoot?.appendChild(dashboard)
                break;

                case screens.MY_READING_LISTS :
                const myReadingList = this.ownerDocument.createElement("my-readinglist")
                this.shadowRoot?.appendChild(myReadingList)
                break;

                case screens.BOOK_DETAILS :
                const bookDetails = this.ownerDocument.createElement("book-details")
                this.shadowRoot?.appendChild(bookDetails)
                break;

                case screens.LIST_DETAILS :
                const listDetails = this.ownerDocument.createElement("list-details")
                this.shadowRoot?.appendChild(listDetails)
                break;

                case screens.GENRE_DETAILS :
                const denreDetails = this.ownerDocument.createElement("genre-details")
                this.shadowRoot?.appendChild(denreDetails)
                break;

                case screens.SEARCH_DETAILS :
                const searchDetails = this.ownerDocument.createElement("search-details")
                this.shadowRoot?.appendChild(searchDetails)
                break;

                case screens.USER_INFO :
                const userInfo = this.ownerDocument.createElement("user-info")
                this.shadowRoot?.appendChild(userInfo)
                break;

                case screens.PROFILE :
                const profile = this.ownerDocument.createElement("my-profile")
                this.shadowRoot?.appendChild(profile)
                break;

                case screens.EDIT_PROFILE :
                const editProfile = this.ownerDocument.createElement("edit-profile")
                this.shadowRoot?.appendChild(editProfile)
                break;

                default:
                    break;
            }
        }

    }
}
}
customElements.define("app-container", AppContainer);
export default AppContainer;