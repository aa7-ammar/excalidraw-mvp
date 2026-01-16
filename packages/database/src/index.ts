import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

// 1. Create a standard pg connection pool
const connectionString = process.env.DATABASE_URL;
const pool = new pg.Pool({ connectionString });

// 2. Wrap it in the Prisma adapter
const adapter = new PrismaPg(pool);

// 3. Pass the adapter to the client constructor
export const prismaClient = new PrismaClient({ adapter });