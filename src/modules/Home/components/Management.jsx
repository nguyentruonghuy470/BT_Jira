import React, { useState } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import { Text } from "@mantine/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faBars,
  faMagnifyingGlass,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import SCSS from "../css/style.module.scss";
import * as images from "../images";

import useRequest from "hooks/useRequest";
import projectAPI from "apis/projectAPI";

import Modal from "./Modal";

const Management = () => {
  const {
    data: movies,
    isLoading,
    error,
  } = useRequest(() => projectAPI.getProjectAll());

  const [open, setOpen] = React.useState(false);
  
  const handleClose = () => {
    setOpen(false);
  };

  // const handleMaxWidthChange = (event) => {
  //   setMaxWidth(
  //     // @ts-expect-error autofill of arbitrary value is not handled.
  //     event.target.value
  //   );
  // };

  // const handleFullWidthChange = (event) => {
  //   setFullWidth(event.target.checked);
  // };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];
  // const row1 = movies?.map((i) => {
  //   return i.id;
  // });
  // console.log(row1);
  // const rows = [
  //   { id: row1, lastName: "Lannister", firstName: "Cersei", age: 42 },
  //   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  //   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  //   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  //   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  //   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  //   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  //   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  // ];
  
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const sidebarClass = sidebarOpen ? `${SCSS.sidebaropen}` : `${SCSS.sidebar}`;
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };
  const [movieId, setMovieId] = React.useState(7576);

  const handleGetMovieId = (id) => {
    setOpen(true);
    setMovieId(id);
  };
  return (
    <div className={SCSS.containerManagement}>
      <div className={sidebarClass}>
        <div className={SCSS.iconUser}>
          <FontAwesomeIcon
            icon={faBars}
            color="#9e9e9e"
            onClick={handleViewSidebar}
          />
        </div>

        <div className={SCSS.example1}>
          <FontAwesomeIcon className="iconUser" icon={faPlus} color="#9e9e9e" />
          <Text
            component="span"
            align="center"
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan", deg: 45 }}
            size="20px"
            weight={700}
            style={{ fontFamily: "Greycliff CF, sans-serif" }}
          >
            Create
          </Text>
        </div>

        <div className={SCSS.example1}>
          <FontAwesomeIcon
            className="iconUser"
            icon={faMagnifyingGlass}
            color="#9e9e9e"
          />
          <Text
            component="span"
            align="center"
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan", deg: 45 }}
            size="20px"
            weight={700}
            style={{ fontFamily: "Greycliff CF, sans-serif" }}
          >
            Search
          </Text>
        </div>
      </div>
      <div className={SCSS.projectTask}>
        <div className={SCSS.projectTitle}>
          <img className={SCSS.imgIcon} src={images.image1} />
          <div>
            <h5>CyberLearn.vn</h5>
            <span>Report bugs</span>
          </div>
        </div>
        <div className={SCSS.projectFunction}>
          <div>
            <FontAwesomeIcon
              className="iconUser"
              icon={faGear}
              color="#9e9e9e"
            />
            <Text
              component="span"
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan", deg: 45 }}
              size="16"
              weight={700}
              style={{ fontFamily: "Greycliff CF, sans-serif" }}
            >
              Project Management
            </Text>
          </div>
          <div>
            <FontAwesomeIcon
              className="iconUser"
              icon={faGear}
              color="#9e9e9e"
            />
            <Text
              component="span"
              align="center"
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan", deg: 45 }}
              size="16"
              weight={700}
              style={{ fontFamily: "Greycliff CF, sans-serif" }}
            >
              Create project
            </Text>
          </div>
        </div>
      </div>
      <div className={SCSS.projectManagement}>
        <div className={SCSS.containerProjectManagement}>
          <h4>Project management</h4>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Category</th>
                <th>Creator</th>
                <th>Members</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {movies?.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.projectName}</td>
                  <td>{product.categoryName}</td>
                  <td>{product.creator.name}</td>
                  <td>
                    {product.members.map((i, index) => {
                      return <span key={index}>{i.name}</span>;
                    })}
                  </td>
                  <td>
                    <button
                      className="btn btn-success me-2"
                      onClick={() => handleGetMovieId(product.id)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      // onClick={}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Modal handleClose={handleClose} open={open} movieId={movieId} />
        </div>
      </div>
    </div>
  );
};

export default Management;
