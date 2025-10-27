import { enhancedPrisma } from '@/lib/prisma-client';
import { NextResponse } from 'next/server';

/**
 * Warm up the Prisma connection pool and Data Proxy
 * Called by Vercel cron job every 5 minutes
 */
export async function GET() {
  try {
    // Simple query to keep connection warm
    await enhancedPrisma.safeTransaction(
      async (prisma) => {
        await prisma.contactForm.count();
      },
      'connection-warmup'
    );
    
    return NextResponse.json({ status: 'ok', message: 'Connection pool warmed up' });
  } catch (error) {
    console.error('Warmup failed:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to warm up connection' },
      { status: 500 }
    );
  }
}

// Disable caching for this route
export const dynamic = 'force-dynamic';