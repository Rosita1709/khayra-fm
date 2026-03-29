import 'dotenv/config';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export async function envoyerEmail(nom, email, sujet, message) {
  await transporter.sendMail({
    from: `"Khayra FM" <${process.env.SMTP_USER}>`,
    to: process.env.EMAIL_RECEPTION,
    replyTo: email,
    subject: `[KFM] ${sujet} — ${nom}`,
    html: `
      <!DOCTYPE html>
      <html>
        <body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td align="center" style="padding:40px 0;">
                <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background:#0f172a;padding:32px 40px;">
                      <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:1px;">KHAYRA FM</h1>
                      <p style="margin:4px 0 0;color:#94a3b8;font-size:13px;">Nouveau message reçu via le site</p>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="padding:40px;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding:12px 16px;background:#f8fafc;border-radius:8px;border-left:4px solid #3b82f6;margin-bottom:12px;">
                            <p style="margin:0;font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:1px;">Nom</p>
                            <p style="margin:4px 0 0;font-size:16px;color:#0f172a;font-weight:600;">${nom}</p>
                          </td>
                        </tr>
                        <tr><td style="height:12px;"></td></tr>
                        <tr>
                          <td style="padding:12px 16px;background:#f8fafc;border-radius:8px;border-left:4px solid #3b82f6;">
                            <p style="margin:0;font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:1px;">Email</p>
                            <p style="margin:4px 0 0;font-size:16px;color:#0f172a;font-weight:600;">${email}</p>
                          </td>
                        </tr>
                        <tr><td style="height:12px;"></td></tr>
                        <tr>
                          <td style="padding:12px 16px;background:#f8fafc;border-radius:8px;border-left:4px solid #3b82f6;">
                            <p style="margin:0;font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:1px;">Sujet</p>
                            <p style="margin:4px 0 0;font-size:16px;color:#0f172a;font-weight:600;">${sujet}</p>
                          </td>
                        </tr>
                        <tr><td style="height:12px;"></td></tr>
                        <tr>
                          <td style="padding:16px;background:#f8fafc;border-radius:8px;border-left:4px solid #3b82f6;">
                            <p style="margin:0;font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:1px;">Message</p>
                            <p style="margin:8px 0 0;font-size:15px;color:#334155;line-height:1.7;">${message}</p>
                          </td>
                        </tr>
                      </table>

                      <!-- CTA -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
                        <tr>
                          <td align="center">
                            <a href="mailto:${email}" style="display:inline-block;background:#3b82f6;color:#ffffff;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;">
                              Répondre à ${nom}
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background:#f8fafc;padding:20px 40px;border-top:1px solid #e2e8f0;">
                      <p style="margin:0;font-size:12px;color:#94a3b8;text-align:center;">
                        © ${new Date().getFullYear()} Khayra FM — Facilities Management | Abu Dhabi, UAE
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `
  });
}