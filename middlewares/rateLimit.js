const requestLog = new Map();

const WINDOW_SIZE = 60*1000;
const MAX = 5;

const rateLimit = (req, res, next) => {

    const userIp = req.ip;
    const currentTime = Date.now();

    if (!userIp){
        return res.status(400).json({error:"cant get IP"})
    }

    const userData = requestLog.get(userIp) || {counter : 0, lastRequestTime: currentTime}

    if(currentTime - userData.lastRequestTime > WINDOW_SIZE) {
        userData.counter = 0;
        userData.lastRequestTime = currentTime;
    }

    userData.counter++;

    if (userData.counter > MAX) {
        return res.status(429).json({error:"Too many requests, please try again later"})
    }

    requestLog.set(userIp, userData);
    console.log(requestLog)
    next();

}

module.exports = { rateLimit }