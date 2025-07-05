import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Header from "@/components/header"
import Footer from "@/components/footer"
import {
  Clock,
  Users,
  Award,
  BookOpen,
  Star,
  Calendar,
  CheckCircle,
  ArrowLeft,
  Play,
  Download,
  Globe,
} from "lucide-react"

// Mock course data with detailed information
const coursesData = {
  "cloud-computing-aws": {
    id: "cloud-computing-aws",
    title: "Cloud Computing with AWS",
    shortDescription: "Master Amazon Web Services and cloud infrastructure deployment with hands-on projects.",
    fullDescription:
      "This comprehensive course covers everything you need to know about Amazon Web Services (AWS) and cloud computing. You'll learn to design, deploy, and manage scalable cloud infrastructure, work with various AWS services, and implement best practices for security and cost optimization. The course includes hands-on labs, real-world projects, and preparation for AWS certification exams.",
    instructor: {
      name: "Sarah Johnson",
      bio: "Sarah is a certified AWS Solutions Architect with over 8 years of experience in cloud computing. She has helped numerous organizations migrate to the cloud and optimize their infrastructure costs.",
      credentials: "AWS Certified Solutions Architect Professional, AWS Certified DevOps Engineer",
    },
    duration: "12 weeks",
    level: "Intermediate",
    category: "Cloud Computing",
    price: "£899",
    rating: 4.8,
    students: 245,
    startDate: "March 15, 2024",
    format: "Online Live + Self-paced",
    certificate: "AWS Certified Solutions Architect Associate Preparation",
    prerequisites: [
      "Basic understanding of networking",
      "Familiarity with Linux/Windows systems",
      "Basic programming knowledge",
    ],
    learningOutcomes: [
      "Design and deploy scalable AWS infrastructure",
      "Implement security best practices in the cloud",
      "Optimize costs and performance of AWS resources",
      "Prepare for AWS certification exams",
      "Build and manage CI/CD pipelines",
      "Monitor and troubleshoot cloud applications",
    ],
    syllabus: [
      {
        week: 1,
        title: "Introduction to Cloud Computing & AWS Fundamentals",
        topics: ["Cloud computing concepts", "AWS global infrastructure", "IAM basics", "AWS CLI setup"],
      },
      {
        week: 2,
        title: "Compute Services - EC2 & Lambda",
        topics: ["EC2 instances", "Auto Scaling", "Load Balancers", "AWS Lambda functions"],
      },
      {
        week: 3,
        title: "Storage Solutions",
        topics: ["S3 buckets and policies", "EBS volumes", "EFS file systems", "Storage classes"],
      },
      {
        week: 4,
        title: "Database Services",
        topics: ["RDS setup and management", "DynamoDB", "ElastiCache", "Database migration"],
      },
      {
        week: 5,
        title: "Networking & Content Delivery",
        topics: ["VPC configuration", "Subnets and routing", "CloudFront CDN", "Route 53 DNS"],
      },
      {
        week: 6,
        title: "Security & Compliance",
        topics: ["IAM policies and roles", "Security groups", "AWS WAF", "CloudTrail auditing"],
      },
      {
        week: 7,
        title: "Monitoring & Logging",
        topics: ["CloudWatch metrics", "CloudWatch Logs", "AWS X-Ray", "SNS notifications"],
      },
      {
        week: 8,
        title: "DevOps & Automation",
        topics: ["CloudFormation templates", "AWS CodePipeline", "CodeBuild and CodeDeploy"],
      },
      {
        week: 9,
        title: "Containerization",
        topics: ["ECS clusters", "EKS Kubernetes", "Fargate serverless containers", "ECR registry"],
      },
      {
        week: 10,
        title: "Cost Optimization",
        topics: ["Cost Explorer", "Reserved Instances", "Spot Instances", "Cost allocation tags"],
      },
      {
        week: 11,
        title: "Disaster Recovery & Backup",
        topics: ["Multi-region deployment", "AWS Backup", "RTO and RPO planning"],
      },
      {
        week: 12,
        title: "Capstone Project & Certification Prep",
        topics: ["Final project presentation", "AWS exam preparation", "Mock tests", "Career guidance"],
      },
    ],
  },
  "cybersecurity-fundamentals": {
    id: "cybersecurity-fundamentals",
    title: "Cybersecurity Fundamentals",
    shortDescription: "Learn essential cybersecurity principles, threat detection, and security best practices.",
    fullDescription:
      "This foundational course provides comprehensive coverage of cybersecurity principles and practices. Students will learn about various types of cyber threats, security frameworks, risk assessment, and incident response. The course combines theoretical knowledge with practical exercises using industry-standard tools and techniques.",
    instructor: {
      name: "Michael Chen",
      bio: "Michael is a certified cybersecurity professional with 10+ years of experience in information security. He has worked with government agencies and Fortune 500 companies to strengthen their security posture.",
      credentials: "CISSP, CISM, CEH, Security+ Certified",
    },
    duration: "10 weeks",
    level: "Beginner",
    category: "Security",
    price: "£749",
    rating: 4.9,
    students: 189,
    startDate: "March 22, 2024",
    format: "Online Live + Hands-on Labs",
    certificate: "Cybersecurity Fundamentals Certificate",
    prerequisites: ["Basic computer literacy", "Understanding of networking concepts"],
    learningOutcomes: [
      "Identify and assess cybersecurity threats",
      "Implement security controls and best practices",
      "Conduct risk assessments and vulnerability analysis",
      "Develop incident response procedures",
      "Understand compliance frameworks and regulations",
      "Use cybersecurity tools and technologies",
    ],
    syllabus: [
      {
        week: 1,
        title: "Introduction to Cybersecurity",
        topics: ["Cybersecurity landscape", "Types of threats", "CIA triad", "Security frameworks"],
      },
      {
        week: 2,
        title: "Network Security",
        topics: ["Firewalls and IDS/IPS", "VPN technologies", "Network monitoring", "Wireless security"],
      },
      {
        week: 3,
        title: "Endpoint Security",
        topics: ["Antivirus and anti-malware", "Host-based security", "Mobile device security", "Patch management"],
      },
      {
        week: 4,
        title: "Identity and Access Management",
        topics: ["Authentication methods", "Authorization controls", "Single sign-on", "Privileged access management"],
      },
      {
        week: 5,
        title: "Cryptography",
        topics: ["Encryption algorithms", "Digital signatures", "PKI infrastructure", "Key management"],
      },
      {
        week: 6,
        title: "Risk Assessment and Management",
        topics: [
          "Risk identification",
          "Vulnerability assessment",
          "Risk mitigation strategies",
          "Business continuity",
        ],
      },
      {
        week: 7,
        title: "Incident Response",
        topics: [
          "Incident handling procedures",
          "Digital forensics basics",
          "Evidence collection",
          "Recovery planning",
        ],
      },
      {
        week: 8,
        title: "Compliance and Governance",
        topics: ["GDPR and data protection", "ISO 27001", "NIST framework", "Audit procedures"],
      },
      {
        week: 9,
        title: "Emerging Threats and Technologies",
        topics: ["Cloud security", "IoT security", "AI in cybersecurity", "Threat intelligence"],
      },
      {
        week: 10,
        title: "Capstone Project",
        topics: [
          "Security assessment project",
          "Presentation of findings",
          "Career pathways",
          "Certification guidance",
        ],
      },
    ],
  },
  "data-analytics-python": {
    id: "data-analytics-python",
    title: "Data Analytics with Python",
    shortDescription: "Analyze data using Python, pandas, and visualization libraries for business insights.",
    fullDescription:
      "This comprehensive data analytics course teaches you to extract meaningful insights from data using Python. You'll master popular libraries like pandas, NumPy, and matplotlib, learn statistical analysis techniques, and create compelling visualizations. The course includes real-world datasets and business case studies.",
    instructor: {
      name: "Dr. Emily Rodriguez",
      bio: "Dr. Rodriguez holds a PhD in Data Science and has 12 years of experience in analytics across healthcare, finance, and technology sectors. She has published numerous research papers on machine learning and statistical analysis.",
      credentials: "PhD in Data Science, Certified Analytics Professional (CAP)",
    },
    duration: "14 weeks",
    level: "Intermediate",
    category: "Data Science",
    price: "£999",
    rating: 4.7,
    students: 312,
    startDate: "March 8, 2024",
    format: "Online Live + Project-based Learning",
    certificate: "Data Analytics Professional Certificate",
    prerequisites: ["Basic Python programming", "High school mathematics", "Basic statistics knowledge"],
    learningOutcomes: [
      "Perform exploratory data analysis",
      "Clean and preprocess large datasets",
      "Create statistical models and hypothesis tests",
      "Build interactive data visualizations",
      "Apply machine learning algorithms",
      "Present data-driven insights to stakeholders",
    ],
    syllabus: [
      {
        week: 1,
        title: "Python for Data Analysis Setup",
        topics: ["Python environment setup", "Jupyter notebooks", "NumPy fundamentals", "Data types and structures"],
      },
      {
        week: 2,
        title: "Data Manipulation with Pandas",
        topics: ["DataFrames and Series", "Data loading and saving", "Indexing and selection", "Data transformation"],
      },
      {
        week: 3,
        title: "Data Cleaning and Preprocessing",
        topics: ["Handling missing data", "Data validation", "Outlier detection", "Data normalization"],
      },
      {
        week: 4,
        title: "Exploratory Data Analysis",
        topics: ["Descriptive statistics", "Data profiling", "Correlation analysis", "Distribution analysis"],
      },
      {
        week: 5,
        title: "Data Visualization with Matplotlib",
        topics: ["Basic plotting", "Customizing plots", "Multiple subplots", "Saving and exporting"],
      },
      {
        week: 6,
        title: "Advanced Visualization with Seaborn",
        topics: ["Statistical plots", "Categorical data visualization", "Heatmaps", "Pair plots"],
      },
      {
        week: 7,
        title: "Interactive Visualizations",
        topics: ["Plotly basics", "Interactive dashboards", "Web-based visualizations", "Bokeh introduction"],
      },
      {
        week: 8,
        title: "Statistical Analysis",
        topics: ["Hypothesis testing", "T-tests and ANOVA", "Chi-square tests", "Regression analysis"],
      },
      {
        week: 9,
        title: "Time Series Analysis",
        topics: ["Time series data handling", "Trend and seasonality", "Forecasting methods", "ARIMA models"],
      },
      {
        week: 10,
        title: "Introduction to Machine Learning",
        topics: [
          "Supervised vs unsupervised learning",
          "Linear regression",
          "Classification algorithms",
          "Model evaluation",
        ],
      },
      {
        week: 11,
        title: "Advanced Analytics Techniques",
        topics: ["Clustering analysis", "Principal component analysis", "Text analytics", "Sentiment analysis"],
      },
      {
        week: 12,
        title: "Database Integration",
        topics: ["SQL with Python", "Database connections", "ETL processes", "Data warehousing concepts"],
      },
      {
        week: 13,
        title: "Business Intelligence and Reporting",
        topics: ["KPI development", "Dashboard creation", "Automated reporting", "Stakeholder communication"],
      },
      {
        week: 14,
        title: "Capstone Project",
        topics: ["End-to-end analytics project", "Data storytelling", "Presentation skills", "Portfolio development"],
      },
    ],
  },
  "devops-automation": {
    id: "devops-automation",
    title: "DevOps & Automation",
    shortDescription: "Implement CI/CD pipelines, containerization, and infrastructure as code practices.",
    fullDescription:
      "This advanced course covers the complete DevOps lifecycle, from continuous integration and deployment to infrastructure automation and monitoring. Students will work with industry-standard tools like Docker, Kubernetes, Jenkins, and Terraform to build robust, scalable deployment pipelines.",
    instructor: {
      name: "James Wilson",
      bio: "James is a DevOps architect with 15 years of experience in software development and operations. He has led digital transformation initiatives at several multinational corporations and is a certified Kubernetes administrator.",
      credentials: "CKA (Certified Kubernetes Administrator), AWS DevOps Professional, Docker Certified Associate",
    },
    duration: "16 weeks",
    level: "Advanced",
    category: "DevOps",
    price: "£1199",
    rating: 4.8,
    students: 156,
    startDate: "March 1, 2024",
    format: "Online Live + Hands-on Labs",
    certificate: "DevOps Professional Certificate",
    prerequisites: [
      "Linux system administration",
      "Programming experience (any language)",
      "Basic networking knowledge",
      "Version control (Git) experience",
    ],
    learningOutcomes: [
      "Design and implement CI/CD pipelines",
      "Containerize applications with Docker",
      "Orchestrate containers with Kubernetes",
      "Automate infrastructure with Terraform",
      "Implement monitoring and logging solutions",
      "Apply DevOps best practices and methodologies",
    ],
    syllabus: [
      {
        week: 1,
        title: "DevOps Fundamentals and Culture",
        topics: ["DevOps principles", "Agile methodologies", "Collaboration tools", "DevOps toolchain overview"],
      },
      {
        week: 2,
        title: "Version Control and Git Workflows",
        topics: ["Advanced Git techniques", "Branching strategies", "Code review processes", "Git hooks"],
      },
      {
        week: 3,
        title: "Continuous Integration with Jenkins",
        topics: ["Jenkins setup and configuration", "Build automation", "Plugin management", "Pipeline as code"],
      },
      {
        week: 4,
        title: "Containerization with Docker",
        topics: ["Docker fundamentals", "Dockerfile best practices", "Multi-stage builds", "Docker Compose"],
      },
      {
        week: 5,
        title: "Container Orchestration - Kubernetes Basics",
        topics: [
          "Kubernetes architecture",
          "Pods and services",
          "Deployments and ReplicaSets",
          "ConfigMaps and Secrets",
        ],
      },
      {
        week: 6,
        title: "Advanced Kubernetes",
        topics: ["Ingress controllers", "Persistent volumes", "StatefulSets", "Helm package manager"],
      },
      {
        week: 7,
        title: "Infrastructure as Code with Terraform",
        topics: ["Terraform basics", "Resource management", "State management", "Modules and workspaces"],
      },
      {
        week: 8,
        title: "Configuration Management",
        topics: ["Ansible automation", "Playbooks and roles", "Inventory management", "Ansible Vault"],
      },
      {
        week: 9,
        title: "Continuous Deployment Strategies",
        topics: ["Blue-green deployments", "Canary releases", "Rolling updates", "Feature flags"],
      },
      {
        week: 10,
        title: "Monitoring and Observability",
        topics: [
          "Prometheus monitoring",
          "Grafana dashboards",
          "Log aggregation with ELK stack",
          "Distributed tracing",
        ],
      },
      {
        week: 11,
        title: "Security in DevOps (DevSecOps)",
        topics: ["Security scanning in pipelines", "Container security", "Secrets management", "Compliance automation"],
      },
      {
        week: 12,
        title: "Cloud-Native DevOps",
        topics: ["AWS/Azure DevOps services", "Serverless deployments", "Cloud-native CI/CD", "Multi-cloud strategies"],
      },
      {
        week: 13,
        title: "Performance and Scalability",
        topics: ["Load testing", "Performance monitoring", "Auto-scaling", "Capacity planning"],
      },
      {
        week: 14,
        title: "Incident Management and SRE",
        topics: ["Site Reliability Engineering", "Incident response", "Post-mortem analysis", "SLA/SLO management"],
      },
      {
        week: 15,
        title: "DevOps Metrics and KPIs",
        topics: ["DORA metrics", "Value stream mapping", "Continuous improvement", "ROI measurement"],
      },
      {
        week: 16,
        title: "Capstone Project",
        topics: ["End-to-end DevOps pipeline", "Project presentation", "Best practices review", "Career advancement"],
      },
    ],
  },
  "web-development-fullstack": {
    id: "web-development-fullstack",
    title: "Full-Stack Web Development",
    shortDescription: "Build modern web applications using React, Node.js, and database technologies.",
    fullDescription:
      "This comprehensive full-stack development course covers both frontend and backend technologies. Students will learn to build modern, responsive web applications using React, Node.js, Express, and various database technologies. The course includes real-world projects and deployment strategies.",
    instructor: {
      name: "Alex Thompson",
      bio: "Alex is a senior full-stack developer with 9 years of experience building web applications for startups and enterprises. He specializes in React, Node.js, and cloud deployment, and has contributed to several open-source projects.",
      credentials: "AWS Certified Developer, Google Cloud Professional Developer, Meta React Certified",
    },
    duration: "20 weeks",
    level: "Beginner",
    category: "Web Development",
    price: "£1299",
    rating: 4.9,
    students: 428,
    startDate: "February 26, 2024",
    format: "Online Live + Project Portfolio",
    certificate: "Full-Stack Web Developer Certificate",
    prerequisites: ["Basic HTML/CSS knowledge", "Basic programming concepts", "Computer literacy"],
    learningOutcomes: [
      "Build responsive web interfaces with React",
      "Develop RESTful APIs with Node.js and Express",
      "Design and implement databases",
      "Deploy applications to cloud platforms",
      "Implement user authentication and authorization",
      "Create full-stack web applications from scratch",
    ],
    syllabus: [
      {
        week: 1,
        title: "Web Development Fundamentals",
        topics: ["HTML5 semantic elements", "CSS3 and Flexbox", "Responsive design", "Browser developer tools"],
      },
      {
        week: 2,
        title: "Advanced CSS and Styling",
        topics: ["CSS Grid", "Animations and transitions", "Sass/SCSS", "CSS frameworks (Bootstrap/Tailwind)"],
      },
      {
        week: 3,
        title: "JavaScript Fundamentals",
        topics: ["ES6+ features", "DOM manipulation", "Event handling", "Asynchronous JavaScript"],
      },
      {
        week: 4,
        title: "Advanced JavaScript Concepts",
        topics: ["Promises and async/await", "Fetch API", "Error handling", "JavaScript modules"],
      },
      {
        week: 5,
        title: "Introduction to React",
        topics: ["React components", "JSX syntax", "Props and state", "Event handling in React"],
      },
      {
        week: 6,
        title: "React Hooks and State Management",
        topics: ["useState and useEffect", "Custom hooks", "Context API", "State management patterns"],
      },
      {
        week: 7,
        title: "React Router and Navigation",
        topics: ["Client-side routing", "Route parameters", "Protected routes", "Navigation components"],
      },
      {
        week: 8,
        title: "Forms and Validation in React",
        topics: ["Controlled components", "Form validation", "Form libraries", "File uploads"],
      },
      {
        week: 9,
        title: "Node.js and Server-Side Development",
        topics: ["Node.js fundamentals", "NPM and package management", "File system operations", "HTTP modules"],
      },
      {
        week: 10,
        title: "Express.js Framework",
        topics: ["Express setup", "Routing and middleware", "Request/response handling", "Error handling"],
      },
      {
        week: 11,
        title: "RESTful API Development",
        topics: ["REST principles", "API design", "HTTP methods", "Status codes and responses"],
      },
      {
        week: 12,
        title: "Database Integration - SQL",
        topics: ["Relational databases", "SQL queries", "Database design", "ORM with Sequelize"],
      },
      {
        week: 13,
        title: "Database Integration - NoSQL",
        topics: ["MongoDB basics", "Mongoose ODM", "Document design", "Aggregation pipelines"],
      },
      {
        week: 14,
        title: "Authentication and Authorization",
        topics: ["JWT tokens", "Password hashing", "Session management", "OAuth integration"],
      },
      {
        week: 15,
        title: "API Security and Best Practices",
        topics: ["Input validation", "Rate limiting", "CORS", "Security headers"],
      },
      {
        week: 16,
        title: "Testing Web Applications",
        topics: ["Unit testing with Jest", "Integration testing", "End-to-end testing", "Test-driven development"],
      },
      {
        week: 17,
        title: "Performance Optimization",
        topics: ["Code splitting", "Lazy loading", "Caching strategies", "Bundle optimization"],
      },
      {
        week: 18,
        title: "Deployment and DevOps",
        topics: ["Cloud deployment", "CI/CD pipelines", "Environment variables", "Monitoring and logging"],
      },
      {
        week: 19,
        title: "Advanced Topics",
        topics: ["GraphQL basics", "WebSockets", "Progressive Web Apps", "Server-side rendering"],
      },
      {
        week: 20,
        title: "Capstone Project",
        topics: ["Full-stack application development", "Project presentation", "Code review", "Portfolio preparation"],
      },
    ],
  },
  "machine-learning-ai": {
    id: "machine-learning-ai",
    title: "Machine Learning & AI",
    shortDescription: "Explore machine learning algorithms, neural networks, and artificial intelligence concepts.",
    fullDescription:
      "This advanced course provides comprehensive coverage of machine learning and artificial intelligence concepts. Students will learn various ML algorithms, deep learning with neural networks, and practical AI applications. The course includes hands-on projects using Python, TensorFlow, and scikit-learn.",
    instructor: {
      name: "Dr. Priya Patel",
      bio: "Dr. Patel holds a PhD in Computer Science with specialization in Machine Learning. She has 8 years of research experience in AI and has worked on cutting-edge projects in computer vision and natural language processing at leading tech companies.",
      credentials: "PhD in Computer Science, Google Cloud ML Engineer, TensorFlow Developer Certificate",
    },
    duration: "18 weeks",
    level: "Advanced",
    category: "AI/ML",
    price: "£1399",
    rating: 4.6,
    students: 203,
    startDate: "March 5, 2024",
    format: "Online Live + Research Projects",
    certificate: "Machine Learning & AI Professional Certificate",
    prerequisites: [
      "Strong Python programming",
      "Linear algebra and calculus",
      "Statistics and probability",
      "Data analysis experience",
    ],
    learningOutcomes: [
      "Implement machine learning algorithms from scratch",
      "Build and train neural networks",
      "Apply deep learning to real-world problems",
      "Develop computer vision applications",
      "Create natural language processing solutions",
      "Deploy ML models to production",
    ],
    syllabus: [
      {
        week: 1,
        title: "Introduction to Machine Learning",
        topics: ["ML fundamentals", "Types of learning", "Python ML ecosystem", "Data preprocessing"],
      },
      {
        week: 2,
        title: "Supervised Learning - Regression",
        topics: ["Linear regression", "Polynomial regression", "Regularization techniques", "Model evaluation"],
      },
      {
        week: 3,
        title: "Supervised Learning - Classification",
        topics: ["Logistic regression", "Decision trees", "Random forests", "Support vector machines"],
      },
      {
        week: 4,
        title: "Model Selection and Evaluation",
        topics: ["Cross-validation", "Bias-variance tradeoff", "Hyperparameter tuning", "Performance metrics"],
      },
      {
        week: 5,
        title: "Unsupervised Learning",
        topics: ["K-means clustering", "Hierarchical clustering", "DBSCAN", "Dimensionality reduction"],
      },
      {
        week: 6,
        title: "Feature Engineering and Selection",
        topics: ["Feature scaling", "Feature creation", "Feature selection methods", "Handling categorical data"],
      },
      {
        week: 7,
        title: "Ensemble Methods",
        topics: ["Bagging and boosting", "AdaBoost", "Gradient boosting", "XGBoost"],
      },
      {
        week: 8,
        title: "Introduction to Neural Networks",
        topics: ["Perceptron", "Multi-layer perceptrons", "Backpropagation", "Activation functions"],
      },
      {
        week: 9,
        title: "Deep Learning Fundamentals",
        topics: [
          "Deep neural networks",
          "TensorFlow and Keras",
          "Training deep networks",
          "Regularization in deep learning",
        ],
      },
      {
        week: 10,
        title: "Convolutional Neural Networks",
        topics: ["CNN architecture", "Convolution and pooling", "Image classification", "Transfer learning"],
      },
      {
        week: 11,
        title: "Computer Vision Applications",
        topics: ["Object detection", "Image segmentation", "Face recognition", "OpenCV integration"],
      },
      {
        week: 12,
        title: "Recurrent Neural Networks",
        topics: ["RNN fundamentals", "LSTM and GRU", "Sequence modeling", "Time series prediction"],
      },
      {
        week: 13,
        title: "Natural Language Processing",
        topics: ["Text preprocessing", "Word embeddings", "Sentiment analysis", "Named entity recognition"],
      },
      {
        week: 14,
        title: "Advanced NLP with Transformers",
        topics: ["Attention mechanisms", "BERT and GPT", "Fine-tuning pre-trained models", "Text generation"],
      },
      {
        week: 15,
        title: "Reinforcement Learning",
        topics: ["RL fundamentals", "Q-learning", "Policy gradients", "Deep Q-networks"],
      },
      {
        week: 16,
        title: "ML Model Deployment",
        topics: ["Model serialization", "REST APIs for ML", "Docker containerization", "Cloud deployment"],
      },
      {
        week: 17,
        title: "MLOps and Production Systems",
        topics: ["ML pipelines", "Model monitoring", "A/B testing", "Continuous learning"],
      },
      {
        week: 18,
        title: "Capstone Project",
        topics: ["End-to-end ML project", "Research presentation", "Peer review", "Industry applications"],
      },
    ],
  },
}

interface CoursePageProps {
  params: {
    id: string
  }
}

const getLevelColor = (level: string) => {
  switch (level) {
    case "Beginner":
      return "bg-emerald-100 text-emerald-800"
    case "Intermediate":
      return "bg-amber-100 text-amber-800"
    case "Advanced":
      return "bg-red-100 text-red-800"
    default:
      return "bg-slate-100 text-slate-800"
  }
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = coursesData[params.id as keyof typeof coursesData]

  if (!course) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="py-16">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">Course Not Found</h1>
              <p className="text-lg text-slate-600 mb-8">
                The course you're looking for doesn't exist or has been removed.
              </p>
              <Link href="/courses">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Courses
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-emerald-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/courses"
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Courses
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="text-sm">
                  {course.category}
                </Badge>
                <Badge className={`text-sm ${getLevelColor(course.level)}`}>{course.level}</Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{course.title}</h1>

              <p className="text-xl text-slate-600 mb-6">{course.shortDescription}</p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-emerald-600 mr-2" />
                  {course.instructor.name}
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-emerald-600 mr-2" />
                  {course.duration}
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-amber-400 fill-current mr-1" />
                  {course.rating} ({course.students} students)
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-emerald-600 mr-2" />
                  Starts {course.startDate}
                </div>
              </div>
            </div>

            {/* Enrollment Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{course.price}</div>
                  <div className="text-sm text-slate-600">Full course access • Lifetime updates</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-lg py-3">
                    Enroll Now
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Preview Course
                  </Button>

                  <Separator />

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Format:</span>
                      <span className="font-medium">{course.format}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Certificate:</span>
                      <Award className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Access:</span>
                      <Globe className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Resources:</span>
                      <Download className="h-4 w-4 text-emerald-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Course Description */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Course Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">{course.fullDescription}</p>
                </CardContent>
              </Card>

              {/* Learning Outcomes */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">What You'll Learn</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {course.learningOutcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Syllabus */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Course Syllabus</CardTitle>
                  <CardDescription>{course.syllabus.length} weeks of comprehensive learning</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {course.syllabus.map((week, index) => (
                      <div key={index} className="border border-slate-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-slate-900">
                            Week {week.week}: {week.title}
                          </h4>
                          <Badge variant="outline" className="text-xs">
                            Week {week.week}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {week.topics.map((topic, topicIndex) => (
                            <Badge key={topicIndex} variant="secondary" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Prerequisites */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Prerequisites</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {course.prerequisites.map((prerequisite, index) => (
                      <div key={index} className="flex items-center">
                        <BookOpen className="h-4 w-4 text-emerald-600 mr-3" />
                        <span className="text-slate-600">{prerequisite}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Instructor Info */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-xl">Your Instructor</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-emerald-600">
                        {course.instructor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg text-slate-900">{course.instructor.name}</h3>
                    <p className="text-sm text-slate-600 mb-3">{course.instructor.credentials}</p>
                  </div>

                  <Separator />

                  <p className="text-sm text-slate-600 leading-relaxed">{course.instructor.bio}</p>

                  <div className="pt-4">
                    <div className="text-sm text-slate-600 mb-2">
                      <strong>Certification Preparation:</strong>
                    </div>
                    <p className="text-sm text-slate-700">{course.certificate}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
