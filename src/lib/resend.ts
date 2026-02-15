"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailProps {
  name: string;
  userEmail: string;
  message: string;
}

export const sendEmail = async (props: EmailProps) => {
  try {
    const { name, userEmail, message } = props;

    // 1. Input Validation
    if (!userEmail || !message || !name) {
      return {
        success: false,
        error: "Name, email, and message are required.",
      };
    }

    // 2. Prepare Email Objects

    // Email A: Notification to You (Admin)
    const adminEmail = resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Must be a verified domain for production
      to: ["nikhilsaiankilla@gmail.com"],
      subject: `New Message from ${name} (Portfolio)`,
      html: `
                <div style="font-family: sans-serif; font-size: 16px; color: #333;">
                    <h2>New Portfolio Message</h2>
                    <p><strong>From:</strong> ${name} (<a href="mailto:${userEmail}">${userEmail}</a>)</p>
                    <hr style="border: 1px solid #eee; margin: 20px 0;" />
                    <p style="white-space: pre-wrap;">${message}</p>
                </div>
            `,
    });

    // Email B: Confirmation to User
    const userConfirmationEmail = resend.emails.send({
      from: "Nikhil <onboarding@resend.dev>", // Must be a verified domain for production
      to: [userEmail],
      subject: "I got your message! 🚀",
      html: `
                <div style="font-family: sans-serif; font-size: 16px; color: #333; max-width: 600px; margin: 0 auto;">
                    <h2>Hi ${name},</h2>
                    <p>Thanks for reaching out! This is an automated message to let you know I've received your inquiry.</p>
                    <p>I'll review it and get back to you as soon as possible.</p>
                    <br />
                    <p>Best regards,</p>
                    <p><strong>Nikhil Sai Ankilla</strong></p>
                    <hr style="border: 1px solid #eee; margin: 20px 0;" />
                    <p style="font-size: 14px; color: #666;">Your message copy:</p>
                    <p style="font-size: 14px; color: #666; font-style: italic; background: #f4f4f4; padding: 10px; border-radius: 4px;">
                        "${message}"
                    </p>
                    <p><a href="mailto:nikhilsaiankilla@gmail.com">nikhilsaiankilla@gmail.com</a></p>
                </div>
            `,
    });

    // 3. Send both in parallel
    const [adminResponse, userResponse] = await Promise.all([
      adminEmail,
      userConfirmationEmail,
    ]);

    // 4. Check for critical errors (Admin email is priority)
    if (adminResponse.error) {
      console.error("Resend Admin API Error:", adminResponse.error);
      return { success: false, error: "Failed to send message to admin." };
    }

    // Optional: Log if user email failed, but don't stop the success flow
    if (userResponse.error) {
      console.warn("Resend User API Error:", userResponse.error);
    }

    return { success: true, data: adminResponse.data };
  } catch (error: unknown) {
    console.error("Server Error:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Something went wrong while sending the email.",
    };
  }
};
