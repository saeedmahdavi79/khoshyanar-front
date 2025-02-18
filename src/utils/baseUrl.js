const baseUrl = (url) => {
  //const fullUrl = "https://api.afrapardaz.com/api/v1" + url;
  //const fullUrl = "http://localhost:8282/api/v1" + url;
  const fullUrl = "http://192.168.2.2:8282/api/v1" + url;
  return fullUrl;
};

export default baseUrl;
