import api from "./api";

class UserData {
  getUserData() {
    return api.get("orgs/facebook/public_members");
  }
}

export default new UserData();
