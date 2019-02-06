import axios from "axios";

const pc = "prospace_companies"
const po = "prospace_offices"

export function deleteCompany(URL, company_id) {
  // console.log("sampai company");
  return axios.delete(URL + `api/${pc}_delete/${company_id}`);
  // return null;
}

export function deleteOffice(URL, office_id) {
  // console.log("sampai office");
  return axios.delete(URL + `api/${po}_delete/${office_id}`);
  // return null;
}

export function deleteBranch(URL, company_id) {
  return axios.delete(URL + `api/${po}b_delete/${company_id}`);
}
