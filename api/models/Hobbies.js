/**
 * Hobbies.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    hobby:{
      type: 'string'
    },
    description:{
      type: 'string'
    },
    username: {
      type: 'string',
      maxLength: 200
    }
  },
};
