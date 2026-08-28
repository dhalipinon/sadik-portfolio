import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address"),
  message: z.string().trim().min(10, "Message needs a bit more detail").max(2000, "Message is too long"),
  // Anti-spam fields — not shown to real users, checked separately in the
  // route handler rather than encoded as shape constraints here.
  company: z.string().optional(),
  renderedAt: z.number(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
