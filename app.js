const DATA = [
    {
        name: "Xalilillo",
        username: "jamoldinov",
        password: "1234567"
    },
    {
        name: "sarvarbek",
        username: "sarvar002",
        password: "987654321"
    },
    {
        name: "sardorbek",
        username: "sardor1",
        password: "123456789"
    },
  
]
function signIn(user){
    try{
        
        let exisUser = DATA.find(u => u.username === user.username)

        if(!exisUser){
            throw new Error("Ism kamida 1 ta belgidan iborat bo'lishi kerak.")    
        }
        if(exisUser.name !== user.name){
            throw new Error( "Login kamida 4 ta belgidan iborat bo'lishi kerak.") 
        }
        if(exisUser.password !== user.password){
            throw new Error( "Parol kamida 6 ta belgidan iborat bo'lishi kerak.") 
        }
        return `Welcome ${exisUser.name}`
    }catch(error){
        return (error) 
    }
}

// console.log(signIn({name:  "Xalilillo", username:"jamoldinov", password: "1234567"}));
// console.log(signIn({ name: "sarvarbek", username:"sarvar002", password: "987654321"}));
// console.log(signIn({ name: "sardorbek", username:"sardor1", password: "123456789"}));



function  handIeSignIn(){
    let  name = prompt("name")
    let  username = prompt("username")
    let  password = prompt("password")
    alert(signIn({ name, username, password}))

}









