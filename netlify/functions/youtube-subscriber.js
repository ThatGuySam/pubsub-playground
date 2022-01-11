// Just logs received requests

// https://stackoverflow.com/a/56954397/1397641
const pubSubAckResponse = {
  statusCode: 204,
  body: 'OK'
}

exports.handler = async (event, context) => {
  console.log('event', event)
  
  const hasChallenge = typeof(event.queryStringParameters['hub.challenge']) !== 'undefined'
  
  
  if ( hasChallenge ) {
     return {
        ...pubSubAckResponse,
        statusCode: 200,
        body: event.queryStringParameters['hub.challenge']
     }
  }

  return {
    ...pubSubAckResponse
  }
}
