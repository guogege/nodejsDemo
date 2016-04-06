/**
 * Created by zhang on 2016/1/12.
 */
var fs = require('fs');
var bufferSize =3;
function copy(src,datesrc) {
    var buffer = new Buffer(bufferSize);
    var fdSrc = fs.openSync(src, 'r');
    var fdDatesrc = fs.openSync(datesrc, 'w');
    var readSofa = 0;
    var read = null;
    do {
        read = fs.readSync(fdSrc, buffer, 0, bufferSize, readSofa);
        fs.writeSync(fdDatesrc, buffer, 0, read);
        readSofa = readSofa + read
    } while (read == bufferSize)
}
copy("1.txt","2.txt");
