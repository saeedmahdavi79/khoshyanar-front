const baseUrlBlog = (url) => {
  const fullUrl = "https://blog.afrapardaz.com/wp-json/wp/v2" + url;
  //const fullUrl = "http://localhost:8282/api/v1" + url;
  return fullUrl;
};

export default baseUrlBlog;
