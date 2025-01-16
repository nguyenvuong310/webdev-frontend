import React from 'react';

import TableA00 from '../../components/Tables/TableA00';
import TableA01 from '../../components/Tables/TableA01';
import TableB00 from '../../components/Tables/TableB00';
import TableC00 from '../../components/Tables/TableC00';
import TableD01 from '../../components/Tables/TableD01';

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-6">
          <TableA00 />
        </div>
        <div className="col-span-12 xl:col-span-6">
          <TableA01 />
        </div>
        <div className="col-span-12 xl:col-span-6">
          <TableB00 />
        </div>
        <div className="col-span-12 xl:col-span-6">
          <TableC00 />
        </div>
        <div className="col-span-12 xl:col-span-6">
          <TableD01 />
        </div>
      </div>
    </>
  );
};

export default ECommerce;
