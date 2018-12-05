function loadJavaScript(url, callback) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onreadystatechange = callback;
    script.onload = callback;
    head.appendChild(script);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function pause() {
  console.log('Briefly pausing execution...');
  await sleep(2000);
  console.log('Two seconds elapsed, script execution resumed.');
}

window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        console.log("Jquery is present.");
    } 
	else {
        // jQuery is not loaded
        console.log("JQuery not found, loading now.");
		loadJavaScript("https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js", function() {
    console.log("JQuery loaded.");
		});
		pause();
    }
//}
  //$(document).ready(function () {

   SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
                var varUserInGroupName = [];
                var varUserInGroupLink = [];
                var currentContext = new SP.ClientContext(); //.get_current();
                var currentWeb = currentContext.get_web();
                var currentUser = currentWeb.get_currentUser();
                currentContext.load(currentUser);

                 //var allGroups = currentWeb.get_siteGroups();
                var allGroups = currentUser.get_groups();
                currentContext.load(allGroups);

                // var group = allGroups.getByName("Spyglass Visitors");
                // currentContext.load(group);

                // var groupUsers = group.get_users();
                // currentContext.load(groupUsers);

                currentContext.executeQueryAsync(onQuerySucceeded, onQueryFailed)
;

                // currentContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));

                function onQuerySucceeded(sender, args) {

                    var redirectLink = 'https://advantagesolutionsnet.sharepoint.com/sites/spyglass/Pages/ops.aspx';
                    var redirectLinkHome = 'https://advantagesolutionsnet.sharepoint.com/Sites/spyglass/Pages/Home.aspx';
                    var result = 'sp15p.web';
                    console.log(currentUser.get_loginName());

                    if (currentUser.get_loginName().indexOf("sp15p.web") > 0) 
{
                        console.log("Welcome Back, sp15p.web!!");
                    }
                    else{

                        //Loop my groups
                        var grpsEnumerator = allGroups.getEnumerator();
                        while (grpsEnumerator.moveNext()) {

                            var group = grpsEnumerator.get_current();
                            console.log(group.get_title());

                            if ((group.get_title() == "Spyglass Ops") || (group.get_title() == "spyglass-bi-ops")) {
                                window.location.href = redirectLink;
                                result = 'done';
                                exit;
                            }
                        }
                        window.location.href = redirectLinkHome;
                    }
                }

                function onQueryFailed(sender, args) {
                    console.log('Request failed ' + args.get_message() + '\n' + args.get_stackTrace());
                }
            });

    };