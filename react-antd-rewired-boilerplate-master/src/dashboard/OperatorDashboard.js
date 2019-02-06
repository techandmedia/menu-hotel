import React from "react";
import { Table, Button } from "antd";

import { getReservation } from "../Fetch/GetData";

class OperatorDashboard extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    tabelUtama: true,
    dataReservation: null,
    len: null,
    // detail: {
    nights: 0,
    quantity: 0
    // }
  };

  componentDidMount() {
    this.getDataReservation();
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevState.dataReservation);
    // console.log(this.state.dataReservation);
    if (prevState.dataReservation !== this.state.dataReservation) {
      this.setState({
        len: this.state.dataReservation.length
      });
      this.getQuantity();
    }
  }

  getDataReservation = () => {
    getReservation(this.props.URL).then(data => {
      this.setState({
        dataReservation: data
      });
    });
  };

  getQuantity = () => {
    this.state.dataReservation.map(res => {
      this.setState(prevState => ({
        nights: prevState.nights + res.nights,
        quantity: prevState.quantity + res.quantity
      }));
    });
  };

  // handle Pagination
  handleChange = (pagination, filters, sorter) => {
    // console.log("Various parameters", pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: "descend",
        columnKey: "age"
      }
    });
  };

  getDetail = nip_nim => {
    let lenDetail = this.state.dataDetail.length;
    let lenTotal = this.state.dataTotal.length;

    // Can't clear state with this
    // this.setState({ dataDetail: [] });

    for (let i = 0; i < lenTotal; i++) {
      if (nip_nim === this.state.dataTotal[i].nip_nim) {
        // This will always replace array[0] with new one
        this.state.dataDetail.splice(0, lenDetail);

        // This keeps adding item to array, that's ok because
        // We can reset it 0 by removing element as the above splice
        this.state.dataDetail.push(this.state.dataTotal[i]);

        // This produces error
        // this.setState({
        //   dataDetail: this.state.dataTotal[i]
        // });
      }
    }
  };

  getSawDetail = nip_nim => {
    let lenSawDetail = this.state.dataSawDetail.length;
    let lenTotal = this.state.dataTotal.length;

    for (let i = 0; i < lenTotal; i++) {
      if (nip_nim === this.state.dataTotal[i].nip_nim) {
        this.state.dataSawDetail.splice(0, lenSawDetail);
        this.state.dataSawDetail.push(this.state.dataTotal[i]);
      }
    }
  };

  onChangeSaw = (nip_nim, record) => {
    if (record) {
      this.getSawDetail(nip_nim);
      this.setState({
        tabelUtama: false,
        tabelSaw: true
      });
    } else if (!record) {
      this.setState({
        tabelUtama: true
      });
    }
  };

  onChangeThreeSixty = (nip_nim, record) => {
    if (record) {
      this.getDetail(nip_nim);
      this.setState({
        tabelUtama: false,
        tabel360: true
      });
    } else if (!record) {
      this.setState({
        tabelUtama: true
      });
    }
  };

  onResetTable = () => {
    this.setState({
      tabelUtama: true,
      tabelSaw: false,
      tabel360: false
    });
  };

  render() {
    const { dataReservation, tabelUtama, len, detail } = this.state;
    // const len = dataReservation.length
    // console.log(len);
    console.log(this.state.nights, this.state.quantity);

    let { sortedInfo } = this.state;

    sortedInfo = sortedInfo || {};

    const columns = [
      {
        title: "ResNo",
        dataIndex: "reservation_number",
        key: "reservation_number",
        sorter: (a, b) => a.reservation_number - b.reservation_number,
        sortOrder:
          sortedInfo.columnKey === "reservation_number" && sortedInfo.order
      },
      {
        title: "Reserve Name",
        dataIndex: "reservation_name",
        key: "reservation_name",
        // sorter: (a, b) => a.name.length - b.name.length,
        // sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
        render: (text, record) => <span>{record.reservation_name}</span>
      },
      {
        title: "Guest Name",
        dataIndex: "reservation_guest",
        key: "reservation_guest",
        // sorter: (a, b) => a.name.length - b.name.length,
        // sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
        render: (text, record) => <span>{record.reservation_guest}</span>
      },
      {
        title: "Arrival",
        dataIndex: "arrival_date",
        key: "arrival_date",
        render: (text, record) => <span>{record.arrival_date}</span>
      },
      {
        title: "Depart",
        dataIndex: "depart_date",
        key: "depart_date",
        render: (text, record) => <span>{record.depart_date}</span>
      },
      {
        title: "Category",
        dataIndex: "category",
        key: "category"
      },
      {
        title: "Nights",
        dataIndex: "nights",
        key: "nights"
      },
      {
        title: "Qty",
        dataIndex: "quantity",
        key: "quantity"
      },
      {
        title: "Room Rate",
        dataIndex: "room_rate",
        key: "room_rate"
      }
    ];

    const columnDetail = [
      {
        title: "NIP/NIM",
        dataIndex: "nip_nim",
        key: "nip_nim",
        sorter: (a, b) => a.nip_nim.length - b.nip_nim.length,
        sortOrder: sortedInfo.columnKey === "nip_nim" && sortedInfo.order
      },
      {
        title: "Nama",
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
        render: (text, record) => (
          <span
            onClick={this.onChangeThreeSixty.bind(this, record.nip_nim, true)}
          >
            {record.name}
          </span>
        )
      },
      {
        title: "Nilai P1",
        dataIndex: "p1",
        key: "p1",
        sorter: (a, b) => a.p1 - b.p1,
        sortOrder: sortedInfo.columnKey === "p1" && sortedInfo.order
      },
      {
        title: "Nilai P2",
        dataIndex: "p2",
        key: "p2",
        sorter: (a, b) => a.p2 - b.p2,
        sortOrder: sortedInfo.columnKey === "p2" && sortedInfo.order
      },
      {
        title: "Nilai P3",
        dataIndex: "p3",
        key: "p3",
        sorter: (a, b) => a.p3 - b.p3,
        sortOrder: sortedInfo.columnKey === "p3" && sortedInfo.order
      },
      {
        title: "Nilai P4",
        dataIndex: "p4",
        key: "p4",
        sorter: (a, b) => a.p4 - b.p4,
        sortOrder: sortedInfo.columnKey === "p4" && sortedInfo.order
      },
      {
        title: "Total Nilai P",
        dataIndex: "total",
        key: "total",
        sorter: (a, b) => a.total - b.total,
        sortOrder: sortedInfo.columnKey === "total" && sortedInfo.order
      }
    ];

    const columnSaw = [
      {
        title: "NIP/NIM",
        dataIndex: "nip_nim",
        key: "nip_nim",
        sorter: (a, b) => a.nip_nim.length - b.nip_nim.length,
        sortOrder: sortedInfo.columnKey === "nip_nim" && sortedInfo.order
      },
      {
        title: "Nama",
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
        render: (text, record) => (
          <span onClick={this.onChangeSaw.bind(this, record.nip_nim, true)}>
            {record.name}
          </span>
        )
      },
      {
        title: "Ranking",
        dataIndex: "ranking",
        key: "ranking",
        sorter: (a, b) => a.ranking - b.ranking,
        sortOrder: sortedInfo.columnKey === "ranking" && sortedInfo.order
      },
      {
        title: "Nilai C1",
        dataIndex: "c1",
        key: "c1",
        sorter: (a, b) => a.c1 - b.c1,
        sortOrder: sortedInfo.columnKey === "c1" && sortedInfo.order
      },
      {
        title: "Nilai C2",
        dataIndex: "c2",
        key: "c2",
        sorter: (a, b) => a.c2 - b.c2,
        sortOrder: sortedInfo.columnKey === "c2" && sortedInfo.order
      },
      {
        title: "Nilai C3",
        dataIndex: "c3",
        key: "c3",
        sorter: (a, b) => a.c3 - b.c3,
        sortOrder: sortedInfo.columnKey === "c3" && sortedInfo.order
      },
      {
        title: "Nilai C4",
        dataIndex: "c4",
        key: "c4",
        sorter: (a, b) => a.c4 - b.c4,
        sortOrder: sortedInfo.columnKey === "c4" && sortedInfo.order
      },
      {
        title: "Nilai C5",
        dataIndex: "c5",
        key: "c5",
        sorter: (a, b) => a.c5 - b.c5,
        sortOrder: sortedInfo.columnKey === "c5" && sortedInfo.order
      },
      {
        title: "Nilai C6",
        dataIndex: "c6",
        key: "c6",
        sorter: (a, b) => a.c6 - b.c6,
        sortOrder: sortedInfo.columnKey === "c6" && sortedInfo.order
      },
      {
        title: "Nilai C7",
        dataIndex: "c7",
        key: "c7",
        sorter: (a, b) => a.c7 - b.c7,
        sortOrder: sortedInfo.columnKey === "c7" && sortedInfo.order
      },
      {
        title: "Total Nilai C",
        dataIndex: "totalSaw",
        key: "totalSaw",
        sorter: (a, b) => a.totalSaw - b.totalSaw,
        sortOrder: sortedInfo.columnKey === "totalSaw" && sortedInfo.order
      }
    ];

    return (
      <div>
        <div className="table-operations" />
        <h1>Operator Dashboard</h1>
        {(() => {
          if (tabelUtama) {
            return (
              <React.Fragment>
                <Table
                  columns={columns}
                  dataSource={dataReservation}
                  onChange={this.handleChange}
                  // Warning: Each record in table should have a unique `key` prop,
                  // or set `rowKey` to an unique primary key.
                  rowKey="reservation_number" //to prevent error above
                />
                <p>
                  Total: Room: {len}{" "}
                  <span style={{marginLeft: 10}}>Total Nights: {this.state.nights}</span>
                  <span style={{marginLeft: 10}}>Total Quantity: {this.state.quantity}</span>
                </p>
              </React.Fragment>
            );
          }
          //  else if (!tabelUtama && tabel360) {
          //   return (
          //     <div>
          //       <Button
          //         onClick={this.onResetTable.bind()}
          //         style={{ marginBottom: 10 }}
          //       >
          //         Kembali ke Daftar Penilaian
          //       </Button>
          //       <Table
          //         columns={columnDetail}
          //         dataSource={dataDetail}
          //         onChange={this.handleChange}
          //         rowKey="nip_nim"
          //       />
          //     </div>
          //   );
          // } else if (!tabelUtama && tabelSaw) {
          //   return (
          //     <div>
          //       <Button
          //         onClick={this.onResetTable.bind()}
          //         style={{ marginBottom: 10 }}
          //       >
          //         Kembali ke Daftar Penilaian
          //       </Button>
          //       <Table
          //         columns={columnSaw}
          //         dataSource={dataSawDetail}
          //         onChange={this.handleChange}
          //         rowKey="nip_nim"
          //       />
          //     </div>
          //   );
          // }
        })()}
      </div>
    );
  }
}

export default OperatorDashboard;
