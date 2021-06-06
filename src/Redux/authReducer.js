const initialState = {

    userEmail: null,
   // isAuthenticating: false
}

const authReducer = (state = initialState, action) => {
switch (action.type) {
    case "signIn":
        return {
            ...state,
            userEmail:action.payload
        };
        case "signUp":
            return {
                ...state,
                userEmail:null
            };
    default:
        return state

}
}
export default authReducer