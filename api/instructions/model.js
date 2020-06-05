const db = require('../../database/dbconfig');

module.exports = {
  getInstructions,
  addInstructions,
  editInstructions,
  deleteInstructions,
}

/** GET ALL INSTRUCTIONS */
function getInstructions () {
  return db('Instructions');
}

 /** SAVE AN INSTRUCTION */
function addInstructions (instruction) {
  return db('Instructions').insert(instruction);
}

/** CHANGE AN INSTRUCTION */
function editInstructions (changes, id) {
  return db('Instructions').where({ id }).update(changes);
}

/** DELETE AN INSTRUCTION */
function deleteInstructions (id) {
  return db('Instructions').where({ id }).del();
}