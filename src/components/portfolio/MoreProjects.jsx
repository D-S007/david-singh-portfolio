import React, { useState, useMemo, useEffect } from 'react';

// --- DATA FOR ALL PROJECTS ---
const allProjectsData = [
  {
    name: "HPV Awareness Impact Analysis",
    technologies: ["Python", "SQL", "Tableau", "Statistics"],
    domains: ["Data Analysis", "Survey Data Analysis", "Healthcare Analytics"],
    type: "Case Study",
    sourceCode: "https://github.com/D-S007/HPV-Awareness-Impact-Analysis",
    liveSite: "https://hpv-awareness-impact-analysis-david-singh.streamlit.app/",
    blog: "https://medium.com/@davidsingh.blogs/hpv-awareness-impact-analysis-end-to-end-data-analytics-project-2884fa7d6ea2",
    skills: ["Python", "SQL", "Tableau", "Data Analysis", "Survey Data Analysis", "Statistical Analysis", "Hypothesis Testing", "Dashboard"]
  },
  {
    name: "Retail Chip Sales & Customer Analysis",
    technologies: ["R", "SQL", "Looker Studio", "Data Visualization"],
    domains: ["Sales Analytics", "Customer Service Analytics", "Marketing Analytics"],
    type: "Case Study",
    sourceCode: "https://github.com/D-S007/Quantium_Retail_Strategy_and_Analytics",
    liveSite: "https://youtu.be/JJrztlgy2Lo",
    blog: "https://medium.com/@davidsingh.blogs/quantium-retail-analytics-uncovering-customer-insights-with-r-fb0166679a47",
    skills: ["R", "SQL", "Looker Studio", "Data Visualization", "Sales Analytics", "Customer Service Analytics", "Data Analysis", "Dashboard"]
  },
  {
    name: "Digital Wellbeing Statistical Analysis",
    technologies: ["Python", "Tableau", "Statistical Analysis", "A/B Testing"],
    domains: ["Product Analytics", "Survey Data Analysis", "Growth Analytics"],
    type: "Case Study",
    sourceCode: "https://github.com/D-S007/Digital_Wellbeing_Statistical_Analysis",
    liveSite: "https://public.tableau.com/views/DigitalWellbeingStatisticalAnalysis/Dashboard",
    blog: "https://medium.com/@davidsingh.blogs/digital-wellbeing-statistical-analysis-impact-of-screen-time-on-youth-d794e44a0d78",
    skills: ["Python", "Tableau", "Statistical Analysis", "A/B Testing", "Product Analytics", "Survey Data Analysis", "Dashboard", "Report"]
  },
  {
    name: "WHO Water & Sanitation Analysis",
    technologies: ["Python", "SQL", "Tableau", "Data Visualization"],
    domains: ["Data Analysis", "Time Series Analysis", "Growth Analytics"],
    type: "Case Study",
    sourceCode: "https://github.com/D-S007/Global-Water-and-Sanitation-Analysis",
    liveSite: "#!",
    blog: "#!",
    skills: ["Python", "SQL", "Tableau", "Data Analysis", "Time Series Analysis", "Data Visualization", "Statistical Analysis"]
  },

  {
    name: "AI News Scraper",
    technologies: ["Python", "API", "Web Scraping", "Data Collection"],
    domains: ["News Analytics", "Data Collection", "Product Analytics"],
    type: "Personal Project",
    sourceCode: "https://github.com/D-S007/AI-News-Scraper",
    liveSite: "#!",
    blog: "#!",
    skills: ["Python", "API", "Web Scraping", "Data Collection", "Excel", "Data Interpretation"]
  },
  {
    name: "Data Analytics AI Agent",
    technologies: ["Python", "Streamlit", "Excel", "SQL", "Data Visualization"],
    domains: ["AI Agents", "Marketing Analytics", "Product Analytics"],
    type: "Case Study",
    sourceCode: "https://github.com/D-S007/Data-Analytics-AI-Agent",
    liveSite: "#!",
    blog: "#!",
    skills: ["Python", "Excel", "SQL", "Data Visualization", "Dashboard", "Sales Analytics", "Data Analysis"]
  },
  {
    name: "YouReview Sentiment Analysis",
    technologies: ["Python", "Sentiment Analysis", "FastAPI", "NLTK"],
    domains: ["Sentiment Analysis", "Customer Service Analytics", "Product Analytics"],
    type: "Personal Project",
    sourceCode: "https://github.com/D-S007/YouReview",
    liveSite: "#!",
    blog: null,
    skills: ["Python", "Sentiment Analysis", "Data Analysis", "Customer Service Analytics", "Survey Data Analysis"]
  },
  {
    name: "Content Based Movie Recommendation System",
    technologies: ["Python", "API", "NLTK", "Seaborn","Scikit-learn"],
    domains: ["Recommendation System", "Predictive Modeling", "Model Fitting"],
    type: "Personal Project",
    sourceCode: "https://github.com/D-S007/Content-Based-Movie-Recommendation-System",
    liveSite: "https://content-based-movie-recommendation-system-david-singh.streamlit.app/",
    blog: "#!",
    skills: ["Python", "API", "requests", "nltk", "scikit-learn", "Recommendation System"]
  },
  {
    name: "NLP based AI Chatbot",
    technologies: ["Python", "langchain", "streamlit","nltk","huggingface","requests","AI Chatbot"],
    domains: ["AI Chatbot", "Natural Language Processing", "Product Analytics"],
    type: "Case Project",
    sourceCode: "https://github.com/D-S007/CampusCopilot",
    liveSite: "#!",
    blog: "#!",
    skills: ["Python", "Langchain", "Streamlit","NLTK","HuggingFace-Model","requests","AI Chatbot"]
  },
  {
    name: "AI Workflow Optimization & Code Generation Software",
    technologies: ["Typescript", "React", "Node.js", "CSS","AI Integration"],
    domains: ["AI Workflow", "Code Generation", "Productivity Tools", "Documentation Generator"],
    type: "Case Study",
    sourceCode: "https://github.com/D-S007/FlowForge_AI",
    liveSite: "https://flow-forge-ai-one.vercel.app/login",
    blog: "#!",
    skills: ["Typescript", "React", "Node.js", "CSS","AI Integration","Productivity Tools","Documentation Generator"]
  },
  {
    name: "Weather AI Agent",
    technologies: ["Python", "Google ADK", "API"],
    domains: ["AI Agents", "Weather Forecasting", "Data Collection"],
    type: "Personal Project",
    sourceCode: "https://github.com/D-S007/Agent_Development_Kit/tree/main/Weather_AI_Agent",
    liveSite: "#!",
    blog: "#!",
    skills: ["Python", "Google ADK", "API", "Data Collection", "Data Interpretation"]
  },   

//   {
//     name: "Customer Churn Prediction Model",
//     technologies: ["Python", "R", "Logistic Regression", "Predictive Model"],
//     domains: ["Customer Service Analytics", "Predictive Modeling", "Product Analytics"],
//     type: "Personal Project",
//     sourceCode: "https://github.com/D-S007/Customer-Churn-Prediction",
//     liveSite: "#!",
//     blog: "#!",
//     skills: ["Python", "R", "Logistic Regression", "Predictive Model", "Model Fitting", "Statistical Analysis", "Data Interpretation"]
//   },
//   {
//     name: "E-commerce Sales Performance Dashboard",
//     technologies: ["Power BI", "Excel", "SQL", "Data Visualization"],
//     domains: ["Sales Analytics", "Marketing Analytics", "Product Analytics"],
//     type: "Personal Project",
//     sourceCode: null,
//     liveSite: "#!",
//     blog: "#!",
//     skills: ["Power BI", "Excel", "SQL", "Data Visualization", "Dashboard", "Sales Analytics", "Data Analysis"]
//   },
//   {
//     name: "Marketing Funnel Testing Analysis",
//     technologies: ["Python", "A/B Testing", "Funnel Testing", "Statistics"],
//     domains: ["Marketing Analytics", "Growth Analytics", "Product Analytics"],
//     type: "Case Study",
//     sourceCode: "https://github.com/D-S007/Marketing-Funnel-Analysis",
//     liveSite: "#!",
//     blog: "#!",
//     skills: ["Python", "A/B Testing", "Funnel Testing", "Statistics", "Marketing Analytics", "Hypothesis Testing", "Data Interpretation"]
//   },
//   {
//     name: "Time Series Sales Forecasting",
//     technologies: ["Python", "R", "Linear Regression", "Time Series Analysis"],
//     domains: ["Sales Analytics", "Predictive Modeling", "Growth Analytics"],
//     type: "Personal Project",
//     sourceCode: "https://github.com/D-S007/Sales-Forecasting",
//     liveSite: "#!",
//     blog: "#!",
//     skills: ["Python", "R", "Linear Regression", "Time Series Analysis", "Predictive Model", "Model Fitting", "Regression Analysis"]
//   },
//   {
//     name: "YouReview Sentiment Analysis",
//     technologies: ["Python", "Sentiment Analysis", "FastAPI", "NLTK"],
//     domains: ["Sentiment Analysis", "Customer Service Analytics", "Product Analytics"],
//     type: "Personal Project",
//     sourceCode: "https://github.com/D-S007/YouReview",
//     liveSite: "#!",
//     blog: null,
//     skills: ["Python", "Sentiment Analysis", "Data Analysis", "Customer Service Analytics", "Survey Data Analysis"]
//   }
];

// --- COLOR MAP FOR SOLID BADGES ---
const techColorMap = {
    // Languages
    'python': 'bg-yellow-400 text-black',
    'sql': 'bg-sky-600 text-white',
    'r': 'bg-blue-600 text-white',
    
    // Tools
    'tableau': 'bg-blue-800 text-white',
    'power bi': 'bg-yellow-500 text-black',
    'excel': 'bg-green-600 text-white',
    'looker studio': 'bg-purple-500 text-white',
    'rstudio': 'bg-blue-500 text-white',
    'zoho analytics': 'bg-red-500 text-white',
    'google sheets': 'bg-green-500 text-white',
    
    // Analytics Deliverables
    'data analysis': 'bg-slate-600 text-white',
    'predictive model': 'bg-emerald-600 text-white',
    'survey data analysis': 'bg-indigo-500 text-white',
    'sentiment analysis': 'bg-pink-500 text-white',
    'report': 'bg-orange-500 text-white',
    'dashboard': 'bg-cyan-500 text-white',
    'time series analysis': 'bg-purple-600 text-white',
    
    // Analytics Skills
    'data visualization': 'bg-teal-500 text-white',
    'funnel testing': 'bg-amber-500 text-black',
    'linear regression': 'bg-blue-500 text-white',
    'logistic regression': 'bg-green-700 text-white',
    'model fitting': 'bg-indigo-600 text-white',
    'regression analysis': 'bg-purple-500 text-white',
    'a/b testing': 'bg-lime-500 text-black',
    'data interpretation': 'bg-gray-600 text-white',
    'statistics': 'bg-red-600 text-white',
    'hypothesis testing': 'bg-violet-500 text-white',
    'statistical analysis': 'bg-rose-600 text-white',
    
    // Analytics Expertise
    'marketing analytics': 'bg-pink-600 text-white',
    'product analytics': 'bg-amber-600 text-white',
    'customer service analytics': 'bg-sky-600 text-white',
    'sales analytics': 'bg-emerald-600 text-white',
    'growth analytics': 'bg-fuchsia-600 text-white',
    'healthcare analytics': 'bg-red-500 text-white',
    
    'default': 'bg-gray-400 text-white'
};

// --- SKILLS CATEGORIES ---
const skillsCategories = {
  "Analytics Tools": [
    "Tableau",
    // "Google Sheets", 
    "Power BI",
    "Microsoft Excel",
    "RStudio",
    // "Zoho Analytics",
    "Looker Studio"
  ],

  "Analytics Languages": [
    "Python",
    "R", 
    "SQL"
  ],
  
  "Analytics Deliverables": [
    "Data Analysis",
    "Predictive Model", 
    "Survey Data Analysis",
    "Sentiment Analysis",
    "Report",
    "Dashboard",
    "Time Series Analysis"
  ],
  "Analytics Skills": [
    "Data Visualization",
    "Funnel Testing", 
    "Linear Regression",
    "Logistic Regression",
    "Model Fitting",
    "Regression Analysis",
    "A/B Testing",
    "Data Interpretation", 
    "Statistics",
    "Hypothesis Testing",
    "Statistical Analysis"
  ],

  "Analytics Expertise": [
    "Marketing Analytics",
    "Product Analytics", 
    "Customer Service Analytics",
    "Sales Analytics",
    "Growth Analytics"
  ]
};

// --- ICONS ---
const GithubIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 hover:text-black"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> );
const GlobeIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 hover:text-blue-600"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> );
const BlogIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 hover:text-green-600"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg> );

// --- MAIN COMPONENT ---
const MoreProjects = () => {
    const [typeFilter, setTypeFilter] = useState("All");
    const [availabilityFilter, setAvailabilityFilter] = useState("All");
    const [skillFilter, setSkillFilter] = useState("All");

    // pagination state
    const PAGE_SIZE = 3;
    const [page, setPage] = useState(0);

    // Get all unique skills from projects
    const allSkills = useMemo(() => {
        const skills = allProjectsData.flatMap(p => p.skills);
        return [...new Set(skills)].sort();
    }, []);

    const filteredProjects = useMemo(() => {
        return allProjectsData.filter(project => {
            const typeMatch = typeFilter === 'All' || project.type === typeFilter;
            const availabilityMatch = availabilityFilter === 'All' ||
                (availabilityFilter === 'Source Code' && project.sourceCode) ||
                (availabilityFilter === 'Live Site' && project.liveSite);
            const skillMatch = skillFilter === 'All' || project.skills.includes(skillFilter);
            
            return typeMatch && availabilityMatch && skillMatch;
        });
    }, [typeFilter, availabilityFilter, skillFilter]);

    // reset to first page whenever filters change
    useEffect(() => {
        setPage(0);
    }, [typeFilter, availabilityFilter, skillFilter]);

    const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PAGE_SIZE));
    const startIndex = page * PAGE_SIZE;
    const paginatedProjects = filteredProjects.slice(startIndex, startIndex + PAGE_SIZE);

    return (
        <div className="mt-20 p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-4xl font-bold text-center mb-4">More Projects</h2>
            
            {/* Simplified Filters - Only 3 */}
            <div className="flex flex-wrap justify-center items-center gap-5 mb-8">
                {/* Skill Filter */}
                <select value={skillFilter} onChange={(e) => setSkillFilter(e.target.value)} className="select select-bordered select-sm">
                    <option value="All">All Skills</option>
                    {Object.entries(skillsCategories).map(([category, skills]) => (
                        <optgroup key={category} label={category}>
                            {skills.map(skill => (
                                <option key={skill} value={skill}>{skill}</option>
                            ))}
                        </optgroup>
                    ))}
                </select>

                {/* Availability Filter */}
                <select value={availabilityFilter} onChange={(e) => setAvailabilityFilter(e.target.value)} className="select select-bordered select-sm">
                    <option value="All">All Availability</option>
                    <option value="Source Code">Source Code</option>
                    <option value="Live Site">Live Site</option>
                </select>

                {/* Type Filter */}
                <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="select select-bordered select-sm">
                    <option value="All">All Types</option>
                    <option value="Case Study">Case Studies</option>
                    <option value="Personal Project">Personal Projects</option>
                </select>
            </div>

            {/* Projects Table */}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Project Name</th>
                            <th>Technologies & Skills</th>
                            <th className="text-center">Source Code</th>
                            <th className="text-center">Live Site</th>
                            <th className="text-center">Blog</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedProjects.map((project, index) => (
                            <tr key={index} className="hover">
                                <td className="font-semibold">{project.name}</td>
                                <td>
                                    <div className="flex flex-wrap gap-1">
                                        {project.skills.map(skill => {
                                            const colorClass = techColorMap[skill.toLowerCase()] || techColorMap['default'];
                                            return (
                                                <span key={skill} className={`badge border-none text-xs font-semibold ${colorClass}`}>
                                                    {skill}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </td>
                                <td className="text-center">
                                    {project.sourceCode && project.sourceCode !== "#!" && 
                                        <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="inline-block"><GithubIcon /></a>}
                                </td>
                                <td className="text-center">
                                    {project.liveSite && project.liveSite !== "#!" && 
                                        <a href={project.liveSite} target="_blank" rel="noopener noreferrer" className="inline-block"><GlobeIcon /></a>}
                                </td>
                                <td className="text-center">
                                    {project.blog && project.blog !== "#!" && 
                                        <a href={project.blog} target="_blank" rel="noopener noreferrer" className="inline-block"><BlogIcon /></a>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination controls */}
            <div className="flex items-center justify-between mt-6">
                <div className="text-sm text-gray-500">
                    Showing {Math.min(startIndex + 1, filteredProjects.length)} - {Math.min(startIndex + PAGE_SIZE, filteredProjects.length)} of {filteredProjects.length}
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setPage(p => Math.max(0, p - 1))}
                        disabled={page === 0}
                        className="btn btn-sm bg-white border rounded disabled:opacity-50"
                    >
                        Prev
                    </button>
                    <div className="text-sm text-gray-600 px-2">Page {page + 1} / {totalPages}</div>
                    <button
                        onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
                        disabled={page >= totalPages - 1}
                        className="btn btn-sm bg-white border rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>

            {/* Skills Summary
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-center">Skills Demonstrated Across Projects</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                    {allSkills.map(skill => {
                        const colorClass = techColorMap[skill.toLowerCase()] || techColorMap['default'];
                        return (
                            <span key={skill} className={`badge border-none text-xs font-semibold ${colorClass}`}>
                                {skill}
                            </span>
                        );
                    })}
                </div>
            </div> */}
        </div>
    );
};

export default MoreProjects;