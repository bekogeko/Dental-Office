import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const PatientRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ name: z.string(), age: z.number().optional() }))
    .mutation(({ input, ctx: { prisma } }) => {
      const createResponse = prisma.patient.create({
        data: { name: input.name, age: input.age },
      });

      return {
        createResponse,
      };
    }),

  search: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ input, ctx: { prisma } }) => {
      if (!input.name) return [];
      const searchResponse = await prisma.patient.findMany({
        where: {
          name: {
            contains: input.name,
          },
        },
      });

      return searchResponse;
    }),
});
