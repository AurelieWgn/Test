// const url = require("./vars");
const Repository = require("./Repository");
const req = new Repository();

class BusinessUnit {
  countComs(postId) {
    return req.getCommentByPostId(postId).then((response) => response.length);
  }

  getPostInfo(postId) {
    var result = {
      id: postId,
      title: "",
      comment_count: "",
    };
    req.getPosts().then((res) => {
      let post = res.filter((item) => item.id === postId);
      result.title = post[0].title;
    });
    req.getCommentByPostId(postId).then((res) => {
      result.comment_count = res.length;
    });

    return result;
  }

  getPostComsNumber(qt) {
    var list = [];
    req.getPosts().then((response) => {
      response.map((item) => {
        this.countComs(item.id).then((countResult) => {
          console.log("countResult", countResult);

          if (countResult >= qt) {
            console.log("coucouc");
            list.push(item);
          }
        });
      });
      console.log("list -->", list);
    });
    return list;
  }
}

module.exports = BusinessUnit;
