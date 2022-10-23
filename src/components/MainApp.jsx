import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Papa from "papaparse";
import { MDBDataTableV5 } from "mdbreact";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import Map from "./Map";
import SearchBar from "./SearchBarC";
import SearchBarC from "./SearchBarC";
import SearchBarP from "./SearchBarP";

const MainApp = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [dataToMap, setDataToMap] = useState([]);
  const [columns, setcolumns] = useState([
    {
      label: [
        <label
          className="default-text--xs text-color--dt-column"
          aria-hidden="true"
          key="1"
        >
          wellName
        </label>,
      ],
      field: "wellName",
    },
    {
      label: [
        <label
          className="default-text--xs text-color--dt-column"
          aria-hidden="true"
          key="2"
        >
          boreID
        </label>,
      ],
      field: "boreID",
    },
    {
      label: [
        <label
          className="default-text--xs text-color--dt-column"
          aria-hidden="true"
          key="3"
        >
          compSubId
        </label>,
      ],
      field: "compSubId",
    },
    {
      label: [
        <label
          className="default-text--xs text-color--dt-column"
          aria-hidden="true"
          key="4"
        >
          Type
        </label>,
      ],
      field: "Type",
    },
    {
      label: [
        <label
          className="default-text--xs text-color--dt-column"
          aria-hidden="true"
          key="5"
        >
          X
        </label>,
      ],
      field: "X",
    },
    {
      label: [
        <label
          className="default-text--xs text-color--dt-column"
          aria-hidden="true"
          key="6"
        >
          Y
        </label>,
      ],
      field: "Y",
    },
    {
      label: [
        <label
          className="default-text--xs text-color--dt-column"
          aria-hidden="true"
          key="7"
        >
          TD
        </label>,
      ],
      field: "TD",
    },
    {
      label: [
        <label
          className="default-text--xs text-color--dt-column"
          aria-hidden="true"
          key="8"
        >
          isHorizontal
        </label>,
      ],
      field: "isHorizontal",
    },
    {
      label: [
        <label
          className="default-text--xs text-color--dt-column"
          aria-hidden="true"
          key="9"
        >
          reservoir
        </label>,
      ],
      field: "reservoir",
    },
    {
      label: [
        <label
          className="default-text--xs text-color--dt-column"
          aria-hidden="true"
          key="9"
        >
          faultBlock
        </label>,
      ],
      field: "faultBlock",
    },
    {
      label: [
        <label
          className="default-text--xs text-color--dt-column"
          aria-hidden="true"
          key="9"
        >
          compartment
        </label>,
      ],
      field: "compartment",
    },
    {
      label: [
        <label
          className="default-text--xs text-color--dt-column"
          aria-hidden="true"
          key="9"
        >
          maxBHP
        </label>,
      ],
      field: "maxBHP",
    },
    {
      label: [
        <label
          className="default-text--xs text-color--dt-column"
          aria-hidden="true"
          key="9"
        >
          long
        </label>,
      ],
      field: "long",
    },
    {
      label: [
        <label
          className="default-text--xs text-color--dt-column"
          aria-hidden="true"
          key="9"
        >
          lat
        </label>,
      ],
      field: "lat",
    },
  ]);

  const [columns1, setcolumns1] = useState([
    {
      label: [
        <label
          className="default-text--xs text-color--dt-column"
          aria-hidden="true"
          key="1"
        >
          Year
        </label>,
      ],
      field: "Year",
    },
    {
      label: [
        <label
          className="default-text--xs text-color--dt-column"
          aria-hidden="true"
          key="2"
        >
          Month
        </label>,
      ],
      field: "Month",
    },
    {
      label: [
        <label
          className="default-text--xs text-color--dt-column"
          aria-hidden="true"
          key="3"
        >
          wellAPI
        </label>,
      ],
      field: "wellAPI",
    },
    {
      label: [
        <label
          className="default-text--xs text-color--dt-column"
          aria-hidden="true"
          key="4"
        >
          boreID
        </label>,
      ],
      field: "boreID",
    },
    {
      label: [
        <label
          className="default-text--xs text-color--dt-column"
          aria-hidden="true"
          key="5"
        >
          compSubId
        </label>,
      ],
      field: "compSubId",
    },
    {
      label: [
        <label
          className="default-text--xs text-color--dt-column"
          aria-hidden="true"
          key="6"
        >
          BHP
        </label>,
      ],
      field: "BHP",
    },
    {
      label: [
        <label
          className="default-text--xs text-color--dt-column"
          aria-hidden="true"
          key="7"
        >
          Oil
        </label>,
      ],
      field: "Oil",
    },
    {
      label: [
        <label
          className="default-text--xs text-color--dt-column"
          aria-hidden="true"
          key="8"
        >
          Water
        </label>,
      ],
      field: "Water",
    },
    {
      label: [
        <label
          className="default-text--xs text-color--dt-column"
          aria-hidden="true"
          key="9"
        >
          Gas
        </label>,
      ],
      field: "Gas",
    },
    {
      label: [
        <label
          className="default-text--xs text-color--dt-column"
          aria-hidden="true"
          key="9"
        >
          waterInj
        </label>,
      ],
      field: "waterInj",
    },
    {
      label: [
        <label
          className="default-text--xs text-color--dt-column"
          aria-hidden="true"
          key="9"
        >
          CompL
        </label>,
      ],
      field: "CompL",
    },
    {
      label: [
        <label
          className="default-text--xs text-color--dt-column"
          aria-hidden="true"
          key="9"
        >
          FlowDays
        </label>,
      ],
      field: "FlowDays",
    },
    {
      label: [
        <label
          className="default-text--xs text-color--dt-column"
          aria-hidden="true"
          key="9"
        >
          Pressure
        </label>,
      ],
      field: "Pressure",
    },
    {
      label: [
        <label
          className="default-text--xs text-color--dt-column"
          aria-hidden="true"
          key="9"
        >
          Status
        </label>,
      ],
      field: "Status",
    },
  ]);

  const [DataTable, setDataTable] = useState({
    columns: [],
    rows: [],
  });
  const [filteredDataTable, setFilteredDataTable] = useState({
    columns: [],
    rows: [],
  });
  const [DataTable1, setDataTable1] = useState({
    columns: [],
    rows: [],
  });
  const [filteredDataTable1, setFilteredDataTable1] = useState({
    columns: [],
    rows: [],
  });

  const { register, handleSubmit } = useForm();

  const { register: register1, handleSubmit: handleSubmit1 } = useForm();

  const onSubmit = (data) => {
    const dataParsed = Papa.parse(data.file[0], {
      header: true,
      download: true,
      dynamicTyping: true,
      complete: function (results) {
        setData(results.data);
      },
    });
  };

  const onSubmit1 = (data) => {
    const dataParsed = Papa.parse(data.file[0], {
      header: true,
      download: true,
      dynamicTyping: true,
      complete: function (results) {
        setData1(results.data);
      },
    });
  };

  useEffect(() => {
    const processRows =
      data &&
      data.map((item) => {
        return {
          wellName: item.wellName,
          boreID: item.boreID,
          compSubId: item.compSubId,
          Type: item.Type,
          X: item.X,
          Y: item.Y,
          TD: item.TD,
          isHorizontal: item.isHorizontal,
          reservoir: item.reservoir,
          faultBlock: item.faultBlock,
          compartment: item.compartment,
          maxBHP: item.maxBHP,
          long: item.long,
          lat: item.lat,
        };
      });

    setDataTable({
      columns: columns,
      rows: processRows,
    });
    setFilteredDataTable({
      columns: columns,
      rows: processRows,
    });
  }, [data]);

  useEffect(() => {
    const processRows =
      data1 &&
      data1.map((item) => {
        return {
          Year: item.Year,
          Month: item.Month,
          wellAPI: item.wellAPI,
          boreID: item.boreID,
          compSubId: item.compSubId,
          BHP: item.BHP,
          Oil: item.Qo,
          Water: item.Qw,
          Gas: item.Qg,
          waterInj: item.Qs,
          CompL: item.CompL,
          FlowDays: item.FlowDays,
          Pressure: item.Pressure,
          Status: item.Status,
        };
      });

    setDataTable1({
      columns: columns1,
      rows: processRows,
    });
    setFilteredDataTable1({
      columns: columns1,
      rows: processRows,
    });
  }, [data1]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart",
      },
    },
  };

  const chartYears = data1.map((item) => {
    return `${item.Year}`;
  });

  const allMyYears = chartYears
    .filter((item, index) => chartYears.indexOf(item) === index)
    .sort();

  const functionToReduce = (array, year) => {
    const dataFromYear = array.filter((item) => item.Year === year);
    const QoFromYear = dataFromYear.reduce((accumulator, item) => {
      return accumulator + item.Qo;
    }, 0);
    const QwFromYear = dataFromYear.reduce((accumulator, item) => {
      return accumulator + item.Qw;
    }, 0);
    const QgFromYear = dataFromYear.reduce((accumulator, item) => {
      return accumulator + item.Qg;
    }, 0);
    const QsFromYear = dataFromYear.reduce((accumulator, item) => {
      return accumulator + item.Qs;
    }, 0);

    return {
      year: year,
      Qo: QoFromYear,
      Qw: QwFromYear,
      Qg: QgFromYear,
      Qs: QsFromYear,
    };
  };

  useEffect(() => {
    let arrayForChart = [];

    for (let index = 2005; index <= 2018; index++) {
      arrayForChart.push(functionToReduce(data1, index));
    }
    setDataToMap(arrayForChart);
  }, [data1]);

  const chartData = {
    labels: allMyYears,
    datasets: [
      {
        label: "Oil",
        data: dataToMap.map((item) => item.Qo),
        borderColor: "rgb(254, 228, 64)",
        backgroundColor: "rgb(254, 228, 64, 0.5)",
        yAxisID: "y",
      },
      {
        label: "Water",
        data: dataToMap.map((item) => item.Qw),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y",
      },
      {
        label: "Gas",
        data: dataToMap.map((item) => item.Qg),
        borderColor: "rgb(138, 201, 38)",
        backgroundColor: "rgb(138, 201, 38, 0.5)",
        yAxisID: "y",
      },
      {
        label: "WaterInj",
        data: dataToMap.map((item) => item.Qs),
        borderColor: "rgb(106, 76, 147)",
        backgroundColor: "rgb(106, 76, 147, 0.5)",
        yAxisID: "y",
      },
    ],
  };

  return (
    <>
      <Container fluid>
        <br />
        <Row>
          <Col>
            <h1>Tachyus assessment</h1>
          </Col>
        </Row>
        <br />
        <hr />
        <Row>
          <Col>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>
                  Please upload your <strong>completions</strong> CSV file
                </Form.Label>
                <Form.Control type="file" {...register("file")} />
              </Form.Group>
              <Button type="submit" variant="primary">
                Generate table
              </Button>
            </form>
          </Col>
        </Row>
        <br />
        {data.length > 0 && (
          <SearchBarC
            DataTable={DataTable}
            setDataTable={setDataTable}
            filteredDataTable={filteredDataTable}
            setFilteredDataTable={setFilteredDataTable}
          />
        )}
        <Row>
          {
            <MDBDataTableV5
              hover
              pagingTop
              searchBottom={false}
              entries={7}
              data={filteredDataTable}
              entriesLabel=""
              infoLabel={["Showing", "to", "from", "records"]}
              fullPagination
              noRecordsFoundLabel={"There are no records to show."}
            />
          }
        </Row>
        <Container fluid>
          <Row>{data.length > 0 && <Map data={data} />}</Row>
        </Container>
        <br />
        <hr />
        <Row>
          <Col>
            <form onSubmit={handleSubmit1(onSubmit1)}>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>
                  Please upload your <strong>production</strong> CSV file
                </Form.Label>
                <Form.Control type="file" {...register1("file")} />
              </Form.Group>
              <Button type="submit" variant="primary">
                Generate table
              </Button>
            </form>
          </Col>
        </Row>
        <br />
        {data1.length > 0 && (
          <SearchBarP
            DataTable={DataTable1}
            setDataTable={setDataTable1}
            filteredDataTable={filteredDataTable1}
            setFilteredDataTable={setFilteredDataTable1}
          />
        )}
        <Row>
          {
            <MDBDataTableV5
              hover
              pagingTop
              searchBottom={false}
              entries={7}
              data={filteredDataTable1}
              entriesLabel=""
              infoLabel={["Showing", "to", "from", "records"]}
              fullPagination
              noRecordsFoundLabel={"There are no records to show."}
            />
          }
        </Row>
        <Row>
          {data1.length > 0 && (
            <h6>
              <strong>Note: </strong>Due to the amount of data, the chart shows
              amounts per year.
            </h6>
          )}
        </Row>
        <Row>
          {data1.length > 0 && (
            <Line options={options} data={chartData} height={400} width={600} />
          )}
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            <h6>
              Developed by:{" "}
              <a
                href="https://www.linkedin.com/in/ezequielmantillarestrepo-frontend/"
                target="_blank"
              >
                Ezequiel Mantilla
              </a>{" "}
            </h6>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainApp;
