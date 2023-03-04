import { z } from "zod";

import { router, protectedProcedure } from "../../server/trpc/trpc";

export const topicRouter = router({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.book.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),

  create: protectedProcedure
    .input(z.object({ title: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.book.create({
        data: {
          title: input.title,
          userId: ctx.session.user.id,
        },
      });
    }),
});