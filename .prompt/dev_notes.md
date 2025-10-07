# AI Prompt Log
## Myles Sparks
## Github Link: https://github.com/mytsparks/Sparks_Myles_Personal_Website

**Prompt** I want to create a personal website using html and css. The first step is to set up the pages. I want a Homepage (index.html), About Me (about.html), Resume (resume.html), Projects (projects.html), Contact (contact.html). Set these up with proper html formatting. Also set up a css styles file, and connect it to all of the html pages.

**Action** Cursor successfully set up the backbone of the website, I didn't need to make any changes.


**Prompt** Before I get into the content of these pages, I want to do some preparation for formatting and theme. I want the overall color theme and style of my website to be very professional and a neutral yet modern blue/gray theme. Also, ensure consistent fonts, colors, and layout across pages and make the site responsive so it works on desktop and mobile.

**Action** The overall theme looked good, so I kept it. Cursor offered to implement a dark mode toggle, so I prompted it to do that next.


**Prompt** Yes, I would like a dark mode toggle and the implementation of a refined color scale.
Note: Cursor added a theme.js file after this
**Prompt** The dark mode toggle doesn't have memory across the different pages (it switches back and forth based on each page). Make it where the theme is preserved across the site, no matter what page it is changed on.
**Prompt** Please completely remove the theme toggle, I just want the entire site to follow a corporate neutral blue/gray light theme.

**Action** After fighting with Cursor, it wasn't able to properly implement the dark mode toggle, so I had it remove the feature.


**Prompt** Now lets implement the content of each page. Starting with the homepage, this should have a Title, header, and a short introduction about yourself. It should also include Navigation links to other sections (About Me, Resume, Projects, Contact). Since this is the homepage. The doesn't need to be in the nav bar, it should actually be in a visually-pleasing format in the center of the page below the intro, with short descriptions about each.
**Prompt** Next, the about me page. This should include a detailed biography: background, interests, and goals. Also, a photo of myself which I have stored in the /images subdirectory.For my biography, here is my linkedin profile: [Text from my LinkedIn] Please draw from this to write the website portions.
**Prompt** For the resume page, embed my resume from the files folder as an embedded pdf that is displayed on the webpage, with a download button below.
**Prompt** Now I need to create the projects page. I want to showcase two projects. Include descriptions, screenshots/images, and links to live demos or repositories. The first project is a functional prototype of a student privacy dashboard. Also write a description of the project. The two images are Dashboard_1 and Dashboard_2, format these to have a border or something so they arent just pasted on the page. This is the link, but make it a button that say Dashboard Demo: https://2767aa172f5f482e8e498017991b4fe9-main.projects.builder.my/ The second project is an html webpage about a racing events company. Also write a description of the project. The two images are FCRE1 and FCRE2, format these to have a border or something so they arent just pasted on the page. This is the link, make it a button that says FCRE Webpage: https://mytspark.pages.iu.edu/FCRE3/ 
**Prompt** Next, create the contact page. Provide my contact info (email, LinkedIn, GitHub). Then, have a centered form on the contact.html page. - Fields: - First Name (required) - Last Name (required) - Email Address (required, valid format) - Password (required, min 8 characters) - Confirm Password (required, must match Password) - Use attributes: required, type, pattern,
minlength. - Show clear error messages (using HTML or minimal JavaScript). - Redirect to a
Thank You page (thankyou.html) after submission. - Accessibility requirement: All inputs
must have labels connected with for and id. Add alt text for any images.

**Action** Through these five prompts, Cursor was able to properly implement the content of the website. It kept consistent theme across all pages and properly presented the links and content I fed it. It also handled the form creation precisely, so overall I kept these changes.


**Prompt** I want to make two final changes. First on the contact form, there should be two new fields: 1. Reason for contact 2. A text box for the message. I also want to update the overall theme of the website. As of right now it is a very plain and white website. Introduce more of the color blue across headers, footers, and wherever is fit, ensuring the overall site looks very professional. Please include gradients and shapes where you see fit, but keep it streamlined.

**Action** Cursor did update the form properly, but the theming still wasn't up to expectations, so I prompted it further.

**Prompt** The gradient is good, but could you add more color to the individual elements within the web pages (buttons, forms, etc.)

**Action** Cursor didn't get it quite right, so I just editted the css myself a little.

## Reflection

Throughout this series of prompts, I learned a lot about the balance between automation and creative control when building a website. Using Cursor helped me quickly establish the structure and foundation for my personal site, but I realized that achieving the exact aesthetic I wanted still required a personal touch. The process of refining the color scheme, experimenting with dark mode, and adjusting layouts taught me how design consistency and usability go hand in hand. While Cursor handled most technical tasks smoothly—like linking pages, formatting content, and building forms—I found that fine-tuning the styling and responsiveness demanded my own attention to detail. Overall, the experience made me more comfortable working with HTML, CSS, and page structure while reinforcing that effective web design is about iteration and precision. By the end, I had a professional, cohesive site that actually reflected my style and goals.
