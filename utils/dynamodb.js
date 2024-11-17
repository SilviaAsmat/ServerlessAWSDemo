const AWS = require("aws-sdk");

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const bcrypt = require('bcryptjs');

const createUser = async(item, tableName) => {
    try {
        const timestamp = new Date().toISOString();
        const params = {
            "TableName": tableName,
            "Item": {
                ...item,
                createdAt: timestamp,
                updatedAt: timestamp,
            }
        };

        return dynamoDb.put(params).promise();
    } catch(error) {
        console.log(error)
        throw error
    }
}

module.exports = {createUser}