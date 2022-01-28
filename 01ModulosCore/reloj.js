var Reloj = (function () {
    var EventEmitter = require('events').EventEmitter,
        hereda = require('util').inherits
    var Clock = function () {
        var self = this
        setInterval(function () {
            self.emit('tictac')
        }, 1000)
    }
    hereda(Clock, EventEmitter)
    Clock.prototype.theTime = function () {
        var date = new Date(),
            hrs = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds(),
            msg = hrs + ':' + min + ':' + sec
        console.log(msg)
    }
    return Clock
})()
module.exports = Reloj