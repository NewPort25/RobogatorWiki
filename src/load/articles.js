ARTICLES = [{"Id":"deactivate-accounts","Title":"Deactivate Accounts","Topic":"Accounts","Rank":4,"Content":"To switch Accounts from active to inactive, you can use the smooth background processing Account deactivate feature.\u003Cbr\u003EFirst, go to the Accounts view. ROBONAVIGATIONACCOUNTS In the Accounts view, you will find the deactivate button. ROBOBUTTONDEACTIVATE The deactivate feature sets the status of the selected Accounts to inactive, which means they can\u0027t be executed and will be added to the inactive Accounts list. The actual deactivation of the Accounts is done in the background. The deactivation progress is displayed as a percentage below the button.\u003Cbr\u003EThis feature is designed to handle a large number of Accounts at once.","Images":[],"Code":[],"Date":20250415},{"Id":"reactivate-accounts","Title":"Reactivate Accounts","Topic":"Accounts","Rank":5,"Content":"To switch Accounts from inactive back to active, you can use the smooth background processing Account reactivate feature.\u003Cbr\u003EFirst, go to the Accounts view. ROBONAVIGATIONACCOUNTS In the Accounts view, you will find the reactivate button. ROBOBUTTONREACTIVATE The reactivate feature sets the status of the selected Accounts to active, which means they can be executed and will be added to the active Accounts list. The actual reactivation of the Accounts is done in the background. The reactivation progress is displayed as a percentage below the button.\u003Cbr\u003EThis feature is designed to handle a large number of Accounts at once.","Images":[],"Code":[],"Date":20250415},{"Id":"import-accounts","Title":"Import Accounts","Topic":"Accounts","Rank":6,"Content":"To transfer Tasks between different Robogator instances, you can use the smooth background processing Account import and export feature.\u003Cbr\u003EFirst, go to the Accounts view. ROBONAVIGATIONACCOUNTS In the Accounts view, you will find the import button. ROBOBUTTONIMPORT The import feature opens a file selection dialog where you can select one or more Robogator Accounts to import into the current Robogator instance. The actual import of the Accounts is done in the background. The import progress is displayed as a percentage below the button.\u003Cbr\u003EThe default import destination is automatically changed to the last selected destination after every import.\u003Cbr\u003EIt is not possible to transfer individual Tasks. Create an Account with only that Task, and then transfer the entire Account with that Task in it.\u003Cbr\u003EThis feature is designed to handle a large number of Accounts at once.","Images":[],"Code":[],"Date":20250312},{"Id":"export-accounts","Title":"Export Accounts","Topic":"Accounts","Rank":7,"Content":"To transfer Tasks between different Robogator instances, you can use the smooth background processing Account import and export feature.\u003Cbr\u003EFirst, go to the Accounts view. ROBONAVIGATIONACCOUNTS In the Accounts view, you will find the export button. ROBOBUTTONEXPORT The export feature will export all selected Robogator Accounts to the default export destination. Only active accounts are exportable. The actual export of the Accounts is done in the background. The export progress is displayed as a percentage below the button.\u003Cbr\u003EIt is not possible to transfer individual Tasks. Create an Account with only that Task, and then transfer the entire Account with that Task in it.\u003Cbr\u003EThis feature is designed to handle a large number of Accounts at once.","Images":[],"Code":[],"Date":20250312},{"Id":"delete-accounts","Title":"Delete Accounts","Topic":"Accounts","Rank":8,"Content":"To transfer Tasks between different Robogator instances, you can use the smooth background processing Account import and export feature.\u003Cbr\u003EFirst, go to the Accounts view. ROBONAVIGATIONACCOUNTS In the Accounts view, you will find the delete button. ROBOBUTTONDELETE The delete feature will delete all selected Robogator Accounts. Only inactive Accounts are deleteable. The actual deletion of the Accounts is done in the background. The deletion progress is displayed as a percentage below the button.\u003Cbr\u003ENice to know, if you delete an Account by mistake, there is always a way to recreate it. The fact that the required disk space of an Account is so small, allows you to keep the Account in the so called Robogator graveyard without any major impact on disk space. But with the advantage of being able to recreate it at any time.\u003Cbr\u003EThis feature is designed to handle a large number of Accounts at once.","Images":[],"Code":[],"Date":20250312},{"Id":"create-a-robogator-chat-message-csharp","Title":"Create a Robogator Chat message","Topic":"C# scripting","Rank":1,"Content":"The preferred way to write to the Robogator Chat with C# is to use the following method: ROBOCODE0 This example above generates a single Robogator Chat message with hello world as content. ROBOIMAGE0","Images":["create-a-robogator-chat-message.png"],"Code":["Console.WriteLine(\u0022Hello world\u0022);"],"Date":20250414},{"Id":"create-a-robogator-error-chat-message-csharp","Title":"Create a Robogator error Chat message","Topic":"C# scripting","Rank":2,"Content":"It is possible to set the state of a Chat message manually to: Error occurred in runtime. ROBOCODE0 TThe method above writes This is an error to the Chat and sets the Chat message state also to error occurred in runtime. ROBOIMAGE0 Use of this is to log partial errors during the running Task. When using try catch then you are able to track errors even if the Task finishes completely with this method. Ever partial error will be counted for the Trail statistic and the finished Task state is Error occurred in runtime.","Images":["create-a-robogator-error-chat-message-csharp.png"],"Code":["Console.WriteLineError(\u0022This is an error\u0022);"],"Date":20250415},{"Id":"create-a-robogator-chat-message-powershell","Title":"Create a Robogator Chat message","Topic":"Powershell scripting","Rank":1,"Content":"The preferred way to write to the Robogator Chat with PowerShell is to use the following method: ROBOCODE0 This example above generates a single Robogator Chat message with hello world as content. ROBOIMAGE0","Images":["create-a-robogator-chat-message.png"],"Code":["Write-Host \u0022hello world\u0022"],"Date":20250414}]