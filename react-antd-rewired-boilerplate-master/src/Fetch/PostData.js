import axios from "axios";

const rs = "responden";
// const pt = "penilaian_teladan";
const ps = "penilaian_sendiri";
// const ao = "anggota_organisasi";
const pp = "penilaian_penilai";
const pp2 = "penilaian_penilai2";
const per = "pertanyaan";

// Post ke tabel penilaian_penilai
export function postPenilai(
  URL,
  nip_nim,
  responden_id,
  C1,
  C2,
  C3,
  C4,
  C5,
  C6,
  C7
) {
  return axios.post(URL + `api/${pp}_new`, {
    nip_nim: nip_nim,
    responden_id: responden_id,
    c1: C1,
    c2: C2,
    c3: C3,
    c4: C4,
    c5: C5,
    c6: C6,
    c7: C7
  });
}

export function postResponden(URL, nip_nim, full_name, role_id, password) {
  return axios.post(URL + `api/${rs}_new`, {
    nip_nim: nip_nim,
    full_name: full_name,
    role_id: role_id,
    password: password
  });
}

export function postPertanyaan(
  URL,
  nip_nim,
  responden_id,
  role_id,
  K001,
  K002,
  K003,
  K004,
  K005,
  K006,
  K007,
  K008,
  K009,
  K010,
  K011,
  K012,
  K013,
  K014,
  K015,
  K016,
  K017,
  K018,
  K019,
  K020,
  K021,
  K022,
  K023,
  K024,
  K025,
  K026,
  K027,
  K028,
  K029,
  K030,
  date
) {
  // console.log(K001, K030);

  // console.log(nip_nim, role_id);
  return axios.post(URL + `api/${per}_new`, {
    nip_nim: nip_nim,
    responden_id: responden_id,
    role_id: role_id,
    K001: K001,
    K002: K002,
    K003: K003,
    K004: K004,
    K005: K005,
    K006: K006,
    K007: K007,
    K008: K008,
    K009: K009,
    K010: K010,
    K011: K011,
    K012: K012,
    K013: K013,
    K014: K014,
    K015: K015,
    K016: K016,
    K017: K017,
    K018: K018,
    K019: K019,
    K020: K020,
    K021: K021,
    K022: K022,
    K023: K023,
    K024: K024,
    K025: K025,
    K026: K026,
    K027: K027,
    K028: K028,
    K029: K029,
    K030: K030,
    date_created: date
  });
}

export function postTeladan(
  URL,
  karyawan_id,
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  p1,
  p2,
  p3,
  p4
) {
  return axios.post(URL + "api/penilaian_teladan_new", {
    karyawan_id: karyawan_id,
    c1: c1,
    c2: c2,
    c3: c3,
    c4: c4,
    c5: c5,
    c6: c6,
    c7: c7,
    p1: p1,
    p2: p2,
    p3: p3,
    p4: p4
  });
}

export function postPenilai2(
  URL,
  nip_nim,
  responden_id,
  role_id,
  p1,
  p2,
  p3,
  p4
) {
  return axios.post(URL + `api/${pp2}_new`, {
    nip_nim: nip_nim,
    responden_id: responden_id,
    role_id: role_id,
    p1: p1,
    p2: p2,
    p3: p3,
    p4: p4
  });
}

export function postUsers(URL, full_name, role_id) {
  return axios.post(URL + "api/users_new", {
    full_name: full_name,
    role_id: role_id
  });
}

export function postUser(URL, full_name) {
  console.log(full_name);
  return axios.post(URL + "api/users/user", {
    full_name: full_name
  });
}

export function postPenilaianSendiri(
  URL,
  nip_nim,
  K001,
  K002,
  K003,
  K004,
  K005,
  K006,
  K007,
  K008,
  K009,
  K010,
  K011,
  K012,
  K013,
  K014,
  K015,
  K016,
  K017,
  K018,
  K019,
  K020,
  K021,
  K022,
  K023,
  K024,
  K025,
  K026,
  K027,
  K028,
  K029,
  K030
) {
  console.log("K030", K030);
  return axios.post(URL + `api/${ps}_new`, {
    user_id: nip_nim,
    K001: K001,
    K002: K002,
    K003: K003,
    K004: K004,
    K005: K005,
    K006: K006,
    K007: K007,
    K008: K008,
    K009: K009,
    K010: K010,
    K011: K011,
    K012: K012,
    K013: K013,
    K014: K014,
    K015: K015,
    K016: K016,
    K017: K017,
    K018: K018,
    K019: K019,
    K020: K020,
    K021: K021,
    K022: K022,
    K023: K023,
    K024: K024,
    K025: K025,
    K026: K026,
    K027: K027,
    K028: K028,
    K029: K029,
    K030: K030
  });
}

// ==== LOGIN ==================================
export function loginResponden(URL, responden_id, password) {
  return axios.post(URL + "api/responden_login", {
    responden_id: responden_id,
    password: password
  });
}

export function loginAdmin(URL, admin_name, admin_pass) {
  return axios.post(URL + "api/admin_login", {
    admin_name: admin_name,
    admin_pass: admin_pass
  });
}

// ==== Detil Penilaian ==================================
export function getDetailPenilaian(URL, nip_nim) {
  return axios.post(URL + `api/${pp}/${pp}`, {
    nip_nim: nip_nim
  });
}
