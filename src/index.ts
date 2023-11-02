import * as components from "./components/export";
import { navigate } from "./store/actions";
import "./components/export"
import "./screens/Book_Details"
import "./screens/Dashboard"
import "./screens/Edit_Profile"
import "./screens/Genre_Details"
import "./screens/List_Details"
import "./screens/My_Profile"
import "./screens/My_Reading_lists"
import "./screens/Register"
import "./screens/Search_Details"
import "./screens/Sign_In"
import "./screens/User_Info"
import { addObserver, appState } from "./store/index";
import { screens } from "./types/navigation";


class AppContainer extends  HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``;
            switch (appState.screen) {
                case screens.SIGN_IN :
                const signIn = this.ownerDocument.createElement("sign-in")
                this.shadowRoot?.appendChild(signIn)
                break;

                case screens.REGISTER :
                const register = this.ownerDocument.createElement("app-register")
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

customElements.define("app-container", AppContainer)
export default AppContainer;