
import "./components/export"
import "./screens/main"
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
            switch (appState.screen) {
                case screens.SIGN_IN : 
                const signIn = this.ownerDocument.createElement("sign-in")
                this.shadowRoot?.appendChild(signIn)
                break;

                case screens.REGISTER : 
                const register = this.ownerDocument.createElement("register")
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
                const bookDetails = this.ownerDocument.createElement("my-readinglist")
                this.shadowRoot?.appendChild(bookDetails)
                break;

                case screens.LIST_DETAILS : 
                const listDetails = this.ownerDocument.createElement("my-readinglist")
                this.shadowRoot?.appendChild(listDetails)
                break;

                case screens.GENRE_DETAILS : 
                const denreDetails = this.ownerDocument.createElement("my-readinglist")
                this.shadowRoot?.appendChild(denreDetails)
                break;

                case screens.SEARCH_DETAILS : 
                const searchDetails = this.ownerDocument.createElement("my-readinglist")
                this.shadowRoot?.appendChild(searchDetails)
                break;

                case screens.USER_INFO : 
                const userInfo = this.ownerDocument.createElement("my-readinglist")
                this.shadowRoot?.appendChild(userInfo)
                break;

                case screens.PROFILE : 
                const profile = this.ownerDocument.createElement("my-readinglist")
                this.shadowRoot?.appendChild(profile)
                break;

                case screens.EDIT_PROFILE : 
                const editProfile = this.ownerDocument.createElement("my-readinglist")
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