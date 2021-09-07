import React, { useEffect, useState } from "react";
import Table from '../common/table'
import BookButton from '../common/bookButton'
import ReturnButton from '../common/returnButton'


function Dashboard() {

  return (
    <>
        <Table />
        <div>
          <BookButton />
          <ReturnButton />
        </div>
        <div>this is Dashboard page</div>
    </>
  );
}

export default Dashboard;
