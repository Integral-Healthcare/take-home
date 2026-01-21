import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// TODO: Implement single intake API endpoints

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  const { id } = await params;
  
  // TODO: Implement fetching single intake
  
  return NextResponse.json({ message: `TODO: Implement GET /api/intakes/${id}` });
}

export async function PATCH(request: Request, { params }: RouteParams) {
  const { id } = await params;
  
  // TODO: Implement updating intake
  
  return NextResponse.json({ message: `TODO: Implement PATCH /api/intakes/${id}` }, { status: 501 });
}
