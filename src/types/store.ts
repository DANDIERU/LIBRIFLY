export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    screen: string
    bookDetails?: any;
    modalComponent?: any;
}

export enum ScreenActions {
    "NAVIGATE" = "NAVIGATE",
}

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

export type Actions = ScreenActions;