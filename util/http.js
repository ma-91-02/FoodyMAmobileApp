import axios from "axios";

const BACKEND_URL = "http://localhost:3000";

export async function fetchLangauges() {
  const response = await axios.get(BACKEND_URL + "/admin/languages");
  //   console.log(expenses);
  const expenses = [];
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      lang: response.data[key].lang,
      simpleLang: response.data[key].simpleLang,
    };
    expenses.push(expenseObj);
  }
  return expenses;
}

export async function fetchSelectTable() {
  const response2 = await axios.get(BACKEND_URL + "/admin/v1/select-table");
  const expenses2 = [];
  //   console.log(expenses);
  for (const key in response2.data) {
    const expenseObj2 = {
      id: key,
      simpleLang: response2.data[key].simpleLang,
      buttonContent: response2.data[key].buttonContent,
      pageContent: response2.data[key].pageContent,
      pageTitle: response2.data[key].pageTitle,
    };
    expenses2.push(expenseObj2);
  }
  return expenses2;
}

export async function postWaiter(data) {
  try {
    axios.post();
    let code_res = await
    axios.post(BACKEND_URL + "/admin/v1/waiter/data.js",JSON.stringify(data));
    console.log(code_res.data);
    if (code_res.data.length > 0) {
      const { code } = code_res.data;
      dispatch({ type: SEMCODE_FETCH_SUCCESS, payload: { semCode: code } });
    }
  } catch (err) {
    console.error(`Error received from axios.post: ${JSON.stringify(err)}`);
  }
}
