import img1 from "../../assets/images/blog/blog-1.png";
import img2 from "../../assets/images/blog/blog-2.png";
import img3 from "../../assets/images/blog/blog-3.png";
import img4 from "../../assets/images/blog/blog-4.png";
import img5 from "../../assets/images/blog/blog-5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

// Breakpoints for swiperJS
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const blogData = [
  {
    id: 1,
    image: img1,
    date: "05 May, 2025",
    comments: 102,
    title: "Professional guide to Install and Secure MySQL on Linux, Windows & macOS",
    link: "https://davidsingh0.hashnode.dev/how-to-install-and-secure-mysql-on-linux-windows-and-macos-the-ultimate-guide",
  },
  {
    id: 2,
    image: img2,
    date: "09 Feb, 2025",
    comments: 88,
    title: "Exploratory Data Analysis : Deep Dive into Data Insights",
    link: "https://davidsingh0.hashnode.dev/eda-exploratory-data-analysis",
  },
  {
    id: 3,
    image: img3,
    date: "04 Feb, 2025",
    comments: 153,
    title: "Pandas Cheatsheet for Data Analysts", // idea 5 Essential SQL Techniques for Every Data Analyst
    link: "https://davidsingh0.hashnode.dev/pandas-cheatsheet",
  },
  {
    id: 4,
    image: img4,
    date: "13 Feb, 2025",
    comments: 94,
    title: "Machine learning : A detailed guide for Data Analyst", //How to Tell a Compelling Story with Data Visualization
    link: "https://davidsingh0.hashnode.dev/machine-learning-a-detailed-analysis",
  },
  {
    id: 5,
    image: img5,
    date: "03 Feb, 2025",
    comments: 112,
    title: "Setting up VS code for Machine learning projects", //Understanding A/B Testing: From Hypothesis to Conclusion
    link: "https://davidsingh0.hashnode.dev/setting-up-vs-code-for-machine-learning-projects",
  },
  // {
  //   id: 6,
  //   image: img2,
  //   date: "18 Apr, 2025",
  //   comments: 76,
  //   title: "Building Your First Interactive Dashboard in Tableau",
  //   link: "#!",
  // },

];

const Blog = () => {
  return (
    <div className="content py-25 px-2 relative" id="blog">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Blog</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          Check out my recent articles where I share insights on data analysis,
          machine learning projects, and the latest industry trends.
        </p>
      </div>
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {blogData?.map((data, index) => (
          <SwiperSlide
            key={index}
            className="mb-10" /* pagination margin bottom to 40px */
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <MonoBlog data={data} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;