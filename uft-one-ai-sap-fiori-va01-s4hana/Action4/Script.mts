Set AppContext=Browser("CreationTime:=0")												'Set the variable for what application (in this case the browser) we are acting upon
AIUtil.SetContext AppContext																'Tell the AI engine to point at the application
'
'AIUtil("text_box", "Order Type:").Type "OR"
'set objSendKey=CreateObject("WScript.shell")
'objSendKey.SendKeys "{TAB}{BACKSPACE}"
'AIUtil("text_box", "Division").Type "00"
'AIUtil("text_box", "Distribution Channel:").Type "10"
'AIUtil("text_box", "Sales Organization:").Type "1710"
'AIUtil("button", "Continue").Click

Order_type=Parameter("Order_type")
Division=Parameter("Division")
Distribution_channel=Parameter("Distribution_channel")
Sales_org=Parameter("Sales_org")

AIUtil("text_box", "Order Type:").Type Order_type
set objSendKey=CreateObject("WScript.shell")
objSendKey.SendKeys "{TAB}{BACKSPACE}"
AIUtil("text_box", "Division").Type "00"
AIUtil("text_box", "Distribution Channel:").Type Distribution_channel
AIUtil("text_box", "Sales Organization:").Type Sales_org
AIUtil("button", "Continue").Click
