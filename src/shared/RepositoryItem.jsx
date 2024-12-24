import { CircleStackIcon } from '@heroicons/react/24/outline';

const RepositoryItem = ({ title, isPrivate, language, size, days }) => {
  return (
    <div className="border-t-[1px] p-4 text-[#181D27] hover:bg-[#F5F5F5] transition duration-200">
      <div className="flex items-center gap-2 mb-2">
        <h2 className="font-medium">{title}</h2>
        <span className="text-xs text-[#175CD3] bg-[#EFF8FF] rounded-xl border border-blue-100 py-[2px] px-2">
          {isPrivate ? 'Private' : 'Public'}
        </span>
      </div>
      <div className="text-sm flex items-center gap-8">
        <h4 className="">
          {language}{' '}
          <div className="inline-block mb-[1px] ml-1 text-center size-2 bg-[#1570EF] rounded-3xl"></div>
        </h4>
        <div className="flex items-center gap-2">
          <CircleStackIcon className="size-4" />
          <span>{size} KB</span>
        </div>
        <p>
          Updated {days} {days === 1 ? 'day' : 'days'} ago
        </p>
      </div>
    </div>
  );
};

export default RepositoryItem;
