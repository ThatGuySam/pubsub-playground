// Just logs received requests
exports.handler = async (event, context) => {
  console.log('event', event)

  return {
    statusCode: 200,
    body: JSON.stringify({
      event
    })
  }
}
