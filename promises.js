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
  
  const createPost = (post) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            posts.push(post);

            let error = false;

            if (!error) {
                resolve();
            } else {
                reject('Something went wrong');
            }
          }, 2000);
    });
  }

// Promise / then / catch
  // createPost( {title: 'Post Three', body: 'This is post three'} )
  // .then(getPost)
  // .catch((err) => console.log(err));



  // Async / Await
  /*
  const init = async () => {
    await createPost({title: 'Post Three', body: 'This is post three'});
    getPost();
  }
  init(); */

  // Async / Await / Fetch

  const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
  }

  fetchUsers();