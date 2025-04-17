ARTICLES = [{"Id":"run-task-in-background","Title":"Run Task in background","Topic":"Platform","Rank":9,"Content":"ROBOMASTER\u003Cbr\u003EIt is possible to run a Task in the background as a service. This means you can run a Task without showing the Robogator GUI. To do this you need to start Robogator with a Task uuid as parameter via the Windows Command Prompt, also known as cmd.exe. ROBOCODE0 To run a Task with the Task uuid d28cd9b1-3eac-43de-85db-f67098f9fd93 in the background directly as a one-liner, see the following example in the Windows Command Prompt: ROBOIMAGE0\u003Cbr\u003EAnother way is to first locate the Robogator.exe folder and then start a Task with the Task uuid d28cd9b1-3eac-43de-85db-f67098f9fd93 in the background, see the following example in the Windows Command Prompt: ROBOCODE1 ROBOCODE2 ROBOIMAGE1","Images":["run-task-in-background-one-liner.png","run-task-in-background.png"],"Code":["start \u0022\u0022 \u0022C:\\Program Files\\Robogator\\Robogator Desktop\\Robogator.exe\u0022 d28cd9b1-3eac-43de-85db-f67098f9fd93","cd C:\\Program Files\\Robogator\\Robogator Desktop","Robogator.exe d28cd9b1-3eac-43de-85db-f67098f9fd93"],"Date":20250416},{"Id":"deactivate-accounts","Title":"Deactivate Accounts","Topic":"Accounts","Rank":4,"Content":"To switch Accounts from active to inactive, you can use the smooth background processing Account deactivate feature.\u003Cbr\u003EFirst, go to the Accounts view. ROBONAVIGATIONACCOUNTS In the Accounts view, you will find the deactivate button. ROBOBUTTONDEACTIVATE The deactivate feature sets the status of the selected Accounts to inactive, which means they can\u0027t be executed and will be added to the inactive Accounts list. The actual deactivation of the Accounts is done in the background. The deactivation progress is displayed as a percentage below the button.\u003Cbr\u003EThis feature is designed to handle a large number of Accounts at once.","Images":[],"Code":[],"Date":20250415},{"Id":"reactivate-accounts","Title":"Reactivate Accounts","Topic":"Accounts","Rank":5,"Content":"To switch Accounts from inactive back to active, you can use the smooth background processing Account reactivate feature.\u003Cbr\u003EFirst, go to the Accounts view. ROBONAVIGATIONACCOUNTS In the Accounts view, you will find the reactivate button. ROBOBUTTONREACTIVATE The reactivate feature sets the status of the selected Accounts to active, which means they can be executed and will be added to the active Accounts list. The actual reactivation of the Accounts is done in the background. The reactivation progress is displayed as a percentage below the button.\u003Cbr\u003EThis feature is designed to handle a large number of Accounts at once.","Images":[],"Code":[],"Date":20250415},{"Id":"import-accounts","Title":"Import Accounts","Topic":"Accounts","Rank":6,"Content":"To transfer Tasks between different Robogator instances, you can use the smooth background processing Account import and export feature.\u003Cbr\u003EFirst, go to the Accounts view. ROBONAVIGATIONACCOUNTS In the Accounts view, you will find the import button. ROBOBUTTONIMPORT The import feature opens a file selection dialog where you can select one or more Robogator Accounts to import into the current Robogator instance. The actual import of the Accounts is done in the background. The import progress is displayed as a percentage below the button.\u003Cbr\u003EThe default import destination is automatically changed to the last selected destination after every import.\u003Cbr\u003EIt is not possible to transfer individual Tasks. Create an Account with only that Task, and then transfer the entire Account with that Task in it.\u003Cbr\u003EThis feature is designed to handle a large number of Accounts at once.","Images":[],"Code":[],"Date":20250312},{"Id":"export-accounts","Title":"Export Accounts","Topic":"Accounts","Rank":7,"Content":"To transfer Tasks between different Robogator instances, you can use the smooth background processing Account import and export feature.\u003Cbr\u003EFirst, go to the Accounts view. ROBONAVIGATIONACCOUNTS In the Accounts view, you will find the export button. ROBOBUTTONEXPORT The export feature will export all selected Robogator Accounts to the default export destination. Only active accounts are exportable. The actual export of the Accounts is done in the background. The export progress is displayed as a percentage below the button.\u003Cbr\u003EIt is not possible to transfer individual Tasks. Create an Account with only that Task, and then transfer the entire Account with that Task in it.\u003Cbr\u003EThis feature is designed to handle a large number of Accounts at once.","Images":[],"Code":[],"Date":20250312},{"Id":"delete-accounts","Title":"Delete Accounts","Topic":"Accounts","Rank":8,"Content":"To transfer Tasks between different Robogator instances, you can use the smooth background processing Account import and export feature.\u003Cbr\u003EFirst, go to the Accounts view. ROBONAVIGATIONACCOUNTS In the Accounts view, you will find the delete button. ROBOBUTTONDELETE The delete feature will delete all selected Robogator Accounts. Only inactive Accounts are deleteable. The actual deletion of the Accounts is done in the background. The deletion progress is displayed as a percentage below the button.\u003Cbr\u003ENice to know, if you delete an Account by mistake, there is always a way to recreate it. The fact that the required disk space of an Account is so small, allows you to keep the Account in the so called Robogator graveyard without any major impact on disk space. But with the advantage of being able to recreate it at any time.\u003Cbr\u003EThis feature is designed to handle a large number of Accounts at once.","Images":[],"Code":[],"Date":20250312},{"Id":"create-a-robogator-chat-message-csharp","Title":"Create a Robogator Chat message","Topic":"C# scripting","Rank":1,"Content":"The preferred way to write to the Robogator Chat with C# is to use the following method: ROBOCODE0 This example above generates a single Robogator Chat message with Hello World! as content. ROBOIMAGE0","Images":["create-a-robogator-chat-message-csharp.png"],"Code":["Console.WriteLine(\u0022Hello World!\u0022);"],"Date":20250414},{"Id":"create-a-robogator-error-chat-message-csharp","Title":"Create a Robogator error Chat message","Topic":"C# scripting","Rank":2,"Content":"It is possible to set the state of a Chat message manually to: Error occurred in runtime. ROBOCODE0 The method above writes This is an error to the Chat and sets the Chat message state also to error occurred in runtime. ROBOIMAGE0 Use of this is to log partial errors during the running Task. When using try catch then you are able to track errors even if the Task finishes completely with this method. Ever partial error will be counted for the Trail statistic and the finished Task state is Error occurred in runtime.","Images":["create-a-robogator-error-chat-message-csharp.png"],"Code":["Console.WriteLineError(\u0022This is an error\u0022);"],"Date":20250415},{"Id":"use-of-clickable-links-in-robogator-chat-messages-csharp","Title":"Use of clickable links in Robogator Chat messages","Topic":"C# scripting","Rank":3,"Content":"It is often wisely to add to a static text link in a Chat message a one click action. This is possible for web and local file links. Just use % at the start and at the end of the link in the Chat message. Robogator knows automatically by itself when to open the standard browser to show a web link, or open the explorer to display a folder, or the standard app to open the linked file. ROBOCODE0 This enriched string produces the following Chat message with two clickable links inside. ROBOIMAGE0","Images":["use-of-clickable-links-in-robogator-chat-messages-csharp.png"],"Code":["Console.WriteLine(@\u0022Open the web link %https://robogator.io% or a local directory %C:\\temp%\u0022);"],"Date":20250220},{"Id":"use-of-bold-text-in-robogator-chat-messages-csharp","Title":"Use of bold text in Robogator Chat messages","Topic":"C# scripting","Rank":4,"Content":"If you want to highlight a part of a string in bold letters. Just use * at the start and at the end of the part in the Chat message. ROBOCODE0 This example above generates a single Robogator Chat message with Hello World! as content and World! is in bold letters. ROBOIMAGE0","Images":["use-of-bold-text-in-robogator-chat-messages-csharp.png"],"Code":["Console.WriteLine(\u0022Hello *World!* is bold\u0022);"],"Date":20250224},{"Id":"access-task-parameters-in-csharp-script","Title":"Access Task Parameters in C# script","Topic":"C# scripting","Rank":5,"Content":"This method returns the value of the Parameter named TaskParameter: ROBOCODE0 This shows how the typed Parameter value is accessible in the script. ROBOIMAGE0 To write a Chat message with the Parameter value as string during the Task script runtime, use the following method: ROBOCODE1 This method returns the string Hello World!. Parameters are always read only, so you are not able to set them to a new value during the Task script runtime.","Images":["access-task-parameters-in-csharp-script.png"],"Code":["param[\u0022TaskParameter\u0022];","Console.WriteLine(param[\u0022TaskParameter\u0022);"],"Date":20250220},{"Id":"access-key-secrets-in-csharp-script","Title":"Access Key secrets in C# script","Topic":"C# scripting","Rank":6,"Content":"This method helps to exclude secrets and passwords from the script itself. So be compliant right from the start. ROBOCODE0 The Key secrets are stored as hash values in the Robogator database. Just in time, in fact, only during the script runtime are the key secret available as decoded values.\u003Cbr\u003EAdd the Key secret you want to access in the script the Task first. ROBOIMAGE0 You can access the Key secret as a string with the following method during the script runtime: ROBOCODE1","Images":["access-key-secrets-in-csharp-script.png"],"Code":["key[\u0022MyKey\u0022];","Console.WriteLine(\u0022MyKey is: \u0022 \u002B key[\u0022MyKey\u0022]);"],"Date":20250221},{"Id":"access-first-key-secret-by-default-in-csharp-script","Title":"Access first Key secret by default in C# script","Topic":"C# scripting","Rank":7,"Content":"This method helps to exclude secrets and passwords from the script itself. So be compliant right from the start. ROBOCODE0 The Key secrets are stored as hash values in the Robogator database. Just in time, in fact, only during the script runtime are the key secret available as decoded values.\u003Cbr\u003EAdd the Key secrets you want to access in the script the Task first. ROBOIMAGE0 You can access the the first Key secret as a string with the following method during the script runtime: ROBOCODE1 This is helpful if you want to keep the Key secret value self adjustable to the Key set on the Task. So there is no need to edit the script if you change the Key itself on the Task.","Images":["access-first-key-secret-by-default-in-csharp-script.png"],"Code":["keyDefaultFirst;","Console.WriteLine(\u0022First secure key value of this task is: \u0022 \u002B keyDefaultFirst);"],"Date":20250224},{"Id":"access-current-account-uuid-in-csharp-script","Title":"Access current Account uuid in C# script","Topic":"C# scripting","Rank":8,"Content":"To get the Account uuid of the current Task during script runtime as a string variable. Use the following method: ROBOCODE0 This will get a string variable like 75839be4-89e9-4c00-b507-e7e9418e3e62.","Images":[],"Code":["Script.CurrentAccountUuid;"],"Date":20250218},{"Id":"access-current-task-uuid-in-csharp-script","Title":"Access current Task uuid in C# script","Topic":"C# scripting","Rank":9,"Content":"To get the Task uuid during script runtime as a string variable. Use the following method: ROBOCODE0 This will get a string variable like 888cec5b-6615-4e3d-80ed-8a328a4f71ba.","Images":[],"Code":["Script.CurrentTaskUuid;"],"Date":20250218},{"Id":"access-current-instance-uuid-in-csharp-script","Title":"Access current Instance uuid in C# script","Topic":"C# scripting","Rank":10,"Content":"To get the Instance uuid of the current Task Instance during script runtime as a string variable. Use the following method: ROBOCODE0 This will get a string variable like fbfa8388-7a23-46a9-a318-7f86f4b96955.","Images":[],"Code":["Script.CurrentInstanceUuid;"],"Date":20250218},{"Id":"get-a-list-of-followed-unique-task-uuids-csharp","Title":"Get a list of followed unique Task uuid\u0027s","Topic":"C# scripting","Rank":11,"Content":"It is possible to get a unique list of all Task uuid\u0027s which this Task will trigger after it is finished. ROBOCODE0 To access any followed Task uuid, loop through the array with the following method: ROBOCODE1 This will create some Chat messages with all Followed by Task uuid\u0027s as content: ROBOIMAGE0 A unique list means that if entire Accounts are set to Followed by links, links that have already been separately triggered as Followed by link Tasks will not appear multiple times in the list, even if they are also present in the Followed by link Accounts.","Images":["get-a-list-of-followed-unique-task-uuids-csharp.png"],"Code":["followed","foreach (string uuid in followed) {\u003Cbr\u003E\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;Console.WriteLine(uuid);\u003Cbr\u003E}"],"Date":20250224},{"Id":"get-a-list-of-all-neighbor-task-uuids-of-the-current-account-csharp","Title":"Get a list of all neighbor Task uuid\u0027s of the current Account","Topic":"C# scripting","Rank":12,"Content":"It is possible to get a unique list of all neighbor Task uuid\u0027s of the current Account. ROBOCODE0 To access any neighbor Task uuid, loop through the array with the following method: ROBOCODE1 This will create some Chat messages with all neighbor Task uuid\u0027s of the current Account as content: ROBOIMAGE0 A neighbor Task is defined as all the Tasks in the Account exept to the executing Task itself.","Images":["get-a-list-of-all-neighbor-task-uuids-of-the-current-account-csharp.png"],"Code":["neighborTasks","foreach (string uuid in neighborTasks) {\u003Cbr\u003E\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;Console.WriteLine(uuid);\u003Cbr\u003E}"],"Date":20250224},{"Id":"how-to-handle-cencellation-in-csharp-scripts","Title":"How to handle cancellation in C# scripts","Topic":"C# scripting","Rank":13,"Content":"If you want to be able to use the kill switch to cancel a running C# script at runtime, you may need to manually place the possible cancellation stops in your script. ROBOBUTTONKILL To start, every Chat message creation checks for an ongoing cancellation by default. Further, if you need to be able to cancel long running loops, use the following method if no Chat message will be created during the loop: ROBOCODE0 This allows you to kill a running C# script Task in a well-behaved and traceable way: ROBOIMAGE0 How manual cancellation was used in this example: ROBOCODE1","Images":["how-to-handle-cencellation-in-csharp-scripts.png"],"Code":["Script.CancellationCheck();"],"Date":20250224},{"Id":"create-a-robogator-chat-message-powershell","Title":"Create a Robogator Chat message","Topic":"Powershell scripting","Rank":1,"Content":"The preferred way to write to the Robogator Chat with PowerShell is to use the following method: ROBOCODE0 This example above generates a single Robogator Chat message with Hello World! as content. ROBOIMAGE0","Images":["create-a-robogator-chat-message-powershell.png"],"Code":["Write-Host \u0022Hello World!\u0022"],"Date":20250414},{"Id":"use-of-clickable-links-in-robogator-chat-messages-powershell","Title":"Use of clickable links in Robogator Chat messages","Topic":"Powershell scripting","Rank":2,"Content":"It is often wisely to add to a static text link in a Chat message a one click action. This is possible for web and local file links. Just use % at the start and at the end of the link in the Chat message. Robogator knows automatically by itself when to open the standard browser to show a web link, or open the explorer to display a folder, or the standard app to open the linked file. ROBOCODE0 This enriched string produces the following Chat message with two clickable links inside. ROBOIMAGE0","Images":["use-of-clickable-links-in-robogator-chat-messages-powershell.png"],"Code":["Write-Host \u0022Open the web link %https://robogator.io% or a local directory %C:\\temp%\u0022"],"Date":20250220},{"Id":"use-of-bold-text-in-robogator-chat-messages-powershell","Title":"Use of bold text in Robogator Chat messages","Topic":"Powershell scripting","Rank":3,"Content":"If you want to highlight a part of a string in bold letters. Just use * at the start and at the end of the part in the Chat message. ROBOCODE0 This example above generates a single Robogator Chat message with Hello World! as content and World! is in bold letters. ROBOIMAGE0","Images":["use-of-bold-text-in-robogator-chat-messages-powershell.png"],"Code":["Write-Host \u0022Hello *World!* is bold\u0022"],"Date":20250224},{"Id":"access-task-parameters-in-powershell-script","Title":"Access Task Parameters in PowerShell script","Topic":"Powershell scripting","Rank":4,"Content":"This method returns the value of the Parameter named TaskParameter: ROBOCODE0 This shows how the typed Parameter value is accessible in the script. ROBOIMAGE0 To write a Chat message with the Parameter value as string during the Task script runtime, add this method to very first line of the script: ROBOCODE1 Then you can access the Parameter value within the script using the following method: ROBOCODE2 This method returns the string Hello World!. Parameters are always read only, so you are not able to set them to a new value during the Task script runtime.\u003Cbr\u003ETo access Robogator proprietary variables with PowerShell, you have to first initialize all variables on the first line of the script and after that it is possible to access the variables in the underlaying script lines.","Images":["access-task-parameters-in-powershell-script.png"],"Code":["$TaskParameter","param($TaskParameter)","Write-Host $TaskParameter"],"Date":20250221},{"Id":"access-key-secrets-in-powershell-script","Title":"Access Key secrets in PowerShell script","Topic":"Powershell scripting","Rank":5,"Content":"This method helps to exclude secrets and passwords from the script itself. So be compliant right from the start. ROBOCODE0 The Key secrets are stored as hash values in the Robogator database. Just in time, in fact, only during the script runtime are the key secret available as decoded values. Add the Key secret you want to access in the script the Task first. ROBOIMAGE0 To get a Key secret as string during the Task script runtime, add this method to very first line of the script: ROBOCODE1 Then you can access the Key secret within the script using the following method: ROBOCODE2 To access Robogator proprietary variables with PowerShell, you have to first initialize all variables on the first line of the script and after that it is possible to access the variables in the underlaying script lines.","Images":["access-key-secrets-in-powershell-script.png"],"Code":["$MyKey","param($MyKey)","Write-Host \u0022MyKey is: \u0022 $MyKey"],"Date":20250221},{"Id":"access-first-key-secret-by-default-in-powershell-script","Title":"Access first Key secret by default in PowerShell script","Topic":"Powershell scripting","Rank":6,"Content":"This method helps to exclude secrets and passwords from the script itself. So be compliant right from the start. ROBOCODE0 The Key secrets are stored as hash values in the Robogator database. Just in time, in fact, only during the script runtime are the key secret available as decoded values.\u003Cbr\u003EAdd the Key secrets you want to access in the script the Task first. ROBOIMAGE0 To get the first Key secret by Default as string during the Task script runtime, add this method to very first line of the script: ROBOCODE1 Then you can access the first Key secret by default within the script using the following method: ROBOCODE2 This is helpful if you want to keep the Key secret value self adjustable to the Key set on the Task. So there is no need to edit the script if you change the Key itself on the Task.\u003Cbr\u003ETo access Robogator proprietary variables with PowerShell, you have to first initialize all variables on the first line of the script and after that it is possible to access the variables in the underlaying script lines.","Images":["access-first-key-secret-by-default-in-powershell-script.png"],"Code":["$keyDefaultFirst","param($keyDefaultFirst)","Write-Host \u0022First secure key value of this task is: \u0022 $keyDefaultFirst"],"Date":20250224},{"Id":"access-current-account-uuid-in-powershell-script","Title":"Access current Account uuid in PowerShell script","Topic":"Powershell scripting","Rank":7,"Content":"To get the Account uuid of the current Task during script runtime as a string variable, add this method to very first line of the script: ROBOCODE1 Then you can access the Account uuid within the script using the following method: ROBOCODE0 This will get a string variable like 75839be4-89e9-4c00-b507-e7e9418e3e62.\u003Cbr\u003ETo access Robogator proprietary variables with PowerShell, you have to first initialize all variables on the first line of the script and after that it is possible to access the variables in the underlaying script lines.","Images":[],"Code":["$CurrentAccountUuid","param($CurrentAccountUuid)"],"Date":20250221},{"Id":"access-current-task-uuid-in-powershell-script","Title":"Access current Task uuid in PowerShell script","Topic":"Powershell scripting","Rank":8,"Content":"To get the Task uuid of the current Task during script runtime as a string variable, add this method to very first line of the script: ROBOCODE1 Then you can access the Task uuid within the script using the following method: ROBOCODE0 This will get a string variable like 888cec5b-6615-4e3d-80ed-8a328a4f71ba.\u003Cbr\u003ETo access Robogator proprietary variables with PowerShell, you have to first initialize all variables on the first line of the script and after that it is possible to access the variables in the underlaying script lines.","Images":[],"Code":["$CurrentTaskUuid","param($CurrentTaskUuid)"],"Date":20250221},{"Id":"access-current-instance-uuid-in-powershell-script","Title":"Access current Instance uuid in PowerShell script","Topic":"Powershell scripting","Rank":9,"Content":"To get the Instance uuid of the current Task during script runtime as a string variable, add this method to very first line of the script: ROBOCODE1 Then you can access the Instance uuid within the script using the following method: ROBOCODE0 This will get a string variable like fbfa8388-7a23-46a9-a318-7f86f4b96955.\u003Cbr\u003ETo access Robogator proprietary variables with PowerShell, you have to first initialize all variables on the first line of the script and after that it is possible to access the variables in the underlaying script lines.","Images":[],"Code":["$CurrentInstanceUuid","param($CurrentInstanceUuid)"],"Date":20250221},{"Id":"get-a-list-of-followed-unique-task-uuids-powershell","Title":"Get a list of followed unique Task uuid\u0027s","Topic":"Powershell scripting","Rank":10,"Content":"It is possible to get a unique list of all Task uuid\u0027s which this Task will trigger after it is finished. ROBOCODE0 To access any followed Task uuid, add this method to very first line of the script: ROBOCODE1 Then you cann loop through the array with the following method: ROBOCODE2 This will create some Chat messages with all Followed by Task uuid\u2019s as content: ROBOIMAGE0 A unique list means that if entire Accounts are set to Followed by links, links that have already been separately triggered as Followed by link Tasks will not appear multiple times in the list, even if they are also present in the Followed by link Accounts.\u003Cbr\u003ETo access Robogator proprietary variables with PowerShell, you have to first initialize all variables on the first line of the script and after that it is possible to access the variables in the underlaying script lines.","Images":["get-a-list-of-followed-unique-task-uuids-powershell.png"],"Code":["$followed","param($followed)","foreach ($uuid in $followed) {\u003Cbr\u003E\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;Write-Host $uuid;\u003Cbr\u003E}"],"Date":20250224},{"Id":"get-a-list-of-all-neighbor-task-uuids-of-the-current-account-powershell","Title":"Get a list of all neighbor Task uuid\u0027s of the current Account","Topic":"Powershell scripting","Rank":11,"Content":"It is possible to get a unique list of all neighbor Task uuid\u0027s of the current Account. ROBOCODE0 To access any neighbor Task uuid, add this method to very first line of the script: ROBOCODE1 Then you cann loop through the array with the following method: ROBOCODE2 This will create some Chat messages with all neighbor Task uuid\u0027s of the current Account as content: ROBOIMAGE0 A neighbor Task is defined as all the Tasks in the Account exept to the executing Task itself.\u003Cbr\u003ETo access Robogator proprietary variables with PowerShell, you have to first initialize all variables on the first line of the script and after that it is possible to access the variables in the underlaying script lines.","Images":["get-a-list-of-all-neighbor-task-uuids-of-the-current-account-powershell.png"],"Code":["$neighborTasks","param($neighborTasks)","foreach ($uuid in $neighborTasks) {\u003Cbr\u003E\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;Write-Host $uuid;\u003Cbr\u003E}"],"Date":20250224}]