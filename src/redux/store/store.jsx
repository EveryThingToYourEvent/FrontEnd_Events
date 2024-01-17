import { createStore } from "redux";
import { combineReducers } from "redux";
import EventTypeReducer from '../reducer/eventTypeReducer.jsx';
import UserReducer from "../reducer/userReducer.jsx";
import ProviderReducer from "../reducer/providerReducer.jsx";
import ProvidersCategoriesReducer from '../reducer/pCategoriesReducer.jsx'
import ETandPCReducer from '../reducer/et&pcReducer'
import EventToProviderReducer from "../reducer/eventToProviderReducer.jsx";
import OpinionToProviderReducer from "../reducer/opinionToProvidersReducer.jsx"

const reducer = combineReducers({ EventTypeReducer,EventToProviderReducer, UserReducer, ProviderReducer, ProvidersCategoriesReducer,ETandPCReducer,OpinionToProviderReducer })
export const store=createStore(reducer)
window.store=store
export default store