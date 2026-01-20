import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Clear existing data
  await prisma.auditLog.deleteMany();
  await prisma.intake.deleteMany();
  await prisma.user.deleteMany();

  // Create demo users
  const clientUser = await prisma.user.create({
    data: {
      email: "client@demo.com",
      name: "Demo Client",
      role: "CLIENT",
      organization: "Organization A",
    },
  });

  const reviewerUser = await prisma.user.create({
    data: {
      email: "reviewer@demo.com",
      name: "Demo Reviewer",
      role: "REVIEWER",
      organization: "Integral (Internal)",
    },
  });

  console.log("Created users:");
  console.log(`  - ${clientUser.email} (${clientUser.role}, ${clientUser.organization})`);
  console.log(`  - ${reviewerUser.email} (${reviewerUser.role}, ${reviewerUser.organization})`);

  // Create a sample intake for demonstration
  const sampleIntake = await prisma.intake.create({
    data: {
      clientName: "John Smith",
      clientEmail: "john.smith@example.com",
      clientPhone: "555-123-4567",
      dateOfBirth: "1985-03-15",
      ssn: "123-45-6789",
      description: "Initial intake for healthcare services evaluation",
      notes: "Patient referred by primary care physician",
      status: "PENDING",
      submittedById: clientUser.id,
    },
  });

  // Create an audit log entry for the sample intake
  await prisma.auditLog.create({
    data: {
      action: "CREATED",
      details: JSON.stringify({ status: "PENDING" }),
      userId: clientUser.id,
      intakeId: sampleIntake.id,
    },
  });

  console.log("Created sample intake:");
  console.log(`  - Intake ID: ${sampleIntake.id}`);
  console.log(`  - Status: ${sampleIntake.status}`);
  console.log(`  - Submitted by: ${clientUser.email}`);

  console.log("\nSeeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
