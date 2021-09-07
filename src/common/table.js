import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, {
  textFilter,
  dateFilter,
  selectFilter 
} from "react-bootstrap-table2-filter";
import * as data from '../constant/data.json';
import { getData, setData } from '../services/localstorage'

function Table() {
  const [resourceData, setResourceData] = useState([]);
  useEffect(() => {
    getBookingData();
  }, []);

  const getBookingData = () => {
    const a = getData();
      setResourceData(a);
  };
  const columns = [
    {
      dataField: "name",
      text: "Name",
      filter: textFilter({
        style: {
          marginTop: "20px",
        },
      }),
      headerAlign: "center",
      align: "center",
    },
    {
      dataField: "code",
      text: "code",
      filter: textFilter({
        style: {
          marginTop: "20px",
        },
      }),
      align: "center",
      headerAlign: "center",
    },
    {
      dataField: "availability",
      text: "availability",
      filter: textFilter({
        style: {
          marginTop: "20px",
        },
      }),
      headerAlign: "center",
      align: "center",
    },
    {
      dataField: "needing_repair",
      text: "needing_repair",
      filter: textFilter({
        style: {
          marginTop: "20px",
        },
      }),
      headerAlign: "center",
      align: "center",
    },
    {
      dataField: "durability",
      text: "durability",
      filter: textFilter({
        style: {
          marginTop: "20px",
        },
      }),
      headerAlign: "center",
      align: "center",
    },
    // {
    //   dataField: "time",
    //   text: "Time for filter",
    //   formatter: (cell) => {
    //     return <>{moment(cell).add(1, 'day').format('DD-MM-YYYY hh:mm')}</>
    //   },
    //   filter: selectFilter({
    //     onFilter: filterByDate,
    //     options: timeOptions
    //   })
    // },
  ];
  return (
    <div>
      <BootstrapTable
        keyField="id"
        data={resourceData}
        filter={filterFactory()}
        columns={columns}
      />
    </div>
  );
}

export default Table;
