import { createTRPCRouter } from "~/server/api/trpc";
import { StaticProsthesisRouter } from "~/server/api/routers/staticProsthesis";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  StaticProsthesis: StaticProsthesisRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
