import {
  faGithub,
  faHackerrank,
  // faInstagram,
  faXTwitter,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const socialIcons = [
  { icon: faLinkedin, link: "https://www.linkedin.com/in/david-singh-96830324a/" },
  { icon: faGithub, link: "https://github.com/D-S007" },
  { icon: faEnvelope, link: "mailto:singhdavid036@gmail.com" },
  { icon: faHackerrank, link: "https://www.hackerrank.com/profile/singhdavid036" },
  { icon: faMedium, link: "https://medium.com/@davidsingh.blogs" },
  { icon: faXTwitter, link: "https://x.com/Davidsingh001" },
  // { icon: faInstagram, link: "https://www.instagram.com/david_singh006" },
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      className={`text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md`}
      key={index}
    >
      <FontAwesomeIcon
        icon={item.icon}
        className={`text-xl w-4.5 aspect-square`}
      />
    </a>
  ));
};

export default SocialMedia;
