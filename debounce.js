function debounce (fun, delay) {
    let timerId;


    return function (...args) {
        clearTimeout(timerId); //cancel the last call
        timerId = setTimeout(() => {
            fun(...args)
        }, delay);
    }
}

const search = (query) => {
    console.log("searching for", query);
}

search("h");
search("ha");
search("har");
search("hard");
search("hard ");
search("hard j");
search("hard js");

const searchWithDebounce = debounce(search, 2000);

searchWithDebounce("h");
searchWithDebounce("ha");
searchWithDebounce("har");
searchWithDebounce("hard");
searchWithDebounce("hard ");
searchWithDebounce("hard j");
searchWithDebounce("hard js");