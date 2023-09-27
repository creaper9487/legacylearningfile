$(function(){
    $("[type='checkbox']").on("change",updateProgress);
});

function updateProgress(){
    // debugger;
    let hascheck=0;
    for(var x = 0;x<$("[type='checkbox']").length;x++){
        if($("[type='checkbox']")[x].checked){
            hascheck+=1;
             $("spam")[x].classList.add("finished")
        }else $("spam")[x].classList.remove("finished")

    }
    $("meter").attr("max",$("[type='checkbox']").length);
    $("meter").attr("value",hascheck);
    $("progress").attr("max",$("[type='checkbox']").length);
    $("progress").attr("value",hascheck);
}
