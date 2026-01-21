import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// TODO: Implement intake API endpoints

export async function GET() {
  // TODO: Implement fetching intakes
  
  return NextResponse.json({ message: "TODO: Implement GET /api/intakes" });
}

export async function POST(request: Request) {
  // TODO: Implement creating intakes
  
  return NextResponse.json({ message: "TODO: Implement POST /api/intakes" }, { status: 501 });
}
