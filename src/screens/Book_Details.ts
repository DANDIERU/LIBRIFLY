import { AttributeDetails } from "../components/BookDetails/BookDetails";
import "../components/export"


class BooksDetails extends HTMLElement {
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
        link.setAttribute("href", "/src/screens/Book_Details.css")
        this.shadowRoot?.appendChild(link);

        const mainDiv = this.ownerDocument.createElement("div")
        mainDiv.classList.add("main-div")

        const BookDetailsDiv = this.ownerDocument.createElement("bookdetails-component")
        BookDetailsDiv.classList.add("bookdetails-div")
        BookDetailsDiv.setAttribute(AttributeDetails.cover_detail, "../src/img/bookdetail.png")
        BookDetailsDiv.setAttribute(AttributeDetails.title_detail, "Title Book")
        BookDetailsDiv.setAttribute(AttributeDetails.year_detail, "2020")
        BookDetailsDiv.setAttribute(AttributeDetails.author_detail, "Eloisa")
        BookDetailsDiv.setAttribute(AttributeDetails.genre_detail, "Fantasy")
        BookDetailsDiv.setAttribute(AttributeDetails.overview_detail, "The Fellowship of the Ring is the opening volume of J.R.R. Tolkien's iconic high-fantasy trilogy, The Lord of the Rings. This installment sets the stage for an epic quest to destroy the One Ring, which holds immense power and poses a grave threat to Middle-earth.")

        mainDiv.appendChild(BookDetailsDiv)
        this.shadowRoot.appendChild(mainDiv)
      }
    }
  }
  
  customElements.define("book-details", BooksDetails);
  export default BooksDetails;