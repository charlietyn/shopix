import axios from 'axios'

const axios_api = axios.create({
  baseURL: 'https://fakestoreapi.com/',
})
axios_api.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios_api.defaults.headers.get['Accepts'] = 'application/json'
axios_api.interceptors.response.use(
  (res) => {
    return res
  },
  (error) => {
    error = error.response
      ? error
      : {
          response: {
            data: {
              message: 'Cors error,Check preflight request, there is not response from server',
            },
            statusText: 'Cors Errors , There no status text',
          },
        }
    throw error
  }
)
export default axios_api
