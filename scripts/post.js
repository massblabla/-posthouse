const url = "./posts/";

async function textFetch(url) {
    let x = await fetch(url);
    let y = await x.text();
    let z = y.toString();
    return z;
}

function getQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    const issue = urlParams.get('i');
    return issue;
}

async function loadPage() {
    const contentdiv = document.querySelector("#content");
    /* Data Section */
    let data = await (textFetch(url + "data/" + getQuery() + ".json"));
    let json = JSON.parse(data);

    /* Content Section */
    let content_ = await (textFetch(url + "content/" + getQuery() + ".txt"));
    contentdiv.innerHTML = content_;
}

loadPage();