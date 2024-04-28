const fs = require('fs');

const appendFile = async function (type1, type2, strength){
    //fromat gathered data to fit sql syntax
    var text = `\n(${type1}, ${type2}, ${strength}),`
    fs.appendFile('./dist/type_matchup.sql', text, (err) =>
        err? console.error(err) : console.log('data added'))
};



module.exports = {
    appendFile
};