import { z } from "zod";

export const verifySchema = z.object({
  code: z.string().length(6, "verificationn  must b 6 digit "),
});
