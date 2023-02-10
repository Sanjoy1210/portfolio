import SingleWhatIDo from './SingleWhatIDo';
import { whatIDo } from './utils/aboutData';

const WhatIDo = () => {
  return (
    <div className="pb-12">
      <h1 className="text-[40px] font-bold capitalize font-roboto-slab mt-12 lg:mt-0">
        What I Do!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-5">
        {whatIDo?.map((item) => (
          <SingleWhatIDo key={item?.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default WhatIDo;
