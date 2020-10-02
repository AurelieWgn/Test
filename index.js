const Repository = require("./Repository");
const BusinessUnit = require("./BusinessUnit");
let req = new Repository();
let busiUnit = new BusinessUnit();

// 1) Créer une méthode permettant de récupérer tous les posts
req.getPosts().then((res) => {
  //   console.log("All posts : ", res);
});

// 2) Créer une méthode permettant de récupérer les commentaires par postId
req.getCommentByPostId(3).then((res) => {
  //   console.log("All comment for postId 3 : ", res);
});

// 3) Créer une méthode permettant de récupérer le titre d’un post et le nombre de
// commentaires. Cette méthode prendra en paramètre le postId et renverra un objet

// busiUnit.getPostInfo(3);

// 4) Créer une méthode permettant de renvoyer les Posts ayant au moins N
// commentaires. N étant le paramètre d’entrée de la méthode.

busiUnit.getPostComsNumber(8);

// .then((res) => {
//     console.log(res);
//   });
