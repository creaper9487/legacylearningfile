$(function () {
    $("button").on("click", loadServerData);
});

function loadServerData() {
    let userQ=$("#userInput").val();
    let rss2json = "https://api.rss2json.com/v1/api.json?rss_url=";
    $.getJSON(rss2json + `http://www.reddit.com/r/${userQ}.rss`)
    .done(function(data){
        console.log(data);
        for (let x = 0; x < data.items.length; x++) {
            thumbnailPic=(data.items[x].thumbnail!= "" ? data.items[x].thumbnail :"Reddit-Logo.png")
            $("#dataTable").append(
                '<tr>'+
                    `<td><img width="300" height="200" src=${thumbnailPic} ></td>`+
                    `<td><a target='_blank' href='${data.items[x].link}'>${data.items[x].title}</a></td>`+//Hypertext REFerence
                    `<td>${data.items[x].pubDate.split(" ")[0]}</td>`+
                    `<td class="author">By ${data.items[x].author}</td>`+
                    `<td class="sub">On r/${data.items[x].categories}</td>`+
                '</tr>'
            )
        }
    })
    .fail(function(){console.log("failed")})
    .always(function(){console.log("Always")});

}