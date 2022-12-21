Set AppContext=Browser("CreationTime:=0")												'Set the variable for what application (in this case the browser) we are acting upon
AIUtil.SetContext AppContext																'Tell the AI engine to point at the application

Cust_reference=Parameter("Cust_reference")
Ship_to_party=Parameter("Ship_to_party")
Sold_to_party=Parameter("Sold_to_party")


AIUtil("text_box", "Cust. Reference:").Type Cust_reference
AIUtil("text_box", "Cust. Ref. Date:").Type FormatDateTime((Date-1), 2)
AIUtil("text_box", "Ship-To Party:").Type Ship_to_party
AIUtil("text_box", "Sold-To Party:").Type Sold_to_party


