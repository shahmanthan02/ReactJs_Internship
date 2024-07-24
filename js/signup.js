// Print the console
// document.addEventListener('DOMContentLoaded', () => {
//     const user = document.getElementById('user');
//     user.addEventListener('submit', function(e) {
//         e.preventDefault();
//         const firstname = document.getElementById('first').value;
//         const lastname = document.getElementById('last').value;
//         const email = document.getElementById('email').value;
//         const password = document.getElementById('password').value;
//         const gender = document.getElementById('gender').value;
//         const dob = document.getElementById('dob').value;
//         const address = document.getElementById('w3review').value;
//         console.log(firstname, lastname,email,password,gender,dob,address);
//     });
//  }
// )

function saveData() {
    const firstname = document.getElementById('first').value;
    const lastname = document.getElementById('last').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const gender = document.getElementById('gender').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('w3review').value;

    const user={
        id :Date.now(),
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        gender: gender,
        dob: dob,
        address: address
    };
    // localStorage.setItem(user, JSON.stringify(user));
    
    //    var userdata=[];
    var userdata =  JSON.parse(localStorage.getItem('user')) || [];
    //    var get =  JSON.parse(localStorage.getItem('user'));
    // userdata=[get];
    userdata.push(user);
    localStorage.setItem('user', JSON.stringify(userdata));
    
    //    console.log(JSON.stringify(userdata));
    //    console.log(get);
    console.log(user);
    window.location.href('user.html');
    
}