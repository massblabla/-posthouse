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
    const titlediv = document.querySelector("#title");
    const authordiv = document.querySelector("#author");
    const datetimediv = document.querySelector("#video");

    const openSpan = "<span>";
    const closeSpan = "</span>";
    /* Data Section */
    let data = await (textFetch(url + "data/" + getQuery() + ".json"));
    let json = JSON.parse(data);
    let title_ = json.title;
    let author_ = json.author;
    let date_ = json.date;
    let time_ = json.time;
    let video_ = json.video;

    let datetime_ = date_ + " " + time_ + " UTC";

    let title = openSpan + title_ + closeSpan;
    let author = openSpan + author_ + closeSpan;
    let datetime = openSpan + datetime_ + closeSpan;
    let video = "<video "

    titlediv.innerHTML = title;

    /* Content Section */
    let content_ = await (textFetch(url + "content/" + getQuery() + ".txt"));
    contentdiv.innerHTML = content_;
}

loadPage();