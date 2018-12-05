var ctx = SP.ClientContext.get_current();
var userCustomActionsSite = ctx.get_site().get_userCustomActions();

var uca1 = userCustomActionsSite.add();
uca1.set_location("ScriptLink");
uca1.set_sequence(100);
uca1.set_title("jQuery from CDN");
uca1.set_description("Adds jQuery from aspnetcdn to the site");
uca1.set_scriptBlock("SP.SOD.registerSod('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');LoadSodByKey('jquery');");
uca1.update();


var uca2 = userCustomActionsSite.add();
uca2.set_location("ScriptLink");
uca2.set_sequence(200);
uca2.set_title("Spyglass JS");
uca2.set_description("Adds custom JS to the site");
uca2.set_scriptBlock("SP.SOD.registerSod('spyglass', 'https://acme.sharepoint.com/Sites/spyglass/Style Library/JS/spyglass-custom-action.js');LoadSodByKey('spyglass');");
uca2.update();
ctx.executeQueryAsync();
