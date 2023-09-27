$(function(){
    $("button").on("click", loadServerData);
});

function loadServerData(){
    let userVal=$("#queryer").val()
    // debugger;
    $.getJSON("https://api.chucknorris.io/jokes/search?query="+userVal)
    .done(function(data){
        console.log("finished");
        console.log(data);
        for (let index = 0; index < data.result.length; index++) {
            $("#listing").append((`<li>`+data.result[index].value+`</li>`).replace(userVal,"<b>"+userVal+"</b>)"));
        }
    })
    .fail(function(){
        console.log("error");
    })
    .always(function(){
        console.log("Always return")
    })
}