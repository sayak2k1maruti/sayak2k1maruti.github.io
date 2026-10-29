var prevscroll = 0;
var isScrolling;
var check = 0;
var running = 0;
var robotPosition = 1;
var rotationCheckPoint = 0;
var angle = 0;
var zzzz = 0;
var windowSize = screen.width;
var move;
// Career chapter: where "To be continued" sits, measured from the rocket's landing point
var CAREER_FINALE = 6600;
// The rocket ride (lift-off at 8000 until the wormhole) plays this many times faster than walking
var ROCKET_SPEED = 3;
var ROCKET_START = 8000;
// Centre of #wormhole in the world, and the rocket's centre on screen while it flies sideways
var WORMHOLE_X = 15660;
var ROCKET_SCREEN_X = 510;
// How far (in real scroll) the warp flash fades in and out around the teleport
var WARP_FADE = 250;
// Window height; the space scene is laid out in vh, so this must match 100vh exactly
function viewHeight() {
    return window.innerHeight;
}
function landingScene() {
    return 16000 + viewHeight() * 20;
}
// Scene position where the rocket's nose reaches the wormhole during the sideways flight
function wormholeScene() {
    return WORMHOLE_X + viewHeight() * 10 - ROCKET_SCREEN_X;
}
function wormholeScroll() {
    return ROCKET_START + (wormholeScene() - ROCKET_START) / ROCKET_SPEED;
}
// Scroll position the scene is drawn at: real scroll while walking, sped up during the rocket ride,
// and after the wormhole it teleports straight to the landing in the career chapter
function sceneScroll() {
    var scrolled = $(window).scrollTop();
    if (scrolled <= ROCKET_START) return scrolled;
    if (scrolled <= wormholeScroll()) return ROCKET_START + (scrolled - ROCKET_START) * ROCKET_SPEED;
    return landingScene() + (scrolled - wormholeScroll());
}
function positionCareer() {
    // the rocket lands with #maincontent at left = -(16000 + 10 * height), so the chapter starts there
    $("#career").css("left", 16000 + viewHeight() * 10);
    // end the scroll just after "To be continued" reaches the middle of the screen
    var lastScroll = wormholeScroll() + CAREER_FINALE + 900 - document.body.clientWidth / 2;
    var fake = $("#fakecontent");
    fake.css("height", fake.height() + lastScroll - (document.documentElement.scrollHeight - window.innerHeight));
}
function loadingEnd() {
    document.getElementById('load').style.display = "none";
    document.getElementById('fakecontent').style.display = "block";
    document.getElementsByTagName('main')[0].style.opacity = "1";
    positionCareer();
}
window.onload = function () {
    loadingEnd();
}
$(window).on('resize', positionCareer);
function scrollWinRight() {
    destroy();
    move = setInterval(function () {
        window.scrollBy(0, 5);
    }, 1);
}
function scrollWinLeft() {
    destroy();
    move = setInterval(function () {
        window.scrollBy(0, -5);
    }, 1);
}
function destroy() {
    clearInterval(move);
}
function liftminiSayak() {
    if (document.body.clientWidth > 768) {
        //lifting sayak
        if ($(window).scrollTop() > 1770 && $(window).scrollTop() < 2530) {
            $('#miniSayak').css("margin-bottom", "230px");
        } else if ($(window).scrollTop() > 3969 && $(window).scrollTop() < 4284) {
            $('#miniSayak').css("margin-bottom", "100px");
        } else if ($(window).scrollTop() > 4285 && $(window).scrollTop() < 5750) {
            $('#miniSayak').css("margin-bottom", "50px");
        } else {
            $('#miniSayak').css("margin-bottom", "0px");
        }
        //changing leg position while lifting
        if (($(window).scrollTop() > 2520 && $(window).scrollTop() < 2540) || ($(window).scrollTop() > 1760 && $(window).scrollTop() < 1780) || ($(window).scrollTop() > 3959 && $(window).scrollTop() < 3979) || ($(window).scrollTop() > 4274 && $(window).scrollTop() < 4294)) {
            $("#miniSayak-slides").css("left", "-400px");
        }
    } else if (document.body.clientWidth > 641) {
        //lifting sayak
        if ($(window).scrollTop() > 1770 && $(window).scrollTop() < 2300) {
            $('#miniSayak').css("margin-bottom", "168px");
        } else if ($(window).scrollTop() > 4112 && $(window).scrollTop() < 4430) {
            $('#miniSayak').css("margin-bottom", "100px");
        } else if ($(window).scrollTop() > 4430 && $(window).scrollTop() < 5928) {
            $('#miniSayak').css("margin-bottom", "50px");
        } else {
            $('#miniSayak').css("margin-bottom", "0px");
        }
        //changing leg position while lifting
        if (($(window).scrollTop() > 4102 && $(window).scrollTop() < 4122) && ($(window).scrollTop() > 4420 && $(window).scrollTop() < 4440)) {
            $("#miniSayak-slides").css("left", "-400px");
        }
    } else if (document.body.clientWidth > 376) {
        //lifting sayak
        if ($(window).scrollTop() > 4222 && $(window).scrollTop() < 4534) {
            $('#miniSayak').css("margin-bottom", "100px");
        } else if ($(window).scrollTop() > 4534 && $(window).scrollTop() < 6035) {
            $('#miniSayak').css("margin-bottom", "50px");
        } else {
            $('#miniSayak').css("margin-bottom", "0px");
        }
        //changing leg position while lifting
        if (($(window).scrollTop() > 4212 && $(window).scrollTop() < 4232) && ($(window).scrollTop() > 4524 && $(window).scrollTop() < 4544)) {
            $("#miniSayak-slides").css("left", "-400px");
        }
    } else {
        if ($(window).scrollTop() > 4306 && $(window).scrollTop() < 4623) {
            //lifting sayak
            $('#miniSayak').css("margin-bottom", "100px");
        } else if ($(window).scrollTop() > 4623 && $(window).scrollTop() < 6120) {
            $('#miniSayak').css("margin-bottom", "50px");
        } else {
            $('#miniSayak').css("margin-bottom", "0px");
        }
        if (($(window).scrollTop() > 1760 && $(window).scrollTop() < 1780) || ($(window).scrollTop() > 2290 && $(window).scrollTop() < 2310) || ($(window).scrollTop() > 4296 && $(window).scrollTop() < 4316) || ($(window).scrollTop() > 4613 && $(window).scrollTop() < 4633)) {
            $("#miniSayak-slides").css("left", "-400px");
        }
    }
}
function showframes() {
    if (document.body.clientWidth > 768) {
        //lifting sayak
        if ($(window).scrollTop() > 4485 && $(window).scrollTop() < 5750) {
            $('#chandannagar').css("margin-top", "-460px");
            $('#frame1').css("margin-top", "-708px");
        } else {
            $('#chandannagar').css("margin-top", "-800px");
            $('#frame1').css("margin-top", "-800px");
        }
        //changing leg position while lifting
    } else if (document.body.clientWidth > 641) {
        //lifting sayak
        if ($(window).scrollTop() > 4530 && $(window).scrollTop() < 5928) {
            $('#chandannagar').css("margin-top", "-460px");
            $('#frame1').css("margin-top", "-708px");
        } else {
            $('#chandannagar').css("margin-top", "-800px");
            $('#frame1').css("margin-top", "-800px");
        }
    } else if (document.body.clientWidth > 376) {
        if ($(window).scrollTop() > 4634 && $(window).scrollTop() < 6035) {
            $('#chandannagar').css("margin-top", "-460px");
            $('#frame1').css("margin-top", "-708px");
        } else {
            $('#chandannagar').css("margin-top", "-800px");
            $('#frame1').css("margin-top", "-800px");
        }
    } else {
        if ($(window).scrollTop() > 5023 && $(window).scrollTop() < 6120) {
            $('#chandannagar').css("margin-top", "-460px");
            $('#frame1').css("margin-top", "-708px");
        } else {
            $('#chandannagar').css("margin-top", "-800px");
            $('#frame1').css("margin-top", "-800px");
        }
    }
}
// Drop each framed photo in when it nears the middle of the screen, like showframes() does for Chandannagar
function dropFrames() {
    var width = document.body.clientWidth;
    $(".photo-frame").each(function () {
        var rect = this.getBoundingClientRect();
        var dropped = rect.left < width * 0.55 && rect.right > width * 0.1;
        $(this).toggleClass("raised", !dropped);
        $("#" + this.id.replace("Frame", "")).toggleClass("raised", !dropped);
    });
}
function changeSayak() {
    //resize thenrobot somesituation
    if (document.body.clientWidth > 768) {
        if ($(window).scrollTop() > 3405 && $(window).scrollTop() < 3700) {
            $("#miniSayak-slides").css("left", "-600px");
        }
    } else if (document.body.clientWidth > 641) {
        if ($(window).scrollTop() > 3291 && $(window).scrollTop() < 3861) {
            $("#miniSayak-slides").css("left", "-600px");
        }
    } else if (document.body.clientWidth > 376) {
        if ($(window).scrollTop() > 3405 && $(window).scrollTop() < 3975) {
            $("#miniSayak-slides").css("left", "-600px");
        }
    } else {
        if ($(window).scrollTop() > 3513 && $(window).scrollTop() < 4083) {
            $("#miniSayak-slides").css("left", "-600px");
        }
    }
}
function animateRun() {
    var run = setInterval(function () {
        if (1 == running) {
            if (robotPosition == 1) {
                $("#miniSayak-slides").css("left", "-200px");
                robotPosition = 2;
            } else {
                $("#miniSayak-slides").css("left", "0px");
                robotPosition = 1;
            }
        } else {
            $("#miniSayak-slides").css("left", "0px");
        }
    }, 200);
}
function onResizeWindow() {
    var newWindowSize = document.body.clientWidth;
    var difference = newWindowSize - windowSize;
    $("#maincontent").css("left", -$(window).scrollTop() + difference / 2);//move background with mouseScroll
    $("#background").css("left", -$(window).scrollTop() - difference * 30 / 100);
    //$("#clouds").css("left", -$(window).scrollTop()-difference*60/100);
    windowSize = document.body.clientWidth;
}
//$(window).on('resize',onResizeWindow);
$(window).on('scroll', function () {
    var scrolled = sceneScroll();
    $("#warp").css("opacity", Math.max(0, 1 - Math.abs($(window).scrollTop() - wormholeScroll()) / WARP_FADE));
    $("#glitters").css("display", "none");
    $("#maincontent").css("bottom", 0);
    $("#background").css("bottom", 0);
    $("#cloud-container").css("bottom", 0);
    $("#frames").css("bottom", 0);
    $("#flame").css("margin-left", "-88px");
    $("#flame").css("margin-top", "-25px");
    $("#flame").css("transform", "rotateY(0deg)");
    $("#flame").css("opacity", 0);
    running = 1;
    check = 1;
    if (scrolled > 0 && scrolled < 8000) {
        $("#rocket").css("transform", "rotate(0deg)");
        $("#miniSayak").css("transform", "rotate(0deg)");
        $("#maincontent").css("left", -scrolled);//move background with mouseScroll
        $("#background").css("left", -(scrolled) * 30 / 100);
        $("#cloud-container").css("left", -(scrolled) * 60 / 100);
        $("#rocket-container").css("left", -scrolled);
        $("#frames").css("left", -scrolled);
        rotationCheckPoint = 0;
    } else if (scrolled > 8000 && scrolled < (8000 + viewHeight() * 10)) {
        running = 0;
        $("#flame").css("opacity", .98);
        $("#rocket").css("transform", "rotate(0deg)");
        $("#miniSayak").css("transform", "rotate(0deg)");
        $("#rocket-container").css("left", -8000);
        // pin the scene where the walk ends, even if a fast scroll skipped past it
        $("#maincontent").css("left", -8000);
        $("#background").css("left", -8000 * 30 / 100);
        $("#cloud-container").css("left", -8000 * 60 / 100);
        $("#frames").css("left", -8000);
        $("#maincontent").css("bottom", 8000 - scrolled);
        $("#background").css("bottom", 8000 - scrolled);
        $("#cloud-container").css("bottom", 8000 - scrolled);
        $("#frames").css("bottom", 8000 - scrolled);
        rotationCheckPoint = 0;
    } else if (scrolled > (8000 + viewHeight() * 10) && scrolled < (16000 + viewHeight() * 10)) {
        running = 0;
        $("#flame").css("opacity", .98);
        //rotate rocket horizontaly and changing it's direction
        if ((scrolled) < prevscroll) {
            $("#rocket").css("transform", "rotate(-90deg)");
            $("#miniSayak").css("transform", "rotate(-90deg)");
            $("#flame").css("transform", "rotate(-90deg)");
            $("#flame").css("transform", "rotate(-90deg)");
            $("#flame").css("margin-left", "190px");
            $("#flame").css("margin-top", "-290px");
        } else {
            $("#rocket").css("transform", "rotate(90deg)");
            $("#miniSayak").css("transform", "rotate(90deg)");
            $("#flame").css("transform", "rotate(90deg)");
            $("#flame").css("margin-left", "-360px");
            $("#flame").css("margin-top", "-290px");
        }
        $("#rocket-container").css("left", -8000);
        $("#maincontent").css("bottom", -viewHeight() * 10);
        $("#background").css("bottom", -viewHeight() * 10);
        $("#cloud-container").css("bottom", -viewHeight() * 10);
        $("#frames").css("bottom", -viewHeight() * 10);
        //below move background with mouseScroll
        $("#maincontent").css("left", viewHeight() * 10 - scrolled);
        $("#background").css("left", viewHeight() * 10 - (scrolled) * 30 / 100);
        $("#cloud-container").css("left", viewHeight() * 10 - (scrolled) * 60 / 100);
        $("#frames").css("left", viewHeight() * 10 - scrolled);
        rotationCheckPoint = 1;
    } else if (scrolled >= (16000 + viewHeight() * 10)) {
        running = 0;
        $("#flame").css("opacity", .98);
        if (viewHeight() * 20 + 16000 - scrolled > 1.5 * viewHeight()) {
            if ((scrolled) < prevscroll) {
                $("#rocket").css("transform", "rotate(-60deg)");
                $("#miniSayak").css("transform", "rotate(-60deg)");
                $("#flame").css("transform", "rotate(-60deg)");
                $("#flame").css("margin-left", "130px");
                $("#flame").css("margin-top", "-160px");
            } else {
                $("#rocket").css("transform", "rotate(120deg)");
                $("#miniSayak").css("transform", "rotate(120deg)");
                $("#flame").css("transform", "rotate(120deg)");
                $("#flame").css("margin-left", "-300px");
                $("#flame").css("margin-top", "-420px");
            }
            rotationCheckPoint = 1;
        } else {
            $("#rocket").css("transform", "rotate(0deg)");
            $("#miniSayak").css("transform", "rotate(0deg)");
        }
        $("#rocket-container").css("left", -8000);
        $("#maincontent").css("bottom", -viewHeight() * 10);
        $("#background").css("bottom", -viewHeight() * 10);
        $("#cloud-container").css("bottom", -viewHeight() * 10);
        $("#frames").css("bottom", -viewHeight() * 10);
        //below move background with mouseScroll
        if (viewHeight() * 20 + 16000 - scrolled > 0) {
            $("#maincontent").css("left", viewHeight() * 10 - scrolled);
            $("#background").css("left", viewHeight() * 10 - (scrolled) * 30 / 100);
            $("#cloud-container").css("left", viewHeight() * 10 - (scrolled) * 60 / 100);
            $("#frames").css("left", viewHeight() * 10 - scrolled);
            $("#maincontent").css("bottom", -viewHeight() * 10 - (16000 + viewHeight() * 10 - scrolled));
            $("#background").css("bottom", -viewHeight() * 10 - (16000 + viewHeight() * 10 - scrolled));
            $("#cloud-container").css("bottom", -viewHeight() * 10 - (16000 + viewHeight() * 10 - scrolled));
            $("#frames").css("bottom", -viewHeight() * 10 - (16000 + viewHeight() * 10 - scrolled));
        } else {
            running = 1;
            $("#flame").css("opacity", 0);
            $("#maincontent").css("left", viewHeight() * 10 - scrolled);
            $("#background").css("left", viewHeight() * 10 - (scrolled) * 30 / 100);
            $("#cloud-container").css("left", viewHeight() * 10 - (scrolled) * 60 / 100);
            $("#frames").css("left", viewHeight() * 10 - scrolled);
            $("#rocket-container").css("left", -8000 + (viewHeight() * 20 + 16000 - scrolled));
            $("#maincontent").css("bottom", 0);
            $("#background").css("bottom", 0);
            $("#cloud-container").css("bottom", 0);
            $("#frames").css("bottom", 0);
            // celebrate once "To be continued" reaches the middle of the screen
            if (viewHeight() * 20 + 16000 - scrolled < -(CAREER_FINALE + 500 - document.body.clientWidth / 2)) {
                $("#glitters").css("display", "block");
            }
        }
    }
    //below setting robot's face direction
    if ((scrolled) < prevscroll) {
        $("#miniSayak-slides").css("top", "-200px");
    } else {
        $("#miniSayak-slides").css("top", "0px");
    }
    //below code to findout when user stop Scrolling
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(function () {
        // Run the callback when scrolling is stop
        running = 0;
    }, 100);
    liftminiSayak();
    changeSayak();
    showframes();
    dropFrames();
    /*  window.clearTimeout( isScrolling );
        isScrolling = setTimeout(function() {
              // Run the callback when scrolling is stop
          $("#miniSayak-slides").css("left","-200px");
          setTimeout(function () {
            $("#miniSayak-slides").css("left","0px");
          },250);
              console.log( 'Scrolling has stopped.' );
          }, 50);*/
    //below code to change miniSayak's position
    /*if(scrolled > 600 && scrolled < 650){
      $("#miniSayak-slides").css("left","-400px");
    }else{
      $("#miniSayak-slides").css("left","-200px");
    }
    if(scrolled > 600 && scrolled < 800){

      $('#miniSayak').css("bottom","40vh");
    }else{

      $('#miniSayak').css("bottom","19.9vh");
    }
    if(scrolled > 800 && scrolled < 850){
      $("#miniSayak-slides").css("left","-400px");
    }else{
      $("#miniSayak-slides").css("left","-200px");
    }*/
    prevscroll = scrolled;
});
animateRun();