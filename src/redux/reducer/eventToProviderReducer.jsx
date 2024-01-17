import produce from 'immer'
const eventToProviderState={
   listEventProvider:[]
}
export const EventToProviderReducer=produce(
    (state,action)=>{
        switch (action.type) {
          case 'Fill-EventProviderByID':state.listEventProvider=action.payload;break;
        }
    },eventToProviderState
)
export default EventToProviderReducer