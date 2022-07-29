/**
 * @typedef {{
 *   title: string,
 *   date: string,
 *   summary: string,
 * }} Blog
 */

export function generateBlogId() {
    return crypto.randomUUID();
};

export const exampleBlog = {
    "title": "Modern Software Engineering",
    "date": "09-21-2015",
    "summary": "The way we programmers look at software is all wrong. Here are 3 reasons why we need to take a trip back to the past."
};

/**
 * @returns the JSON map of blogs from local storage.
 */
 function loadBlogs() {
    return JSON.parse(localStorage.getItem('blogs')) || {};
}

/**
 * @param {{string: Blog}} blog a JSON map of id->blog to put into local storage.
 */

 function storeBlogs(blogs) {
    localStorage.setItem('blogs', JSON.stringify(blogs));
} 


/* Crud Operations Layer
 * ===================== */

/**
 * (CREATE) Add a new blog to the DB. 
 * @param {Blog} [blog] the blog to be added to the DB.
 * @returns {String} the generated UUID for this blog in the DB.
 */
 export function insertBlog(blog) {
    const blogs = loadBlogs();
    const blogId = generateBlogId();

    
    blogs[blogId] = blog;

    storeBlogs(blogs);
    return blogId;
}

/**
 * (READ) Read a specific blog from the DB.
 * @param {string} [blogId] the id of the blog to look up. 
 * @returns {Blog | undefined} the blog found, or undefined if not found.
 */
 export function selectBlog(blogId) {
    const blogs = loadBlogs();

    return blogs[blogId];
}

/**
 * (READ) Return _all_ blogs from the DB.
 * @returns {{str: Blog}}
 */
 export function selectAllBlogs() {
    const blogs = loadBlogs();
    return blogs;
}

/**
 * (UPDATE) Update a blog in the DB.
 * @param {string} [blogId] the id of the blog to update.
 * @param {Blog} [blog] the new blog data to replace the old one with.
 */
 export function updateBlog(blogId, blog) {
    const blogs = loadBlogs();
  
    blogs[blogId] = blog;
    storeBlogs(blogs);
    
}

/**
 * (DELETE) Delete a blog from the DB.
 * @param {string} [blogId] the id of the blog to delete. 
 * @returns {bool} true if we deleted an element, false if not.
 */
 export function deleteBlog(blogId) {
    const blogs = loadBlogs();

    // If it's not there, just return false. If it is there, delete it.
    if (!(blogId in blogs)) return false;
    
    delete blogs[blogId];
    
    storeBlogs(blogs)
    return true;
}

/**
 * Return the number of blogs in the DB.
 * @returns 
 */
 export function countBlogs() {
    const blogs = loadBlogs();
    return Object.keys(blogs).length;
}

/**
 * 
 * @param {Blog} [blog]
 */
 export function renderBlog(blogId, blog) {
    const template = document.getElementById("blog-template");

    const blogEl = template.content.cloneNode(true);
    blogEl.children[0].dataset.blogId = blogId;
    
    // take header1 element and fill it with the selected blog
    const titleH1 = blogEl.querySelector('blog-title > h1');
    titleH1.textContent = blog.title;

    // take date element and fill it with the selected blog
    const dateP = blogEl.querySelector('blog-title > p');
    dateP.textContent = blog.date;

    // take summary element and fill it with the selected blog
    const summaryP = blogEl.querySelector('blog-summary > p');
    summaryP.textContent = blog.summary;

    // custom unique IDs for edit button
    const templateEdit = blogEl.querySelector('blog-edit-value > button');
    templateEdit.id = generateBlogId();

    // custom unique IDs for delete button
    const templateDelete = blogEl.querySelector('blog-delete-value > button');
    templateDelete.id = generateBlogId();

    return blogEl;
}


/**
 * Render a blog and display the contents in `container`.
 * If a blog with the same ID already exists, we remove it.
 * 
 * Note: This function doesn't do anything to ensure sorting remains the same.
 * 
 * @param {string} [blogId]
 * @param {Blog|undefined} [blog] 
 * @param {HTMLElement} [container]
 */
 export function redisplayBlog(blogId, blog, container) {
    const blogEl = renderBlog(blogId, blog);

    // If we found a blog with the same ID, remove and replace it!
    // Note: this is the most inefficient way to do this. If we were a little 
    //       more clever, we could check if an existing blog was unchanged
    //       compared to the one we'd be replacing it with to avoid
    //       unnecessary changes to the DOM.
    const existingBlog = container.querySelector(`[data-blog-id="${blogId}"]`);
    if (existingBlog) {
        existingBlog.remove();
    }    
    
    // If passed a blog, append it. We're not handling any sorting here!
    if (blog) {
        container.appendChild(blogEl);
    }
   
}


/**
 * 
 * @param {*} container 
 */
 export function redisplayAllBlogs(container) {
    const blogs = selectAllBlogs();

    for (const [id, blog] of Object.entries(blogs)) {
        redisplayBlog(id, blog, container);
    }
}
/**
 * 
 * function will ONLY open new blog dialog to the localstorage when clicking the add blog button
 * adding happens in the crud.html using insertBlog() function and the fieldset/form.
 *  */
export function click_add() {

        let confirm_popup = document.getElementById('blog_create'); // add button id
        let popup_section = document.getElementById('blogs_dialog'); // dialog tag selection
        let click_confirm = document.getElementById('confirmed_insert'); // id if clicking ok button 

        /* Make confirm dialog appear */
        confirm_popup.addEventListener('click', function() {
            popup_section.showModal();

            click_confirm.addEventListener('click',function() {
                popup_section.close(); // Close Dialog after clicking the add blog button and adding new blog 
            });
        });

        // Make Cancel button work properly/close the dialog
        let click_cancel = document.getElementById('cancel-insert');
        click_cancel.addEventListener('click',function() {
            popup_section.close();
        });
          
        
}
/**
 * Function will remove a blog using its associated delete button id
 *  
 * @param my_id the passed in ID from the delete onclick() button
 * 
 * */
export function extra_disappear(my_id){
    // grab current blog id and the blog from that id
    const blog_id = document.getElementById(my_id).parentNode.parentElement.getAttribute('data-blog-id');

    // values to click delete button and delete the blog 
    const popup_delete = document.getElementById("confirm-delete"); // dialog to confirm delete
    const confirm_click = document.getElementById("confirmed_click"); // will delete blog
    popup_delete.showModal(); // make dialog appear for delete

    confirm_click.addEventListener('click', function(){  
        deleteBlog(blog_id); // actually delete blog from database
        document.getElementById(my_id).parentNode.parentElement.remove(); // remove the element from the page
    });
}
/**
 *  
 * Function will edit a blog using its associated edit button id
 * 
 * @param my_id the passed in ID from the edit onclick() button
 * 
 * */
export function edit_click(my_id) {   
    
    // grab current blog id and the blog from that id
    const blog_id = document.getElementById(my_id).parentNode.parentElement.getAttribute('data-blog-id');
    const current_blog = selectBlog(blog_id);

    // selectors for current blog
    let post_element = document.querySelector(`[data-blog-id="${blog_id}"]`); // get selected post blog-article
    let post_children = post_element.children; // get children of blog-article

    const popup_edit = document.getElementById("edit_blogs_dialog"); // open edit dialog
    const edit_input = document.getElementById("confirmed_edit"); // apply edit submit button
    const click_cancel = document.getElementById("cancel-edit"); // cancel edit button

    popup_edit.showModal(); //open dialog

    // store currrent values from current blog
    let my_title = current_blog.title;
    let my_date = current_blog.date;
    let my_summary = current_blog.summary;
    
    // select the edit-blog dialog and put current values from blog into the edit form 
    let form_title = document.querySelector("#edit-blog-form > fieldset > input[type=text]:nth-child(3)");
    let form_date = document.querySelector("#edit-blog-form > fieldset > input[type=text]:nth-child(5)");
    let form_summary = document.querySelector("#edit-blog-form > fieldset > textarea");
    form_title.value = my_title;
    form_date.value = my_date;
    form_summary.value = my_summary;

    // cancel button listener
    click_cancel.addEventListener('click',function() {
        popup_edit.close();
    });
        
    // edit button listener
    edit_input.addEventListener('click',function() {
    // set current page values to new values
    my_title = form_title.value;
    my_date = form_date.value;
    my_summary = form_summary.value;

    // Selectors to set the page directly to the new input
    post_children.item(0).querySelector('h1').innerText = my_title;
    post_children.item(0).querySelector('p').innerText = my_date
    post_children.item(1).querySelector('p').innerText = my_summary;

        // store new values into a new blog to be updated
        let updatedBlogPost = {
                "title": my_title,
                "date": my_date,
                "summary": my_summary,
        };

            // put updates into localstorage 
            updateBlog(blog_id,updatedBlogPost);
        });
    
}
