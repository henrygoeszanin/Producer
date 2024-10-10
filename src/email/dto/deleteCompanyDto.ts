import { z } from 'zod';

export const sendDeleteCompanyEmailDto = z.object({
  companyId: z.string().uuid(),
  adminEmails: z.array(z.string().email()),
  requestDeletionCreatorName: z.string(),
});

export type TypeSendDeleteCompanyEmailDto = z.infer<
  typeof sendDeleteCompanyEmailDto
>;
