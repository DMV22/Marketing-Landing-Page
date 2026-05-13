import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Name is required.'),

  email: z
    .string()
    .trim()
    .min(1, 'Email address is required.')
    .email('Please enter a valid email address.'),

  message: z
    .string()
    .trim()
    .min(1, 'This field is required.')
    .max(500, 'Message must be 500 characters or fewer.'),
});