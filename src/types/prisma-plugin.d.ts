declare module '@prisma/nextjs-monorepo-workaround-plugin' {
  // Minimal typings for the PrismaPlugin used in next.config.ts
  export class PrismaPlugin {
    constructor(...args: unknown[]);
    apply(...args: unknown[]): void;
  }
  export default PrismaPlugin;
}
