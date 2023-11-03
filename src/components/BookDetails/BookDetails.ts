export enum AttributeDetails {
    "cover_detail" = "cover_detail",
    "title_detail" ="title_detail",
    "year_detail" = "year_detail",
    "author_detail" = "author_detail",
    "genre_detail" = "genre_detail",
    "overview_detail" = "overview_detail"

}

export class BookDetails extends HTMLElement{

    cover_detail?: string = "";
    title_detail?: string = "";
    year_detail?: string = "";
    author_detail?: string = "";
    genre_detail?: string = "";
    overview_detail?: string = "";   


    static get observedAttributes(){
        const attrs: Record <AttributeDetails, null> ={
            cover_detail: null,
            title_detail: null,
            year_detail: null,
            author_detail: null,
            genre_detail: null,
            overview_detail: null,
            

        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeDetails,
        _: unknown,
        newValue: string){

            switch (propName) {
                default:
                this[propName] = newValue;
                break;
            }
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) {
        
            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "../src/components/BookDetails/BookDetails.css")
            this.shadowRoot.appendChild(link)

            const detailsDiv = this.ownerDocument.createElement("section")
            detailsDiv.classList.add("details-div")

            const coverDiv = this.ownerDocument.createElement("div")
            coverDiv.classList.add("cover-div")
            detailsDiv.appendChild(coverDiv)

            const coverImg = this.ownerDocument.createElement("img")
            coverImg.classList.add("cover-img")
            coverImg.setAttribute("src", `${this.cover_detail}`)
            coverDiv.appendChild(coverImg)


            const infoDiv = this.ownerDocument.createElement("div")
            infoDiv.classList.add("info-div")
            detailsDiv.appendChild(infoDiv)

            const titleBook = this.ownerDocument.createElement("h1")
            titleBook.classList.add("title-book")
            titleBook.innerText = `${this.title_detail}`;
            infoDiv.appendChild(titleBook)

            const yearAuthorDiv = this.ownerDocument.createElement("div")
            yearAuthorDiv.classList.add("yearauthor-div")
            infoDiv.appendChild(yearAuthorDiv)

            const yearBook = this.ownerDocument.createElement("p")
            yearBook.classList.add("year-book")
            yearBook.innerText = `${this.year_detail}`;
            yearAuthorDiv.appendChild(yearBook)

            const authorBook = this.ownerDocument.createElement("p")
            authorBook.classList.add("author-book")
            authorBook.innerText = `${this.author_detail}`;
            yearAuthorDiv.appendChild(authorBook)

            const genreBook = this.ownerDocument.createElement("p")
            genreBook.classList.add("genre-Book")
            genreBook.innerText = `Genre: ${this.genre_detail}`;
            infoDiv.appendChild(genreBook)

            const overviewBook = this.ownerDocument.createElement("p")
            overviewBook.classList.add("overview-book")
            overviewBook.innerText = `Overview: ${this.overview_detail}`;
            infoDiv.appendChild(overviewBook)

            this.shadowRoot.appendChild(detailsDiv)            

        }

       
    }
}

customElements.define('bookdetails-component',BookDetails);
