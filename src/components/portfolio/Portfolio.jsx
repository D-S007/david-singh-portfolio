import Projects from "./Projects";
import MoreProjects from "./MoreProjects";

// Placeholder images
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const featuredProjectsData = [
  {
    id: 1,
    image: card1,
    category: "Cohort Analysis & Customer Segmentation",
    title: "Retail Chip Sales & Customer Analysis in FMCG",
    description:
      "Analyzed 264,000+ transactions and 71,000 customers representing $1.8M in FMCG sales to extract actionable insights. Identified high-value segment(Mainstream Young Singles/Couples), with strong preference for premium brand chips, enabling targeted marketing.", 
      // Delivered an interactive Looker Studio dashboard with insights into pack-size trends, brand performance, and customer segmentation.",
    type: "Industry Level",
    links: {
      github: "https://github.com/D-S007/Quantium_Retail_Strategy_and_Analytics",
      liveSite: "https://youtu.be/JJrztlgy2Lo", // Set to null when no link is available
      blog: "https://medium.com/@davidsingh.blogs/quantium-retail-analytics-uncovering-customer-insights-with-r-fb0166679a47",     // Use 'blog' key for case studies/articles
    },
  },

  {
    id: 2,
    image: card2,
    category: "Statistical Survey Analysis",
    title: "Digital Wellbeing Statistical Analysis",
    description:
      "Analyzed survey dataset of 99 participants using statistical tests (t-test, Pearson correlation, Chi-square, regression) to quantify screen time impact. Engineered automated ETL pipelines generating PDF, DOCX, CSV, and PNG reports directly from Python scripts.",
      // Built and deployed an interactive Tableau dashboard visualizing correlations across demographics, improving insights accessibility by 100%.",
    type: "Personal Level",
    links: {
      github: "https://github.com/D-S007/Digital_Wellbeing_Statistical_Analysis",
      liveSite: "https://public.tableau.com/views/DigitalWellbeingStatisticalAnalysis/Dashboard", // Set to null when no link is available
      blog: "https://medium.com/@davidsingh.blogs/digital-wellbeing-statistical-analysis-impact-of-screen-time-on-youth-d794e44a0d78",     // Use 'blog' key for case studies/articles
    },
  },

  {
    id: 3,
    image: card3,
    category: "Healthcare & Campaign Analysis",
    title: "HPV Awareness Campaign Impact Analysis",
    description:
      "Processed and cleaned 500+ survey responses via automated SQL-backed ETL pipeline, reducing data preparation time by 40%. Performed paired t-tests, ANOVA, Wilcoxon tests, and Cronbach’s Alpha reliability analysis to measure healthcare awareness effectiveness.",
      // Deployed a Streamlit dashboard for interactive visualization of pre- and post-intervention awareness scores, enabling stakeholders to track improvement",
    type: "Personal Level",
    links: {
      github: "https://github.com/D-S007/HPV-Awareness-Impact-Analysis",
      liveSite: "https://hpv-awareness-impact-analysis-david-singh.streamlit.app/", // Set to null when no link is available
      blog: "https://medium.com/@davidsingh.blogs/hpv-awareness-impact-analysis-end-to-end-data-analytics-project-2884fa7d6ea2",     // Use 'blog' key for case studies/articles
    },
  },

  {
    id: 4,
    image: card4,
    category: "NLP & Machine Learning",
    title: "YouReview: AI-Powered Sentiment Extractor",
    description:
      "Developed an end-to-end pipeline for fetching, storing, and analyzing YouTube comments using NLP. Implemented ML sentiment analysis with Scikit-learn achieving 85%+ accuracy. Built RESTful APIs with FastAPI for real-time sentiment analysis and trend detection.",
      // Deployed using cloud-ready architecture with PostgreSQL and scalable backend.",
    type: "Self",
    links: {
      github: "https://github.com/D-S007/YouReview",
      liveSite: null, // Use 'liveSite' key for live demos
      blog: null,
    },
  },
  {
    id: 5,
    image: card5,
    category: "Recommendation System & Python",
    title: "Content-Based Movie Recommendation System",
    description:
      "Developed a system to provide personalized movie suggestions by analyzing attributes like genre, keywords, and cast, turning data into a user-centric feature.",
    type: "Self",
    links: {
      github: "https://github.com/D-S007/Content-Based-Movie-Recommendation-System",
      liveSite: "https://content-based-movie-recommendation-system-david-singh.streamlit.app/",
      blog: "#!",     // Use 'blog' to explain the model
    },
  },
  {
    id: 6,
    image: card6,
    category: "Machine Learning & Python",
    title: "FlowForge AI",
    description:
      "Developed full-stack AI platform for workflow optimization and automated code generation Implemented NLP-based synthesis generating 500+ lines of code with 95% accuracy. Built scalable backend with FastAPI and PostgreSQL, deployed on Vercel with cloud integration.",
      // Designed responsive React frontend with real-time collaboration features.",
    type: "Self",
    links: {
      github: "https://github.com/D-S007/FlowForge_AI",
      liveSite: "https://flow-forge-ai-one.vercel.app/login",
      blog: "#!",
    },
  },
];


const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Projects</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            A selection of my work, from end-to-end case studies to personal projects exploring data analysis and machine learning skills.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {featuredProjectsData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      
      <MoreProjects />

    </div>
  );
};

export default Portfolio;