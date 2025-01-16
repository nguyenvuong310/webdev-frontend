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

        <div className="p-4 md:p-6 xl:p-9">
          <input type="text" placeholder="Enter text" />
          <Link
            to="#"
            className="inline-flex items-center justify-center rounded-md bg-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            Button
          </Link>
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
