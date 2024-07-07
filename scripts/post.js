function fetchPostData(post) {
    /* Put the URI to the "posts" folder. or something like below */
    const url = "https://raw.githubusercontent.com/massblabla/posthouse/main/posts/";
    const postData = JSON.parse(fetch(url + "data/" + post + ".json"));
    return postData;
}
function fetchPostContent(post) {
    /* Put the URI to the "posts" folder. or something like below */
    const url = "https://raw.githubusercontent.com/massblabla/posthouse/main/posts/";
    const postContent = fetch(url + "content/" + post + ".txt");
    return postContent;
}
function post(post) {
    const content = fetchPostContent(post);
    const data = fetchPostData(post);
}
function getQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    const issue = urlParams.get('i');
    return post(issue);
}
function loadPage() {
    const page = getQuery().data;
    console.log(page);
}
loadPage();