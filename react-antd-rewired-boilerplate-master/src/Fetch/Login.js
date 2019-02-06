import axios from 'axios'

const ho = "hotel-operator";

export function loginAdmin(URL, username, password) {
  console.log(username, password)
  return axios.post(URL + `api/${ho}_login`, {
    username: username,
    password: password
  });
}