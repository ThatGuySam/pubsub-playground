// Just logs received requests

// https://stackoverflow.com/a/56954397/1397641
const pubSubAckResponse = {
  statusCode: 204,
  body: 'OK'
}

exports.handler = async (event, context) => {
  console.log('event', event)

  return {
    ...pubSubAckResponse
  }
}
