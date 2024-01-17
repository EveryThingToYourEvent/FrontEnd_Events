import produce from 'immer'
const providersCategoriesState = {
    listProvidersCategories: [],
    listProvidersCategoriescopy: [],
    currEvent: 0,
    currPC: 0
}
export const ProvidersCategoriesReducer = produce(
    (state, action) => {
        switch (action.type) {
            case 'Fill-ProvidersCategories': {
                state.listProvidersCategories = action.payload;
                state.listProvidersCategoriescopy = action.payload;
                debugger
            } break;
            case 'Update-ProvidersCategories': {
                state.listProvidersCategories = action.payload;
            }
            case 'Fill-CurrEvent': state.currEvent = action.payload
                break;
            case 'Fill-currPC': state.currPC = action.payload
                break;
            case 'Add-NewProviderCategory': state.listProvidersCategories = action.payload
                break;
        }
    }, providersCategoriesState
)
export default ProvidersCategoriesReducer