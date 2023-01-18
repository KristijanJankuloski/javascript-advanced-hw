$("#btn").click(()=>{
    $.ajax({
        url: "https://swapi.dev/api/people/1",
        success: function(data){
            $("#character-name").text(data.name);
            $("#height").text(data.height);
            $("#mass").text(data.mass);
            $("#byear").text(data.birth_year);
            $("#gender").text(data.gender);
        },
        error: function(err){
            console.log(err.status);
        }
    });
});