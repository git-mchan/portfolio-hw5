
export function get_button() {
    document.querySelector("#request > fieldset > input[type=hidden]:nth-child(8)").value = new Date();

    const url = "https://httpbin.org/get";
    fetch(url, {
    method : "GET",
    //body: new FormData(document.getElementById("request")),
    })
    
    .then(response => response.json())
    
    .then(json => document.querySelector("#response > pre").innerHTML = JSON.stringify(json,null,2));
     /* function reqListener () {
        console.log();
        const oReq = new XMLHttpRequest();
    // Bind the FormData object and the form element
    const form = document.getElementById('request');
    const FD = new FormData(form);

    oReq.open("GET", "https://httpbin.org/get", true);
    oReq.send(FD);
    //oReq.responseType='json';
    oReq.addEventListener("load", (event)=>{
        document.getElementById('response').innerText = event.target.responseText;
    });
    
    
    };

    // Get the form element
    const form = document.getElementById("request");
    
    // Add 'submit' event handler
      reqListener(); */
      
      
}

export function post_button() {
    document.querySelector("#request > fieldset > input[type=hidden]:nth-child(8)").value = new Date();
    //console.log(document.querySelector("#response > pre").innerHTML);
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