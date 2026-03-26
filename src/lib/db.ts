import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Only create PrismaClient if DATABASE_URL is available
// This allows the app to run without a database on Vercel
export const db = process.env.DATABASE_URL 
  ? (globalForPrisma.prisma ?? new PrismaClient({
      log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    }))
  : null;

if (process.env.NODE_ENV !== 'production' && db) {
  globalForPrisma.prisma = db as PrismaClient;
}
