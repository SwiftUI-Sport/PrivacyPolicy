// export const policyData = [
//   {
//     id: "introduction",
//     title: "1. Introduction",
//     content: "Welcome to our Privacy Policy. This policy outlines how we collect, use, and protect your personal information when you use our services. We are committed to safeguarding your privacy and ensuring that your personal data is handled with care and in accordance with applicable data protection laws."
//   },
//   {
//     id: "information-we-collect",
//     title: "2. Information We Collect",
//     content: "We may collect various types of information, including information you provide directly to us, information collected automatically through your use of our services, and information from third-party sources. This includes personal identifiers, contact details, and usage data."
//   },
//   {
//     id: "how-we-use-your-information",
//     title: "3. How We Use Your Information",
//     content: "Your information is used to provide and improve our services, to communicate with you, for security and fraud prevention, and to comply with legal obligations. We do not sell your personal information to third parties."
//   },
//   {
//     id: "data-sharing-disclosure",
//     title: "4. Data Sharing and Disclosure",
//     content: "We may share your information in limited circumstances such as with trusted service providers, when required by law, in case of business transfers, or with your explicit consent. All third parties are bound by strict confidentiality agreements."
//   },
//   {
//     id: "data-security",
//     title: "5. Data Security",
//     content: "We implement robust security measures including encryption, access controls, regular security audits, and secure infrastructure. While we strive to protect your information, no security system is 100% secure."
//   },
//   {
//     id: "user-rights-choices",
//     title: "6. Your Rights and Choices",
//     content: "You have several rights regarding your personal information including the right to access, correct, delete, and port your data. You can also opt-out of marketing communications. Contact us to exercise these rights."
//   },
//   {
//     id: "cookies-tracking",
//     title: "7. Cookies and Tracking Technologies",
//     content: "We use cookies, local storage, analytics tools, and other tracking technologies to enhance your experience, understand usage patterns, and maintain app functionality. You can manage these preferences in your browser or app settings."
//   },
//   {
//     id: "children-privacy",
//     title: "8. Children's Privacy",
//     content: "Our service is not intended for children under 13. We do not knowingly collect information from children under 13. If we discover such information, we will delete it immediately. Users aged 13-18 should have parental consent."
//   },
//   {
//     id: "international-transfers",
//     title: "9. International Data Transfers",
//     content: "Your data may be transferred to and processed in countries other than your own. We ensure adequate protection through legal frameworks like Standard Contractual Clauses and adequacy decisions."
//   },
//   {
//     id: "data-retention",
//     title: "10. Data Retention",
//     content: "We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by law. Retention periods vary based on the type of information and legal requirements."
//   },
//   {
//     id: "third-party-services",
//     title: "11. Third-Party Services",
//     content: "Our app may contain links to third-party websites or integrate with third-party services. We are not responsible for their privacy practices. Please review their privacy policies before providing any information."
//   },
//   {
//     id: "biometric-data",
//     title: "12. Biometric Data and Health Information",
//     content: "If you choose to use biometric features or health tracking, we collect and process this sensitive data with extra care. This information is encrypted and stored securely, and you can delete it at any time."
//   },
//   {
//     id: "marketing-communications",
//     title: "13. Marketing and Communications",
//     content: "We may send you promotional emails, push notifications, or in-app messages about our services. You can opt-out at any time through app settings, email unsubscribe links, or by contacting us directly."
//   },
//   {
//     id: "legal-basis-processing",
//     title: "14. Legal Basis for Processing",
//     content: "We process your data based on various legal grounds including your consent, contract performance, legitimate interests, and legal obligations. You have the right to object to processing based on legitimate interests."
//   },
//   {
//     id: "automated-decision-making",
//     title: "15. Automated Decision Making",
//     content: "We may use automated systems to analyze your data and provide personalized recommendations. You have the right to request human review of automated decisions that significantly affect you."
//   },
//   {
//     id: "privacy-by-design",
//     title: "16. Privacy by Design",
//     content: "We incorporate privacy considerations into our product development process. We implement data minimization, purpose limitation, and privacy-enhancing technologies to protect your information from the ground up."
//   },
//   {
//     id: "incident-response",
//     title: "17. Data Breach Response",
//     content: "In the event of a data breach, we have established procedures to assess, contain, and respond to incidents. We will notify affected users and relevant authorities as required by applicable laws."
//   },
//   {
//     id: "policy-changes",
//     title: "18. Changes to This Policy",
//     content: "We may update this Privacy Policy from time to time. We will notify you of significant changes via email or app notification. Changes become effective 30 days after notification. Continued use constitutes acceptance of the updated policy."
//   },
//   {
//     id: "contact-information",
//     title: "19. Contact Information",
//     content: "If you have questions about this Privacy Policy or our data practices, contact us at privacy@runday.app, by phone at +1 (555) 123-4567, or by mail at Runday Privacy Team, 123 Tech Street, Innovation City, IC 12345. We typically respond within 3-5 business days."
//   }
// ];

export const policyData = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: `
Welcome to Runday’s Privacy Policy. This document explains what data we collect, why we collect it, and how we use and store it when you run with Runday. We’re committed to protecting your personal information and respecting your privacy.
    `.trim(),
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    content: `
• Running Metrics  
  – Distance, Duration, Pace, Calories Burned  
  Used to show your daily workout summary and progress.

• Training Stress Metrics  
  – TRIMP (Training Impulse): a score that multiplies the minutes you spend in each heart‐rate zone by that zone’s intensity weight, quantifying workout stress.  
  – ATL (Acute Training Load): a short‐term (7‑day) moving average of your daily TRIMP, indicating recent fatigue.  
  – CTL (Chronic Training Load): a long‐term (42‑day) moving average of your daily TRIMP, indicating overall fitness.  
  – TSB (Training Stress Balance): CTL minus ATL, showing your readiness to train (positive = fresh, negative = fatigued).

• Optional HealthKit Data (only if you grant permission)  
  – Steps & Active Energy (calories)
  – Heart Rate Samples (every beat per minute)  
  – Resting Heart Rate & Age  
  – Sleep Analysis  

We use these to power our heart‐rate zone breakdowns, fatigue calculations, and personalized recovery recommendations.  
We do not collect your name, email, location, or share data with third parties for advertising.
    `.trim(),
  },
  {
    id: "how-we-use-your-information",
    title: "3. How We Use Your Information",
    content: `
• Visualize Your Runs: display charts for distance, pace, and calories.  
• Calculate Recovery Needs: use TRIMP, ATL, CTL, and TSB to tell you when to rest or push harder.  
• Heart Rate Zones: show how many minutes you spent in each zone (e.g. Zone 1 = easy, Zone 5 = very hard).  

We do not use your data for advertising, profiling, or sell it to third parties.
    `.trim(),
  },
  {
    id: "data-storage",
    title: "4. Data Storage and Privacy",
    content: `
All data is stored **locally on your device** whenever you use Runday.  
No data is uploaded to external servers.  
If you delete the app, all your data is permanently erased.
    `.trim(),
  },
  {
    id: "health-permissions",
    title: "5. Health Data Usage",
    content: `
If you enable HealthKit permissions, we access only:  
• Heart Rate Samples – to calculate time in each heart‐rate zone.  
• Resting Heart Rate & Age – to compute your heart‐rate reserve (HRR) and set zone boundaries.  
• Steps & Active Energy – for additional activity context.  
• Sleep Analysis – to help gauge recovery.  

This data stays on your device, is used only for the above features, and is never shared externally.
    `.trim(),
  },
  {
    id: "definitions",
    title: "6. Definitions",
    content: `
• Heart‐Rate Zone: a range of beats‑per‑minute (bpm) that corresponds to exercise intensity (Zone 1 = 50–60% of your heart‑rate reserve, up to Zone 5 = 90–100%).  
• Heart‑Rate Reserve (HRR): MaxHR − RestingHR, used to calculate personalized zones.  
• TRIMP: Training Impulse, a single number representing workout stress.  
• ATL / CTL / TSB: metrics that track short‑term fatigue (ATL, 7 days), long‑term fitness (CTL, 42 days), and the difference (TSB).
    `.trim(),
  },
  {
    id: "user-rights",
    title: "7. Your Rights",
    content: `
• You have full control over your data.  
• You can revoke HealthKit permissions at any time via Settings → Privacy → Health → Runday.  
• If you revoke, Runday stops reading new HealthKit data; previously collected local data remains until you delete the app.
    `.trim(),
  },
  {
    id: "contact",
    title: "8. Contact Us",
    content: `
For any questions or concerns about your privacy, please contact us at alianur043@gmail.com.
    `.trim(),
  },
];
