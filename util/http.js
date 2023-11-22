import axios from "axios";

// const BACKEND_URL = "https://foody-ma-backend.herokuapp.com";
const BACKEND_URL = "http://localhost:80";

//////////////////// Language /////////////
export async function fetchLangauges() {
  const response = await axios.get(BACKEND_URL + "/admin/v1/languages");
  let languages = [];
  for (const key in response.data) {
    const languageObj = {
      id: key,
      lang: response.data[key].lang,
    };
    languages.push(languageObj);
  }
  return languages;
}

//////////////// select Table ////////////
export async function fetchSelectTable() {
  const response = await axios.get(BACKEND_URL + "/admin/v1/select-table");
  const selectTable = [];
  for (const key in response.data) {
    const selectTableObj = {
      id: key,
      language: response.data[key].language,
      buttonContent: response.data[key].buttonContent,
      pageContent: response.data[key].pageContent,
      pageTitle: response.data[key].pageTitle,
    };
    selectTable.push(selectTableObj);
  }
  return selectTable;
}
//////////////// select Service ////////////
export async function fetchSelectService() {
  const response = await axios.get(BACKEND_URL + "/admin/v1/select-service");
  const selectService = [];
  for (const key in response.data) {
    const selectServiceObj = {
      id: key,
      language: response.data[key].language,
      pageContent: response.data[key].pageContent,
      buttonByApp: response.data[key].buttonByApp,
      buttonByWaiter: response.data[key].buttonByWaiter,
      pageTitle: response.data[key].pageTitle,
    };
    // console.log(selectServiceObj);
    selectService.push(selectServiceObj);
  }
  return selectService;
}
export function postUser(data) {
  axios.post(BACKEND_URL + "/v1/add-user", data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}
//////////////// Waiter Page ////////////
export async function fetchWaiterPage() {
  const response = await axios.get(BACKEND_URL + "/admin/v1/waiter");
  const waiterPage = [];
  for (const key in response.data) {
    const waiterPageObj = {
      id: key,
      language: response.data[key].language,
      pageContent: response.data[key].pageContent,
      buttonMenu: response.data[key].buttonMenu,
      pageTitle: response.data[key].pageTitle,
    };
    // console.log(waiterPageObj);
    waiterPage.push(waiterPageObj);
  }
  return waiterPage;
}

export function postWaiter(data) {
  axios.post(BACKEND_URL + "/admin/v1/waiter", data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}

//////////////// Category Content ////////////
export async function fetchCategoryContent() {
  const response = await axios.get(BACKEND_URL + "/admin/v1/category-content");
  const categoryContent = [];
  for (const key in response.data) {
    const categoryContentObj = {
      id: key,
      language: response.data[key].language,
      pageTitle: response.data[key].pageTitle,
    };
    // console.log(categoryContentObj);
    categoryContent.push(categoryContentObj);
  }
  return categoryContent;
}

//////////////// Category ////////////
export async function fetchCategory() {
  const response = await axios.get(BACKEND_URL + "/admin/v1/category");
  const category = [];
  for (const key in response.data) {
    const categoryObj = {
      id: response.data[key]._id,
      language: response.data[key].language,
      title: response.data[key].title,
    };
    // console.log(categoryObj);
    category.push(categoryObj);
  }
  return category;
}

//////////////// Meal ////////////
export async function fetchMeal() {
  const response = await axios.get(BACKEND_URL + "/admin/v1/meal");
  const meal = [];
  for (const key in response.data) {
    const mealObj = {
      id: response.data[key]._id,
      language: response.data[key].language,
      categoryIds: response.data[key].categoryIds,
      title: response.data[key].title,
      price: response.data[key].price,
      imageUrl: response.data[key].imageUrl,
      duration: response.data[key].duration,
      ingredients: response.data[key].ingredients,
    };
    meal.push(mealObj);
  }
  return meal;
}

// export function postMealCard(data) {
//   axios.post(BACKEND_URL + "/v1/add-meal-card", data, {
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//   });
// }

////////////////// Cart ////////////

export function postMealCard(data) {
  axios.post(BACKEND_URL + "/v1/add-cart", data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}
export function postDeleteMealCard(data) {
  axios.post(BACKEND_URL + "/v1/delete-meal-cart", data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}

export async function fetchCard() {
  const response = await axios.get(BACKEND_URL + "/v1/cart");
  const card = [];
  for (const key in response.data) {
    const cardObj = {
      id: response.data[key].mealId._id,
      title: response.data[key].mealId.title,
      price: response.data[key].mealId.price,
      quantity: response.data[key].quantity,
    };
    // console.log(cardObj );
    card.push(cardObj);
  }
  return card;
}
