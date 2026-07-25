import { Resend } from "resend";

export default {
  async fetch(request, env, ctx) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };

    // Handle OPTIONS Preflight request
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);

    // Health check endpoint
    if (url.pathname === "/health" && request.method === "GET") {
      return new Response("OK", { status: 200, headers: corsHeaders });
    }

    // Contact API endpoint
    if (url.pathname === "/api/contact" && request.method === "POST") {
      try {
        const body = await request.json();
        const { name, company, email, phone, message } = body;

        if (!name || !email || !message) {
          return new Response(
            JSON.stringify({
              success: false,
              message: "Name, email and message are required",
            }),
            {
              status: 400,
              headers: {
                ...corsHeaders,
                "Content-Type": "application/json",
              },
            }
          );
        }

        const apiKey = env.RESEND_API_KEY;
        if (!apiKey) {
          console.error("RESEND_API_KEY environment variable is missing!");
        }

        const resend = new Resend(apiKey);

        const emailPromise = resend.emails.send({
          from: "Alira Pharmaceuticals <no-reply@inquiry.errorr.in>",
          to: ["akshat99055@gmail.com"],
          cc: ["errorr990551@gmail.com"],
          subject: "New Contact Us Enquiry",
          html: `
            <h2>New Contact Enquiry</h2>
            <p><b>Name:</b> ${name}</p>
            <p><b>Company:</b> ${company || "N/A"}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone || "N/A"}</p>
            <p><b>Message:</b><br/>${message}</p>
          `,
        }).then((res) => console.log("Cloudflare Worker Resend SUCCESS:", res))
        .catch((err) => console.error("Cloudflare Worker Resend ERROR:", err));

        if (ctx && ctx.waitUntil) {
          ctx.waitUntil(emailPromise);
        } else {
          await emailPromise;
        }

        return new Response(
          JSON.stringify({ success: true, message: "Message sent successfully" }),
          {
            status: 200,
            headers: {
              ...corsHeaders,
              "Content-Type": "application/json",
            },
          }
        );
      } catch (err) {
        console.error("Worker Contact Form Error:", err);
        return new Response(
          JSON.stringify({ success: false, message: "Failed to send message" }),
          {
            status: 500,
            headers: {
              ...corsHeaders,
              "Content-Type": "application/json",
            },
          }
        );
      }
    }

    return new Response("Not Found", { status: 404, headers: corsHeaders });
  },
};
