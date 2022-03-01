import axios from "axios"

const instance = axios.create({
  baseURL: "http://localhost:5001/react-app-1cdea/us-central1/api",
})

export default instance
