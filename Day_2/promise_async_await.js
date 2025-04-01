// promise returns a value

// const fetchData = new Promise((resolve, reject) => {
//     let success = true;
//     if (success) {
//         resolve("successfyully run..");
//     } else {
//         reject("failed to run..");
//     }
// });

// fetchData.then(result => console.log(result));
// fetchData.finally(result => console.log(result));
// fetchData.catch(result => console.error(result));

// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         //settimeout is an asynchronous function
//         setTimeout(() => {
//             resolve("successfyully run..");
//         }, 5000);
//     });
// }

// fetchData().then(result => console.log(result));

// const getData = async () => {
//     // Error Handleling Part
//     try {
//         const result = await fetchData();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }
// getData();

// const movie = async () => {
//     let movie1 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("price: 250");
//         }, 4000);
//     });

//     let movie2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("price: 300")
//         }, 3000);
//     });

//     // movie1.then((result) => console.log(result));
//     // movie2.then((result) => console.log(result));

//     console.log("movie data is fettching");
//     let movieOne = await movie1;
//     console.log("movie1 data is fetchhing");
//     console.log(movieOne);
//     let movieTwo = await movie2;
//     console.log("movie2 data is fetchhing");
//     console.log(movieTwo);
//     console.log("movie2 data is fetched");
//     return movieOne, movieTwo;
// }

// console.log("lets watch movie");
// movie();

// const getUsers = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// };



// // Post request example
// const createUser = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.ringify({
//                 name: "Bijan Shakya",
//                 email: "bijanshakya@gmail.com",
//                 phone: "9842092600",
//             }),
//         });
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// };

// createUser();

// getUsers();

// const fetchUsers = async () => {
//     try {
//         const response = await fetch("https://dummyjson.com/users");
//         const data = await response.json();
//         data.users.forEach(element => {
//             console.log(`Name: ${element.firstName}`, `email: ${element.email}`, `age: ${element.age}`);
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }

const fetchUsers = async () => {
    try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json(); // Convert response to JSON

        const usersList = data.users.map(user =>
            `Name: ${user.firstName}, Email: ${user.email}, Age: ${user.age}`
        );
        console.log(usersList); // Logs an array of formatted user details

    } catch (error) {
        console.log("Error fetching users:", error);
    }
};


fetchUsers();