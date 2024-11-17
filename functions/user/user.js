const { createUser } = require("../../utils/dynamodb");
const response = require("../../utils/response");
module.exports.createUser = async (event, context) => {
  try {
    console.log(`event ${event.body}`);
    console.log(`context ${context}`);
    const body = JSON.parse(event.body);
    // Save user in table, catch errors, and get bback response.
    const { USERS_TABLE } = process.env;

    const res = await createUser(body, USERS_TABLE);
    console.log(res);

    return { ...response.success, body: JSON.stringify(res) };
  } catch (error) {
    console.log(error);
    return { ...response.error, body: JSON.stringify(error) };
  }
};