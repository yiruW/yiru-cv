const work = [
    {key : 0, title: "Full Stack Developer", 
    company: "CI technologies", duration: "2022.1 - 2022.4",
    skills: "Java, JavaScript, HTML, CSS, mySQL, Spring Boot, Vue, Amazon Saas"},
    {key : 1, title: "Software Engineer Trainee",
    company: "China Unicom", duration: "2021.1 - 2021.4",
    skills: "Java, React, Photoshop, Adobe illustrator"},
    {key : 2, title: "Software Engineer", 
    company: "Neusoft", duration: "2020.5 - 2020.8",
    skills: "Java, Spring Boot, HTMl, CSS"},
    {key : 3, title: "QA Engineer", 
    company: "DarkMatter", duration: "2019.9 - 2019.12",
    skills: "Jira, Jenkins, Java, Xcode"},
    {key : 4, title: "Software Engineer", 
    company: "Neusoft", duration: "2019.1 - 2019.4",
    skills: "Java, Spring Boot, mySQL"},
]

function brief(){
    return "Skilled in Java, JavaScript, SpringBoot, Vue, React. Worked as web developer for 3 co-op terms. Love to learn new staff and make contributions :)"; 
}
function education(){
    return ([
        {key: 0, field: "Android Development", subline: "Online Course", duration: "2022-present", details: "Java, Permanent Data Storage, Kotlin"},
        {key: 1, field: "Distributed Computing", subline: "", duration: "2022-present", details: "Hadoop, Spark, ZooKeeper, Kafka, Thrift"},
        {key: 2, field: "Microservices", subline: "Online Course", duration: "2022-present", details: "Spring Cloud, RESTful web services, Kubernetes, Docker"},
        {key: 3, field: "Operation System", subline: "", duration: "2021", details: "C++, memory allocation, mode conversion"},
        {key: 4, field: "Web Design", subline: "Online Course", duration: "2021", details: "Figma, Photoshop, Adobe illustrator"},
        {key: 5, field: "Web Development", subline: "", duration: "2019-2022", details: "HTML, CSS, JavaScript, Java, Spring Boot, Vue, React"} 
    ])
}
function project(){
    return ([
        {key: 1, field: "This resume website", breif: "", skills:["JavaScript","React"], source:"https://github.com/yiruW/yiru-cv"},
        {key: 2, field: "Microservices Cloud Platform", breif: "", skills:["SpringCloud", "SpringBoot"]},
        {key: 3, field: "Issue tracking webpage", breif: "", skills:["Java", "JavaScript", "SpringBoot", "Vue", "AmazonSaas"]},
        {key: 4, field: "Real-time OS", breif: "This project is a Linux system that handle instructions between kernel mode and user mode. The system will handle system call or any instructions, and execute memory allocations", skills:["C"], source:"https://github.com/yiruW/realTimeOS"},
        {key: 5, field: "Product Website", breif: "", skills:["JavaScript", "HTML", "CSS", "PS"], source:"https://github.com/yiruW/appLeaflet"}
    ])
}
export default work;
export {brief, education, project};