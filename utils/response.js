module.exports = {
    success: {  
        "statusCode": 200,
        "isBase64Encoded": false,
        "headers": {
            "Access-Control-Allow-Origin": "*"
        },
        "body": JSON.stringify({})
    },
    error: {
        "statusCode": 400,
        "isBase64Encoded": false,
        "headers": {
            "Access-Control-Allow-Origin": "*"
        },
        "body": JSON.stringify({})
    }
}