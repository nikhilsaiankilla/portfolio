import AnimatedContainer from '@/src/components/animated-container';
import FooterSection from '@/src/components/footer-section';
import NavSection from '@/src/components/nav-section'
import ProjectCard from '@/src/components/project-card';
import SectionHeading from '@/src/components/section-heading';
import { getAllProjects } from '@/src/lib/project';

const page = () => {
  const projects = getAllProjects();

  return (
    <div className="w-full min-h-screen bg-white text-black dark:bg-black dark:text-white px-5">
      <div className="w-full border-2 border-b-0 border-t-0 border-gray-700/10 dark:border-gray-700/40 max-w-4xl mx-auto min-h-screen">
        <NavSection />
        <AnimatedContainer>
          <SectionHeading title='Projects!' />
          {
            projects && projects.length > 0 ?
              <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 px-2'>
                {projects.slice(0, 4).map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
              :
              <p className='text-center mt-10 text-gray-600 dark:text-gray-300s text-sm'>No Projects Found!!</p>
          }
        </AnimatedContainer>
        <FooterSection />
      </div>
    </div>
  )
}

export default page