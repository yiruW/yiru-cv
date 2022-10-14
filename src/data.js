const work = [
    {key : 0, title: "Full Stack Developer", 
    company: "CI technologies", duration: "2022.1 - 2022.4",
    skills: "Java, JavaScript, HTML, CSS, MySQL, Spring Boot, Vue.js, RESTful, Amazon S3"},
    {key : 1, title: "Software Engineer Trainee",
    company: "China Unicom", duration: "2021.1 - 2021.4",
    skills: "Java, JavaScript,  Photoshop, Adobe illustrator"},
    {key : 2, title: "Software Development Engineering", 
    company: "Neusoft", duration: "2020.5 - 2020.8",
    skills: "Java, Spring Boot, HTML, CSS, React"},
    {key : 3, title: "QA Engineer", 
    company: "DarkMatter", duration: "2019.9 - 2019.12",
    skills: "Jira, Jenkins, Java, Xcode"},
    {key : 4, title: "Software Development Engineering", 
    company: "Neusoft", duration: "2019.1 - 2019.4",
    skills: "Java, Spring Boot, mySQL"},
]

function brief(){
    return "Skilled in Java, JavaScript, SpringBoot, Vue, React. Worked as web developer for 3 co-op terms. Love to learn new stuff and make contributions :)"; 
}
function education(){
    return ([
        {key: 0, field: "Kafka Streams", subline: "Online Course", duration: "2022-present", details: "KStream, Ktable, Exactly Once"},
        {key: 1, field: "Distributed Computing", subline: "", duration: "2022-present", details: "Hadoop, Spark, ZooKeeper, Kafka, Thrift"},
        {key: 2, field: "Microservices", subline: "Online Course", duration: "2022-present", details: "Spring Cloud, RESTful web services, Kubernetes, Docker"},
        {key: 3, field: "Operation System", subline: "", duration: "2021", details: "C++, memory allocation, mode conversion"},
        {key: 4, field: "Web Design", subline: "Online Course", duration: "2021", details: "Figma, Photoshop, Adobe illustrator"},
        {key: 5, field: "Web Development", subline: "", duration: "2019-2022", details: "HTML, CSS, JavaScript, Java, Spring Boot, Vue, React, MySQL, MongoDB"} 
    ])
}
function project(){
    return ([
        {key: 0, field: "This resume webpage", breif: "This webpage is built with React and Bootstrap, finished in May 2022 for applying jobs.", skills:["JavaScript","React"], source:"https://github.com/yiruW/yiru-cv"},
        {key: 2, field: "Issue tracking webpage", breif: "The issue tracking webpage is similar to Jira, but only accept bug reports from customers who subscribe products. Mails will automatically sent to customers if new build is released, and parsed to create new bug tickets when received from users.", skills:["Java", "JavaScript", "SpringBoot", "Vue", "AmazonSaas"]},
        {key: 3, field: "Real-time OS", breif: "This project is a Linux system that handle instructions between kernel mode and user mode. The system will handle system call or any instructions, and execute memory allocations.", skills:["C"], source:"https://github.com/yiruW/realTimeOS"},
        {key: 4, field: "Product Website", breif: "A simple webpage display a product introduction.", skills:["JavaScript", "HTML", "CSS", "PS"], source:"https://github.com/yiruW/appLeaflet"}
    ])
}
export default work;
export {brief, education, project};