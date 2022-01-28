Clock.prototype.theTime = function(){
    // var Reloj = require('./reloj')
    // var tula = new Reloj ()
    // tula.on('tictac',function(){
    // tula.theTime();
    var date = new Date(),
            hrs = date.getHours(),
            min = date.getMinutes(),
            
            sec = date.getSeconds(),
            msg = hrs + ':' + (min<10) ? '0' + min : min +':' + sec
        console.log(msg)

}
