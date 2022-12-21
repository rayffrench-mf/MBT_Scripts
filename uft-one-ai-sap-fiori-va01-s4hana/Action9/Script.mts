Set AppContext=Browser("CreationTime:=0")												'Set the variable for what application (in this case the browser) we are acting upon
AIUtil.SetContext AppContext																'Tell the AI engine to point at the application

set objSendKey=CreateObject("WScript.shell")
objSendKey.SendKeys "{F11}"
AIUtil.FindText("has been saved").CheckExists TRUE
AIUtil.SetContext Browser("creationtime:=0")
AIUtil("close", micAnyText, micWithAnchorOnRight, AIUtil("button", "Save")).CheckExists True
StatusBarText = AIUtil.FindTextBlock(micAnyText, micWithAnchorOnLeft, AIUtil("close", micAnyText, micWithAnchorOnRight, AIUtil("button", "Save"))).GetText
print StatusBarText
StatusBarArray = Split(StatusBarText," ")
Parameter("Order_number") = StatusBarArray(2)
print Parameter("Order_number") 

AIUtil("close").CheckExists True
