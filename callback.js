const posts = [
    {title: 'Post1', body: 'This is post one body'},
    {title: 'Post2', body: 'This is post two body'},
  ];
  
  const getPost = () => {
    setTimeout(() => {
      let output = '';
      posts.forEach((post, index) => {
        output += `<li>${post.title}</li>`;
        document.body.innerHTML = output;
      });
      },1000);
  }
  
  const createPost = (post, callback) => {
    setTimeout(() => {
      posts.push(post);
      callback();
    }, 2000);
  }
  
  createPost({ title: 'Post3', body: 'This is post three body' }, getPost);