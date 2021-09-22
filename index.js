
$(".clickable").click(function() {
    window.open("https://www.amazon.com/A-Vietnamese-Girl-Named-Mai/dp/B08XRZFMG1", "_blank");
  });

function showHS(btnID){
  $(".aSection").hide();
  $("#sectionOne").hide();
  $("#" + btnID).show();
}

$("#aboutBtn").click(function(){
  showHS("sectionTwo");
});

$("#traitBtn").click(function(){
showHS("sectionThree");
});

$("#adventuresBtn").click(function(){
showHS("sectionFour");
});

$("#learnBtn").click(function(){
showHS("sectionFive");
});

$("#priceBtn").click(function(){
showHS("pricing");
});

$("#specialBtn").click(function(){
showHS("specialBooks");
});

$("#previewBtn").click(function(){
showHS("bookPreview");
});

$("#priceNav").click(function(){
showHS("pricing");
});
