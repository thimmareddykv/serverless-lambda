'use strict';

module.exports.hello = (event, context, callback) => {
  /** Immediate response for WarmUp plugin */
  if (event.source === 'serverless-plugin-warmup') {
    console.log('WarmUp - Lambda is warm!');
    return callback(null, 'Lambda is warm!')
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      }),
  };

  callback(null, response);
};
