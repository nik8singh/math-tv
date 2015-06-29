var x = 1;
var script = [];

function extractInfo() {
    //Grants, scholarships and awards 
    $.get("https://workspaces.ndsu.edu/typo3/mod.php?M=web_WorkspacesWorkspaces&moduleToken=570a07bbea790f5416809d308dee1e1f1846f456&id=102902&tx_workspaces_web_workspacesworkspaces%5Baction%5D=index&tx_workspaces_web_workspacesworkspaces%5Bcontroller%5D=Preview&id=102902", function (data) {
        script[1] = $(data).find('.news-text-wrap').text();
    });

    //Announcements
    $.get("https://workspaces.ndsu.edu/index.php?id=102905&tx_news_pi1%5Bnews%5D=20269&cHash=8441d13213690ba54616e2d9268e9bab", function (data) {
        script[2] = $(data).find('.news-text-wrap').text();
    });

    //Faculty News 
    $.get("https://workspaces.ndsu.edu/index.php?id=102905&tx_news_pi1%5Bnews%5D=20265&cHash=b3288ed652fd366db49937d16cdf5ceb", function (data) {
        script[3] = $(data).find('.news-text-wrap').text();
    });

    //PhD dissertations, Degree completion 
    $.get("https://workspaces.ndsu.edu/typo3/mod.php?M=web_WorkspacesWorkspaces&moduleToken=570a07bbea790f5416809d308dee1e1f1846f456&id=102902&tx_workspaces_web_workspacesworkspaces%5Baction%5D=index&tx_workspaces_web_workspacesworkspaces%5Bcontroller%5D=Preview&id=102902", function (data) {
        script[4] = $(data).find('.news-text-wrap').text();
    });

    slideshow();

}

function slideshow() {
    document.getElementById("#myDiv").innerHTML = script[x];
    var SlideImage = document.getElementById("slideshow");

    if (x == 4) x = 1;
    else x++;

    setInterval("slideshowImg()", 3000); // every 3 seconds

}
