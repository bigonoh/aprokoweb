const vars = {
  // base_url: "http://businessapi.getraventest.com",
  base_url:
    process.env.NODE_ENV === "development"
      ? "https://businessapi.getraventest.com" //change this for development only
      : "https://businessapi.getraventest.com", // leave this for production
};
function config() {
  return vars;
}

const env = config();

export default env;

// https://c7bd-197-242-108-203.eu.ngrok.io
