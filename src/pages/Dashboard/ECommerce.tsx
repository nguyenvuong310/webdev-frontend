import React from 'react';

import {
  GroupA00,
  GroupA01,
  GroupB00,
  GroupC00,
  GroupD01,
  GroupType,
} from '../../utils/const/group_type.enum';

import TableScore from '../../components/Tables/TableScore';
const ECommerce: React.FC = () => {
  return (
    <>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-6">
          <TableScore GroupName={GroupA00} typeName={GroupType.A00} />
        </div>
        <div className="col-span-12 xl:col-span-6">
          <TableScore GroupName={GroupA01} typeName={GroupType.A01} />
        </div>
        <div className="col-span-12 xl:col-span-6">
          <TableScore GroupName={GroupB00} typeName={GroupType.B00} />
        </div>
        <div className="col-span-12 xl:col-span-6">
          <TableScore GroupName={GroupC00} typeName={GroupType.C00} />
        </div>
        <div className="col-span-12 xl:col-span-6">
          <TableScore GroupName={GroupD01} typeName={GroupType.D01} />
        </div>
      </div>
    </>
  );
};

export default ECommerce;
