const vars = {
  // base_url: "http://businessapi.getraventest.com",
  base_url: process.env.NODE_ENV === "development"
      ? "http://localhost:3500/v1" //change this for development only
      : "https://api.aprokopay.com/v1", // leave this for production

  paystack_key: "pk_live_5adb3f8cca7fd8cf239105be2060270147ffbe8e"
};
function config() {
  return vars;
}

const env = config();

export default env;

// https://c7bd-197-242-108-203.eu.ngrok.io
