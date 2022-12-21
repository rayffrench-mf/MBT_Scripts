RunAction "01_Login", oneIteration, Parameter("User_name"), Parameter("Password")
RunAction "02_Launch_TCode", oneIteration, Parameter("Tcode")
RunAction "03_va01_create_sales_document", oneIteration, Parameter("Order_type"), Parameter("Division"), Parameter("Distribution_channel"), Parameter("Sales_org")
RunAction "04_va01_order_header", oneIteration, Parameter("Cust_reference"), Parameter("Ship_to_party"), Parameter("Sold_to_party")
RunAction "05_va01_order_details", oneIteration, Parameter("item"), Parameter("Material"), Parameter("Order_quantity"), Parameter("Unit")
RunAction "06_va01_create_new_order", oneIteration, Parameter("Order_number")
RunAction "07_va01_exit", oneIteration
RunAction "99_logout", oneIteration
