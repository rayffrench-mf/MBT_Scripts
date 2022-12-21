Set AppContext=Browser("CreationTime:=0")												'Set the variable for what application (in this case the browser) we are acting upon
AIUtil.SetContext AppContext																'Tell the AI engine to point at the application


item=Parameter("item")
Material=Parameter("Material")
Order_quantity=Parameter("Order_quantity")
Unit=Parameter("Unit")

'AIUtil("plus").Click


'AIUtil("button", "", micWithAnchorBelow, AIUtil("button", "Item")).Click
'
'set objSendKey=CreateObject("WScript.shell")
'objSendKey.SendKeys "+{TAB}"
'objSendKey.SendKeys item
'objSendKey.SendKeys "{TAB}"
'objSendKey.SendKeys Material
'objSendKey.SendKeys "{TAB}"
'objSendKey.SendKeys "{TAB}"
'objSendKey.SendKeys Order_quantity
'objSendKey.SendKeys "{TAB}"
'objSendKey.SendKeys Unit


