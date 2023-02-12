import PageHeader from '@/reusable/PageHeader';
import PortFolioContainer from './PortFolioContainer';

const Works = () => {
  return (
    <section className="container lg:rounded-2xl bg-white dark:bg-dark-1 px-4 sm:px-5 lg:px-20">
      <div className="fade">
        <div className="py-12">
          <PageHeader text="Portfolio" posLeft="md:after:left-48" />
          <div className="pb-12 pt-12">
            <PortFolioContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
