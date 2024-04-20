const fs = require('fs');

const appendFile = async function (type1, type2, strength){
    var text = `\n(${type1}, ${type2}, ${strength}), `
    console.log(text)
    fs.appendFile('./dist/type_matchup.sql', text, (err) =>
    err? console.error(err) : console.log('data added'))
};



module.exports = {
    appendFile
};