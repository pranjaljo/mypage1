jQuery(function() {

    var threshold = $(".timeline-line").offset().top - window.innerHeight/2;
    var scroll_pos=0;
    var arr=[];
    for(var i of $(".item-container .center")){
        arr.push($(i).offset().top - window.innerHeight/2)
    }

    scrollFunction = function(position){
        if(position > threshold){
            $(".timeline-line").css("height",scroll_pos-threshold);
            arr.forEach(function(value,index){
                if(scroll_pos>value){
                    $($(".item-container .center")[index]).addClass("scroll-class");
                } else {
                    $($(".item-container .center")[index]).removeClass("scroll-class");
                }
            })
        }
    };
    $(window).on('scroll',function(e){
        scroll_pos = $(this).scrollTop();
        scrollFunction(scroll_pos);
    });
    $(window).on('resize',function(){
        threshold = $(".timeline-line").offset().top - window.innerHeight/2;
        scroll_pos=0;
        arr=[];
        for(var i of $(".item-container .center")){
            arr.push($(i).offset().top - window.innerHeight/2)
        }
        scroll_pos = $(this).scrollTop();
        scrollFunction(scroll_pos);
    });

    $("footer .icon").on("mouseenter",function(e){
        $(e.target).addClass("transformClass");
    });
    $("footer .icon").on("mouseleave",function(e){
        $(e.target).removeClass("transformClass");
    });
});