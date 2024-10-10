import { z } from 'zod';

export const sendInviteEmailDto = z.object({
  companyId: z.string().uuid(),
  emailInvited: z.string().email(),
  companyName: z.string(),
});

export type TypeSendInviteEmailDto = z.infer<typeof sendInviteEmailDto>;
