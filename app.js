function sendMessage(message) {
    if (typeof CallInApp === 'undefined') 
      console.log(message);
    else
      CallInApp.postMessage(message);
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

function notifyClientToEnableMotionSensors() {
    sendMessage(JSON.stringify({ 
                     type: 'enableMotionSensors',
                     data: 'true' }));
}

function notifyClientToDisableMotionSensors() {
    sendMessage(JSON.stringify({ 
                     type: 'disableMotionSensors',
                     data: 'true' }));
}
