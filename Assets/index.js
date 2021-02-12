var profilePic= $(".profilePic");
var resumePdf= $(".iResume");
var aboutMe= $(".aboutMe");
var resumeImg=$(".resumeImg")
var aboutImg=$(".aboutImg")
var projectImg=$(".projectImg")
var contact =$(".contact-info")
var iframe= $("iframe")

function homePage(){
        profilePic.attr("src", "Assets/profile-pic.jpg");
        resumePdf.attr("src","");
        aboutMe.addClass("aboutMe");
        resumeImg.addClass("hide");
        aboutImg.removeClass("hide");
        projectImg.addClass("hide");
        contact.addClass("hide");
    };
homePage();

function home(){
    $("#home-tab").on("click",function(){
        $(".header").text("About Me");
        // profilePic.addClass("profilePic");
        profilePic.attr("src", "Assets/profile-pic.jpg");
        resumePdf.attr("src","");
        aboutMe.addClass("aboutMe");
        resumeImg.addClass("hide");
        aboutImg.removeClass("hide");
        projectImg.addClass("hide");
        contact.addClass("hide");
    })
    console.log("Button works")
    
}
home();

function resume(){
    $("#profile-tab").on("click", function(){
        $(".header").text("Resume");
        profilePic.attr("src", "");
        resumePdf.attr("src","Assets/Resume-Updated.pdf")
        aboutMe.removeClass("aboutMe");
        aboutImg.addClass("hide")
        resumeImg.removeClass("hide");
        projectImg.addClass("hide");
        contact.addClass("hide");
    })
}
resume();

function projects(){
    $("#project-tab").on("click", function(){
        $(".header").text("Projects");
        profilePic.attr("src", "");
        resumePdf.attr("src","");
        aboutMe.removeClass("aboutMe");
        resumeImg.addClass("hide");
        aboutImg.addClass("hide");
        projectImg.removeClass("hide");
        contact.addClass("hide");
    })
}
projects();

function contactMe(){
    $("#contact-tab").on("click",function(){
        $(".header").text("Contact Me");
        profilePic.attr("src", "");
        resumePdf.attr("src","");
        contact.removeClass("hide");
        aboutMe.removeClass("aboutMe");
        resumeImg.addClass("hide");
        aboutImg.addClass("hide");
        projectImg.addClass("hide");

    })
}
contactMe();