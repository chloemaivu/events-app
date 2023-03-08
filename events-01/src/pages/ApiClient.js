import axios from "axios"

const url = "http://localhost:3001/"

export class ApiClient {

    constructor(tokenProvider, logoutHandler) {
        this.tokenProvider = tokenProvider;
        this.logoutHandler = logoutHandler;
      }

    responseStatusCheck = (resObj) => {
        if (resObj.status >= 200 && resObj.status < 300) {
            return Promise.resolve(resObj);
        } else {
            return Promise.reject(new Error(resObj.status));
        }
    };

    getRequest = async (url) => {
        try {
            const req = await axios.get(url);
            const res = await this.responseStatusCheck(req);
            return res;
        } catch (error) {
            return {
                content: "Error getting data",
            };
        }
    };  

    createEvent = async (name, location, summary, date) => {
        console.log("event " + name + location )
        const response = await axios.post(`${url}events/create`,
         {name, location, summary, date});
         console.log(response)
         return response
    }

    fetchEvents = async () => {
        const event = await this.getRequest(`${url}events`)
        return event.data;
    }

    deleteEvent = async (_id) => {
        console.log(_id)

// found the problem! we just have to call (`${url}events/${_id}`) as we want to concatenate
// the endpoint together, realised this through some trial and error 
// we were just calling an endpoint which didn't exist / passing in things in an incorrect way
// im sure we tried this previously but may have made a typo or not refreshed the page properly!

        const response = await axios.delete(`${url}events/${_id}`)
        console.log(response)
        return response;
    }

    fetchUsers = async (userName, password) => {
        console.log("login " + userName + password)
        const response = await axios.post(`${url}users`, { userName, password });
        console.log(response)
        return response
    }

}