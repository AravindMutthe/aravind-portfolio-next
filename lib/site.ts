export const BASE_PATH = "/aravind-portfolio-next";

/** Prefix a public asset path with the site's basePath. */
export const asset = (p: string) => `${BASE_PATH}${p.startsWith("/") ? p : `/${p}`}`;

export const CONTACT = {
  name: "Aravind Mutte",
  email: "mutthe.aravind@gmail.com",
  phoneDisplay: "+91 98851 89951",
  phoneIntl: "+919885189951",
  waNumber: "919885189951",
  linkedin: "https://linkedin.com/in/aravindmutte",
  github: "https://github.com/AravindMutthe",
  location: "Hyderabad, India",
};

export const waLink = (text: string) =>
  `https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent(text)}`;
export const smsLink = (text: string) =>
  `sms:${CONTACT.phoneIntl}?&body=${encodeURIComponent(text)}`;
export const mailLink = (subject: string, body: string) =>
  `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
