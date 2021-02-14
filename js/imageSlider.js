jQuery(function() {
    const imgAddress = ["375.jpg","img2.jpg","img3.jpg","img4.jpg"];
    var index=0;
    var str1="";
    var str2="";
    $(".carousel-indicators")
    imgAddress.forEach(function(imgName,index){
        if(index==0){
            str1+=`<li data-target="#carouselExampleIndicators" data-slide-to="${index}" class="active"></li>`
            str2+=`<div class="carousel-item active"><img src="static/${imgName}"></div>`
        } else {
            str1+=`<li data-target="#carouselExampleIndicators" data-slide-to="${index}"></li>`
            str2+=`<div class="carousel-item"><img src="static/${imgName}"></div>`
        }
    })
    $(".carousel-indicators").append(str1);
    $(".carousel-inner").append(str2);

    //prev and next button
    // $(".body-container .slider-icon").on("click",function(e){
    //     if($(this).hasClass("prev")){
    //         index=index-1;
    //         if(index<0){ index+=imgAddress.length; }
    //     } else {
    //         index=(index+1)%imgAddress.length;
    //     }
    //     var imgName = `url(static/${imgAddress[index]})`;
    //     $(".background-image-container").css("background-image",imgName);
    //     $(".image-counter .dot").removeClass("active");
    //     $(`.image-counter .dot[data-imgid='${imgAddress[index]}']`).addClass("active");
    // });

    // $(".image-counter .dot").on("click",function(e){
    //     var img=$(this).data().imgid;
    //     index=imgAddress.indexOf(img);
    //     var imgName = `url(static/${imgAddress[index]})`;
    //     $(".background-image-container").css("background-image",imgName);
    //     $(this).siblings().removeClass("active");
    //     $(this).addClass("active");
    // });
 })

 