var buf = new Buffer.alloc(100),//está deprecated y se añade el .alloc para corregirlo
    buf2 = new Buffer.alloc(26),//
    //str = '\u00bd + \u00bc = \u00be'

for (var i=0;i<buf.length;i++){
    //97 en ascii es a
    buf2[i]=i+97 //de esta forma vamos a pintar el abecedario en minúsculas

}
console.log(buf2.toString('ascii'))

    // buf.write('abcd', 0, 4, 'ascii')

// console.log(
//     buf,
//     buf.toString('ascii'),
//     str,
//     str.length + 'caracteres',
//     Buffer.byteLength(str, 'utf8') + 'bytes',
//     buf2.length
// )