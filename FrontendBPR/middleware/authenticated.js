import { getCookie } from "../static/cookie.js";

export function authenticated({ redirect }) {
  let auth = getCookie("auth");
  // If the user is not authenticated
  if (!auth || auth === "" || auth === "undefined") {
    return redirect("/");
  }
}
