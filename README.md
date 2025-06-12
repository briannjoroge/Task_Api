# Task API
A simple **Task API** built with **Express.js** and **Prisma ORM**. 

## Feetures 
- Get all tasks
- Get a specific task by ID
- Create a new task
- Update a task
- Soft-delete a task

## API Querries Used

### GET `/`
- Displays a welcome message and basic API usage commands.

### GET `/task`
- Displays all tasks in json format.

### GET `/task/:id`
- Displays one specific task by ID.

### POST `/task`
- Creates a new task. 
Use it in Postman API development and testing tool.
Make sure you select Body > raw > JSON to run this command.

```json 
{
    "title": "{{$randomLoremWord}}",
    "description": "{{$randomLoremSentence}}"
}
```

### PATCH `/task/:id`
Updates a task by ID, specified in http link.

**Body:**  
```json
{
  "title": "Updated title",
  "description": "Updated description"
}
```

### DELETE `/task/:id`
Soft-deletes a task by setting `isCompleted` to `true`.
This hides the data from the user.

## Notes

- Use tools like [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) to test POST, PATCH, and DELETE endpoints.
- The API uses soft-delete by marking tasks as completed.

---

**Author:** [Brian Njoroge](https://github.com/briannjoroge/Task_Api)

**Technology used:** Javascript ,Node, Express, Prisma, PostgreSQL