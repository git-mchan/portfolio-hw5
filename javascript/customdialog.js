import '/DOMPurify-main/dist/purify.min.js';

export function alert_custom() {
    let alert_popup = document.getElementById('alert_Press'); // Alert button id
    let popup_section = document.getElementById('alert_Dialog'); // dialog tag selection
    
    alert_popup.addEventListener('click', function() {
        popup_section.showModal();
    });      
};

export function confirm_custom() {
    let confirm_popup = document.getElementById('confirm_Press'); // confirm button id
    let popup_section = document.getElementById('confirm_Dialog'); // dialog tag selection
    let click_confirm = document.getElementById('confirmed_click'); // id if clicking ok button 
    let cancelled = document.getElementById('cancelled_click'); // id if clicking cancel button
    let confirmed = document.getElementById('result'); // the <p> inner tag to be replaced

    /* Make confirm dialog appear */
    confirm_popup.addEventListener('click', function() {
        popup_section.showModal();
    });
    /* innerHTML for P tag set to true */
    click_confirm.addEventListener('click',function() {
        confirmed.innerHTML= "Confirm result : true";
    });  
    /* innerHTML for P tag set to false */    
    cancelled.addEventListener('click',function() {
        confirmed.innerHTML= "Confirm result : false";
    });  
}

export function prompt_custom(){
    let prompt_popup = document.getElementById('prompt_Press'); // prompt button id
    let prompt_section = document.getElementById('prompt_Dialog'); // dialog tag selection
    let prompt_click_confirm = document.getElementById('p_confirmed_click'); // id if clicking confirm button 
    let prompt_cancelled = document.getElementById('p_cancelled_click'); // id if clicking cancel button
    let prompt_confirmed = document.getElementById('result'); // the <p> inner tag to be replaced
    
    /* Open prompt dialog */
    prompt_popup.addEventListener('click', function(){
        prompt_section.showModal();
    });
    /* innerHTML for P tag set to user input */    

    prompt_click_confirm.addEventListener('click',function() {
        let text_value = document.getElementById('prompt_text').value; // user input value
        prompt_confirmed.innerHTML= "Prompt value : " + text_value;
    });  
    /* innerHTML for P tag set to default message */    
    prompt_cancelled.addEventListener('click',function() {
        prompt_confirmed.innerHTML= "User didn't enter anything";
    });  
}

export function safe_prompt_custom(){
    let prompt_popup = document.getElementById('safeprompt_Press'); // prompt button id
    let prompt_section = document.getElementById('s_prompt_Dialog'); // dialog tag selection
    let prompt_click_confirm = document.getElementById('sp_confirmed_click'); // id if clicking confirm button 
    let prompt_cancelled = document.getElementById('sp_cancelled_click'); // id if clicking cancel button
    let prompt_confirmed = document.getElementById('result'); // the <p> inner tag to be replaced
     
    /* Open prompt dialog */
    prompt_popup.addEventListener('click', function(){
        prompt_section.showModal();
    });
    /* innerHTML for P tag set to user input */    

    prompt_click_confirm.addEventListener('click',function() {
        let text_value = document.getElementById('s_prompt_text').value; // user input value
        prompt_confirmed.innerHTML= "Prompt value : " + DOMPurify.sanitize(text_value); // sanitize message using DOMPurify

    });  
    /* innerHTML for P tag set to default message */    
    prompt_cancelled.addEventListener('click',function() {
        prompt_confirmed.innerHTML= "User didn't enter anything";
    });  
}
    