/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ettore Ciarcia",
  title: "Hi all, I'm Ettore",
  subTitle: emoji(
    "A young Cloud Engineer currently working at Epsilon 🚀 Anime and TV seried addicted 📺 The only trips I take are mental ones 🛋️ "
  ),
  resumeLink:
    "https://my-certification-ciarcia.s3.eu-west-1.amazonaws.com/EttoreCiarcia.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ettoreciarcia",
  linkedin: "https://www.linkedin.com/in/ettoreciarcia/",
  gmail: "ettoreciarcia.tech@gmail.com",
  medium: "https://medium.com/@ettoreciarcia",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "" ,
  skills: [
    emoji("❤️ I am focused on Kubernetes and Cloud technologies"
    ),
    emoji("💻 Should I pay for an operating system? Wait, I'm writing this line using my Mac "),
    emoji(
      "⚡ Automating stuff gives me a weird sense of pleasure"
    ),
    emoji("😭 PS: Yeah, I know. The site where I got the icons did not have the Terraform one")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Networking",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "RaspberryPi",
      fontAwesomeClassname: "fab fa-raspberry-pi"
    },
    {
      skillName: "ELK Stack",
      fontAwesomeClassname: "fas fa-chart-pie"
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Ubuntu",
      fontAwesomeClassname: "fab fa-ubuntu"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Windows Server",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "CyberHackademy",
      logo: require("./assets/images/accenture.png"),
      subHeader: "Partnership between Federico II & Accenture",
      duration: "May 2021 - January 2022",
      desc: "I was among the 30 students chosen for the second edition of the CyberHackademy.",
      descBullets: [
        "Cloud-based architectures, IoT ecosystems and ethical hacking.Acquisition of basic skills for the design of effective cybersecurity solutions",
        "Final project: Design and implementation of an AWS Cloud-based active deception infrastructure for the simulation of a dynamic vulnerable environment and the collection of information relating to potential attackers"
      ]
    },
    {
      schoolName: "University of Naples Federico II",
      logo: require("./assets/images/FedericoII.png"),
      subHeader: "BE Computer Engineering",
      duration: "September 2015 - ongoing",
      desc: "Mathematics, physics, dynamic systems, algorithms, operating systems, programming, microcontrollers, databases, networks",
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "System Administrator",
      company: "CSC Informatica",
      companylogo: require("./assets/images/cscinformatica.png"),
      date: "May 2019 – Dec 2020",
      desc: "Management of the IT system of a clinic and several companies. Network troubleshooting, experience with Windows and Linux Server. User management and related privileges within Active Directory. Firewall installation and configuration. Backup management with NASTechnologies involved: Zyxel, QNAP, Windows Server, Windows Client, Debian",
      
      //descBullets: [
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //]
    },
    {
      role: "Junior Cloud Engineer",
      company: "Cloud Side Company",
      companylogo: require("./assets/images/cloudsidecompany.png"),
      date: "Jan 2021 – Feb 2021",
      desc: "Set up cloud architecture with API, AWS Lambda, Kafka, MongoDB, Nginx and ELK stack to map road accidents. Data collection using sensors on a RaspberryPi. Technologies involved : ELK Stack, Beats, Unix System, AWS Services(EC2, Lambda), RaspberryPi"
    },
    {
      role: "Cloud Engineer",
      company: "Epsilon",
      companylogo: require("./assets/images/epsilon.png"),
      date: "Nov 2021 – Current",
      desc: "Migration of on-premise applications to the cloud and improvement existing cloud architectures performance. Technologies involved: Kubernetes, Docker, Terraform, Unix System, AWS Services (EKS, ECS, ECR, EC2, VPC, S3, CDN, Pipeline Stack, IAM)"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/honey.png"),
      projectName: "SkyTrap",
      projectDesc: "Design and implementation of an AWS Cloud-based active deception infrastructure to simulate a dynamic vulnerable environment and collect information about attackers",
      footerLink: [
        {
          name: "Check my live presentation",
          url: "https://www.youtube.com/watch?v=DDVL2ZiZcyg&t=1s"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/mysiste.jpg"),
      projectName: "This website",
      projectDesc: "Personal website hosted on s3 bucket with a pipeline. GitHub commit as a trigger for AWS Pipeline and CDN invalidation after each deploy",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/ettoreciarcia/mysite/blob/main/MySite-Architecture.png"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Certifications",

  achievementsCards: [
    {
      title: "AWS Cloud Practicioner",
      subtitle:
        "Basic cloud infrastructure and architectural concepts, basic security and compliance, difference between IaaS, PaaS, SaaS",
      image: require("./assets/images/cloudpracticioner1.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://my-certification-ciarcia.s3.eu-west-1.amazonaws.com/AWS+Certified+Cloud+Practitioner+certificate.pdf"
        },
        /*
        {
          //name: "Award Letter",
          //url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
         // name: "Google Code-in Blog",
          //url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }*/
      ]
    },
    {
      title: "Azure Fundamentals",
      subtitle:
        "Azure services overview, azure pricing and support, technical concepts",
      image: require("./assets/images/azurefundamentals.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://my-certification-ciarcia.s3.eu-west-1.amazonaws.com/Microsoft_Certified_Professional_Certificate_0.pdf"
        }
      ]
    },

    {
      title: "AWS Solution Architect Associate",
      subtitle: "Coming soon ...",
      image: require("./assets/images/solutionarchitect.png"),
      footerLink: [
        {name: "Certification", url: ""},
        /*
        {
          //name: "Final Project",
          url: ""
        } */
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    // {
    //   url: "https://medium.com/@ettoreciarcia",
    //   title: "Test",
    //   description:
    //     "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    // },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 📮"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  //number: "+92-0000000000",
  email_address: "ettoreciarcia.tech@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  openSource,
  blogSection,
  achievementSection,
  talkSection,
  podcastSection,
  bigProjects,
  educationInfo,
  contactInfo,
  twitterDetails
};
