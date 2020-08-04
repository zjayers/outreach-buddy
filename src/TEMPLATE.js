import moment from "moment";

export const generateFromData = (d) => {
  return `

${renderType(d)}
${d.userName}

Email: ${d.email}
Phone: ${d.phoneNumber}
GitHub: github.com/${d.gitProfile}
Website: ${d.website}

${moment().format("MMMM Do YYYY")}
`;
};

const renderType = (d) => {
  switch (d.type) {
    case "recruiter":
      return recruiter(d);
    case "engineer":
      return engineer(d);
    case "executive":
      return executive(d);
    case "thank you":
      return thankYou(d);
    case "rebuttal":
      return rebuttal(d);
    default:
      return "";
  }
};

const recruiter = (d) => {
  return `
Hello ${d.contactName}!

Hope this email finds you well.

I recently came across the job posting for the ${d.jobTitle} and am very excited about the prospect of exploring this opportunity further. As a full-stack software developer, I enjoy learning new technologies up and down the stack with expertise in ${d.keywords}.

Are you in charge of recruiting for this role? If so, would you be open to a conversation this week or early next to discuss the position, company culture, and how my background could be a fit? Thank you for your time.

Best,
`;
};

const engineer = (d) => {
  return `
Hello ${d.contactName},

My name is ${d.userName} and I am also a software engineer in the ${d.area} area. I came across a job posting for ${d.jobTitle} at ${d.companyName} and, based on my research thus far, I believe ${d.companyName} would be a great fit for my skill-set. I would love to speak with you about your experience at ${d.companyName} and better understand the culture, goals, and workflow of the engineering team. Do you have [15-20] minutes for a phone call in the next week or two? Thank you in advance for your time/consideration. I look forward to our conversation.

Best,
`;
};

const executive = (d) => {
  return `
Hello ${d.contactName},

My name is ${d.userName} and I am extremely interested in your open ${d.jobTitle} role at ${d.companyName}. I am a ${d.keywords} developer with extensive knowledge in your company's tech stack and a passion for tackling difficult projects. I would like to speak with you about your vision, pain points, and the ways I can add the most value to ${d.companyName}. Do you have any availability in the next week or two for a conversation? Thanks for your consideration, I look forward to speaking with you.

Best,
`;
};

const thankYou = (d) => {
  return `
Hello ${d.contactName},

I really appreciate you taking the time to speak with me today about the ${d.jobTitle} role at ${d.companyName}.

I am very interested in moving forward in your process and hope that I’m able to learn more about your needs and how I can make an immediate impact at ${d.companyName}. As I mentioned, my ${d.keywords} expertise will allow me to hit the ground running and become a fantastic asset to your engineering team. Please let me know if I can provide any additional information to help with your decision. 

Thanks again, 
`;
};

const rebuttal = (d) => {
  return `
Hello ${d.contactName},

Thanks for getting back to me. ${d.companyName} is absolutely where I'd like to end up. Perhaps my resume doesn't properly represent my technical skill level or programming knowledge. I'd be grateful for the opportunity to complete a coding challenge to demonstrate my skill set. This way you can assess my code and evaluate if it is at the level you need for the position. Can we set that up?

Either way, I'd love to connect on the phone to discuss potential future opportunities. Are you available at some point early next week?

Thank you for your time and consideration. 

Best regards, 
`;
};
