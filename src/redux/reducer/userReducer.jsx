import produce from 'immer'
const UserState = {
    listUser: [],
    userContact:"Anonimi",
    userCurrentID:null,
    userCurrent: {}
}
export const UserReaducer = produce(
    (state, action) => {
        switch (action.type) {
            case 'Fill-User':state.listUser=action.payload;break;
            case 'Fill-UserContact':state.userContact=action.payload;break;
            case 'Fill-UserCurrentID':state.userCurrentID=action.payload
            case 'Fill-UserCurrent': state.userCurrent = action.payload; break;
        }
    }, UserState
)
export default UserReaducer