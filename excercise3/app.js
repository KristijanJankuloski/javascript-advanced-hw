// $(document).ready(() => {
//     $("#text").on('input',(e) => {
//         $("#response").text(e.target.value);
//     });
// });

document.getElementById("btn").addEventListener('click', function(){
    $.ajax({
        url:"https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json",
        success: function(response){
            let data = JSON.parse(response);
            console.log(data);
        },
        error: function(response){
            console.error(response.status);
        }
    });
});