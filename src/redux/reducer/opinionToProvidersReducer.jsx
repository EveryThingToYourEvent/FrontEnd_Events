import produce from 'immer'
const opinionToProviderState = {
    listOpinionToProvider: []
}
export const OpinionToProviderReducer = produce(
    (state, action) => {
        switch (action.type) {
            case 'Fill-OpinionToProvider': state.listOpinionToProvider = action.payload
                break;
        }
    }, opinionToProviderState
)
export default OpinionToProviderReducer