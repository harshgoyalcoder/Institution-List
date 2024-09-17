import { institutions } from "@/dummyData";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import { CurrencyRupeeIcon } from "@heroicons/react/24/outline";
import { Download } from "react-feather";

const InstitutionTable: React.FC = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="overflow-y-auto border border-gray-300 rounded-md shadow-sm">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">CD Rank</th>
              <th className="px-4 py-2 text-left">Institution</th>
              <th className="px-4 py-2 text-left">Course Fees</th>
              <th className="px-4 py-2 text-left">Placement</th>
              <th className="px-4 py-2 text-left">User Reviews</th>
              <th className="px-4 py-2 text-left">Ranking</th>
            </tr>
          </thead>
          <tbody>
            {institutions.map((inst, index) => (
              <tr key={inst.id} className="border-t">
                <td className="px-4 py-2">#{index + 1}</td>
                <td className="px-4 py-2">
                  <div className="flex flex-col justify-between h-full">
                    <span>{inst.name}</span>
                    <div className="flex h-12 justify-between  mt-2">
                      <button className="bg-blue-500 text-xs text-white p-0.5  rounded">
                        <span className="flex">
                          Apply Now {"  "} <ArrowRightIcon className="size-4" />
                        </span>
                      </button>
                      <button className="bg-green-500 text-xs text-white px-2 py-1 rounded">
                        <span className="flex">
                          Download Brochure {"  "}{" "}
                          <Download className="size-4" />
                        </span>
                      </button>
                      <button className="bg-red-500 text-xs text-white px-2 py-1 rounded">
                        <span className="flex">
                          Add To compare
                          <CheckBadgeIcon className="size-4" />
                        </span>
                      </button>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <span className="flex">
                    {" "}
                    <CurrencyRupeeIcon className="size-6" /> {inst.courseFees}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span className="flex">
                    {" "}
                    <CurrencyRupeeIcon className="size-6" />{" "}
                    {inst.placementFees}
                  </span>
                </td>
                <td className="px-4 py-2">{inst.reviews}</td>
                <td className="px-4 py-2">{inst.ranking}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InstitutionTable;
