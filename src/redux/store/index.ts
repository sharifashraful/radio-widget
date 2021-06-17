import { applyMiddleware, createStore } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import thunk from "redux-thunk";
import radio from "../reducers/radioStationReducer"

const middlewares = [thunk];

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

const reducer = persistCombineReducers(persistConfig, {
  radio
});

const configureStore = () => {
	let store = createStore(reducer, applyMiddleware(...middlewares));
	let persistor = persistStore(store);
	return { store, persistor };
};

export default configureStore;
