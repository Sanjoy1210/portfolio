import { IconType } from 'react-icons/lib';

interface ISingleResumeHeaderProps {
  label: string;
  Icon: IconType;
}

const SingleResumeHeader = ({ label, Icon }: ISingleResumeHeaderProps) => {
  return (
    <div className="flex items-center mb-4">
      <span className="text-light text-2xl">
        <Icon />
      </span>
      <h1 className="text-2xl font-medium capitalize ml-2">{label}</h1>
    </div>
  );
};

export default SingleResumeHeader;
