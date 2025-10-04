import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = ({ data }) => {
  const { image, category, title, description, links } = data;

  return (
    <div className="max-w-106 rounded-lg outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200 h-full flex flex-col">
      <img src={image} alt={`${title} image`} className="w-full h-60 object-cover" />
      <div className="p-4 xs:p-8 flex flex-col flex-grow">
        <p className="text-gray-400 text-xs font-medium">{category}</p>
        <p className="text-gray-900 text-md xxs:text-lg font-semibold pt-1 mb-3">
          {title}
        </p>
        <p
          style={{ lineHeight: "20px", letterSpacing: "0%" }}
          className="text-gray-600 text-xs xxs:text-[14px] text-wrap flex-grow"
        >
          {description}
        </p>

        {/* Container for the new dynamic buttons */}
        <div className="flex flex-wrap gap-2 mt-5">
          {links?.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm bg-white hover:border-gray-800 hover:text-gray-800"
            >
              <FontAwesomeIcon icon={faGithub} className="me-2" />
              GitHub
            </a>
          )}
          {links?.liveSite && (
            <a
              href={links.liveSite}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm bg-white hover:border-blue-600 hover:text-blue-600"
            >
              <FontAwesomeIcon icon={faGlobe} className="me-2" />
              Live Site
            </a>
          )}
          {links?.blog && (
            <a
              href={links.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm bg-white hover:border-green-600 hover:text-green-600"
            >
              <FontAwesomeIcon icon={faBookOpen} className="me-2" />
              Blog
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;