import * as React from "react";

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactEmailTemplate: React.FC<Readonly<ContactEmailTemplateProps>> = ({
  name,
  email,
  subject,
  message,
}) => (
  <div style={{ fontFamily: "sans-serif", padding: "20px", color: "#333" }}>
    <h1 style={{ fontSize: "24px", marginBottom: "20px", color: "#111" }}>New Message from Portfolio</h1>
    <p style={{ margin: "5px 0" }}><strong>Name:</strong> {name}</p>
    <p style={{ margin: "5px 0" }}><strong>Email:</strong> {email}</p>
    <p style={{ margin: "5px 0" }}><strong>Subject:</strong> {subject}</p>
    
    <div style={{ marginTop: "20px", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px", border: "1px solid #eee", whiteSpace: "pre-wrap", lineHeight: "1.5" }}>
      {message}
    </div>
    
    <p style={{ marginTop: "30px", fontSize: "12px", color: "#888" }}>
      This email was generated securely from your portfolio contact form.
    </p>
  </div>
);

export default ContactEmailTemplate;
