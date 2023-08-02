

const port = chrome.runtime.connectNative('idp2p');
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    port.postMessage(request);
    port.onMessage.addListener((response) => {
        console.log(`Received: ${response}`);
    });
    return true;
});

/*chrome.runtime.sendNativeMessage(
            'idp2p',
            {text: "hello"},
            function (response) {
                console.log('Received ' + response);
                sendResponse({ result: true });
            }
);*/
