<template>
  <div>
    <h1>Register</h1>
    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="email" />
    <br>
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password" />
    <br>
    <button
      @click="register">
      Register
    </button>
  </div>
</template>

<!--

outline of how this callback is rounted through the whole application:

Frontend:
button object @click calls register() method in methods
register() method in methods calls AuthenticationService.register(creds) from
AuthenticationService.js
which calls Api.post('register', creds) from Api.js
which returned an axios object that handels the call by making a post request to
the server defined by Api.js in the axios.create function.

Backend:
The post request is captured by express listening on port 8081 defined by
app.listen() in app.js, which also defines a function to call when a post
request to /register is recieved in app.post() which sends back a JSON response
echoing some of the request data.  All of this defined in app.js which also
declares app = express();  this app.js file is run by node.js.

Frontend:
Finally, the await funtion in Register.vue completes and response = await
AuthenticationService.register() resolves to the server's response.  the script
logs the response JSON data to the console.


-->

<script>
import AuthenticationService from '@/services/AuthenticationService';
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
      console.log('register button clicked.', this.email, this.password);
      console.log(response.data);
    }
  },
}
</script>

<style scoped>
</style>
