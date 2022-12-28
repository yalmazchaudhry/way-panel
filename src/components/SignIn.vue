<template>
    <v-container fluid class="container ">
        
        <v-card max-width="600" elevation="10" class="rounded-lg mx-auto mt-auto" tile >
                    
                <div class="d-flex flex-column justify-space-between align-center ">
                    <v-img src="../assets/logo.png" class="img mt-8"> </v-img>
                </div>
    
                <div class="d-flex flex-column justify-space-between align-center">
                    <h1>Sign In</h1>
                </div>
                    <div class="d-flex flex-column align-center mt-4">
                        <v-text-field v-model="userName"  color="#48126A" label="Enter User Name" required class="textfield mt-6" prepend-inner-icon="mdi-email" outlined>
                        </v-text-field>
                        <!-- <v-text-field v-model="email" :rules="emailRules" color="#48126A" label="Enter E-mail" required class="textfield mt-6" prepend-inner-icon="mdi-email" outlined>
                        </v-text-field> -->
                        <v-text-field label="Enter Password" color="#48126A" v-model="password" :rules="passwordRules" type="password" required class="textfield" prepend-inner-icon="mdi-lock" outlined>
                        </v-text-field>
                    </div>
                    <div class="d-flex justify-center mt-2 mx-auto" style="width:80%" >
                        <v-row justify="space-between">
                            <span >
                                <v-checkbox  label="Remeber Me" color="info" value="info" class="mt-0 pt-0" hide-details></v-checkbox>
                            </span>
                            <span >
                                
                                <router-link    to="/forget-password" class="text-decoration-none">Forgot Password?</router-link>
                               
                            </span>
                        </v-row>     
                    </div>
                    <div class="d-flex flex-column align-center my-4">
                        <v-btn :disabled="!valid" color="purple" class="my-2" id="button-signin" @click="login(userName,password)">
                            Sign In
                        </v-btn>
                        <v-btn  color="depressed" class=" mt-4 mb-4" id="button-signup" @click="validate">
                            <router-link    to="/sign-up" class="text-decoration-none purple--text">Sign Up</router-link> 
                        </v-btn>
                    </div>
                
                </v-card>
            
    </v-container>
       
    
    
    </template>
    
    <script>
    
    import validationRules from '../validation'
    
    
    export default {
      
        name: "SignIn",
        mixins: [validationRules],
        data: () => ({
            userName: '',
            password:'',
        }),
    
        methods: {
          login(userName,password){
            fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        //   username: userData[0],
        //   password: userData[1],
        username: userName,
        password: password,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          const Login_data = json;
          if (Login_data.message == "Invalid credentials") {
            if(localStorage.getItem("username")!=="Ali" && localStorage.getItem("password")!=="123456")
            alert("Wrong credentials");
          } else {
            localStorage.setItem("username", Login_data.username);
            localStorage.setItem("token", Login_data.token);
            localStorage.setItem("image", Login_data.image);
            localStorage.setItem("firstname", Login_data.firstName);
            localStorage.setItem("lastName", Login_data.lastName);
            localStorage.setItem("email", Login_data.email);
            // localStorage.setItem("password", Login_data.password);
          }
        });
this.$store.dispatch("login",[userName,password]);
this.$router.push({ path: "/home/dashboard" });
          }
        },
    };
    </script>
    
    <style scoped>
    .container {
      background: linear-gradient(90deg, rgba(72,18,106,1) 0%, rgba(226,187,187,1) 50%, rgba(72,18,106,1) 100%);
      height: 100vh;  
    }
    
    .img {
        height: 100px;
        width: 200px;
    }
    
    .checkbox {
        font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
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
        color: #48126A;
        font-weight: bold;
    }
    
    #button-signup:hover {
        border: 1px #48126A solid;
    }
    
    .textfield {
        width: 80%;
        font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif; 
    } 
    </style>