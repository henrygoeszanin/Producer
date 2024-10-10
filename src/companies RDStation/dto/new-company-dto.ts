import { z } from 'zod';

export const NewCompanyDto = z.object({
  name: z.string().min(1),
  segment: z.string().min(1),
  document: z.string().min(1),
  plan: z.number(),
  ownerId: z.string().min(1),
});

export type TypeNewCompanyDto = z.infer<typeof NewCompanyDto>;
