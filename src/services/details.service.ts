import api from "./api";

class DetailsUser {
  getDetailUser(login: string) {
    return api.get(`users/${login}`);
  }
}

export default new DetailsUser();
