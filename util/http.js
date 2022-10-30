import axios from "axios";

// import Waiter from "../models/waiter2";

const BACKEND_URL = "https://foody-ma-backend.herokuapp.com";


export async function fetchLangauges() {
  const response = await axios.get(BACKEND_URL + "/admin/v1/languages");
  let languages = [];
  for (const key in response.data) {
    const languageObj = {
      id: key,
      lang: response.data[key].lang,
      simpleLang: response.data[key].simpleLang,
    };
    languages.push(languageObj);
  }
  return languages;
}

export async function fetchSelectTable() {
  const response = await axios.get(BACKEND_URL + "/admin/v1/select-table");
  const selectTable = [];
  for (const key in response.data) {
    const selectTableObj = {
      id: key,
      simpleLang: response.data[key].simpleLang,
      buttonContent: response.data[key].buttonContent,
      pageContent: response.data[key].pageContent,
      pageTitle: response.data[key].pageTitle,
    };
    selectTable.push(selectTableObj);
  }
  return selectTable;
}

export function postWaiter(data) {
  axios.post(BACKEND_URL + "/admin/v1/waiter", data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}
