import { Resend } from "resend";

export async function onRequestPost(context: any) {
  try {
    const { name, email, message } = await context.request.json();

    const resend = new Resend(
      context.env.RESEND_API_KEY
    );

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "phailinkhodyotha02@gmail.com",
      subject: `New message from ${name}`,
      html: `
        <h2>Portfolio Contact</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    return Response.json({
      success: true,
    });

  } catch (error) {

    return Response.json(
      {
        success:false
      },
      {
        status:500
      }
    );
  }
}