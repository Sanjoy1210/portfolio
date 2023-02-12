import Link from 'next/link';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

interface ISinglePortfolio {
  title: string;
  shortDescription: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
}

const SinglePortFolio = ({
  title,
  shortDescription,
  technologies,
  githubLink,
  liveLink,
}: ISinglePortfolio) => {
  return (
    <li
      className={`relative cursor-default`}
      style={{
        transition:
          'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s',
        visibility: 'visible',
        opacity: 1,
        transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
      }}
    >
      <div className="shadow flex justify-between flex-col items-start relative h-full py-8 px-7 rounded border-transparent border-[2px] bg-transparent dark:bg-transparent dark:border-dark transition-all duration-200 ease-in-out overflow-auto">
        <div className="">
          <div className="flex justify-between items-center mb-9">
            <div className="text-light-gray-1 text-[40px]">
              {/* <IoFolderOpenOutline /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                width={40}
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-folder"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div className="flex items-center -mr-2 5 text-light-gray-1 dark:text-light-slate text-2xl">
              <Link
                href={githubLink}
                className="flex justify-center items-center py-1 px-1.5 relative z-[1]"
                target="_blank"
              >
                <FiGithub />
              </Link>
              <Link
                href={liveLink}
                className="flex justify-center items-center py-1 px-1.5 relative z-[1]"
                target="_blank"
              >
                <FiExternalLink />
              </Link>
            </div>
          </div>
          <h3 className="mb-2.5 text-light-gray-1 dark:text-lightest-slate text-lg font-semibold">
            <Link
              href="#"
              target="_blank"
              className="before:content-[''] before:block before:absolute before:z-0 before:w-full before:h-full before:top-0 before:left-0"
            >
              {title}
            </Link>
          </h3>
          <div className="text-light-gray-1 dark:text-lightest-slate text-sm leading-6">
            <p>{shortDescription}</p>
          </div>
        </div>
        <div className="">
          <ul className="flex items-end flex-wrap p-0 mt-5 list-none space-x-4 text-xs dark:text-slate">
            {technologies?.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default SinglePortFolio;
