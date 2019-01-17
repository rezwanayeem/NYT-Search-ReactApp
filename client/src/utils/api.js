import axios from "axios";

export default {
  // Gets all books
  
  // Retrieves saved articles from the db
  getArticle: function() {
    return axios.get("/api/saved");
  },
  // Saves a new article to the db
  saveArticle: function(articleObj) {
    return axios.post("/api/saved", articleObj);
  },
  // Deletes an article from the db
  deleteArticle: function(id) {
    return axios.delete(`/api/saved/${id}`);
  }
};
