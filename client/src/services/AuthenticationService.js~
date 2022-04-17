import Api from '@/services/Api';

export default {
  register (credentials) {
    return Api().post('register', credentials);
  }
}

// call this method like this from some other file that imports it.
// It acts as a nice interface between my frontend code and the API
//
// AuthenticationService.register({
//   email: 'testing@gmail.com',
//   password: '1234'
// });
