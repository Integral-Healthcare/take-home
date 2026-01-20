import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// TODO: Implement single intake API endpoints
//
// GET /api/intakes/[id]
// - Return a single intake by ID
// - Include related data (submittedBy, reviewer, auditLogs)
// - Consider privileged vs redacted view based on query param or user role
// - Create audit log entry for viewing
//
// PATCH /api/intakes/[id]
// - Update intake status
// - Assign reviewer
// - Create audit log entry for changes
//
// DELETE /api/intakes/[id]
// - Delete an intake (if allowed)
// - Create audit log entry for deletion

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  const { id } = await params;
  
  // TODO: Implement fetching single intake
  // Example:
  // const intake = await prisma.intake.findUnique({
  //   where: { id },
  //   include: { submittedBy: true, reviewer: true, auditLogs: true },
  // });
  // if (!intake) return NextResponse.json({ error: "Not found" }, { status: 404 });
  // return NextResponse.json(intake);
  
  return NextResponse.json({ message: `TODO: Implement GET /api/intakes/${id}` });
}

export async function PATCH(request: Request, { params }: RouteParams) {
  const { id } = await params;
  
  // TODO: Implement updating intake
  // Example:
  // const body = await request.json();
  // const intake = await prisma.intake.update({ where: { id }, data: { ... } });
  // await prisma.auditLog.create({ data: { action: "STATUS_CHANGED", ... } });
  // return NextResponse.json(intake);
  
  return NextResponse.json({ message: `TODO: Implement PATCH /api/intakes/${id}` }, { status: 501 });
}
