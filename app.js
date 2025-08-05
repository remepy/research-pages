function sendMessage(message) {
    if (CallInApp)
      CallInApp.postMessage(message);
    else
      console.log(message);
  }

function notifyClientToSendPayload(payload) {
    const message = {
      type: 'sendData',
      data: {
        payload: payload
      }
    };

    sendMessage(JSON.stringify(message))
}

function notifyClientToShowBackButton() {
    sendMessage(JSON.stringify({ 
        type: 'showBackButton',
        data: 'true' }));
}

function notifyClientToNext()
{
    sendMessage(JSON.stringify({ 
                     type: 'toNext',
                     data: 'true' }));
}

function notifyClientToResetGame() {
     sendMessage(JSON.stringify({ 
                     type: 'resetGame',
                     data: 'true' }));
}
