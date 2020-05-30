const db = require('../../database/dbconfig');

module.exports = {
  getInstructions,
  addInstructions,
  editInstructions,
  deleteInstructions,
}

/** GET ALL INSTRUCTIONS */
const getInstructions = () => {
  return db('Instructions');
}

 /** SAVE AN INSTRUCTION */
const addInstructions = (instruction) => {
  return db('Instructions').insert(instruction);
}

/** CHANGE AN INSTRUCTION */
const editInstructions = (changes, id) => {
  return db('Instructions').where({ id }).update(changes);
}

/** DELETE AN INSTRUCTION */
const deleteInstructions = (id) => {
  return db('Instructions').where({ id }).del();
}