import axios from "axios"

const instance = axios.create({
  baseURL: "https://us-central1-react-app-1cdea.cloudfunctions.net/api",
})

export default instance

//"http://localhost:5001/react-app-1cdea/us-central1/api"
