import { API } from "../constant/api";
import axios from "axios";


const serviceHome = async () => {
    try {
        const response = await axios.get(`${API}`);
    
        const res = response.data;
    
        return res;
      } catch (errors) {
        console.error(errors);
      }

}









export default serviceHome;