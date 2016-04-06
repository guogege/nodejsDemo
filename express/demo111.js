/**
 * Created by zhang on 2016/3/21.
 */

function app(name,age){
    this.name = name
 console.log(name+age)
}

function appdemo(name){
    this.nam = name
    app.call(this,2,3)
    console.log(this.nam)
}
appdemo(4);