import { MagnifyingGlassIcon, ArrowPathIcon, PlusIcon } from "@heroicons/react/24/outline"
import RepositoryItem from "../../shared/RepositoryItem"

const repositoryItemsList = [
  {
    title: "design-system",
    isPrivate: false,
    language: "React",
    size: 7320,
    days: 1
  },
  {
    title: "codeant-ci-app",
    isPrivate: true,
    language: "Javascript",
    size: 5871,
    days: 2
  },
  {
    title: "analytics-dashboard",
    isPrivate: true,
    language: "Python",
    size: 4521,
    days: 5
  },
  {
    title: "mobile-app",
    isPrivate: false,
    language: "Swift",
    size: 3096,
    days: 3
  },
  {
    title: "e-commerce-platform",
    isPrivate: true,
    language: "Java",
    size: 6210,
    days: 6
  },
  {
    title: "blog-website",
    isPrivate: false,
    language: "HTML/CSS",
    size: 1876,
    days: 4
  },
  {
    title: "social-network",
    isPrivate: true,
    language: "PHP",
    size: 5432,
    days: 7
  }
]

const Repositories = () => {
  return (
    <div className="bg-[#FAFAFA] max-h-screen overflow-y-auto w-full p-6">
      <div className="bg-white border-[1px] rounded-md">
        <div className="p-4 flex justify-between">
          <div>
            <h1 className="text-xl font-semibold mb-1 text-[#181D27]">Repositories</h1>
            <p className="text-xs mb-3 text-[#414651]">33 total repositories</p>
            <div className="text-[#414651] flex items-center px-2 py-1 border-[1px] gap-2 rounded-lg">
              <MagnifyingGlassIcon className="size-5" />
              <input className="outline-none placeholder:text-sm placeholder:text-[#414651]" placeholder="Search Repositories" type="text" />
            </div>
          </div>
          <div className="flex items-start gap-2">
            <button className="text-[#414651] bg-white flex text-sm gap-1 p-2 border-[1px] rounded-md"><ArrowPathIcon className="size-5" /><span>Refresh All</span></button>
            <button className="text-white bg-[#1570EF]  flex text-sm gap-1 p-2 border-[1px] rounded-md"><PlusIcon className="size-5" /><span>Add Repository</span></button>
          </div>
        </div>

        {
          repositoryItemsList.map((item, index) => (
            <RepositoryItem
              key={index}
              title={item.title}
              isPrivate={item.isPrivate}
              language={item.language}
              size={item.size}
              days={item.days}
            />
          ))
        }

      </div>
    </div>
  )
}

export default Repositories