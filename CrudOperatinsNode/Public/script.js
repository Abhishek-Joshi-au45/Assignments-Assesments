const postsContainer = document.getElementById('posts');

// Fetch and display posts
fetch('http://localhost:8000/post')
  .then(response => response.json())
  .then(data => {
    data.forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <button onclick="deletePost('${post._id}')">Delete</button>
      `;
      postsContainer.appendChild(postElement);
    });
  });

// Delete post
function deletePost(id) {
  fetch(`http://localhost:8000/post/${id}`, {
    method: 'DELETE',
  })
  .then(response => response.json())
  .then(data => {
    alert(data.message);
    window.location.reload();
  });
}

// Submit a new post
const postForm = document.getElementById('postForm');
postForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  fetch('http://localhost:8000/post', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content })
  })
  .then(response => response.json())
  .then(data => {
    alert('Post created!');
    window.location.href = '/Public/index.html';
  });
});
