import axios from 'axios'

const axios_api = axios.create({
  baseURL: 'https://fakestoreapi.com/',
})
axios_api.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios_api.defaults.headers.get['Accepts'] = 'application/json'
const reqInt = axios_api.interceptors.request.use((config) => {
  return config
})
const respInt = axios_api.interceptors.response.use(
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
// axios_api.interceptors.request.eject(reqInt)
// axios_api.interceptors.response.eject(respInt)
export default axios_api
