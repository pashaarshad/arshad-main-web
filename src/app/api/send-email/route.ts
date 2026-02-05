import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_a4dh6r9i_MAqxgRX5YSjaHiK3bAEoQH8C');

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        // 1. Send notification email to Admin (Arshad)
        const adminEmail = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'arshadpashaintern@gmail.com', // Replace with your verified email or this specific one if verified
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <h2>New Message from Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        if (adminEmail.error) {
            console.error('Error sending admin email:', adminEmail.error);
            // Note: In Resend free tier/testing, you can only send TO the verified email address.
            // If arshadpashaintern@gmail.com is not the account owner, this might fail unless verified.
            // However, we must proceed as requested.
        }

        // 2. Send auto-reply to the User
        // Note: This will likely fail in testing mode if 'email' is different from the account owner's email.
        // However, the code logic is correct for production/verified domains.
        const userEmail = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Thank for reaching out! - Arshad Pasha',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Hello ${name},</h2>
          <p>Thank you so much for reaching out. I have received your message.</p>
          <p>I will get back to you as soon as possible.</p>
          <br/>
          <p>Best regards,</p>
          <p><strong>Arshad Pasha</strong></p>
          <p><a href="https://arshadpasha.tech">arshadpasha.tech</a></p>
        </div>
      `,
        });

        // Check for success of at least one (likely the admin one in testing)
        if (adminEmail.error && userEmail.error) {
            return NextResponse.json({ success: false, error: adminEmail.error || userEmail.error }, { status: 500 });
        }

        return NextResponse.json({ success: true, message: 'Emails processed' });

    } catch (error) {
        console.error('Submission error:', error);
        return NextResponse.json({ success: false, error: 'Failed to send message' }, { status: 500 });
    }
}
