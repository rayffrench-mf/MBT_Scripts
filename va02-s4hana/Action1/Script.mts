AIUtil.SetContext Browser("creationtime:=0")


For xxx = 1 To 10 Step 1 ' this is my favorite way to wait for a long time
	if AIUtil("search").Exist (xxx) then ' not that i wait for the loop index, so I wait longer every time through the loop
		Exit for
	end if
Next
'AIUtil("search").click
'set objSendKey=CreateObject("WScript.shell")
'objSendKey.SendKeys "{BACKSPACE}"

AIUtil("search").Search "va02" ' note - this does not seem to work with IE, but does indeed work fine with Chrome
If AIUtil.FindTextBlock("Apps").Exist (120) then ' you have to sync on the Apps text in the left pane - not on the actual Create Sales Order
		'using .exist insteach of checkExists so that I can specify a wait larger than the global timeout value
End If
AIUtil.FindTextBlock("VA02").Click

Order_number=Parameter("Order_number")
print Order_number
Sales_org=Parameter("Sales_org")

For xxx = 1 To 10 Step 1 ' this is my favorite way to wait for a long time
	if AIUtil("text_box", "Order:").Exist (xxx) then ' not that i wait for the loop index, so I wait longer every time through the loop
		Exit for
	end if
Next

'AIUtil("text_box", "Order:").Click
set objSendKey=CreateObject("WScript.shell")
objSendKey.SendKeys "{BACKSPACE}"
wait (2)
AIUtil("text_box", "Order:").Type Order_number
wait(3)
'AIUtil.FindTextBlock("Search", micFromTop,2).Click
AIUtil("button", "Continue").Click

'AIUtil("check_mark").Click
'AIUtil("search", micAnyText, micFromTop, 3).Click
'AIUtil("button", "Save").Click

wait (5)
'AIUtil.FindTextBlock("Exit").Click
wait (2)
AIUtil("left_triangle").Click


