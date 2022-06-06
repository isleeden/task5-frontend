import axios from "axios";

export const API_URL = process.env.REACT_APP_API_URL;

const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

export class Service {
  static getInbox = (recipient) => {
    return api.get(`/inbox/${recipient}`);
  };

  static getSent = (author) => {
    return api.get(`/sent/${author}`);
  };

  static getMessage = (id) => {
    return api.get(`/${id}`);
  };

  static sendMessage = ({ title, author, recipients, replyId, message }) => {
    return api.post(`/send`, { title, author, recipients, replyId, message });
  };
}

export default api;
