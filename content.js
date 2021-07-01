setInterval(() => {
    let all = Array.from(document.getElementsByTagName("a"));
    all.forEach(element => {
        console.log(element.href);
        if (element.href == "http://www.youtube.com/watch?v=dQw4w9WgXcQ" ||
            element.href == "https://www.youtube.com/watch?v=dQw4w9WgXcQ") {
            element.style.border = "5px solid red";
        }
    });
}, 500);