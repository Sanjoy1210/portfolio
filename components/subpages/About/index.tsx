import PageHeader from '@/reusable/PageHeader';
import Image from 'next/image';
import PersonalInfo from './PersonalInfo';
import WhatIDo from './WhatIDo';
import WhoAmI from './WhoAmI';

const About = () => {
  return (
    <section className="container lg:rounded-2xl bg-white dark:bg-dark-1 px-4 sm:px-5 lg:px-20">
      <div className="w-full">
        <div className="py-12">
          <PageHeader text="About me" />
          <div className="grid grid-cols-12 md:gap-8 lg:gap-10 pt-4 md:pt-10 items-center">
            <div className="col-span-12 md:col-span-4">
              <Image
                src="/images/about.png"
                alt="About me"
                className="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0"
                width={300}
                height={400}
                priority={true}
              />
            </div>
            <div className="col-span-12 md:col-span-8 space-y-2.5 ">
              <WhoAmI />
              <PersonalInfo />
            </div>
          </div>
        </div>
        <WhatIDo />
      </div>
    </section>
  );
};

export default About;
