$( document ).ready(function() {

  const link = $(".link");

  link.on('click',function(ev){
    var that = $(this);
    that.parents("ul").children("li").removeClass("active");
    that.parents("li").addClass("active");

    const panel = $(".panel-box");
    panel.find(".active").removeClass("active");
    panel.find(that.attr("target")).addClass("active");
  })

});
