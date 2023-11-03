import "../components/export";
import { navigate } from "../store/actions";
import { addObserver } from "../store/index";
import { screens } from "../types/navigation";
import { ScreenActions } from "../types/store";
import { appState, dispatch } from "../store/index";
import { AttributeNav } from "../components/NavBar/NavBar";
import { AttributeSearch } from "../components/InputSearch/InputSearch";
import { AttributeTopListBooks } from "../components/TopListBooks/TopListBooks";
import { AttributeAlsoLikeBooks, AlsoLikeBooks } from "../components/AlsoLikeBooks/AlsoLikeBooks";
import { AttributeBooksWeek, BooksWeek} from "../components/BooksWeek/BooksWeek";
import { data } from "../data";
import firebase from "../utils/firebase";
import "../components/export";




class Dashboard extends HTMLElement {
  weekCard: BooksWeek[] = [];
  mightCard: AlsoLikeBooks[] = [];
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver
  }

  connectedCallback() {
    this.render();
  }

  async render() {
    if (this.shadowRoot) {
      const link = this.ownerDocument.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("href", "/src/screens/Dashboard.css");
      this.shadowRoot?.appendChild(link);

      const main = this.ownerDocument.createElement("main");
      const containMain = this.ownerDocument.createElement("div");
      containMain.classList.add("contain-main");
      const header = this.ownerDocument.createElement("header");
      const divHeader = this.ownerDocument.createElement("div");
      divHeader.classList.add("container-header");
      const imgHeader = this.ownerDocument.createElement("img");
      const title = this.ownerDocument.createElement("h1");
      const divTitleWeeks = this.ownerDocument.createElement("div");
      divTitleWeeks.classList.add("container-title-weeks");
      divTitleWeeks.innerHTML = `
        <h2>Books of the week</h2>
        <hr></hr>
      `;
      const booksContainer = this.ownerDocument.createElement("div");
      booksContainer.classList.add("books-container");
      const divTitleTrending = this.ownerDocument.createElement("div");
      divTitleTrending.classList.add("container-title-trending");
      divTitleTrending.innerHTML = `
        <h2>Top Lists</h2>
        <hr></hr>
      `;
      const divTopList = this.ownerDocument.createElement("div");
      divTopList.classList.add("container-toplist");
      const titleAlsoLike = this.ownerDocument.createElement("h2");
      titleAlsoLike.classList.add("title-also-like");
      titleAlsoLike.innerHTML = "You might also like";
      title.textContent = "Welcome";
      imgHeader.classList.add("img-header");
      imgHeader.setAttribute("src", "../src/img/header_bg.png");

      ////////////////// NAVBAR /////////////////////

      const rectangleNav = this.ownerDocument.createElement("navbar-component");
      rectangleNav.classList.add("rectangle-nav");
      rectangleNav.setAttribute(AttributeNav.logo, "../src/icon/Iconlogo.png");

      rectangleNav.setAttribute(
        AttributeNav.icon_user,
        "../src/icon/imgprofile.png"
      );
      rectangleNav.setAttribute(AttributeNav.user_title, "Jezzini_03");

      rectangleNav.setAttribute(
        AttributeNav.dashboard_icon,
        "../src/icon/dashboardon.png"
      );
      rectangleNav.setAttribute(AttributeNav.dashboard_title, "Dashboard");

      rectangleNav.setAttribute(
        AttributeNav.readinglist_icon,
        "../src/icon/readingoff.png"
      );
      rectangleNav.setAttribute(
        AttributeNav.readinglist_title,
        "My reading lists"
      );

      rectangleNav.setAttribute(
        AttributeNav.logout_icon,
        "../src/icon/logout.png"
      );
      rectangleNav.setAttribute(AttributeNav.logout_title, "Logout");

      /////////////////// INPUT SEARCH //////////////////////

      const rectangleSearch =
        this.ownerDocument.createElement("search-component");
      rectangleSearch.classList.add("rectangle-search");
      rectangleSearch.setAttribute(
        AttributeSearch.search_icon,
        "../src/icon/search_icon.png"
      );

      /////////////////// BOOKS WEEK //////////////////////

      const booksWeekNew = await firebase.getBooks();
      const fourBooks = booksWeekNew.slice(0,4)

      fourBooks.forEach((book:any) =>{

        const cardWeekly = this.ownerDocument.createElement(
          "weekly-card"
        ) as BooksWeek;
        cardWeekly.setAttribute(AttributeBooksWeek.weekcover, book.coverimage);        
        cardWeekly.setAttribute(
          AttributeBooksWeek.weektitle,
          book.title
        );
        cardWeekly.setAttribute(
          AttributeBooksWeek.weeksubtitle,
          book.author
        );
        cardWeekly.setAttribute(AttributeBooksWeek.weekcategory, book.genre);
        this.weekCard.push(cardWeekly);

      })
      /*
      data.weeksection.forEach((card) => {
        const cardWeekly = this.ownerDocument.createElement(
          "weekly-card"
        ) as BooksWeek;
        cardWeekly.setAttribute(AttributeBooksWeek.weekcover, card.coversito);
        cardWeekly.setAttribute(AttributeBooksWeek.weekicon, card.iconup);
        cardWeekly.setAttribute(
          AttributeBooksWeek.weektitle,
          card.titlesection
        );
        cardWeekly.setAttribute(
          AttributeBooksWeek.weeksubtitle,
          card.secondtitle
        );
        cardWeekly.setAttribute(AttributeBooksWeek.weekcategory, card.category);
        this.weekCard.push(cardWeekly);
      }); */

      /////////////////// TOP LIST BOOKS //////////////////////

      const rectangleTopList = this.ownerDocument.createElement("toplist-card");
      rectangleTopList.classList.add("rectangle-toplist");
      rectangleTopList.setAttribute(
        AttributeTopListBooks.listname,
        "ListName 1"
      );

      rectangleTopList.setAttribute(
        AttributeTopListBooks.profileimg,
        "../src/icon/imgprofile.png"
      );

      rectangleTopList.setAttribute(
        AttributeTopListBooks.profilename,
        "Jezzini_03"
      );

      rectangleTopList.setAttribute(
        AttributeTopListBooks.book1,
        "../src/img/cover1.png"
      );

      rectangleTopList.setAttribute(
        AttributeTopListBooks.book2,
        "../src/img/cover1.png"
      );

      rectangleTopList.setAttribute(
        AttributeTopListBooks.book3,
        "../src/img/cover1.png"
      );

      rectangleTopList.setAttribute(
        AttributeTopListBooks.heart,
        "../src/icon/heart_icon.png"
      );
      rectangleTopList.setAttribute(AttributeTopListBooks.likes, "15K");

      //// TOPLIST 2 ////

      const rectangleTopList2 =
        this.ownerDocument.createElement("toplist-card");
      rectangleTopList2.classList.add("rectangle-toplist");
      rectangleTopList2.setAttribute(
        AttributeTopListBooks.listname,
        "ListName 1"
      );

      rectangleTopList2.setAttribute(
        AttributeTopListBooks.profileimg,
        "../src/icon/imgprofile.png"
      );

      rectangleTopList2.setAttribute(
        AttributeTopListBooks.profilename,
        "Jezzini_03"
      );

      rectangleTopList2.setAttribute(
        AttributeTopListBooks.book1,
        "../src/img/cover1.png"
      );

      rectangleTopList2.setAttribute(
        AttributeTopListBooks.book2,
        "../src/img/cover1.png"
      );

      rectangleTopList2.setAttribute(
        AttributeTopListBooks.book3,
        "../src/img/cover1.png"
      );

      rectangleTopList2.setAttribute(
        AttributeTopListBooks.heart,
        "../src/icon/heart_icon.png"
      );
      rectangleTopList2.setAttribute(AttributeTopListBooks.likes, "15K");

      //// TOPLIST 3 ////

      const rectangleTopList3 =
        this.ownerDocument.createElement("toplist-card");
      rectangleTopList3.classList.add("rectangle-toplist");
      rectangleTopList3.setAttribute(
        AttributeTopListBooks.listname,
        "ListName 1"
      );

      rectangleTopList3.setAttribute(
        AttributeTopListBooks.profileimg,
        "../src/icon/imgprofile.png"
      );

      rectangleTopList3.setAttribute(
        AttributeTopListBooks.profilename,
        "Jezzini_03"
      );

      rectangleTopList3.setAttribute(
        AttributeTopListBooks.book1,
        "../src/img/cover1.png"
      );

      rectangleTopList3.setAttribute(
        AttributeTopListBooks.book2,
        "../src/img/cover1.png"
      );

      rectangleTopList3.setAttribute(
        AttributeTopListBooks.book3,
        "../src/img/cover1.png"
      );

      rectangleTopList3.setAttribute(
        AttributeTopListBooks.heart,
        "../src/icon/heart_icon.png"
      );
      rectangleTopList3.setAttribute(AttributeTopListBooks.likes, "15K");

      /////////////////// ALSO LIKE //////////////////////

      const diveRectangleAlsoLike = this.ownerDocument.createElement("div");
      diveRectangleAlsoLike.classList.add("container-also-like");
      
      
      const eightBooks = booksWeekNew.slice(0,8)

      eightBooks.forEach((book:any) =>{
        const rectangleAlsoLike = this.ownerDocument.createElement("also-card") as AlsoLikeBooks
        rectangleAlsoLike.classList.add("rectangle-also-like");  
        rectangleAlsoLike.setAttribute(AttributeAlsoLikeBooks.onlybook, book.coverimage);    
        
        this.mightCard.push(rectangleAlsoLike);

      })


         
      
      

      /////////////////// APPENCHILDS //////////////////////

      this.weekCard.forEach((cards2) => {
        booksContainer.appendChild(cards2);
      });

      this.mightCard.forEach((cards3) => {
        diveRectangleAlsoLike.appendChild(cards3);
      });

      main.appendChild(rectangleNav);
      main.appendChild(containMain);
      containMain.appendChild(header);
      header.appendChild(rectangleSearch);
      header.appendChild(title);
      header.appendChild(divHeader);
      divHeader.appendChild(imgHeader);
      containMain.appendChild(divTitleWeeks);
      containMain.appendChild(booksContainer);
      containMain.appendChild(divTitleTrending);
      containMain.appendChild(divTopList);
      divTopList.appendChild(rectangleTopList);
      divTopList.appendChild(rectangleTopList2);
      divTopList.appendChild(rectangleTopList3);
      containMain.appendChild(titleAlsoLike);
      containMain.appendChild(diveRectangleAlsoLike);
     

      this.shadowRoot.appendChild(main);
    }
  }
}

customElements.define("app-dashboard", Dashboard);
export default Dashboard;
