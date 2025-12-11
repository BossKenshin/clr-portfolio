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
      keywords: string[];
    }[];
    awards: {
      title: string;
      date: string;
      awarder: string;
      summary: string;
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
      }
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
          "Enhanced and maintained the Sales Information System Web by creating clear, effective, and manageable code utilizing frameworks like CodeIgniter and Laravel, server-side languages like PHP, and databases like SQL.",
          "Developed and improved the Sales Information System by building user-friendly Android applications in Java, optimizing functionality, and ensuring smooth connectivity with server-side systems and databases.",
          "Ensured the security of API endpoints, implementing authentication and authorization mechanisms to protect sensitive data.",
          "Developed desktop applications using C# and the .NET framework, providing intuitive user interfaces and efficient functionality.",
          "Implemented database queries and stored procedures to facilitate efficient data retrieval and manipulation.",
          "Worked with cloud technologies in AWS, including EC2 for hosting, RDS for database management, S3 for storage, Route 53 for DNS management, and VPC for secure networking configurations.",
          "Developed a Flutter/Dart mobile application using BLoC and Provider architecture for a sales information system, integrating real-time communication with backend servers."
        ]
      },
      {
        "company": "Tech - Desk Computer Graphic Services",
        "position": "Software Engineer Intern",
        "location": "Bogo, Cebu, Philippines",
        "startDate": "February 2023",
        "endDate": "July 2023",
        "highlights": [
          "Worked with drive and determination to aid team success against software design and deployment targets",
          "Used extensive practical and theoretical understanding of various coding languages to aid software development mainly using C# .Net, Entity Framework, MVC and LINQ",
          "Identified and suggested software improvements to make it easier to use and eliminate user error."
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
      }
    ],
    "projects": [],
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
        "summary": "Demonstrated proficiency in foundational Java programming concepts, including variables, data types, operators, control flow statements, and basic object-oriented programming principles"
      },
      {
        "title": "Problem Solving(Intermediate) Certificate",
        "date": "Aug 2023",
        "awarder": "HackerRank",
        "summary": "Demonstrated the ability to approach and solve intermediate-level algorithmic challenges using problem-solving techniques and data structures."
      },
      {
        "title": "SQL (Intermediate)",
        "date": "Nov 2025",
        "awarder": "HackerRank",
        "summary": "Demonstrated the ability to build complex queries, optimize data retrieval, and work effectively with relational databases."
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
