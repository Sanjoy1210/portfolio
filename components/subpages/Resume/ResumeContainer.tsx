import SingleResumeHeader from './SingleResumeHeader';
import SingleResumeItem from './SingleResumeItem';
import { resumeData } from './utils/resumeData';

const ResumeContainer = () => {
  const { education, awards, experience } = resumeData;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div>
        <SingleResumeHeader label={education?.label} Icon={education?.Icon} />
        {education?.graduationsData?.map((item) => (
          <SingleResumeItem key={item?.id} {...item} />
        ))}
      </div>
      <div>
        <SingleResumeHeader label={experience?.label} Icon={experience?.Icon} />
        {experience?.experiencesData?.map((item) => (
          <SingleResumeItem key={item?.id} {...item} />
        ))}
      </div>
      <div>
        <SingleResumeHeader label={awards?.label} Icon={awards?.Icon} />
        {awards?.awardsData?.map((item) => (
          <SingleResumeItem key={item?.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ResumeContainer;
