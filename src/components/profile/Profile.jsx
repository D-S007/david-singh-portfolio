import person from "../../assets/videos/HPV_Dashboard.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4 pl-0`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile image */}
        <div className="max-w-[500px] w-full h-auto">
          <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-contain"
              src={person}
              alt="HPV Dashboard"
            />
          </div>
          {/* Social media section, 2xl,3xl-more bigger size */} 
          <div className="relative bottom-9">
              <p className="text-center font-bold text-2xl mb-3"> 
                HPV Awareness Impact Analysis
              </p>
            <div className="flex justify-center gap-4">
              <div className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-[4px] shadow-2xl drop-shadow-2xl shadow-white">
                <a
                  href="https://github.com/d-s007/HPV-Awareness-Impact-Analysis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-picto-primary mx-2"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a
                  href="https://medium.com/@davidsingh.blogs/hpv-awareness-impact-analysis-end-to-end-data-analytics-project-2884fa7d6ea2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-picto-primary mx-2"
                >
                  <FontAwesomeIcon icon={faBlog} size="2x" />
                </a>
                <a
                  href="https://hpv-awareness-impact-analysis-david-singh.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-picto-primary mx-2"
                >
                  <FontAwesomeIcon icon={faGlobe} size="2x" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-sm:w-full w-[33rem]">
          <h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8`}
          >
            My Latest Project
          </h2>
          <div
            className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600`}
          >
            <p className={``}>
              Analyzed and cleaned 500+ survey responses via automated SQL-backed ETL pipeline, reducing data preparation time by 40%. Performed various statistical tests to measure healthcare awareness effectiveness.
              {/* Analyzed the impact of an HPV awareness campaign on youth in Sitapur, India, through a comprehensive data analysis pipeline.  */}
            </p>
            <p className="mt-3">
              It encompasses data collection, cleaning, exploratory analysis, visualization, and predictive modeling using Python libraries such as Pandas, NumPy, Matplotlib, Seaborn, and Scikit-learn.
              {/* My passion lies in translating these findings into actionable insights that solve real-world problems and drive data-informed decisions. */}
            </p>
          </div>
          <div className="mt-8 flex max-md:justify-center">
            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
              href="#portfolio"
            >
              More Projects
            </a>
            <a
              className={`btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary ms-4 text-xs xxs:text-[14px] sm:text-[16px]`}
              href="https://drive.google.com/file/d/1AUhE0RpDTHMdcMwOkJ_7b23D0C8wjVAh/view?usp=drive_link"
            >
              <FontAwesomeIcon icon={faDownload} /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;