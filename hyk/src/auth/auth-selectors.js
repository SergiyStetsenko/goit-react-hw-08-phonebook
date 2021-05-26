const getIsAuthrnticated = state => state.auth.isAuthenticated;
const getUseremail = state => state.auth.user.email;
const getUsername = state => state.auth.user.name;
export default {getIsAuthrnticated,getUsername,getUseremail}