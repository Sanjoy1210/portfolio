interface IPageHeaderProps {
  text: string;
  posLeft: string;
}

const PageHeader = ({ text, posLeft }: IPageHeaderProps) => {
  return (
    <h1
      className={`text-[40px] font-bold md:after:absolute capitalize font-roboto-slab md:after:w-48 ${posLeft} md:after:h-0.5 md:after:rounded-md relative inline-block md:after:bg-gradient-to-r md:after:from-light md:after:to-light-1 md:after:top-1/2 mt-12 lg:mt-0`}
    >
      {text}
    </h1>
  );
};

export default PageHeader;
