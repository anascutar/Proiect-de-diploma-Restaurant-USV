import axios from "axios";

const ITEM_BASE_REST_API_URL = "http://localhost:8080/api/v1";

class ItemService {
  getAllItemi() {
    return axios.get(ITEM_BASE_REST_API_URL + "/itemi");
  }

  createItem(item) {
    // console.log("body " + item)
    return axios.post(ITEM_BASE_REST_API_URL + "/itemi", item);
  }

  getItemById(itemId) {
    return axios.get(ITEM_BASE_REST_API_URL + "/itemi/" + itemId);
  }

  //update item
  updateItem(itemId, item) {
    return axios.put(ITEM_BASE_REST_API_URL + "/itemi/" + itemId, item);
  }
  //delete item
  deleteItem(itemId) {
    return axios.delete(ITEM_BASE_REST_API_URL + "/itemi/" + itemId);
  }

  //get itemactivi(meniul zilei)
  getItemiActivi() {
    return axios.get(ITEM_BASE_REST_API_URL + "/itemiActivi");
  }
}

export default new ItemService();
