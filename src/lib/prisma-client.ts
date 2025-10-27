import { PrismaClient } from '@prisma/client';
import { headers } from 'next/headers';

type LogLevel = 'INFO' | 'ERROR' | 'WARN' | 'DEBUG';
type PrismaError = Error & { code?: string; meta?: Record<string, unknown> };

// Configure logging
const log = (level: LogLevel, message: string, extra?: Record<string, unknown>) => {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    level,
    message,
    ...(extra ? { extra } : {}),
  };
  
  // In development, pretty print to console
  if (process.env.NODE_ENV === 'development') {
    console.log(JSON.stringify(logEntry, null, 2));
    return;
  }
  
  console.log(JSON.stringify(logEntry));
};

// Singleton pattern for Prisma Client with logging
class PrismaClientSingleton {
  private static instance: PrismaClient;

  public static getInstance(): PrismaClient {
    if (!PrismaClientSingleton.instance) {
      PrismaClientSingleton.instance = new PrismaClient({
        log: [
          { level: 'warn', emit: 'event' },
          { level: 'error', emit: 'event' },
        ],
      });

      // Log all errors
      PrismaClientSingleton.instance.$on('error' as never, (event: { message: string }) => {
        log('ERROR', 'Database Error', { message: event.message });
      });

      // Log all warnings
      PrismaClientSingleton.instance.$on('warn' as never, (event: { message: string }) => {
        log('WARN', 'Database Warning', { message: event.message });
      });
    }
    return PrismaClientSingleton.instance;
  }
}

// Helper to extract request metadata for logging
const getRequestMetadata = async () => {
  try {
    const headersList = await headers();
    return {
      userAgent: headersList.get('user-agent') || undefined,
      referer: headersList.get('referer') || undefined,
      requestId: headersList.get('x-request-id') || undefined,
    };
  } catch {
    return {};
  }
};

// Export an enhanced prisma client instance
const prisma = PrismaClientSingleton.getInstance();

// Wrap Prisma operations with error handling
export const enhancedPrisma = {
  ...prisma,
  // Add custom error handling wrappers for common operations
  async safeTransaction<T>(
    fn: (prisma: PrismaClient) => Promise<T>,
    operationName: string
  ): Promise<T> {
    try {
      const result = await fn(prisma);
      log('INFO', `${operationName} completed successfully`);
      return result;
    } catch (error) {
      const prismaError = error as PrismaError;
      const metadata = await getRequestMetadata();
      
      log('ERROR', `${operationName} failed`, {
        code: prismaError.code,
        message: prismaError.message,
        meta: prismaError.meta,
        requestInfo: metadata,
      });
      
      throw error;
    }
  },
};

export default enhancedPrisma;