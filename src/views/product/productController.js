export const product = async () => {
  const posts = await getPosts();
  // console.log(posts);
  const section = document.querySelector('section');
  
  posts.forEach(post => {
    const card = document.createElement('div');
    const user = document.createElement('p');
    const id = document.createElement('p');
    const body = document.createElement('p');
    const title = document.createElement('h3');

    card.classList.add('card-producto');
    user.classList.add('userId');
    id.classList.add('id');
    body.classList.add('body');
    title.classList.add('title');
  
    user.textContent = `Usuario: ${post.userId}`;
    id.textContent = `ID: ${post.id}`;
    title.textContent = `Title: ${post.title}`;
    body.textContent = `Body: ${post.body}`;

    card.append(user, id, title, body);
    // console.log(card);
    section.appendChild(card);
  });
}

const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await response.json();
}