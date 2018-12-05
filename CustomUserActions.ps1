
$credentials = Get-Credential -UserName "bob@acme.net" -Message "Enter password"
      
$fullUrl = "https://acme.sharepoint.com/sites/spyglass"

try {

    $conn = Connect-PnPOnline -ReturnConnection -Url $fullUrl -Credentials $credentials 

    #Get-PnPCustomAction -Scope All | Where-Object Location -eq ScriptLink | Remove-PnPCustomAction      


    Get-PnPCustomAction -Scope Site -Connection $conn | Select-Object name, title, description, sequence, versionOfUserCustomAction
        

    Disconnect-PnPOnline
}
catch {
    $ErrorMessage = $_.Exception.Message
    Write-Host $ErrorMessage -ForegroundColor Red
}
 
