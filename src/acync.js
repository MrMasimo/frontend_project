// Task #1
let comments = [];
fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
    .then((res) => res.json())
    .then((data) => {
        comments = data;
        let filtered = comments.filter((comment) => {
            if (!(comments.id % 2)) return true;
        });
        console.log(filtered);
    })
    .catch((err) => console.log(err));

// Task #2
let photos = [];
fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then((res) => res.json())
    .then((data) => {
        photos = data;
        let filtered = photos.filter((photo) => {
            if (photo.title[0] == "a") return true;
        });
        console.log(filtered);
    })
    .catch((err) => console.log(err));

// Task #3
let albums = [];
fetch("https://jsonplaceholder.typicode.com/users/1/albums")
    .then((res) => res.json())
    .then((data) => {
        albums = data;
        let filtered = albums.filter((album) => {
            if (album.id > 5) return true;
        });
        console.log(filtered);
    })
    .catch((err) => console.log(err));
