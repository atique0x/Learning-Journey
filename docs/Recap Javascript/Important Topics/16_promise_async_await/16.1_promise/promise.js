//Creating Promise
const myPromise = new Promise((resolved, reject) => {
    const isActive = true;

    if (isActive) {
        resolved("Operation succeeded");
    } else {
        reject("Operation failed");
    }
});
console.log(myPromise);

//Consume Promise
myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

const fetchData = new Promise((resolved, reject) => {
    let success = false;
    setTimeout(() => {
        success = true;
        if (success) {
            resolved({ data: "data find" });
        } else {
            reject("network error");
        }
    }, 2000);
});

fetchData.then((res) => console.log(res)).catch((err) => console.log(err));

function checkMovie(movieName) {
    return new Promise((resolved, reject) => {
        console.log(`Checking movie: ${movieName}`);
        const movies = [
            { name: "Avengers", seats: 5 },
            { name: "Inception", seats: 0 },
            { name: "Interstellar", seats: 3 },
        ];

        setTimeout(() => {
            const findMovie = movies.find((movie) => movie.name === movieName);
            if (findMovie) {
                resolved(findMovie);
            } else {
                reject("Movie is not exist");
            }
        }, 3000);
    });
}

function reserveSeat(movie) {
    console.log("Checking available seat...");
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            if (movie.seats > 0) {
                movie.seats -= 1;
                console.log("Seat reserved");
                resolved(movie);
            } else {
                reject("Seat is not available");
            }
        }, 2000);
    });
}
function processPayment(movie) {
    console.log("Collecting money");
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Payment received for ${movie.name}`);
        }, 1000);
    });
}
function showFinalMessage(message) {
    console.log("Final Message:", message);
}

// checkMovie("Avengers")
//     .then(reserveSeat)
//     .then(processPayment)
//     .then(showFinalMessage)
//     .catch((err) => {
//         console.error("Error:", err);
//     });

checkMovie("Avengers")
    .then((res) => {
        return reserveSeat(res);
    })
    .then((res) => {
        return processPayment(res);
    })
    .then((res) => {
        return showFinalMessage(res);
    })
    .catch((err) => console.error("Error:", err));
