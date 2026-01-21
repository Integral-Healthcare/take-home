# Integral Take-Home Challenge

Welcome to Integral's Take-Home Challenge! Your task is to build a small web application for managing client (customer) intake questionaires and forms, as well as a reviewer workflow.

## The Challenge

Build a web app where:

- A user can login as a **Client** or **Reviewer**
- A **Client** submits an **Intake** form with personal information
- The intake form result appears in a **Review Queue** for reviewers
- A **Reviewer** can view a **privileged** (full data) vs **redacted** (masked sensitive data) detail view
- Reviewers can **update status** (Pending → In Review → Approved/Rejected)
- The system records an **audit trail** of all actions

## Setup

1. Clone the repository to your local machine
2. Copy the environment file: `cp .env.example .env`
3. Install dependencies: `npm install`
4. Generate Prisma client: `npx prisma generate`
5. Run database migrations: `npx prisma migrate dev`
6. Seed the database: `npm run db:seed`
7. Start the development server: `npm run dev`
8. Visit `http://localhost:3000/` in your browser

## Design Inspiration

Design references and mockups are available in the `/public/design-inspiration/` folder. You can view them at:

- `http://localhost:3000/design-inspiration/[filename]`

These are provided as optional visual guidance. Feel free to implement your own design approach.

## Database Schema

The project uses Prisma with SQLite. The schema is defined in `prisma/schema.prisma`:

### User

- `id`, `email`, `name`, `role` (CLIENT or REVIEWER), `organization`
- Clients submit intakes, Reviewers review them

### Intake

- Client information: `clientName`, `clientEmail`, `clientPhone`, `dateOfBirth`, `ssn`
- Intake details: `description`, `notes`
- Status: `PENDING`, `IN_REVIEW`, `APPROVED`, `REJECTED`
- Relations: `submittedBy` (User), `reviewer` (User, optional)

### AuditLog

- `action`: Type of action (CREATED, STATUS_CHANGED, VIEWED, ASSIGNED)
- `details`: JSON string with additional context
- Relations: `user` (who performed the action), `intake` (which intake)

## Demo Users

The database is seeded with two demo users:

| Email               | Role     | Organization        |
| ------------------- | -------- | ------------------- |
| `client@demo.com`   | CLIENT   | Organization A      |
| `reviewer@demo.com` | REVIEWER | Integral (Internal) |

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page with challenge overview
│   ├── intake/
│   │   └── page.tsx          # Client intake submission page
│   ├── queue/
│   │   └── page.tsx          # Reviewer queue page
│   └── api/
│       ├── intakes/
│       │   ├── route.ts      # GET all intakes, POST new intake
│       │   └── [id]/
│       │       └── route.ts  # GET/PATCH single intake
│       └── users/
│           └── route.ts      # GET users
├── components/
│   ├── AuditLog.tsx          # Audit trail display
│   └── Add additional components as needed...
├── lib/
│   └── prisma.ts             # Prisma client singleton
prisma/
├── schema.prisma             # Database schema
├── seed.ts                   # Seed script
└── dev.db                    # SQLite database
```

## Goals

### Required

1. **User Authentication**: Implement an authentication system for client and reviewer login
2. **Intake Submission**: Implement the intake form for clients to submit their information
3. **Review Queue**: Display a list of intakes for reviewers to manage
4. **Detail View**: Show intake details with privileged vs redacted views for sensitive fields (phone, DOB, SSN)
5. **Status Updates**: Allow reviewers to change intake status
6. **Audit Trail**: Record and display all actions taken on intakes

### Privileged vs Redacted Views

- **Privileged View**: Shows all data including sensitive fields
- **Redacted View**: Masks sensitive data (e.g., SSN shows as `***-**-6789`)
- Consider how to determine which view a user should see

## Bonus Ideas

- Filter/search in the review queue
- Pagination for large datasets
- Real-time updates
- Export audit logs

## Available Scripts

- `npm run dev` - Start Next.js development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run db:migrate` - Run Prisma migrations
- `npm run db:seed` - Seed the database
- `npm run db:reset` - Reset database and re-seed

## Time Allocation

Please limit yourself to **4 hours** on this project. We're interested in how you approach problems and prioritize work within time constraints, not just completion.

**Important:**

- **Track your time**: Note when you start and stop working
- **Commit frequently**: Make regular git commits as you work. This helps us understand your development process
- **Include in your submission**:
  - Total time spent (e.g., "Time spent: 3.5 hours")
  - What you prioritized and why
  - What you would improve with more time

We value quality decision-making over feature completion.

## AI Disclaimer

You are welcome to use AI tools (e.g., GitHub Copilot, ChatGPT, Claude) to assist with this challenge. However, you are fully responsible for all code submitted. We will evaluate the quality, architecture, and implementation of your solution regardless of how it was created. Make sure you understand and can explain any code you submit.

## Submission

Once you've completed the challenge, please commit your changes, push them to your own forked GitHub repository, and share the link with us. Alternatively, emailing a zip file of the repository is acceptable.

## FAQs

**Q: Can I modify the Prisma schema?**
A: Yes! Feel free to modify the schema to better suit your approach. Note, once you modify the schema file you'll have to issue a migration via `npx prisma migrate dev` and restart your server.

**Q: Can I add additional libraries?**
A: Yes, but keep in mind the time constraint. The existing setup should be sufficient for the core requirements.

**Q: How should I handle authentication?**
A: For simplicity, you can use a basic approach (e.g., credentials). Full authentication is a bonus.

We wish you the best of luck and look forward to reviewing your solution!
