import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// TODO: Implement user API endpoints
//
// GET /api/users
// - Return all users (for assignment dropdowns, etc.)
// - Consider filtering by role query parameter
//
// Note: For this challenge, authentication is simplified.
// In a real application, you would implement proper auth.

export async function GET() {
  // TODO: Implement fetching users
  // Example:
  // const users = await prisma.user.findMany({
  //   select: { id: true, email: true, name: true, role: true, organization: true },
  // });
  // return NextResponse.json(users);
  
  return NextResponse.json({ message: "TODO: Implement GET /api/users" });
}
