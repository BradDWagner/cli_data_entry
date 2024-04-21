const fs = require('fs');

const endFile = async function() {
    const file = './dist/type_matchup.sql'
    //collect data on the file's size
    const stat = await fs.promises.stat(file)
    const fileSize = stat.size
    //remove the last ', ' from the file
    await fs.promises.truncate(file, fileSize -1)
    //add final semicolon
    await fs.appendFile(file, '\n;', (err) =>
        err? console.error(err) : console.log('file finished')) 
};

module.exports = {
    endFile
}