import InfoItem from './InfoItem';
import { personalInfo } from './utils/aboutData';

const PersonalInfo = () => {
  return (
    <div className="">
      <h3 className="text-2xl font-medium dark:text-white my-5">
        Personal Info
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
        {personalInfo?.map((info) => (
          <InfoItem key={info.id} {...info} />
        ))}
      </div>
    </div>
  );
};

export default PersonalInfo;
