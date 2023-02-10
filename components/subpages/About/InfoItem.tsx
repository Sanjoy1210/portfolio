import { IconType } from 'react-icons/lib';

interface IInfoItemProps {
  Icon: IconType;
  label: string;
  value: string;
  color: string;
}

const InfoItem = ({ Icon, label, value, color }: IInfoItemProps) => {
  return (
    <div className="flex">
      <span
        className={`bg-white shadow-md rounded-md w-12 h-12 text-2xl flex items-center justify-center ${color} dark:bg-dark mr-2.5`}
      >
        <Icon />
      </span>
      <div className="flex flex-col space-y-1 pt-0.5">
        <span className="text-xs text-light-gray-1 dark:text-light-gray">
          {label}
        </span>
        <span
          className={`transition-all text-base font-medium md:text-sm lg:text-base duration-300 ease-in-out ${
            label === 'Phone' || label === 'Email'
              ? 'hover:text-light cursor-pointer'
              : 'dark:text-white text-dark-1'
          }`}
        >
          {label === 'Phone' ? (
            <a href={`tel:${value}`}>{value}</a>
          ) : label === 'Email' ? (
            <a href={`mailto:${value}`}>{value}</a>
          ) : (
            value
          )}
        </span>
      </div>
    </div>
  );
};

export default InfoItem;
