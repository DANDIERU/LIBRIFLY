import { Actions,AppState } from "../types/store";


export const reducer = (action: any, prevState: any) => {
    switch (action.type) {
        case "NAVIGATE":
            prevState.screen = action.payload;
        break;

        case "SETUSER":
            prevState.user = action.payload;
      break;


export const reducer = (currentAction: any, currentState: AppState) => {
    const { type, payload } = currentAction;

    switch (type) {
        case "NAVIGATE":
            currentState.screen = payload
            break
        case "VIEW_BOOK_DETAILS":
            currentState.bookDetails = currentAction.payload;
            break
        case "SHOW_ADD_MODAL":
            currentState.modalComponent = currentAction.payload;
            break
    }

    return prevState;
}