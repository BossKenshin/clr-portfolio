'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type FormState = {
    message: string;
    fields?: Record<string, string>;
    issues?: string[];
};

export async function submitContactForm(prevState: FormState, data: FormData): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactSchema.safeParse(formData);

  if (!parsed.success) {
    const issues = parsed.error.issues.map((issue) => issue.message);
    return {
      message: 'Invalid form data.',
      issues,
      fields: {
          name: formData.name as string,
          email: formData.email as string,
          message: formData.message as string
      }
    };
  }

  console.log('Form submitted successfully:');
  console.log(parsed.data);

  return { message: 'Thank you for your message! I will get back to you soon.' };
}
