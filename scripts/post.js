function getQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    const issue = urlParams.get('i');
    return issue;
}
function fetchPostData() {
    /* Put the URI to the "posts" folder. or something like below */
    const url = "https://raw.githubusercontent.com/massblabla/posthouse/main/posts/";
    const postData = fetch(url + "data/" + getQuery() + ".json").then(response => response.text());
    return postData;
}
function fetchPostContent() {
    /* Do it like the comment above */
    const url = "https://raw.githubusercontent.com/massblabla/posthouse/main/posts/";
    const postContent = fetch(url + "content/" + getQuery() + ".txt").then(response => response.text());
    return postContent;
}
function loadPage() {
    const jsonPostData = JSON.parse(fetchPostData());
    const title = jsonPostData.title;
    const author = jsonPostData.author;
    const datetime = jsonPostData.date + jsonPostData.time;
    const video = jsonPostData.video;
    const content = fetchPostContent();

    console.log(title + author + datetime + video);
}