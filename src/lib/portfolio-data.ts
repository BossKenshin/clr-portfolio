export interface PortfolioData {
    selectedTemplate: number;
    headings: {
      work: string;
      skills: string;
      projects: string;
      awards: string;
    };
    basics: {
      name: string;
      email: string;
      phone: string;
      location: {
        address: string;
      };
      githubUrl?: string;
      linkedInUrl?: string;
      resumeUrl?: string;
    };
    education: {
      location: string;
      area: string;
      studyType: string;
      startDate: string;
      gpa: string;
      institution: string;
      endDate: string;
    }[];
    work: {
      location?: string;
      position?: string;
      website?: string;
      startDate?: string;
      endDate?: string;
      highlights: (string | null)[];
      company?: string;
    }[];
    skills: {
      level?: string;
      keywords: (string | null)[];
      name?: string;
    }[];
    projects: {
      name: string;
      description: string;
      url: string;
      githubUrl?: string;
      keywords: string[];
      highlights?: string[];
      hasphotos?: boolean;
      photoFolder?: string;
    }[];
    awards: {
      title: string;
      date: string;
      awarder: string;
      summary: string;
      iframeUrl?: string;
    }[];
    sections: string[];
  }
  
  export const portfolioData: PortfolioData = {
    "selectedTemplate": 1,
    "headings": {
      "work": "Experience",
      "skills": "Skills",
      "projects": "Projects",
      "awards": "Awards & Certificates"
    },
    "basics": {
      "name": "Christian Lawrence Rosales",
      "email": "r.christianlawrence13@gmail.com",
      "phone": "+639502693807",
      "location": {
        "address": "Cebu, Philippines"
      },
      "githubUrl": "https://github.com/BossKenshin",
      "linkedInUrl": "https://www.linkedin.com/",
      "resumeUrl": "#contact"
    },
    "education": [
      {
        "location": "Bogo City, Cebu",
        "area": "Information Technology",
        "studyType": "Bachelor of Science in",
        "startDate": "June 2019",
        "gpa": "",
        "institution": "Cebu Roosevelt Memorial Colleges",
        "endDate": "July 2023"
      }
    ],
    "work": [
      {
        "company": "Virginia Food Inc.",
        "position": "Application Developer",
        "location": "Cebu, Philippines",
        "startDate": "October 2023",
        "endDate": "Present",
        "highlights": [
          "Maintained and enhanced a Sales Information System web platform using PHP, Laravel, CodeIgniter, and SQL.",
          "Built Android applications in Java to support sales workflows and backend system connectivity.",
          "Secured API endpoints with authentication and authorization controls to protect business data.",
          "Developed C#/.NET desktop applications for internal operations with focused, practical user interfaces.",
          "Created database queries and stored procedures for efficient reporting, retrieval, and data management.",
          "Worked with AWS services including EC2, RDS, S3, Route 53, and VPC for hosting, storage, DNS, and networking.",
          "Developed Flutter/Dart mobile features using BLoC and Provider architecture for real-time sales system workflows."
        ]
      },
      {
        "company": "Tech - Desk Computer Graphic Services",
        "position": "Software Engineer Intern",
        "location": "Bogo, Cebu, Philippines",
        "startDate": "February 2023",
        "endDate": "July 2023",
        "highlights": [
          "Supported software design, development, and deployment tasks as part of the engineering team.",
          "Built and maintained features using C# .NET, Entity Framework, MVC, and LINQ.",
          "Identified usability improvements that reduced user error and made internal tools easier to use."
        ]
      }
    ],
    "skills": [
      {
        "name": "Programming Languages",
        "keywords": [ "Java", "JavaScript", "C#", "PHP", "Dart" ]
      },
      {
        "name": "Frameworks",
        "keywords": [ "Laravel", ".NET", "CodeIgniter", "Bootstrap", "Flutter" ]
      },
      {
        "name": "Relational Database Management System",
        "keywords": [ "MySQL", "MSSQL", "SQLite" ]
      },
      {
        "name": "Tools/Technologies",
        "keywords": [ "AWS (EC2, RDS, S3, Route 53, VPC)", "Git", "jQuery" ]
      },
      {
        "name": "AI Tools",
        "keywords": [ "Codex", "Cursor", "Claude" ]
      }
    ],
    "projects": [
      {
        "name": "Manual Maestro",
        "description": "A browser-based manual builder with live preview and one-click export to PDF or PowerPoint.",
        "url": "https://manual-maestro.vercel.app/",
        "githubUrl": "https://github.com/BossKenshin/studio",
        "keywords": [ "Next.js", "React", "TypeScript", "Tailwind CSS", "PDF Export", "PowerPoint Export" ],
        "hasphotos": false,
        "photoFolder": ""
      },
      {
        "name": "Sales Information System Web",
        "description": "A business web platform for managing sales workflows, reporting, and operational data using PHP, Laravel, CodeIgniter, and SQL.",
        "url": "",
        "keywords": [ "PHP", "Laravel", "CodeIgniter", "SQL", "Bootstrap" ],
        "hasphotos": false,
        "photoFolder": "sales-information-system-web"
      },
      {
        "name": "Sales Information System Mobile App",
        "description": "A mobile application that supports field sales operations with backend connectivity, workflow updates, and real-time business data access.",
        "url": "",
        "keywords": [ "Flutter", "Dart", "Java", "BLoC", "Provider", "REST API" ],
          "hasphotos": false,
        "photoFolder": "sales-information-system-mobile"
      },
      {
        "name": "Realtime Chat Application",
        "description": "A mobile application that supports real-time messaging, user authentication, and push notifications for seamless communication.",
        "url": "",
        "githubUrl": "https://github.com/BossKenshin/chatappflutter.git",
        "keywords": [ "Flutter", "Dart", "BLoC", "Provider", "Pusher", " Supabase" ],
        "highlights": [
          "Built real-time messaging with polished chat flows and stateful UI interactions.",
          "Designed secure authentication and user experience patterns for a modern mobile app."
        ],
        "hasphotos": true,
        "photoFolder": "chatappp-sc"
      },
      {
        "name": "MotoCare Mobile Application",
        "description": "A offline based mobile application that supports motorcycle maintenance tracking, service reminders, and repair history management for motorcycle owners.",
        "url": "",
        "githubUrl": "https://github.com/BossKenshin/moto-care-app.git",
        "keywords": [ "Flutter", "Dart", "BLoC", "Provider", " SQLite" ],
        "highlights": [
          "Created a maintenance-focused app for vehicle tracking, service scheduling, and reminders.",
          "Delivered an organized dashboard experience for service logs, expenses, and routine management."
        ],
        "hasphotos": true,
        "photoFolder": "motocare-sc"
      },
      {
        "name": "Internal Desktop Operations Tools",
        "description": "Desktop applications built for internal teams, focused on practical data entry, retrieval, and business process support.",
        "url": "",
        "keywords": [ "C#", ".NET", "MSSQL", "Stored Procedures" ],
        "hasphotos": false,
        "photoFolder": "internal-desktop-operations-tools"
      },
      {
        "name": "AWS Application Infrastructure",
        "description": "Cloud infrastructure work for hosting, database management, object storage, DNS routing, and secure network configuration.",
        "url": "",
        "keywords": [ "AWS EC2", "AWS RDS", "S3", "Route 53", "VPC" ],
        "hasphotos": false,
        "photoFolder": "aws-application-infrastructure"
      }
    ],
    "awards": [
      {
        "title": "Programmer of the Year",
        "date": "July 2023",
        "awarder": "College of Computer Studies Dept.",
        "summary": "Demonstrated outstanding technical skills, innovative problem-solving, and a significant impact on the field of programming."
      },
      {
        "title": "Outstanding Intern",
        "date": "July 2023",
        "awarder": "Tech - Desk Computer Graphic Services",
        "summary": "Exhibited exceptional dedication, enthusiasm, and skill during internship."
      },
      {
        "title": "Java(Basic) Certificate",
        "date": "July 2023",
        "awarder": "HackerRank",
        "summary": "Demonstrated proficiency in foundational Java programming concepts, including variables, data types, operators, control flow statements, and basic object-oriented programming principles",
        "iframeUrl": "https://www.hackerrank.com/certificates/iframe/ceeba6823ac7"
      },
      {
        "title": "Problem Solving(Intermediate) Certificate",
        "date": "Aug 2023",
        "awarder": "HackerRank",
        "summary": "Demonstrated the ability to approach and solve intermediate-level algorithmic challenges using problem-solving techniques and data structures.",
        "iframeUrl": "https://www.hackerrank.com/certificates/iframe/956c5677d9f7"
      },
      {
        "title": "SQL (Intermediate)",
        "date": "Nov 2025",
        "awarder": "HackerRank",
        "summary": "Demonstrated the ability to build complex queries, optimize data retrieval, and work effectively with relational databases.",
        "iframeUrl": "https://www.hackerrank.com/certificates/iframe/4a528488a787"
      }
    ],
    "sections": [
      "templates",
      "profile",
      "education",
      "work",
      "skills",
      "projects",
      "awards"
    ]
  };
