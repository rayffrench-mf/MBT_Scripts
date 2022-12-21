Set AppContext=Browser("CreationTime:=0")												'Set the variable for what application (in this case the browser) we are acting upon
AIUtil.SetContext AppContext																'Tell the AI engine to point at the application
AIUtil.FindTextBlock("Exit").Click
counter = 0
Do
	counter = counter + 1
	wait 1
	If counter >= 60 Then
		msgbox "The search returning the text Apps didn't display within " & counter & " attempts.  Check the application."
		ExitScript
	End If
Loop Until AIUtil.FindTextBlock("Apps").Exist

AIUtil("left_triangle").Click
'AIUtil("left_triangle").Click
