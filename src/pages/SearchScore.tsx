import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

const SearchScores = () => {
  return (
    <>
      <Breadcrumb pageName="SearchScores" />

      <div className="mb-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            User Registration
          </h3>
        </div>
        <div className="flex flex-col p-4 md:p-6 xl:p-9 space-y-2">
          <p>Registration Number:</p>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Enter registration number"
              className="border-2 focus:ring-0 p-2 rounded-sm w-1/4"
            />
            <Link
              to="#"
              className="inline-flex items-center justify-center rounded-md bg-black py-2 px-4 text-center font-medium text-white hover:bg-opacity-90"
            >
              Submit
            </Link>
          </div>
        </div>
      </div>

      <div className="mb-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Detailed Score
          </h3>
        </div>
      </div>
    </>
  );
};

export default SearchScores;
