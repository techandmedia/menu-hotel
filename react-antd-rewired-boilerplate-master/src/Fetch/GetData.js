import axios from "axios";

const hr = "hotel_reservation";
const rd = "hotel_rate";

export function getReservation(URL) {
  const data = axios.get(URL + `api/${hr}`).then(res => {
    // console.log(res.data);
    return res.data;
  });
  return data;
}

export function getRate(URL) {
  const data = axios.get(URL + `api/${rd}`).then(res => {
    return res.data;
  });
  return data;
}