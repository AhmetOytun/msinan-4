import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "Users not found" }, { status: 404 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();
    const newUser = await prisma.user.create({
      data: { name, email, password },
    });
    return NextResponse.json(newUser, { status: 201 });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "User not created" }, { status: 404 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, name, email } = await req.json();
    const updatedUser = await prisma.user.update({
      where: { id },
      data: { name, email },
    });
    return NextResponse.json(updatedUser);
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    await prisma.user.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ message: "User deleted" });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
}
