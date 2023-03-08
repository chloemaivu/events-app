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

    updateEvent = async (_id, name, location, summary, date) => {
        console.log("event " + name + location )
        const response = await axios.put(`${url}events/${_id}`,
         {name, location, summary, date});
         console.log(response)
         return response;
    }

    fetchEvents = async () => {
        const event = await this.getRequest(`${url}events`)
        return event.data;
    }

    deleteEvent = async (_id) => {
        console.log(_id)
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