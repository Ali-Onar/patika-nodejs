const posts = [
    { title: "Title 1", description: "Description 1" },
    { title: "Title 2", description: "Description 2" },
    { title: "Title 3", description: "Description 3" },
  ];
  
  const listPosts = () => {
    posts.map((post) => {
      console.log(post.title);
    });
  };
  
  const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
      posts.push(newPost);
      resolve(posts);
      //reject('BIR HATA OLUSTU');
    });
  
    return promise1;
  };
  
  async function showPosts() {
    try {
      await addPost({ title: "Title 4", description: "Description 4" });
      listPosts();
    } catch (error) {
      console.log(error);
    }
  }
  
  showPosts();