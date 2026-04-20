import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma/client";

const adapter = new PrismaPg(process.env.POSTGRES_PRISMA_URL!);
export const prisma = new PrismaClient({ adapter });
