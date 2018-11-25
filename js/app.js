document.addEventListener('DOMContentLoaded', function(){

    // function buttonClick() {
    //     console.log('Button clicked!');
    // };

    // document.getElementById('add').addEventListener('click', buttonClick); 

    //User click on the add button
    //If there is any text inside the item field, add that text to the todo list

    document.getElementById('add').addEventListener('click', function() {
        let value = document.getElementById('item').value;
        // console.log(value);

        if (value) {
            // console.log('There was a value, heh');
        }
    }); 

});