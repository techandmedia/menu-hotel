import axios from "axios";

const hr = "hotel_reservation";

export function getReservation(URL) {
  const data = axios.get(URL + `api/${hr}`).then(res => {
    // console.log(res.data);
    return res.data;
  });
  return data;
}
