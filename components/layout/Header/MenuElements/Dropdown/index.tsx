import { Dispatch, SetStateAction } from 'react';

interface IDropdownProps {
  isDropdown: boolean;
  setIsDropdown: Dispatch<SetStateAction<boolean>>;
}

const Dropdown = ({ isDropdown, setIsDropdown }: IDropdownProps) => {
  return (
    <button
      type="button"
      className="bg-light-2 w-10 h-10 rounded-full flex justify-center items-center transition-all duration-500 ease-in-out cursor-pointer ml-2 shadow-lg lg:hidden"
      onClick={() => setIsDropdown(() => !isDropdown)}
    >
      <div className="strip burger-strip transition-all duration-500 ease-in-out">
        <div
          className={`bg-white h-0.5 rounded-sm  mx-2.5 transition-all duration-[.55s] ease-in w-2 ${
            isDropdown
              ? 'transform rotate-45 translate-y-[2.3px] translate-x-[3px]'
              : ''
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-sm my-1.5 mx-2.5 transition-all duration-[.55s] ease-in w-6 ${
            isDropdown ? 'transform -rotate-45' : ''
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-sm mx-2.5 transition-all duration-[.55s] ease-in ${
            isDropdown
              ? 'transform rotate-45 -translate-y-[5.7px] translate-x-1.5'
              : ''
          } w-[18px]`}
        />
      </div>
    </button>
  );
};

export default Dropdown;
