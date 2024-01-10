let fs = require('node:fs');

function writeToDisk(path, simpleData) {
    try {
        fs.writeFileSync(path, JSON.stringify(simpleData));
        // file written successfully
    } catch (err) {
        console.error(err);
    }
}

function parseXML(FilePath) {
    // read and parsing xml file from e.g. MonsterBook.img.xml 
    var parse = require('xml-parser');
    var xml = fs.readFileSync(FilePath, 'utf8');
    var inspect = require('util').inspect;
    var obj = parse(xml);
    return obj
}


module.exports = {
    diskWriter : writeToDisk,
    parseXML,
};