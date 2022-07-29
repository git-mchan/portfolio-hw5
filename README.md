# portfolio website
 CSE 134b HW4
 Name: Matthew Chanthirat
 PID: A15501222
 Link: https://astonishing-salamander-a50239.netlify.app/

 Part 1 notes: 
 - Used a hidden output tag to only be display messages after clicking buttons. 
 - Used innerHTML over innerText (part 2 as well) to see scripting work for the pwned dialog. 

 Part 2 notes: 
 - more difficult than part 1. Script in the customdialog.html file only contains a single event listener (waiting for dom to load) to then have functions created in the actual customdialog.js file be usable. customdialog.js contains the meat of many event listeners to the dialogs/buttons. 

Part 3 notes: 
- using disc4 as a base (bad, I know, now and if ever a next time I would/should start from scratch as Dylan said) there are unique IDs attached to the buttons in the <templates> that populate the <section> from the localstorage or any new ones added thereafter using the renderblog() method which allowed me to add a random id to their buttons (edit and delete). Then able to pass the IDs from the buttons using onclick(this.id) to the functions for edit and delete (in blog.js) so I can get the children node (edit) or the parent node (delete). This way getting the ID for children or parent using the passed in ID from the button will allow me to edit/delete the appropriated ID assosicated blog. Adding into the blog posts was essentially done already from disc4's example however the field just had to be adapted to become a popup window <dialog> instead of already visible/static on the page. 

Part 4 notes:
- Aligned text and dialog boxes, gave theme similar to portfolio, added image icons to buttons. 

Part 5 notes:
- changelog notes

