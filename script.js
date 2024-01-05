
var objUser = [
    {
        username : 'faheem',
        password : '123@qaz'
    },

    {
        username : 'munaf',
        password : 'munaf123'
    },

    {
        username : 'meehaf',
        password : '123987az'
    },

    {
        username : 'rim',
        password : 'rim@1er'
    }
] 


function info() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // console.log(username, password);
    for (let i = 0; i < objUser.length; i++){
        if(username == objUser[i].username &&  password == objUser[i].password){
            alert("Welcome " + username);
            return;
        }
    }
    alert("Enter a correct username or password");
}