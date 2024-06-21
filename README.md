# Todo APP

The application has two components - TodoLists and TodoItems.

TodoLists functions as a dashboard where users can enter and save their todo items. It includes options to filter tasks by 'all,' 'completed,' or 'active' using filter buttons.

TodoItems is a component responsible for rendering the todo lists on the UI with the checkbox to mark it complete or uncheck to reopen it.

They can be integrated with the other application journeys by just passing two props - todos(data) and handleCompletion(callback function)

Functionalities are tested using unit testcases.