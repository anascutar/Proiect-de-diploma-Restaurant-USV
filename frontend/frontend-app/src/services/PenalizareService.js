import axios from "axios";

const PENALIZARE_BASE_REST_API_URL = "http://localhost:8080/api/p1";
class PenalizareService {
  getAllPenalizari() {
    return axios.get(PENALIZARE_BASE_REST_API_URL + "/penalizari");
  }

  getPenalizareById(penalizareId) {
    return axios.get(
      PENALIZARE_BASE_REST_API_URL + "/penalizari/" + penalizareId
    );
  }
  //sterge penalizare
  deletePenalizare(penalizareId) {
    return axios.delete(
      PENALIZARE_BASE_REST_API_URL + "/penalizari/" + penalizareId
    );
  }
}

export default new PenalizareService();
