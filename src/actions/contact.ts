"use server";

import * as React from "react";
import { Resend } from "resend";
import { z } from "zod";
import ContactEmailTemplate from "@/components/emails/contact-template";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(2, "Subject is required."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type ContactResponse = {
  success?: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
  message?: string;
};

export async function sendContactEmail(formData: FormData): Promise<ContactResponse> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please fix the errors in the form.",
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact Form <hello@manasbhatia.me>",
      to: "manasbhatia724@gmail.com",
      replyTo: email,
      subject: `[Portfolio] New Message from ${name}: ${subject}`,
      react: ContactEmailTemplate({ name, email, subject, message }) as React.ReactElement,
    });

    if (error) {
      console.error("Resend error:", error);
      return { message: "Failed to send email. Please try again later." };
    }

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Server Action error:", error);
    return { message: "An unexpected error occurred. Please try again later." };
  }
}
