document.addEventListener('DOMContentLoaded', function(){

    function buttonClick() {
        console.log('Button clicked!');
    };

    document.getElementById('add').addEventListener('click', buttonClick); 

});