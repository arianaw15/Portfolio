var profilePic= $(".profilePic");
var resumePdf= $(".iResume");
var aboutMe= $(".aboutMe");
var resumeImg=$(".resumeImg")
var aboutImg=$(".aboutImg")
var projectImg=$(".projectImg")

function home(){
    $("#home-tab").on("click",function(){
        $(".header").text("About Me");
        // profilePic.addClass("profilePic");
        profilePic.attr("src", "Assets/profile-pic.jpg");
        resumePdf.attr("src","");
        aboutMe.addClass("aboutMe");
        aboutMe.text("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?");
        resumeImg.addClass("hide");
        aboutImg.removeClass("hide");
        projectImg.addClass("hide");
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
    })
}
resume();

function projects(){
    $("#contact-tab").on("click", function(){
        $(".header").text("Projects");
        profilePic.attr("src", "");
        resumePdf.attr("src","");
        aboutMe.removeClass("aboutMe");
        resumeImg.addClass("hide");
        aboutImg.addClass("hide");
        projectImg.removeClass("hide");
    })
}
projects();