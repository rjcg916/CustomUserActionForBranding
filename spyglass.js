console.log("Spyglass skinning starting.");
_spBodyOnLoadFunctionNames.push("skinSpyglass");
console.log("Spyglass skinning completed.");

function skinSpyglass() {

  //spyglass image/logo
  $("#ctl00_PlaceHolderSiteName_onetidProjectPropertyTitle1").after(
    "<img src='/sites/spyglass/Style%20Library/Images/SpyglassV2.png' height='50px' /><img src='/sites/spyglass/Style%20Library/Images/Scope.png' height='50px' style='padding:0 5px'/>"
  );

  //replace default horizontal navigation
  var rootMenu = '#zz10_RootAspMenu';

  $(rootMenu).replaceWith('<ul id="zz10_RootAspMenu" class="root ms-core-listMenu-root static"></ul>');
  
  $(rootMenu).append('<li class="static"><a class="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode" tabindex="0" href="/Sites/spyglass"><img style="height:23px;display: block;margin: auto;" src="/Sites/spyglass/Style%20Library/Images/icons/home.png" />Home</a></li>');
  
  $(rootMenu).append('<li class="static"><a class="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode" tabindex="0" href="/Sites/spyglass/Lists/Financial Calendar/calendar.aspx"><img style="height:23px;display: block;margin: auto;" src="/Sites/spyglass/Style%20Library/Images/icons/calendar.png" />Calendar</a></li>');
  
  $(rootMenu).append('<li class="static"><a class="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode" tabindex="0" href="/Sites/spyglass/Pages/TrainingResources.aspx"><img style="height:23px;display: block;margin: auto;" src="/Sites/spyglass/Style%20Library/Images/icons/Training.png" />Training</a></li>');
  
  $(rootMenu).append('<li class="static"><a class="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode" tabindex="0" href="/Sites/spyglass/Admin/Pages/default.aspx"><img style="height:23px;display: block;margin: auto;" src="/Sites/spyglass/Style%20Library/Images/icons/Admin.png" />Admin</a></li>');
  
  $(rootMenu).append('<li class="static"><a class="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode" tabindex="0" href="/Sites/spyglass/Pages/UAT.aspx"><img style="height:23px;display: block;margin: auto;" src="/Sites/spyglass/Style%20Library/Images/icons/UAT.png" />UAT</a></li>');
  
  $(rootMenu).append('<li class="static"><a class="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode" tabindex="0" href="/Sites/spyglass/Pages/faq.aspx"><img style="height:23px;display: block;margin: auto;" src="/Sites/spyglass/Style%20Library/Images/icons/Feedback.png" />Help</a></li>');
  
  //default Search
  $("#ctl00_PlaceHolderSearchArea_SmallSearchInputBox1_csr_sboxdiv").hide();

  //search Spyglass
  $("#ctl00_PlaceHolderSearchArea_SmallSearchInputBox1_csr").append(
    "<br/><div id='SearchBoxSPY'><div class='ms-srch-sb ms-srch-sb-border' id='ctl00_PlaceHolderSearchArea_SmallSearchInputBox1SPY_csr_sboxdiv'><input type='text' placeholder='Search Spyglass' maxlength='2048' accesskey='S' title='Search Spyglass' id='ctl00_PlaceHolderSearchArea_SmallSearchInputBoxSPY_csr_sbox' class='ms-textSmall ms-srch-sb-prompt ms-helperText'><a title='Search' class='ms-srch-sb-searchLink' id='ctl00_PlaceHolderSearchArea_SmallSearchInputBox1SPY_csr_SearchLink'><img src='/sites/spyglass/Style%20Library/Images/searchresultui-61174269.themedpng?ctag=16' class='ms-srch-sb-searchImg' id='searchImgSPY' alt='Search'></a></div></div>"
  );
  $("#searchImgSPY").click(function() {
    var keyword = $(
      "#ctl00_PlaceHolderSearchArea_SmallSearchInputBoxSPY_csr_sbox"
    ).val();
    if (keyword) {
      //alert(keyword);
      window.location.href =
        "/sites/spyglass/_layouts/15/osssearchresults.aspx?u=https%3A%2F%2Fadvantagesolutionsnet%2Esharepoint%2Ecom%2FSites%2Fspyglass&k=" +
        keyword;
    }
  });
  $("#ctl00_PlaceHolderSearchArea_SmallSearchInputBoxSPY_csr_sbox").keydown(
    function(e) {
      if (e.keyCode == 13) {
        event.preventDefault();
        $("#searchImgSPY").click();
      }
    }
  );

  //People Search
  $("#ctl00_PlaceHolderSearchArea_SmallSearchInputBox1_csr").append(
    "<br/><div id='SearchBoxPPL'><div class='ms-srch-sb ms-srch-sb-border' id='ctl00_PlaceHolderSearchArea_SmallSearchInputBox1PPL_csr_sboxdiv'><input type='text' placeholder='Search People' maxlength='2048' accesskey='P' title='Search People' id='ctl00_PlaceHolderSearchArea_SmallSearchInputBoxPPL_csr_sbox' class='ms-textSmall ms-srch-sb-prompt ms-helperText'><a title='Search' class='ms-srch-sb-searchLink' id='ctl00_PlaceHolderSearchArea_SmallSearchInputBox1PPL_csr_SearchLink'><img src='/sites/spyglass/Style%20Library/Images/searchresultui-61174269.themedpng?ctag=16' class='ms-srch-sb-searchImg' id='searchImgPPL' alt='Search'></a></div></div>"
  );
  $("#searchImgPPL").click(function() {
    var keyword = $(
      "#ctl00_PlaceHolderSearchArea_SmallSearchInputBoxPPL_csr_sbox"
    ).val();
    if (keyword) {
      //alert(keyowrd);
      window.location.href = "https://advantagesolutionsnet.sharepoint.com/search/Pages/peopleresults.aspx?k=ANY(" +
        keyword +
        ")";
    }
  });
  $("#ctl00_PlaceHolderSearchArea_SmallSearchInputBoxPPL_csr_sbox").keydown(
    function(e) {
      if (e.keyCode == 13) {
        event.preventDefault();
        $("#searchImgPPL").click();
      }
    }
  );

  //$("#pageContentTitle").hide();
  //$("#s4-ribbonrow").hide();
  //$("#ctl00_PlaceHolderMain_ctl01__ControlWrapper_RichHtmlField").hide();

  $(
    "#suiteLinksBox, #suiteBarLeft > div > div > div.ms-tableCell.ms-verticalAlignMiddle"
  ).hide();
  $("#ctl00_PlaceHolderSiteName_onetidProjectPropertyTitle1").hide();
  $("#titleAreaBox").css({ margin: "-30px 5%" });
  $(".ms-pub-contentLayout").css({ padding: "0 10px" });
}
