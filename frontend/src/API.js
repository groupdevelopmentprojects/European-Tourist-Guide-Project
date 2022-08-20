import axios from 'axios';
// const LOGIN_USER_KEY = 'WD_FORUM_LOGIN_USER_KEY';

var baseURL;
// if (process.env.REACT_APP_ENVIRONMENT && process.env.REACT_APP_ENVIRONMENT === 'PRODUCTION') {
//     baseURL = process.env.REACT_APP_API_BASE_URL;
// } else {
//     baseURL = 'http://127.0.0.1:8000';
// }

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

/**
 * Add requireToken: true in request config, for API that required Authorization token
 */
api.interceptors.request.use(
    config => {
        if (config.requireToken && localStorage.getItem(LOGIN_USER_KEY)) {
            config.headers.common['Authorization'] = JSON.parse(localStorage.getItem(LOGIN_USER_KEY)).token;
        }

        return config;
    },
    err => {
        console.error(err);
    }
);

export default class API {
    getPlaces = async (search, category) => {
      let url = "/places/";
      let query = new URLSearchParams();
      if (search) {
        query.append("search", search);
      }
      if (category) {
        query.append("category", category);
      }
  
      if (query.toString() != "") {
        url += "?" + query.toString();
      }
  
      const places = await api
        .get(url)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          throw new Error(error);
        });
      return places;
    };
    getCategories = async () => {
      const categories = await api
        .get("/categories/")
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          throw new Error(error);
        });
      return categories;
    };
  }
