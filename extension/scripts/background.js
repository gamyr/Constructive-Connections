async function doSomethingWith(request) {
    console.log("start2")
    const response = await fetch("https://loydni.pythonanywhere.com/?element=" +request.data, { mode: 'cors' });
    const asdf = await response.text();
    console.log(asdf)
    return asdf;
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("start");
    doSomethingWith(request).then(sendResponse);
    console.log("sent");
    return true; 
  });