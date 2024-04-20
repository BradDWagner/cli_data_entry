const inquirer = require('inquirer');
const { appendFile } = require('./utils/appendFile.js');
const { effectiveFilter} = require('./utils/effectiveFilter.js');
const { endFile } = require('./utils/endFile.js')

//array of type objects to pair type names with their ids in the data schema
const types = [
    {'number': 1, 'type': 'Normal'},
    {'number': 2, 'type': 'Fighting'},
    {'number': 3, 'type': 'Flying'},
    {'number': 4, 'type': 'Poison'},
    {'number': 5, 'type': 'Ground'},
    {'number': 6, 'type': 'Rock'},
    {'number': 7, 'type': 'Bug'},
    {'number': 8, 'type': 'Ghost'},
    {'number': 9, 'type': 'Steel'},
    {'number': 10, 'type': 'Fire'},
    {'number': 11, 'type': 'Water'},
    {'number': 12, 'type': 'Grass'},
    {'number': 13, 'type': 'Electric'},
    {'number': 14, 'type': 'Psychic'},
    {'number': 15, 'type': 'Ice'},
    {'number': 16, 'type': 'Dragon'},
    {'number': 17, 'type': 'Dark'},
    {'number': 18, 'type': 'Fairy'},
];

async function generatePrompt(){
    //loop through attacking types
    for(var i=0; i<types.length; i++){
        //loop through defending types
        for(var j=0; j<types.length;j++){
            //inquirer prompt to provide user with type matchups
            const data = await inquirer.prompt([
                {
                    type: 'rawlist',
                    name: `effective`,
                    message: `${types[i].type} attacks ${types[j].type}. It is:`,
                    choices: [
                        'Effective',
                        'Super effective',
                        'Not very effective',
                        'Not effective'
                    ],
                    filter: (effective) => { return effectiveFilter(effective);}
                }
            ])
            appendFile(types[i].number, types[j].number, data.effective)
        }
        
    }
    endFile()
};

function init(){
    console.log("let's add some data")
    generatePrompt();

}
init();