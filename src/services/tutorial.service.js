import http from "../http-common";
import http_auth from "../http-authenticate";

class TutorialDataService {
  getAll() {
    return http_auth.get("/get-tutorials");
  }

  getRecordForEdit(edit_id) {
    return http_auth.get(`get-record-to-edit/${edit_id}`);
  }

  storeEditRecord(form_data) {
    return http_auth.post("/update-record", form_data);
  }

  get(id) {
    return http.get(`/tutorials/${id}`);
  }

  create(data) {
    return http.post("/tutorials", data);
  }

  signup(formData) {
      return http.post("/register", formData);
  }

  signin(formData) {
      return http.post("/login", formData);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();