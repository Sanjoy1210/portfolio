import PageHeader from '@/reusable/PageHeader';
import ResumeContainer from './ResumeContainer';

const Resume = () => {
  return (
    <section className="container lg:rounded-2xl bg-white dark:bg-dark-1 px-4 sm:px-5 lg:px-20">
      <div className="fade">
        <div className="py-12">
          <PageHeader text="Resume" posLeft="md:after:left-44" />
          <div className="pb-12 pt-12">
            <ResumeContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
