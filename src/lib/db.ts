import { PrismaPg } from "@prisma/adapter-pg"

import { env } from "@/lib/env/server"
import { PrismaClient } from "../prisma/generated/client"

const pool = new PrismaPg({ connectionString: env.DATABASE_URL })
const prisma = new PrismaClient({ adapter: pool })

const globalForPrisma = globalThis as unknown as { prisma: typeof prisma }

if (env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma
}

export { prisma }
