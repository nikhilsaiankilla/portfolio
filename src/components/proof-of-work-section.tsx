import AnimatedContainer from './animated-container';
import SectionHeading from './section-heading';
import ProjectCard from './project-card';
import AnimatedButton from './animated-btn';
import { getAllFeaturedProjects } from '../lib/project';

const ProofOfWorkSection = () => {
  const projects = getAllFeaturedProjects();
  return (
    <AnimatedContainer>
      <SectionHeading title='Proof of work!' />
      {/* Grid Container */}
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
      <div className='w-full mt-10 flex items-center justify-center'>
        <AnimatedButton link='/projects' label='View All Projects' />
      </div>
    </AnimatedContainer>
  );
};

export default ProofOfWorkSection;