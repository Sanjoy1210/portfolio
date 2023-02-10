interface ISingleResumeItemProps {
  bgColor: string;
  label: string;
  from: string;
  address: string;
  duration: string;
}

const SingleResumeItem = ({
  bgColor,
  label,
  from,
  address,
  duration,
}: ISingleResumeItemProps) => {
  return (
    <div
      className={`border-[2px] dark:bg-transparent dark:border-dark py-4 pl-5 pr-3 ${bgColor} rounded-xl mb-6`}
    >
      <div className="flex flex-col">
        <span className="text-sm text-light-gray-1 dark:text-light-gray">
          {duration}
        </span>
        <h4 className="text-xl my-2">{label}</h4>
        <span className="text-light-gray-1 dark:text-light-gray">
          {`${from}, ${address}`}
        </span>
      </div>
    </div>
  );
};

export default SingleResumeItem;
