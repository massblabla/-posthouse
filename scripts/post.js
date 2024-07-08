const url = "./posts/";

async function textFetch(url) {
    let x = await fetch(url);
    let y = await x.text();
    return y;
}

function getQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    const issue = urlParams.get('i');
    return issue;
}

async function getData(){
     console.log((await (textFetch(url + "data/" + getQuery() + ".json"))));
}