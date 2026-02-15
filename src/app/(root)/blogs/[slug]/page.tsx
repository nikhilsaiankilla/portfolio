import AnimatedContainer from "@/src/components/animated-container";
import SectionHeading from "@/src/components/section-heading";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import Image from "next/image";
import { Separator } from "@/src/components/ui/separator";
import { Badge } from "@/src/components/ui/badge";
import type { Metadata } from "next";
import { getBlogById, getRelatedBlogs } from "@/src/lib/blogs";
import BlogCard from "@/src/components/blog-card";
import { Calendar, Clock } from "lucide-react";
import { ProjectComponents } from "@/src/components/project-components";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { extractHeadings } from "@/src/lib/extractHeadings";
import FloatingTOC from "@/src/components/floating-toc";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogById(slug);

  if (!blog || blog?.error) {
    return {
      title: "Blog Not Found",
      description: "The requested blog does not exist.",
      robots: { index: false, follow: false },
    };
  }

  if (!blog.isPublished) {
    return {
      title: `${blog.title} (Draft)`,
      robots: { index: false, follow: false },
    };
  }

  const siteUrl = "https://nikhilsai.in";
  const blogUrl = blog.canonical ?? `${siteUrl}/blogs/${slug}`;

  const ogImage = blog.image ? blog.image : `${siteUrl}/api/blogs/${slug}/og`;

  return {
    title: `${blog.title} | Blog`,
    description: blog.description,
    keywords: [...blog.tags, blog.title, "Nikhil Sai Blog"],
    alternates: { canonical: blogUrl },
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: blogUrl,
      siteName: "Nikhil Sai / Blog",
      images: [{ url: ogImage, width: 1200, height: 630 }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [ogImage],
      creator: "@nikhilbuildss",
    },
  };
}

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

const BlogPage = async ({ params }: BlogPageProps) => {
  const { slug } = await params;
  const blog = getBlogById(slug);
  const relatedBlogs = getRelatedBlogs(slug);

  const toc = extractHeadings(blog?.content || "");

  if (!blog || blog.error) {
    return (
      <AnimatedContainer>
        <div className="w-full min-h-[70vh] flex items-center justify-center">
          <p className="text-center text-red-500 text-xs font-semibold">
            {blog?.error || "Blog not found"}
          </p>
        </div>
      </AnimatedContainer>
    );
  }

  const { title, description, image, tags, publishedOn, readingTime, content } =
    blog;

  return (
    <>
      {/* Blog Content */}
      <AnimatedContainer>
        <div className="w-full space-y-6">
          {image && (
            <div className="relative aspect-video overflow-hidden rounded-sm">
              <Image
                src={image}
                alt={title || "Blog Cover Image"}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}

          {/* Title */}
          <SectionHeading
            title={title || "Blog Title Missing"}
            className="md:text-3xl leading-tight"
          />

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {publishedOn}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {readingTime}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags &&
              tags.length > 0 &&
              tags?.map((tag, idx) => (
                <Badge
                  key={idx}
                  className="dark:bg-[#0A0A0A] dark:text-white border border-dashed border-gray-600/70 text-black bg-gray-300 text-[10px] px-2 rounded-sm"
                >
                  {tag}
                </Badge>
              ))}
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {description}
          </p>

          <Separator />

          {/* MDX Content */}
          <div
            className="prose prose-neutral max-w-none dark:prose-invert
                                    prose-pre:bg-transparent
                                    prose-pre:p-0
                                    prose-code:bg-transparent
                                    prose-code:p-0
                        "
          >
            <MDXRemote
              source={content || "## Content is Missing!! Please inform Admin."}
              components={ProjectComponents}
              options={{
                mdxOptions: {
                  rehypePlugins: [
                    rehypeHighlight,
                    rehypeSlug,
                    [rehypeAutolinkHeadings, { behaviour: "wrap" }],
                  ],
                },
              }}
            />
          </div>
        </div>

        <FloatingTOC items={toc} />
      </AnimatedContainer>

      {/* Related Blogs */}
      <AnimatedContainer>
        <SectionHeading title="Related Blogs" />
        {relatedBlogs && relatedBlogs.length > 0 ? (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {relatedBlogs.slice(0, 2).map((blog, index) => (
              <BlogCard key={index} {...blog} index={index} />
            ))}
          </div>
        ) : (
          <p className="text-center mt-10 text-gray-600 dark:text-gray-300 text-sm">
            No related blogs found.
          </p>
        )}
      </AnimatedContainer>
    </>
  );
};

export default BlogPage;
