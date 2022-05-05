import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 100,  // simulate 100 users
    iterations: 10000,  // total 10000 requests
};

// k6 main function
export default function () {
    const port = 3005
    http.get(`http://localhost:${port}?name=${makeid()}`);  // send GET request with a name parameter
    sleep(1);  // wait 1 sec between requests
}

// generate random names
function makeid() {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}