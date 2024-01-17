import { wait } from "@testing-library/user-event/dist/utils";
import { useSelector } from "react-redux";
import { store } from '../../redux/store/store'
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today
// let listEventProviderByID = useSelector(e => e.EventToProviderReducer.listEventProvider)
const state = store.getState();
wait()
const listEventProviderByID = state.EventToProviderReducer.listEventProvider;
let list=listEventProviderByID
export const INITIAL_EVENTS = list

// const f = () => {
//   const events = useSelector((state) => state.events.data);
//   for (let index = 0; index < events.length; index++) {
//     const element = events[index];
//     alert(element.title);
//   }
// };
// const f = () => {
//   const state = store.getState();
//   const events = state.ProviderReducer.listProvider;
//   for (let index = 0; index < events.length; index++) {
//     const element = events[index];
//     alert(element.provAddress);
//   }
// };

// const f = () => {
//   const INITIAL_EVENTS = useSelector((state) => state.events.data);
//   for (let index = 0; index < INITIAL_EVENTS.length; index++) {
//     const element = INITIAL_EVENTS[index];
//     alert(element.title)
//   }
// }
// f()

export function createEventId() {
  debugger
  console.log(state);
  console.log(list);
  return String(eventGuid++)
}