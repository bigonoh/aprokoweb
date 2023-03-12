const vars = {
  // base_url: "http://businessapi.getraventest.com",
  base_url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3500/v1" //change this for development only
      : "http://localhost:3500/v1", // leave this for production
};
function config() {
  return vars;
}

const env = config();

export default env;

// https://c7bd-197-242-108-203.eu.ngrok.io
