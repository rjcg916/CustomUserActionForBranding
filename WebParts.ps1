
$credentials = Get-Credential -UserName "bob@acme.net" -Message "Enter password"
      
$fullUrl = "https://acme.sharepoint.com/sites/spyglass"

try {

    $conn = Connect-PnPOnline -ReturnConnection -Url $fullUrl -Credentials $credentials 

 
    #Get-PnPWebPart -ServerRelativePageUrl "/sites/spyglass/pages/home.aspx" -Connection $conn 
    #Get-PnPWebPartXml -ServerRelativePageUrl "/sites/spyglass/pages/home.aspx" -Connection $conn -Identity  8eda382a-6b98-4a48-a6a9-2562adf46bf7
    #Get-PnPWebPartXml -ServerRelativePageUrl "/sites/spyglass/pages/home.aspx" -Connection $conn -Identity  7fbe8e2f-ea6a-480b-b879-4f7d9e7f861a
    #Get-PnPWebPartXml -ServerRelativePageUrl "/sites/spyglass/pages/home.aspx" -Connection $conn -Identity  d0f0ea88-b558-4af4-a06e-7957252708c8
                           
    Get-PnPWebPart -ServerRelativePageUrl "/sites/spyglass/pages/loading.aspx" -Connection $conn  
    Get-PnPWebPartXml -ServerRelativePageUrl "/sites/spyglass/pages/loading.aspx" -Connection $conn -Identity 'Do Not Remove' 
      
                        
    #Get-PnPWebPart -ServerRelativePageUrl "/sites/spyglass/pages/ops.aspx" -Connection $conn          
    #Get-PnPWebPartXml -ServerRelativePageUrl "/sites/spyglass/pages/ops.aspx" -Connection $conn -Identity 9624a4d3-cc58-43c8-94b7-6aadf57cc075
      
    Disconnect-PnPOnline
}
catch {
    $ErrorMessage = $_.Exception.Message
    Write-Host $ErrorMessage -ForegroundColor Red
}
 
