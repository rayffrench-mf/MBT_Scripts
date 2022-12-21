AIUtil.SetContext Browser("creationtime:=0")

'Order_Num=DataTable.Value("Order_Num","Global")
'Sold_to_Party=DataTable.Value("Sold_to_Party","Global")
'Ship_to_Party=DataTable.Value("Ship_to_Party","Global")
'Cust_ref_Date=DataTable.Value("Cust_ref_Date","Global")
'Req_deliv_Date=DataTable.Value("Req_deliv_Date","Global")
'Pyt_Terms=DataTable.Value("Pyt_Terms","Global")

Order_Num=Parameter("Order_Number")
Cust_ref_Date=FormatDateTime((Date-1), 2)
Cust_Reference=Parameter("Cust_Reference")
Ship_to_Party=Parameter("Ship_to_Party")
Ship_to_Party=Parameter("Sold_to_Party")

For xxx = 1 To 10 Step 1 ' this is my favorite way to wait for a long time
	if AIUtil("search").Exist (xxx) then ' not that i wait for the loop index, so I wait longer every time through the loop
	wait (2)
		Exit for
	end if
Next

AIUtil("search").Search "va03" ' note - this does not seem to work with IE, but does indeed work fine with Chrome
If AIUtil.FindTextBlock("Apps").Exist (120) then ' you have to sync on the Apps text in the left pane - not on the actual Create Sales Order
		'using .exist insteach of checkExists so that I can specify a wait larger than the global timeout value
End If
AIUtil.FindTextBlock("VA03").Click

AIUtil.FindTextBlock("Create Sales Documents").CheckExists True ' wait for the nex page to come up
' BTW - note that this is "Create Sales Documents", but the .click above is on "Create Sales Orders"
set objSendKey=CreateObject("WScript.shell")
objSendKey.SendKeys "{BACKSPACE}"

AIUtil("text_box", "Order:").Type Order_Num
AIUtil.FindTextBlock("Search").Click


AIUtil("text_box", "Standard Order: "&Order_Num).CheckExists True
AIUtil("text_box", "Sold-To Party: "&Sold_to_Party).CheckExists True
AIUtil("text_box", "Ship-To Party: "&Ship_to_Party).CheckExists True
AIUtil("text_box", "Cust. Ref. Date: "&Cust_ref_Date).CheckExists True
AIUtil("text_box", "Pyt Terms: "&Pyt_Terms).CheckExists True

AIUtil.FindTextBlock("Exit").Click
wait (2)
AIUtil("left_triangle").Click
