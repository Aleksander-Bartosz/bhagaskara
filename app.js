$(document).ready(function () {
   var imgKeeper = $('.imgKeeper');
   var arrowKeeper = $('.imgKeeperArrow');
    var nav = $('nav');
    nav.stickMe();
    
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
    
    
   var dot = $('.dots');
    var words = ['Proin semper pellentesque semper. Sed varius erat quis faucibus mattis. Aliquam cursus, metus vitae vestibulum mollis.','Mauris semper, quam vel egestas euismod, purus libero volutpat nulla, nec pellentesque quam turpis ac lorem. ',
	'Pellentesque facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris non porttitor turpis.','Donec commodo, velit et volutpat hendrerit, magna eros porta orci, a commodo mauris tellus a arcu.','Nullam placerat mi vitae tortor ornare convallis. Quisque non posuere orci.','Praesent Kaczka et diam semper, finibus nisl ac, cursus sapien. Pellentesque rutrum, est interdum ullamcorper maximus, nunc diam mattis nisl,'];
	var number = 0;
		var change = $('body > article:nth-child(8) > div > h2');
		var doThis = function () {
            dot.css('background-color','white');
			change.textillate({
					loop:true,
					in:{ 
						effect: 'fadeIn', shuffle: true,
                        delay:5,
					},
					out:{ 
						effect: 'fadeOut', 
						sync: true,
                        
                        
						callback: function () {
							number++;
							if (number>= words.length) {
								number=0;
							}
								$('body > article:nth-child(8) > div > h2 li').html(words[number]);
                                
								
						}
					}		
			});
            dot.eq(number).css('background-color','#333333');
		}
		setInterval(doThis,2000)
  
    $(window).on('scroll', function () {
        var el = $(this).scrollTop();
        var firstAnimeta = $('.nineBar');
        var secondAnimate = $('.sevenFiveBar');
        var thirdAnimate = $('.sevenBar')
        var fourAnimate = $('.eightBar');
         
        if (el > 2800) {
            firstAnimeta.animate({
                width:'90%'
            },3000)
            secondAnimate.animate({
                width:'75%'
            },3000)
            thirdAnimate.animate({
                width:'70%'
            },3000)
            fourAnimate.animate({
                width:'85%'
            },3000)
        }
    })
    
    $("body > nav > div > ul > li:nth-child(1)").click(function (){
                $('html, body').animate({
                    scrollTop: $("body > header").offset().top
                }, 2000);
            });
    $("body > header > div > div > div:nth-child(1) > div").click(function (){
                $('html, body').animate({
                    scrollTop: $("body > article:nth-child(4)").offset().top - nav.innerHeight()
                }, 2000);
            });
     $("body > header > div > div > div:nth-child(2) > div").click(function (){
                $('html, body').animate({
                    scrollTop: $("body > article:nth-child(6)").offset().top - nav.innerHeight()
                }, 2000);
            });
    $("body > header > div > div > div:nth-child(3) > div").click(function (){
                $('html, body').animate({
                    scrollTop: $("body > article:nth-child(3)").offset().top - nav.innerHeight()
                }, 2000);
            });
    $("body > header > div > div > div:nth-child(4) > div").click(function (){
                $('html, body').animate({
                    scrollTop: $("body > section").offset().top - nav.innerHeight()
                }, 2000);
            });
     $("body > header > div > div > div:nth-child(5) > div").click(function (){
                $('html, body').animate({
                    scrollTop: $("body > article:nth-child(8)").offset().top - nav.innerHeight()
                }, 2000);
            });
    $("body > header > div > div > div:nth-child(6) > div").click(function (){
                $('html, body').animate({
                    scrollTop: $("body > footer").offset().top
                }, 2000);
            });
     $("body > nav > div > ul > li:nth-child(2)").click(function (){
                $('html, body').animate({
                    scrollTop: $("body > article:nth-child(4)").offset().top - nav.innerHeight()
                }, 2000);
            });
     $("body > nav > div > ul > li:nth-child(3)").click(function (){
                $('html, body').animate({
                    scrollTop: $("body > article:nth-child(6)").offset().top - nav.innerHeight()
                }, 2000);
            });
     $("body > nav > div > ul > li:nth-child(4)").click(function (){
                $('html, body').animate({
                    scrollTop: $("body > article:nth-child(3)").offset().top - nav.innerHeight()
                }, 2000);
            });
    $("body > nav > div > ul > li:nth-child(5)").click(function (){
                $('html, body').animate({
                    scrollTop: $("body > section").offset().top - nav.innerHeight()
                }, 2000);
            });
    $("body > nav > div > ul > li:nth-child(6)").click(function (){
                $('html, body').animate({
                    scrollTop: $("body > article:nth-child(8)").offset().top - nav.innerHeight()
                }, 2000);
            });
    $("body > nav > div > ul > li:nth-child(7)").click(function (){
                $('html, body').animate({
                    scrollTop: $("body > footer").offset().top
                }, 2000);
            });
    $("body > header > div > div > div.smallHexagon").click(function (){
                $('html, body').animate({
                    scrollTop: $("body > article:nth-child(3)").offset().top
                }, 2000);
            });
    var imgFiller = $('.gallery');
        imgFiller.on('click', function () {
            
            var src = $(this).attr('src');
            var divKeeper = $('<div>');
            var containerImg = $('<div>');
            var creatClose = $('<div>');
            divKeeper.addClass('fullScreen');
            containerImg.addClass('containerImg');
            creatClose.addClass('close');
            var imgCreat = $('<img>');
                imgCreat.attr('src', src);
                containerImg.append(imgCreat);
                containerImg.append(creatClose);
                divKeeper.append(containerImg);
				divKeeper.appendTo("body").hide().fadeIn();
            creatClose.on('click', function () {
                divKeeper.fadeOut();
            })
        });
});