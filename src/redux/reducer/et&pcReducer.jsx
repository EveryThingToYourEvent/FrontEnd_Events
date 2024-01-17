import produce from 'immer'
const ETandPCState = {
    listETandPC: [],
    oneNumber:1
}
export const ETandPCReducer = produce(
    (state, action) => {
        switch (action.type) {
            case 'Fill-ETandPC': state.listETandPC = action.payload
                break;
        }
    }, ETandPCState
)
export default ETandPCReducer