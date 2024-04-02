$('.smimg').on("click",function(event){
    var imgId = $(this).attr('id');
    var link = $("#"+imgId).attr("src");

    $(".image").attr("src",link);
    console.log(link);
})

