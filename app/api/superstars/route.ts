import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const DEFAULT_OFFSET = 0;
const DEFAULT_LIMIT = 10;

export async function GET(req: NextRequest) {
  return searchItems(req);
}

const searchItems = async (req: NextRequest) => {
  const limit = req.nextUrl.searchParams.get("limit");
  const offset = req.nextUrl.searchParams.get("offset");
  const search = req.nextUrl.searchParams.get("search");
  const type = req.nextUrl.searchParams.get("type");

  try {
    let list: any = [];
    let total: Number = 0;

    if (search) {
      list = await prisma.superstars.findMany({
        skip: Number(offset) || DEFAULT_OFFSET,
        take: Number(limit) || DEFAULT_LIMIT,
        where: {
          name: {
            contains: `${search}`,
            mode: "insensitive",
          },
        },
        select: {
          id: true,
          name: true,
          image: true,
        },
        orderBy: {
          name: "asc",
        },
        distinct: ["name"],
      });
      total = await prisma.superstars.count({
        where: {
          name: {
            contains: `${search}`,
            mode: "insensitive",
          },
        },
      });
    } else if (type) {
      list = await prisma.superstars.findMany({
        skip: Number(offset) || DEFAULT_OFFSET,
        take: Number(limit) || DEFAULT_LIMIT,
        where: {
          agent: {
            equals: type,
            mode: "insensitive",
          },
        },
        select: {
          id: true,
          name: true,
          image: true,
        },
        orderBy: {
          name: "asc",
        },
      });
      total = await prisma.superstars.count({
        where: {
          name: {
            contains: `${search}`,
            mode: "insensitive",
          },
        },
      });
    } else {
      list = await prisma.superstars.findMany({
        skip: Number(offset) || DEFAULT_OFFSET,
        take: Number(limit) || DEFAULT_LIMIT,
        select: {
          id: true,
          name: true,
          image: true,
        },
        orderBy: {
          name: "asc",
        },
      });
      total = await prisma.superstars.count();
    }
    let payload = { list, total };

    return NextResponse.json(payload, {
      status: 200,
    });
  } catch (e: unknown) {
    return NextResponse.json(
      {
        error: `An error occurred while processing your request ${e}`,
      },
      {
        status: 500,
      }
    );
  } finally {
    await prisma.$disconnect();
  }
};
