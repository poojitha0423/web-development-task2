// Profile Image Upload
document.getElementById('uploadPic').addEventListener('change', function () {
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function () {
    document.getElementById('profilePic').src = reader.result;
    };
    reader.readAsDataURL(file);
});

// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const error = document.getElementById('formError');
    error.textContent = '';

if (!name || !email || !message) {
    error.textContent = 'Please fill all the fields.';
    return;
}

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
if (!emailPattern.test(email)) {
    error.textContent = 'Invalid email address.';
    return;
}

    alert('Message sent successfully!');
    this.reset();
});

// To-Do List
function addTodo() {
    const input = document.getElementById('todoInput');
    const task = input.value.trim();
    if (!task) return;

    const li = document.createElement('li');
    li.textContent = task;

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Remove';
    delBtn.onclick = () => li.remove();

    li.appendChild(delBtn);
    document.getElementById('todoList').appendChild(li);
    input.value = '';
}
