const db = require('../database/db');
require('dotenv').config();
const axios = require('axios');
const auth = {
  username: process.env.JIRA_USERNAME_ZEB,
  password: process.env.JIRA_PASSWORD_ZEB,
};

class Sprint {
  static fetchSprintsJira = async () => {
    const response = await axios.get(
      `https://zebrands.atlassian.net/rest/api/3/search?jql=Sprint%20%3D%20%22[ZeCommerce Tech] Sprint 5%22%20ORDER%20BY%20createdDate%20DESC`,
      {
        auth: auth,
      }
    );

    var jsonData = response.data;

    var uniqueObjects = [];

    // Function to check if two objects have the same properties and values
    function objectsAreEqual(obj1, obj2) {
      var keys1 = Object.keys(obj1);
      var keys2 = Object.keys(obj2);

      if (keys1.length !== keys2.length) {
        return false;
      }

      for (var key of keys1) {
        if (obj1[key] !== obj2[key]) {
          return false;
        }
      }

      return true;
    }

    // Function to check if an object is already in the array of unique objects
    function objectExistsInArray(obj, array) {
      for (var item of array) {
        if (objectsAreEqual(obj, item)) {
          return true;
        }
      }
      return false;
    }

    // Loop through each issue and extract the required information
    jsonData.issues.forEach(function (issue) {
      var currentObject = {
        id: issue.fields.customfield_10010[0].id,
        nombre: issue.fields.customfield_10010[0].name,
        fecha_inicio: issue.fields.customfield_10010[0].startDate,
        fecha_fin: issue.fields.customfield_10010[0].endDate,
        state: issue.fields.customfield_10010[0].state,
        boardId: issue.fields.customfield_10010[0].boardId
      };

      // Check for uniqueness and push to the array of unique objects
      if (!objectExistsInArray(currentObject, uniqueObjects)) {
        uniqueObjects.push(currentObject);
      }
    });

    // Log the extracted unique objects to the console
    return uniqueObjects
  };

  static postSprints = async (
    id,
    nombre,
    fecha_inicio,
    fecha_fin,
    state,
    boardId
  ) => {
    return db.execute(
      `INSERT IGNORE INTO SPRINTS (id_jira, nombre, fecha_inicio, fecha_fin, state, boardId) VALUES (?, ?, ?, ?, ?, ?)`,
      [id, nombre, fecha_inicio, fecha_fin, state, boardId]
    );
  };

};

module.exports = Sprint;

Sprint.fetchSprintsJira()
