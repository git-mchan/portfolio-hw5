
export function get_button() {
    document.querySelector("#request > fieldset > input[type=hidden]:nth-child(8)").value = new Date();

    const url = "https://httpbin.org/get";
    fetch(url, {
    method : "GET",
    })
    
    .then(response => response.json())
    
    .then(json => document.querySelector("#response > pre").innerHTML = JSON.stringify(json,null,2));
}

export function post_button() {
    document.querySelector("#request > fieldset > input[type=hidden]:nth-child(8)").value = new Date();
    const url = "https://httpbin.org/post";
    fetch(url, {
    method : "POST",
    body: new FormData(document.getElementById("request")),})
    
    .then(response => response.json())
    
    .then(json => document.querySelector("#response > pre").innerHTML = JSON.stringify(json,null,2));

}

export function put_button() {
    document.querySelector("#request > fieldset > input[type=hidden]:nth-child(8)").value = new Date();

    
        const url = "https://httpbin.org/put";
        fetch(url, {
        method : "PUT",
        body: new FormData(document.getElementById("request")),})
    
        .then(response => response.json())
    
        .then(json => document.querySelector("#response > pre").innerHTML = JSON.stringify(json,null,2));
        
}

export function delete_button(){
    document.querySelector("#request > fieldset > input[type=hidden]:nth-child(8)").value = new Date();

    
        const url = "https://httpbin.org/delete";
        fetch(url, {
        method : "DELETE",})
    
        .then(response => response.json())
    
        .then(json => document.querySelector("#response > pre").innerHTML = JSON.stringify(json,null,2));
        
}