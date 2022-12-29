<template>
  <v-container fluid class="container">
    <v-alert type="success" color="deep-purple accent-4" v-show="showmes">
      User Registered Succssfully
    </v-alert>
    <v-card max-width="600" elevation="10" class="rounded-lg mx-auto my-5" tile>
      <div class="d-flex flex-column justify-space-between align-center">
        <v-img max-width="100" src="../assets/logo.png" class="img mt-8">
        </v-img>
      </div>

      <div class="d-flex flex-column justify-space-between align-center">
        <h1>Sign Up</h1>
      </div>
      <div class="d-flex flex-column align-center">
        <v-text-field
          v-model="name"
          :rules="nameRules"
          color="#48126A"
          label="Enter Full Name"
          required
          class="textfield mt-6"
          prepend-inner-icon="mdi-account"
          outlined
          dense
        >
        </v-text-field>
        <v-text-field
          v-model="email"
          label="Enter E-mail"
          color="#48126A"
          :rules="emailRules"
          required
          dense
          class="textfield"
          prepend-inner-icon="mdi-email"
          outlined
        >
        </v-text-field>
        <v-text-field
          v-model="password"
          label="Enter Password"
          color="#48126A"
          :rules="passwordRules"
          type="password"
          required
          class="textfield"
          prepend-inner-icon="mdi-lock"
          outlined
          dense
        >
        </v-text-field>
        <v-text-field
          v-model="cpassword"
          label="Confirm Password"
          :rules="confirmPasswordRules"
          type="password"
          required
          class="textfield"
          color="#48126A"
          prepend-inner-icon="mdi-lock"
          outlined
          dense
        ></v-text-field>
      </div>
      <div class="d-flex justify-center mx-auto">
        <span class="mx-auto">
          <v-checkbox
            label="Terms and Conditions."
            color="info"
            value="info"
            class="mt-0 pt-0"
            hide-details
          ></v-checkbox>
        </span>
      </div>
      <div class="d-flex flex-column align-center mt-4">
        <v-btn
          :disabled="!valid"
          color="#48126A"
          id="button-signin"
          @click="register()"
        >
          Sign Up
        </v-btn>

        <router-link to="/" class="text-decoration-none purple--text">
          <button class="mt-4 mb-4">Sign In</button>
        </router-link>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import validationRules from "../validation";
export default {
  data: () => ({
    showmes: false,
    name: "",
    email: "",
    password: "",
    cpassword: "",
  }),
  methods: {
    register() {
      console.log(this.name);
      localStorage.setItem("username", this.name);
      localStorage.setItem("firstname", this.name);
      localStorage.setItem("lastName", "kim");
      localStorage.setItem(
        "image",
        "https://robohash.org/autquiaut.png?size=50x50&set=set1"
      );
      localStorage.setItem("password", this.password);
      localStorage.setItem("email", this.email);

      this.showmes = true;
      console.log(this.showmes);
      setTimeout(() => {
        this.showmes = false;
      }, 2000);
      if (this.name != "" && this.password != "" && this.email != "") {
        localStorage.setItem("token", "true");
        this.$router.push({ path: "/" });
      }
    },
  },

  name: "SignUp",
  mixins: [validationRules],
};
</script>

<style scoped>
.container {
  background: linear-gradient(
    90deg,
    rgba(72, 18, 106, 1) 0%,
    rgba(226, 187, 187, 1) 50%,
    rgba(72, 18, 106, 1) 100%
  );

  height: 100vh;
}
h1 {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
h3 {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: dimgray;
}

#button-signin {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  width: 50%;
  color: white;
  font-weight: bold;
}

#button-signup {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  width: 50%;
  color: #48126a;
  font-weight: bold;
}

#button-signup:hover {
  border: 1px #48126a solid;
}

.textfield {
  width: 80%;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
</style>
