import produce from 'immer'
const providerState = {
    listProviderConfirm: [],
    listProviderNotConfirm: [],
    listProvider:[],
    listProviderscopy: [],
    currProvider: 0,
    currProviderPass:0
}
export const ProviderReducer = produce(
    (state, action) => {
        switch (action.type) {
            case 'Fill-Provider-Confirm':
                {
                    state.listProviderConfirm = action.payload;
                    state.listProviderscopy = action.payload;
                    debugger
                } break;
                case 'Fill-Provider':
                {
                    state.listProvider = action.payload;
                    state.listProviderscopy = action.payload;
                    debugger
                } break;
            case 'Fill-Provider-NotConfirm': state.listProviderNotConfirm = action.payload
            case 'Update-Providers': state.listProvider = action.payload; break;
            case 'Add-New-Provider': state.listProvider = action.payload; break;
            case 'Set-CurrProvider': state.currProvider = action.payload; break;
            case 'Set-CurrProviderPass': state.currProviderPass = action.payload; break;
        }
    }, providerState
)
export default ProviderReducer