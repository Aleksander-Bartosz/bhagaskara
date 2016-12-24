$(document).ready(function () {
   var imgKeeper = $('.imgKeeper');
   var arrowKeeper = $('.imgKeeperArrow');
    imgKeeper.on('mouseenter', function () {
        var imgLeaver = $(this);
        var pathElement = $(this).prev().children();
        pathElement.css('fill','#9c4494');
        pathElement.css('fill-opacity','1');
        pathElement.css('stroke','#9c4494');
        imgLeaver.on('mouseleave', function () {
            pathElement.css('fill','white');
            pathElement.css('fill-opacity','0.1');
            pathElement.css('stroke','white');
        })
    });
    
    arrowKeeper.on('mouseenter', function () {
        var imgLeaver = $(this);
        var pathElement = $(this).prev().children();
        pathElement.css('fill','#9c4494');
        pathElement.css('fill-opacity','1');
        pathElement.css('stroke','#9c4494');
        imgLeaver.on('mouseleave', function () {
            pathElement.css('fill','white');
            pathElement.css('fill-opacity','0.1');
            pathElement.css('stroke','white');
        })
    });
    
    var hoverImg = $('body > article > div > div > img');
    hoverImg.on('mouseover', function () {
        var element = $(this);
        var imgLeaver= $(this);
        var newImg = element.data('newimg');
        var oldImg =element.data('old');
           element.attr('src',newImg);
        var path = element.prev().children();
            path.css('stroke','#9c4494');
        imgLeaver.on('mouseleave', function () {
            element.attr('src',oldImg);
            path.css('stroke','#cfd3d4');
        })
    });
    new ScrollFlow();
    
});