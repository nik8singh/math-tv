var x = 1;
var script = [];

function extractInfo() {

$.ajax({
  url: "https://workspaces.ndsu.edu/typo3/mod.php?M=web_WorkspacesWorkspaces&moduleToken=570a07bbea790f5416809d308dee1e1f1846f456&id=102902&tx_workspaces_web_workspacesworkspaces%5Baction%5D=index&tx_workspaces_web_workspacesworkspaces%5Bcontroller%5D=Preview&id=102902",
  dataType: "jsonp",
  success: function (data) {
     script[1]=data
  }
});

$.ajax({
  url: "https://workspaces.ndsu.edu/index.php?id=102905&tx_news_pi1%5Bnews%5D=20269&cHash=8441d13213690ba54616e2d9268e9bab",
  dataType: "jsonp",
  success: function (data) {
     script[2]=data
  }
});

$.ajax({
  url:"https://workspaces.ndsu.edu/index.php?id=102905&tx_news_pi1%5Bnews%5D=20265&cHash=b3288ed652fd366db49937d16cdf5ceb", 
  dataType: "jsonp",
  success: function (data) {
     script[3]=data
  }
});

$.ajax({
  url:"https://workspaces.ndsu.edu/typo3/mod.php?M=web_WorkspacesWorkspaces&moduleToken=570a07bbea790f5416809d308dee1e1f1846f456&id=102902&tx_workspaces_web_workspacesworkspaces%5Baction%5D=index&tx_workspaces_web_workspacesworkspaces%5Bcontroller%5D=Preview&id=102902",
  dataType: "jsonp",
  success: function (data) {
     script[4]=data
  }
});



    slideshow();

}

function slideshow() {
    document.getElementById("#myDiv").innerHTML = script[x];
    var SlideImage = document.getElementById("slideshow");

    if (x == 4) x = 1;
    else x++;

    setInterval("slideshow()", 3000); // every 3 seconds

}
