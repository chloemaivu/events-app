import axios from "axios";
import { toast } from "react-toastify";
const url = "https://events-fullstack-app.onrender.com";

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
      toast.error("Error getting data");
      console.log(error);
      return {};
    }
  };

  createEvent = async (name, location, summary, date, imgUrl) => {
    try {
      const response = await axios.post(`${url}events/create`, {
        name,
        location,
        summary,
        date,
        imgUrl,
      });
      toast.success("Event created successfully!");
      console.log(response);
      return response;
    } catch (error) {
      toast.error("Error creating event!");
      console.log(error);
    }
  };

  updateEvent = async (_id, name, location, summary, date, imgUrl) => {
    try {
      const response = await axios.put(`${url}events/${_id}`, {
        name,
        summary,
        date,
        location,
        imgUrl,
      });
      toast.success("Event updated successfully!");
      console.log(response);
      return response;
    } catch (error) {
      toast.error("Error updating event!");
      console.log(error);
    }
  };

  fetchEvents = async () => {
    try {
      const event = await this.getRequest(`${url}events`);
      return event.data;
    } catch (error) {
      console.log(error);
    }
  };

  deleteEvent = async (_id) => {
    try {
      const response = await axios.delete(`${url}events/${_id}`);
      toast.success("Event deleted successfully!");
      console.log(response);
      return response;
    } catch (error) {
      toast.error("Error deleting event!");
      console.log(error);
    }
  };

  fetchUsers = async (userName, password) => {
    try {
      const response = await axios.post(`${url}users`, { userName, password });
      toast.success("User logged in successfully!");
      console.log(response);
      return response;
    } catch (error) {
      toast.error("Error logging in!");
      console.log(error);
    }
  };
}
