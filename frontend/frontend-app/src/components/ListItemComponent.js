import React, { useEffect, useState } from "react";
// import Table from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import ItemService from "../services/ItemService";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const ListItemComponent = () => {
  const [itemi, setItemi] = useState([]);

  useEffect(() => {
    getAllItemi();
  }, []);
  const getAllItemi = () => {
    ItemService.getAllItemi()
      .then((response) => {
        setItemi(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleEdit = (index) => {
    // console.log(index);
  };

  const handleDelete = (index) => {
    console.log(index);
    ItemService.deleteItem(index)
      .then((response) => {
        console.log(response);
        getAllItemi();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container" style={{ marginTop: 15 }}>
      <h2 className="text-center">Editare meniu</h2>
      <Link to="/add-item">
        <button className="btn btn-primary mb-2" style={{ width: "100px" }}>
          Adaugă
        </button>
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Denumire</th>
            <th>Pret</th>
            <th>Descriere</th>
            <th>Itemi activi</th>
            <th>Stoc portii</th>
            <th>Imagine</th>
            <th>Editeză</th>
            <th>Șterge</th>
          </tr>
        </thead>
        <tbody>
          {itemi.map((itemi, index) => (
            <tr key={itemi.id_item}>
              <td>{itemi.id_item}</td>
              {/* <td>{itemi.id_item}</td> */}
              <td>{itemi.denumire}</td>
              <td>{itemi.pret}</td>
              <td>{itemi.descriere}</td>
              <td>{itemi.activ}</td>
              <td>{itemi.stoc_portii}</td>

              <td style={{ width: "15%" }}>
                <img
                  src={`data:image/png;base64,${itemi.img}`}
                  style={{ width: "50%", height: "50%" }}
                />
              </td>
              <td
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link to={`/edit-item/${itemi.id_item}`}>
                  <FontAwesomeIcon
                    icon={faPenSquare}
                    style={{
                      color: "#264796",
                      fontSize: "25px",
                    }}
                    onEdit={handleEdit(itemi.id_item)}
                  />
                </Link>
              </td>
              <td>
                <Link
                  // className="btn btn-danger"
                  onClick={() => handleDelete(itemi.id_item)}
                  style={{ marginLeft: "10px" }}
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    style={{
                      color: "#264796",
                      fontSize: "20px",
                      width: "50px",
                    }}
                  />
                </Link>
              </td>
              {console.log(itemi)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListItemComponent;
