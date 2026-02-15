import AnimatedContainer from "./animated-container";
import SectionHeading from "./section-heading";
import AnimatedButton from "./animated-btn";
import { getAllFeaturedBlogs } from "../lib/blogs";
import BlogCard from "./blog-card";

const BlogsSection = () => {
  const blogs = getAllFeaturedBlogs();
  return (
    <AnimatedContainer>
      <SectionHeading title="Blogs" />
      {/* Grid Container */}
      {blogs && blogs.length > 0 ? (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {blogs.slice(0, 4).map((project, index) => (
            <BlogCard key={index} {...project} />
          ))}
        </div>
      ) : (
        <p className="text-center mt-10 text-gray-600 dark:text-gray-300s text-sm">
          No Projects Found!!
        </p>
      )}
      {blogs && blogs.length > 4 && (
        <div className="w-full mt-10 flex items-center justify-center">
          <AnimatedButton link="/blogs" label="View All Blogs" />
        </div>
      )}
    </AnimatedContainer>
  );
};

export default BlogsSection;
