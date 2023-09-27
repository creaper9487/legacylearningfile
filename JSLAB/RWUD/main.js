let datas
let userdata
$(function () { $("#read").on("click", readHandler);
                $("#write").on("click", writeHandler);
                $("#userInput").on("change",function(){
                    userdata=this.value;
                })
            }
);

let url="http://localhost:3000/to-do"
function displayData(){
    $("#display").clear;
    for (let i = 0; i < datas.length; i++) {
        $("#display").append(
            '<tr>'+
                `<td>${i+1}</td>`+
                `<td>${datas[i].task}</td>`+
                `<td><button onclick="updateHandler(${datas[i].id})">Update</button>`+
                `<td><button onclick="deleteHandler(${datas[i].id})">Delete</button>`+
            '</tr>'
        )
    }
}
function readHandler(){
    $.getJSON(url)
    .done(function(msg){
        console.log(msg);
        datas = msg;
        displayData();
    })
    .fail(function(msg){
        console.log("fail")
    })
}
function writeHandler(){
    // debugger
    $.post(url,{
        task:userdata
    })
    .done(function(msg){
        console.log(msg);
    })
    .fail(function(msg){
        console.log("Fail!");
    });
}
function updateHandler(index){
    $.ajax({
        url:`${url}/${index}`,
        type:'PUT',
        data:`task=`+userdata,
        success:function(data){
                alert(data);
        }
    })
}
function deleteHandler(index){
    $.ajax({
        url: `${url}/${index}`,
        type: 'DELETE',
        success: function(data){
                    console.log(data);}
        });
}