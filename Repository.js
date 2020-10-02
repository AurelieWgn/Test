const url = require("./vars");
const axios = require("axios").default;

class Repository {
  getPosts() {
    return axios
      .get(url + "posts")
      .then((result) => result.data)
      .catch(console.log);
  }

  getCommentByPostId(postId) {
    return axios
      .get(url + `posts/${postId}/comments`)
      .then((response) => response.data)
      .catch(console.log);
  }

  // getPostsById(postId) {
  //   return axios
  //     .get(url + `posts/${postId}`)
  //     .then((response) => response.data)
  //     .catch(console.log);
  // }
}

module.exports = Repository;
