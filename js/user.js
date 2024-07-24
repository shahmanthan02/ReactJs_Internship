// var user= JSON.parse( localStorage.getItem('user' ) );
//     $.each(user, function(key, value){
//       $('tbody').append(`<tr>
//       <td>${user.firstname}</td>
//       <td>${user.lastname}</td>
//       <td>${user.email}</td>
//       <td>${user.password}</td>
//       <td>${user.gender}</td>
//       <td>${user.dob}</td>
//       <td>${user.address}</td>
//     </tr>`)
// })
document.addEventListener('DOMContentLoaded', () => {
    renderUserTable();
});

// Delete Code
function renderUserTable() {
    const userTableBody = document.querySelector('#userTable tbody');
    const users = JSON.parse(localStorage.getItem('user')) || [];
    userTableBody.innerHTML = '';

    users.forEach((user, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${user.firstname}</td>
            <td>${user.lastname}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td>${user.gender}</td>
            <td>${user.dob}</td>
            <td>${user.address}</td>
            <td><button class="btn delete-btn"style="
            color: #00ff8c;
            border: 2px solid black;
            background-color: blue;
        ">Delete</button></td>
            <td><button class="btn update-btn" data-index="${index}" style="
            color: #bd2c2c;
            border: 2px solid black;
            background-color: #fffe00;
        ">Update</button></td>
        `;

        userTableBody.appendChild(row);
        const deleteButton = row.querySelector('.delete-btn');
        deleteButton.addEventListener('click', (e) => {
            const userRowIndex = users.indexOf(user);
            deleteUser(userRowIndex);
        });
        const updateButton = row.querySelector('.update-btn');
        updateButton.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            openUpdateModal(index);
        });
    });
}

function openUpdateModal(index) {
    const users = JSON.parse(localStorage.getItem('user')) || [];
    const user = users[index];
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const addressInput = document.getElementById('address');
    const dobInput = document.getElementById('dob');
    const genderInput = document.getElementById('gender');

    firstNameInput.value = user.firstname;
    lastNameInput.value = user.lastname;
    emailInput.value = user.email;
    passwordInput.value = user.password;
    addressInput.value = user.address;
    dobInput.value = user.dob;
    genderInput.value = user.gender;

    const updateModal = new bootstrap.Modal('#updateModal');
    updateModal.show();

    document.getElementById('updateUserBtn').addEventListener('click', () => {
        user.firstname = firstNameInput.value;
        user.lastname = lastNameInput.value;
        user.email = emailInput.value;
        user.password = passwordInput.value;
        user.address = addressInput.value;
        user.dob = dobInput.value;
        user.gender = genderInput.value;

        users[index] = user;
        localStorage.setItem('user', JSON.stringify(users));

        updateModal.hide();
        renderUserTable();
    });
}

function deleteUser(userRowIndex) {
    let choose = confirm('Are you sure you want to delete?');
    if (choose) {
        let users = JSON.parse(localStorage.getItem('user')) || [];
        if (userRowIndex !== -1) {
            users.splice(userRowIndex, 1);
            localStorage.setItem('user', JSON.stringify(users));
            renderUserTable();
        }
    }
}