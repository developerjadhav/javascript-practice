function throttle (fun, delay) {
    let lastCall = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastCall < delay) {
            return;
        }

        lastCall = now;
        return fun(...args);
    }
}

const sendMessage = (message) => {
    console.log("sending message ",message);    
}

sendMessage("hi");
sendMessage("hello");
sendMessage("ye namastey");
sendMessage("how are you");
sendMessage("when are you joining ofc");

const sendMessageWithThrottle = throttle(sendMessage, 2000);

sendMessageWithThrottle("hi");
sendMessageWithThrottle("hello");
sendMessageWithThrottle("ye namastey");
sendMessageWithThrottle("how are you");
sendMessageWithThrottle("when are you joining ofc");