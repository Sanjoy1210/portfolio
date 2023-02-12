import SinglePortFolio from './SinglePortFolio';
import { worskData } from './utils/worksData';

const PortFolioContainer = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0 relative">
      {worskData?.map((work) => (
        <SinglePortFolio key={work?.id} {...work} />
      ))}
    </ul>
  );
};

export default PortFolioContainer;
