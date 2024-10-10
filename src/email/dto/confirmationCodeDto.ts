import { z } from 'zod';

export const ConfirmationCodeDto = z.object({
  email: z.string().email(),
  code: z.string().min(6).max(6),
  secretHash: z.string().min(1),
});

export type TypeConfirmationCode = z.infer<typeof ConfirmationCodeDto>;
