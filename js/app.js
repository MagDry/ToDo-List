document.addEventListener('DOMContentLoaded', function(){

    // function buttonClick() {
    //     console.log('Button clicked!');
    // };

    // document.getElementById('add').addEventListener('click', buttonClick); 

    //User click on the add button
    //If there is any text inside the item field, add that text to the todo list

    // Remove and complete icons in SVG format
    let removeSVG = '<svg xmlns="http://www.w3.org/2000/svg" class="fill removeIcon" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 774.266 774.266" style="enable-background:new 0 0 774.266 774.266;" xml:space="preserve"><path d="M640.35,91.169H536.971V23.991C536.971,10.469,526.064,0,512.543,0c-1.312,0-2.187,0.438-2.614,0.875    C509.491,0.438,508.616,0,508.179,0H265.212h-1.74h-1.75c-13.521,0-23.99,10.469-23.99,23.991v67.179H133.916    c-29.667,0-52.783,23.116-52.783,52.783v38.387v47.981h45.803v491.6c0,29.668,22.679,52.346,52.346,52.346h415.703    c29.667,0,52.782-22.678,52.782-52.346v-491.6h45.366v-47.981v-38.387C693.133,114.286,670.008,91.169,640.35,91.169z     M285.713,47.981h202.84v43.188h-202.84V47.981z M599.349,721.922c0,3.061-1.312,4.363-4.364,4.363H179.282    c-3.052,0-4.364-1.303-4.364-4.363V230.32h424.431V721.922z M644.715,182.339H129.551v-38.387c0-3.053,1.312-4.802,4.364-4.802    H640.35c3.053,0,4.365,1.749,4.365,4.802V182.339z"/><rect x="475.031" y="286.593" width="48.418" height="396.942"/><rect x="363.361" y="286.593" width="48.418" height="396.942"/><rect x="251.69" y="286.593" width="48.418" height="396.942"/></svg>';
    let completeSVG = '<svg version="1.1" class="fill completeIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 442.533 442.533" style="enable-background:new 0 0 442.533 442.533;"xml:space="preserve"><path d="M434.539,98.499l-38.828-38.828c-5.324-5.328-11.799-7.993-19.41-7.993c-7.618,0-14.093,2.665-19.417,7.993L169.59,247.248l-83.939-84.225c-5.33-5.33-11.801-7.992-19.412-7.992c-7.616,0-14.087,2.662-19.417,7.992L7.994,201.852C2.664,207.181,0,213.654,0,221.269c0,7.609,2.664,14.088,7.994,19.416l103.351,103.349l38.831,38.828c5.327,5.332,11.8,7.994,19.414,7.994c7.611,0,14.084-2.669,19.414-7.994l38.83-38.828L434.539,137.33c5.325-5.33,7.994-11.802,7.994-19.417C442.537,110.302,439.864,103.829,434.539,98.499z"/></svg>'

    document.getElementById('add').addEventListener('click', function() {
        let value = document.getElementById('item').value;
        // console.log(value);

        if (value) {
            // console.log('There was a value, heh');
            addItemTodo(value);
            document.getElementById('item').value = '';
        }
    }); 

    function removeItem() {
        // console.log(e.target);
        // console.log(this);
        // console.log(this.parentNode.parentNode);
        let item = this.parentNode.parentNode;
        let parent = item.parentNode;
        // console.log(parent);

        parent.removeChild(item);
    };

    function completeItem() {
        let item = this.parentNode.parentNode;
        // console.log(item);
        let parent = item.parentNode;
        // console.log(parent);
        let id = parent.id;

        //Check if the item should be added to the completed list or to re-added to the todo list
        let target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');

        parent.removeChild(item);
        target.insertBefore(item, target.childNodes[0]);
    }; 


    // Adds a new item to the todo list

    function addItemTodo(text) {
        // console.log(text); :)

        let list = document.getElementById('todo');

        let item = document.createElement('li');
        item.innerText = text;

        let buttons = document.createElement('div');
        buttons.classList.add('buttons');

        let remove = document.createElement('button');
        remove.classList.add('remove');
        remove.innerHTML = removeSVG;

        //Add click event for removing the item
        remove.addEventListener('click', removeItem);

        let complete = document.createElement('button');
        complete.classList.add('complete');
        complete.innerHTML = completeSVG;

        // Add click event for completing the item 
        complete.addEventListener('click', completeItem);

        buttons.appendChild(remove);
        buttons.appendChild(complete);
        item.appendChild(buttons);

        list.insertBefore(item, list.childNodes[0]);
    }

});
