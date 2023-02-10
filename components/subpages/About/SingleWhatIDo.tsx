import Image from 'next/image';

interface ISingleWhatIDoProps {
  imageURL: string;
  label: string;
  description: string;
  bgColor: string;
}

const SingleWhatIDo = ({
  imageURL,
  label,
  description,
  bgColor,
}: ISingleWhatIDoProps) => {
  return (
    <div
      className={`border-[2px] dark:bg-transparent dark:border-dark p-6 ${bgColor} rounded-xl`}
    >
      <div className="flex gap-4">
        <Image
          src={imageURL}
          alt={label}
          className="w-10 h-10"
          width={40}
          height={40}
          priority={true}
        />
        <div className="flex flex-col">
          <h4 className="text-xl font-semibold">{label}</h4>
          <p className="leading-8 text-light-gray-1 dark:text-light-gray mt-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleWhatIDo;
