const work = [
    {
        key: 0, title: "Software Developer, part time",
        company: "flexJourney", duration: "2022.12 - present",
        skills: "React.js, Node.js, TypeScript, MongoDB, Material-UI",
        details: "Designed and implemented reusable custom components using React, material UI. " + 
        "Developed processes for clean-up and performance improvement that reduced loading time by 21%. " + 
        "Ran automation test using Cypress and Jenkins to monitor, identify, and optimize software performance and reliability. " + 
        "Proposed and optimized the existing workflow and best practices for codebases"
    },
    {
        key: 1, title: "Software Developer, Intern",
        company: "Vidyard", duration: "2022.9 - 2022.12",
        skills: "Ruby on Rails, Vue.js, Ruby, JavaScript, MySQL, GraphQL, microservices, Docker, Kubernetes",
        details: "Maintained and improved video recording microservices software on AWS using Ruby on Rails and Vue. " + 
        "Proposed and eventually introduced graphQL to improve the security and efficiency of the software. " + 
        "Monitored software availability to rescue and end emergency issue in limited time. " + 
        "Implemented new features with 98% tests coverage using RSpec and Jest. " +
        "Liaised with product manager and design team to identify product requirements and ensure timely delivery of projects."
    },
    {
        key : 2, title: "Full Stack Developer, Intern", 
        company: "CI technologies", duration: "2022.1 - 2022.4",
        skills: "Java, JavaScript, HTML, CSS, MySQL, Spring Boot, Vue.js, RESTful, Amazon S3",
        details: "Engineered user-oriented customer management applications, reducing customer service response time by 73% using Vue, Spring Boot, Bootstrap, and DynamoDB. " + 
        "Processed, analysed, and visually presented user data in graphical form on the web. " 
    },
    {
        key : 3, title: "Web Developer, Intern",
        company: "China Unicom", duration: "2021.1 - 2021.4",
        skills: "Spring Boot, React.js, Java, JavaScript, Photoshop, Adobe illustrator",
        details: "Refactored and improved website for optimizing performance, increasing loading speed by 42% using React and Node. " + 
        "Developed dynamic and interactive website that ensured page views and user experience, resulting in increasing in user satisfaction. "
    },
    {
        key : 4, title: "Software Developer, Intern", 
        company: "Neusoft", duration: "2019.1 - 2019.4, 2020.5 - 2020.8",
        skills: "Spring Boot, React.js, Java, JavaScript, HTML, CSS",
        details: "Designed and establish user-friendly websites, including online talk window, resulting in reducing 600k labour expenses per year. " + 
        "Solved 43% of tickets in the issue pool to maintain and introduce new functionalities using Spring boot, React, and PostgreSQL. "
    },
    {
        key : 5, title: "QA Engineer", 
        company: "DarkMatter", duration: "2019.9 - 2019.12",
        skills: "Jira, Jenkins, Java, real-time testing",
        details: "Managed and executed the test process, analyzed system requirements specifications, and created more than 40 appropriate test plans and cases. " +
        "Liaised with developers to provide detailed processes and reproduce the issue. "
    },
]

function brief(){
    return "Skilled in Java, JavaScript, SpringBoot, Vue, React. Worked as software developer for 3 co-op terms. Love to learn new stuff and make contributions :)"; 
}
function education(){
    return ([
        {key: 0, field: "Computer Engineering", subline: "University of Waterloo", duration: "2018-present", details: "Focus on digital systems, microprocessors, computer networks, software engineering, and operating systems."},
        {key: 1, field: "AWS Certified Cloud Practitioner", subline: "Online Course", duration: "Sept 2022-present", details: "EC2, ELB, ASG, RDS, ElastiCache, S3"},
        {key: 4, field: "Web Design", subline: "Online Course", duration: "2021", details: "Figma, Photoshop, Adobe illustrator"},
        {key: 5, field: "Web Development", subline: "", duration: "2019-2022", details: "HTML, CSS, JavaScript, Java, Spring Boot, Vue, React, MySQL, MongoDB"} 
    ])
}
function project(){
    return ([
        {key: 0, field: "This resume webpage", breif: "This webpage is built with React and Bootstrap, finished in May 2022 for applying jobs.", skills:["JavaScript","React"], source:"https://github.com/yiruW/yiru-cv"},
        {key: 1, field: "Image detection", breif: "This project is used to detect emergency vehicle by flashing lights.", skills: ["Python", "OpenCV"], source: "https://github.com/yiruW/flashing-light-detection.git"},
        {key: 2, field: "Issue tracking webpage", breif: "The issue tracking webpage is similar to Jira, but only accept bug reports from customers who subscribe products. Mails will automatically sent to customers if new build is released, and parsed to create new bug tickets when received from users.", skills:["Java", "JavaScript", "SpringBoot", "Vue", "AmazonSaas"]},
        {key: 3, field: "Real-time OS", breif: "This project is a Linux system that handle instructions between kernel mode and user mode. The system will handle system call or any instructions, and execute memory allocations.", skills:["C"], source:"https://github.com/yiruW/realTimeOS"},
        {key: 4, field: "Product Website", breif: "A simple webpage display a product introduction.", skills:["JavaScript", "HTML", "CSS", "PS"], source:"https://github.com/yiruW/appLeaflet"}
    ])
}
export default work;
export {brief, education, project};