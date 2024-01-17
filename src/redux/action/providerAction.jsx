export const FillProvider = (value) => {
    return { type: 'Fill-Provider', payload: value }
}
export const FillProviderConfirm = (value) => {
    return { type: 'Fill-Provider-Confirm', payload: value }
}
export const FillProviderNotConfirm = (value) => {
    return { type: 'Fill-Provider-NotConfirm', payload: value }
}
export const addNewProvider = (value) => {
    return { type: 'Add-New-Provider', payload: value }
}
export const updateProvider = (value) => {
    return { type: 'Update-Providers', payload: value }
}
export const setCurrProvider = (value) => {
    return {type: 'Set-CurrProvider', payload: value}
}
export const setCurrProviderPass = (value) => {
    return { type:'Set-CurrProviderPass',payload:value}
}