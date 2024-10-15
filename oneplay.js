// Sample data for the timeline
const timelineData = [
"Dec 2023: Started as an intern at OnePlay, successfully resolved over 100 bugs, which significantly improved the efficiency and performance of the OnePlay Gaming application, leading to enhanced user satisfaction and application reliability.",

"Jan 2024: Completed my first task by developing the user interface for the Game Details Page of the Tizen TV application for OnePlay. This project sharpened my UI design and front-end development skills, ensuring a seamless user experience.",

"Feb 2024: Contributed to the OnePlay CMS application by implementing various modules, including user management and subscription management. My work streamlined operations and enhanced the functionality of the CMS.",

"Mar 2024: Collaborated closely with my mentor to implement the design, architecture, and database schemas for the affiliate portal. My responsibilities included API development, cron job implementation, ORM integration, query optimization, and applying essential security patches, which collectively strengthened the portal's performance and security.",

"Apr 2024: Focused on the UI/UX design of the affiliate portal website, delivering a polished frontend implementation. Successfully achieved the MVP by the end of April 2024, which improved user engagement and experience.",

"May 2024: Developed static pages, including the Special Offer Page, FAQ pages, Terms and Conditions page, and the Deactivate Account feature. This implementation contributed to a more comprehensive and user-friendly application.",

"Jun 2024: Led the implementation of the Night Plans feature, optimizing the server utilization during night hours. This strategic initiative ensured optimal resource allocation and enhanced overall system efficiency.",

"Jul 2024: Executed the frontend design and integration for Onespace, OnePlay's cloud PC offering. This implementation drastically increased user engagement, resulting in all plans being sold out within a single day.",

"Aug 2024 (First Half): Spearheaded the multilingual implementation of the OnePlay site, supporting multiple languages, including Korean, Chinese, Brazilian Portuguese, Spanish, and English. This enhancement expanded accessibility and broadened the user base across various regions.",

"Aug 2024 (Second Half): Revamped the Game Details Page, which serves as the primary entry point to the website. Ensured cross-browser responsiveness and handled multiple messaging scenarios while optimizing styles and code for improved efficiency.",

"Sep 2024 (First Half): Successfully implemented the Partner Service Dropdown feature, enabling users to access the website from various regions globally. This enhancement significantly broadened the reach of OnePlay services, facilitating global partnerships. Additionally, created a non-functional 'coming soon' page for regions where services are not yet available, ensuring users are informed and excited about future offerings.",

"Sep 2024 (Second Half): Developed a new subscription flow by providing API layering across the website to introduce new subscription plans aimed at generating increased business revenue. Integrated top-up functionality, renewal processes, upgrades, messaging, FAQs, and terms and conditions while modifying gameplay flows for different user categories.",
];

function addTimelineItem(content, isLeft) {
  const timeline = document.getElementById('timeline');
  
  // Extract everything before the colon and everything after the colon
  const highlightRegex = /^([^:]+):\s*(.*)$/; // Match everything up to and after the colon
  const highlightedContent = content.replace(highlightRegex, '<span class="highlight-date">$1</span>: <span class="italic-content">$2</span>');

  // Create a new div for the timeline item
  const timelineItem = document.createElement('div');
  timelineItem.classList.add('timeline-item');

  // Create the content div for the timeline item
  const timelineContent = document.createElement('div');
  timelineContent.classList.add('timeline-item-content');
  timelineContent.innerHTML = `<p>${highlightedContent}</p>`;

  // Append the content to the timeline item
  timelineItem.appendChild(timelineContent);
  
  // Append the item to the timeline
  timeline.appendChild(timelineItem);
}

// Add timeline items alternately
timelineData.forEach((event, index) => {
  addTimelineItem(event, index % 2 === 0);
});
