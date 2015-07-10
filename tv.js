var y = 1;
var z= 1;
var script = [];

function extractInfo() {

alert();
window.location.href = "https://workspaces.ndsu.edu/typo3/mod.php?M=web_WorkspacesWorkspaces&moduleToken=930d7d264f0a66b18eb40e14425d1142baa02a73&tx_workspaces_web_workspacesworkspaces%5Baction%5D=index&tx_workspaces_web_workspacesworkspaces%5Bcontroller%5D=Preview&id=102905";

var ifr = document.getElementsByName("iframe")[0];
var news_list_items = ifr.contentDocument.getElementsByClassName("news-latest-container")[0].getElementsByTagName("li");

get_anchors = function (a) { 
	var b=[]; 
	for (var x=0; x<a.length; x++) 
	 b[x] = a[x].getElementsByTagName("a")[0].href; 
    return(b);
	   }

    var news_list_urls = get_anchors(news_list_items);
    
    //loop for multiple ajax call -- not working
    //for(int i=0 ; i<news_list_urls.length ; i++)   
       getInfo(news_list_urls[i]);
   
    y=1;
    slideshow();

}


function getInfo(URLs){
	
	$.ajax({
        url: URLs,
        success: function (data) {
            script[y] = data;
        },
        error: function (request, status, error) {
            alert("Request: " + request.responseText + "\nStatus: " + status.responseText + "\nError: " + error.responseText);
        }

    });
  y++;
	
}

function slideshow() {

       //document.getElementById("myDiv").innerHTML = z;
       document.getElementById("myDiv").innerHTML = script[z];
       
       if (z == script.length) 
       z = 1;
       else
       z++;
       setTimeout(slideshow, 3000); // after every 3 seconds
}
