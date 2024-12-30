async function fetchProjects() {
    const response = await fetch('http://localhost:5000/api/projects');
    const projects = await response.json();
    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project';
        projectItem.innerHTML = `<h3>${project.title}</h3><p><i>${project.description}</i></p><img src="${project.image}">`;
        projectList.appendChild(projectItem);
    });
}

async function fetchBlogs() {
    const response = await fetch('http://localhost:5000/api/blogs');
    const blogs = await response.json();
    const blogList = document.getElementById('blog-list');
    blogs.forEach(blog => {
        const blogItem = document.createElement('div');
        blogItem.className = 'blog';
        blogItem.innerHTML = `<h3>${blog.title}</h3><p><i>${blog.content}</i></p><small>${new Date(blog.date).toLocaleDateString()}</small>`;
        blogList.appendChild(blogItem);
    });
}

function showDiv1() {
    var div = document.getElementById('myDiv1');
    div.style.display = 'block'; // Change the display style to show the div
}

function showDiv2() {
    var div = document.getElementById('myDiv2');
    div.style.display = 'block'; // Change the display style to show the div
}



document.addEventListener('DOMContentLoaded', () => {
    fetchProjects();
    fetchBlogs(); 

});




