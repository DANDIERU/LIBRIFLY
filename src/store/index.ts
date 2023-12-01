import Storage, { PersistanceKeys } from "../utils/storage";
import { Actions, AppState, Observer } from "../types/store";
import { reducer } from "./reducer";
import { screens } from "../types/navigation";
import { navigate, setUserCredentials } from "./actions";
import { auth } from "../Firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";


onAuthStateChanged(auth, (user) => {
  if (user) {
    user.email !== null ? dispatch(setUserCredentials(user.email)) : '';
    dispatch(navigate(screens.DASHBOARD));
  } else {
    dispatch(navigate(screens.SIGN_IN));
  }
});

const emptyState: AppState = {
    //pantalla inicial lo que se muestra

  screen: screens.SIGN_IN,
  user: {},

  screen: screens.DASHBOARD,
  bookDetails: undefined,
  modalComponent: undefined,


export let appState = Storage.get<AppState>({
  key: PersistanceKeys.STORE,
  defaultValue: emptyState,
});

let observers: Observer[] = [];

const persistStore = (state: AppState) =>
  Storage.set({ key: PersistanceKeys.STORE, value: state });

const notifyObservers = () => observers.forEach((o) => o.render());

export const dispatch = (action: any) => {
  const clone = JSON.parse(JSON.stringify(appState));
  const newState = reducer(action, clone);
  appState = newState;
  console.log(appState)
  persistStore(newState);
  notifyObservers();
};

export const addObserver = (ref: Observer) => {
  observers = [...observers, ref];
};