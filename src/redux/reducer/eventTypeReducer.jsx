import produce from 'immer'
const eventTypeState={
    listEventType:[]
}
export const EventTypeReducer=produce(
    (state,action)=>{
        switch (action.type){
          case 'Fill-EventType':state.listEventType=action.payload
          break;
        }
    },eventTypeState
)
export default EventTypeReducer