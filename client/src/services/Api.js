// used to hit API endpoints, in this case the ones provided by express.
import axios from 'axios';

export default () => {
  // create an axios object that points to the backend API that can be used to
  // make API requests.
  return axios.create({
    baseURL: `http://localhost:8081/`
  });
}
