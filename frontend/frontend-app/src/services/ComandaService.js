import axios from "axios";

const COMANDA_BASE_REST_API_URL = "http://localhost:8080/api/c1";

class ComandaService {
  getAllComenzi() {
    return axios.get(COMANDA_BASE_REST_API_URL + "/comenzi");
  }

  getComandaById(comandaId) {
    return axios.get(COMANDA_BASE_REST_API_URL + "/comenzi/" + comandaId);
  }
  //accepta
  createComanda(comanda) {
    return axios.post(COMANDA_BASE_REST_API_URL + "/comenzi/", comanda);
  }
  //refuza comanda
  deleteComanda(comandaId) {
    return axios.delete(COMANDA_BASE_REST_API_URL + "/comenzi/" + comandaId);
  }
}
export default new ComandaService();
