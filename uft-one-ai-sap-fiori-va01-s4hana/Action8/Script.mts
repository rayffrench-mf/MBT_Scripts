Set AppContext=Browser("CreationTime:=0")												'Set the variable for what application (in this case the browser) we are acting upon
AIUtil.SetContext AppContext																'Tell the AI engine to point at the application
'


For xxx = 1 To 10 Step 1 ' this is my favorite way to wait for a long time
	if AIUtil("profile").Exist (xxx) then ' not that i wait for the loop index, so I wait longer every time through the loop
		Exit for
	end if
Next

AIUtil("profile").Click
AIUtil("power").Click

For xxx = 1 To 10 Step 1 ' this is my favorite way to wait for a long time
	if AIUtil.FindTextBlock("OK").Exist (xxx) then ' not that i wait for the loop index, so I wait longer every time through the loop
		Exit for
	end if
Next
'AIUtil.FindTextBlock("OK").Click
AppContext.Close																			'Close the application at the end of your script
