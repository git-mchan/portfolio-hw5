# portfolio website
 CSE 134b HW5
 Name: Matthew Chanthirat
 PID: A15501222
 Link: 

methodtest.html: 
1. Uses form/fieldset for requests that will take the form input and return it
2. response output has pre tag in it to keep the format of the json string

request.js: 
1. Uses fetch for all post,get,put, and delete. 
2. Json strings are set directly to the output tag, and then the <pre> tag from the query selector. JSON string is immediately formatted using JSON.stringify() using parameters (obj,null,2) -> as suggested by Camdyn. 
   
webcomponents.html:
1. Straightforward, using the ButtonCount.js module to call super() which contains the custom button. 

ButtonCount.js: 
1. Using Professor Powell's given button code, was able to adapt it into this separate JS file which can be imported by webcomponent.html.
