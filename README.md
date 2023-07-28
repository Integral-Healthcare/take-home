# Integral Take-Home Challenge

Welcome to Integral's Take-Home Challenge. Your challenge should you choose to accept it, you will be creating a dynamic tasks page, which is currently static. The page displays a list of tasks broken down into different milestones. In a workflow certification there is a bit of pre-work involved before Integral can get access to sensitive data for certification, and we'd like to start giving our customers visibility into the whole process.

## Setup

1. Clone the repository to your local machine.
2. Run `npm i` to install all necessary dependencies.
3. Run `npm run dev` to start the development server.
4. In a separate terminal, run `npm run server` to start the JSON server.

## The Challenge

Your task is to make the tasks page more dynamic and visually align it with a provided design (please refer to `design.png` in the project root directory).

Here's the initial database schema for your reference, stored in the `db.json` file:

```json
{
    "milestones": [
      {
        "id": 1,
        "name": "Security and Legal",
        "status": "COMPLETE"
      },
      {
        "id": 2,
        "name": "Data Upload",
        "status": "IN_PROGRESS"
      },
      {
        "id": 3,
        "name": "Integral Analysis",
        "status": "NOT_STARTED"
      },
      {
        "id": 4,
        "name": "Data Changes",
        "status": "NOT_STARTED"
      }
    ],
    "tasks": [
      {
        "id": 1,
        "title": "Upload dataset #1",
        "milestone_id": 2,
        "status": "COMPLETE"
      },
      {
        "id": 2,
        "title": "Upload data dictionary",
        "milestone_id": 2,
        "status": "IN_PROGRESS"
      }
    ]
}
```

This project uses json-server to mimic a REST API. It allows us to focus on the front-end part of the challenge without needing to set up a proper database with a schema and migrations.

## Design Reference
[Design Reference](design.png)

## Goals
- Match the given design as much as possible
- Fetch the milestones and tasks data from the json-server and display them on the page dynamically.
- Group the tasks under their respective milestones.
- Tasks and milestones should reflect their respective statuses.

## Bonus points ideas
- Implement functionality to add, edit, and delete tasks and milestones.
- Mobile display responsiveness

## Time Allocation
This challenge is designed to be completed in about 90 minutes. We're not just looking for completion of the task - how you approach the problem and the decisions you make will also be considered.

## Starting Point
Start by editing the file `src/app/page.tsx``.

## Submission
Once you've completed the challenge, please commit your changes, push them to your own GitHub repository, and share the link with us. Alternatively emailing a zip file of the repository to john@useintegral.com is acceptable. 

We wish you the best of luck and are looking forward to reviewing your solution!


