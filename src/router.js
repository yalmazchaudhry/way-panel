import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import DashBoard from "./components/DashBoard";
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/ResetPassword";

export default [
  {
    name: "Home",
    component: Home,
    path: "/home",
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: "dashboard",
        component: DashBoard,
      },
      //   {
      //     // UserPosts will be rendered inside User's <router-view>
      //     // when /user/:id/posts is matched
      //     path: "update-user",
      //     component: UpdateUser,
      //   },
    ],
    // beforeEnter: (to, from, next) => {
    //   if (to.name !== "SignIn" && !localStorage.getItem("token"))
    //     next({ name: "SignIn" });
    //   else next();
    // },
  },

  {
    name: "SignIn",
    component: SignIn,
    path: "/",
  },
  {
    name: "ForgetPassword",
    component: ForgetPassword,
    path: "/forget-password",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "ResetPassword",
    component: ResetPassword,
    path: "/reset-password",
  },
];
