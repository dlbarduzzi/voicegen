import "dotenv/config"

import { env } from "./src/lib/env/server"
import { defineConfig } from "prisma/config"

export default defineConfig({
  schema: "./src/prisma/schema.prisma",
  migrations: {
    path: "./src/prisma/migrations",
  },
  datasource: {
    url: env.DATABASE_URL,
  },
})
