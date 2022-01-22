import { getCookie } from "../static/cookie.js";

export function authenticated() {
  let auth = getCookie("auth");
  console.log(auth);
  // If the user is not authenticated
  if (!auth || auth === "" || auth === "undefined") {
    return this.$router.push("/");
  }
}
