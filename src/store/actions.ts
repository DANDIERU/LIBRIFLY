import { screens } from "../types/navigation";

export const navigate = (screen: screens) => {
    return {
        type: "NAVIGATE",
        payload: screen,
    };
};

export const viewBookDetails = (book: any) => {
    return {
        type: "VIEW_BOOK_DETAILS",
        payload: book,
    };
};

export const showAddModal = (add: any) => {
    return {
        type: "SHOW_ADD_MODAL",
        payload: add,
    };
};
