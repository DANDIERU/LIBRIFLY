import { AttributeDetails } from "../components/BookDetails/BookDetails";
import { AttributeNav } from "../components/NavBar/NavBar";
import { AttributeButtonsList } from "../components/AddListButtons/AddListButtons";
import { AttributeAddList } from "../components/AddListModal/AddListModal";
import { showAddModal } from "../store/actions";
import "../components/export"
import { appState } from "../store";


class BooksDetails extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }

    updateBookDetails(bookDetails: any) {
      const bookDetailsComponent = this.shadowRoot?.querySelector(
        "bookdetails-component"
      ) as any;
      if (bookDetailsComponent) {
        bookDetailsComponent.updateBookDetails(bookDetails);
      }
    }
  
  
    render() {
      if (this.shadowRoot) {
        const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "/src/screens/Book_Details.css")
        this.shadowRoot?.appendChild(link);

        const mainDiv = this.ownerDocument.createElement("div")
        mainDiv.classList.add("main-div")

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

        mainDiv.appendChild(rectangleNav)

        ///////////// OTHER DIV /////////////

        const otherDiv =this.ownerDocument.createElement("div")
        otherDiv.classList.add("other-div")
        mainDiv.appendChild(otherDiv)

        ///////////// BOOK DETAILS COMPONENT ////////       

        const BookDetailsDiv = this.ownerDocument.createElement("bookdetails-component")
        BookDetailsDiv.classList.add("bookdetails-div")
        BookDetailsDiv.setAttribute(AttributeDetails.cover_detail, appState.bookDetails.coverimage)
        BookDetailsDiv.setAttribute(AttributeDetails.title_detail, appState.bookDetails.title)
        BookDetailsDiv.setAttribute(AttributeDetails.year_detail, appState.bookDetails.publication)
        BookDetailsDiv.setAttribute(AttributeDetails.author_detail, appState.bookDetails.author)
        BookDetailsDiv.setAttribute(AttributeDetails.genre_detail, appState.bookDetails.genre)
        BookDetailsDiv.setAttribute(AttributeDetails.overview_detail, appState.bookDetails.overview)

        otherDiv.appendChild(BookDetailsDiv)

        ////////////// BUTTONS ADD /////////////

        const btnsComponent = this.ownerDocument.createElement("buttons-component")
        btnsComponent.classList.add("btns-component")
        btnsComponent.setAttribute(AttributeButtonsList.add_to_list, "Add to a list")
        btnsComponent.setAttribute(AttributeButtonsList.create_list, "Create a list")
        otherDiv.appendChild(btnsComponent)

        this.shadowRoot.appendChild(mainDiv)

        //////////// POPUP ////////////

        if (appState.modalComponent === true) {
          console.log("Abro modal")
          const modalComponent = this.ownerDocument.createElement("addlist-modal")
          modalComponent.classList.add("modal-component")
          modalComponent.setAttribute(AttributeAddList.cover_add, "../src/img/bookdetail.png")
          modalComponent.setAttribute(AttributeAddList.exit_button, "../src/icon/x-close.png")
          modalComponent.setAttribute(AttributeAddList.create_button, "Create")          
          this.shadowRoot.appendChild(modalComponent)
        }
        
        
        
        
      }
    }
  }
  
  customElements.define("book-details", BooksDetails);
  export default BooksDetails;