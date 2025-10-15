import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9\s-]{8,20}$/, { message: "Invalid phone number format" })
    .min(8, { message: "Phone number must be at least 8 characters" })
    .max(20, { message: "Phone number must be less than 20 characters" }),
  company: z
    .string()
    .trim()
    .max(100, { message: "Company name must be less than 100 characters" })
    .optional(),
  service: z
    .string()
    .trim()
    .max(100, { message: "Service must be less than 100 characters" })
    .optional(),
  message: z
    .string()
    .trim()
    .min(1, { message: "Message is required" })
    .max(2000, { message: "Message must be less than 2000 characters" }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
