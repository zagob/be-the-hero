const knex = require('knex');
const configuration = require = require('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection;