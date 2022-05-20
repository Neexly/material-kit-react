const { API } = require("./apiService")

class UserService{

    logUserIn(userData){
        localStorage.setItem('user', userData.user)
        localStorage.setItem('token', userData.token)
    }

    getUser(){
        return API.get('/users/1')
    }
}