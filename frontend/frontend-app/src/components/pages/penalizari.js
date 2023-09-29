import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PenalizareService from "../../services/PenalizareService";
import HeaderComponent from "../HeaderComponent";
import { Link } from "react-router-dom";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Penalizari = () => {
  const [penalizari, setPenalizari] = useState([]);

  useEffect(() => {
    getAllPenalizari();
  }, []);
  const getAllPenalizari = () => {
    PenalizareService.getAllPenalizari()
      .then((response) => {
        setPenalizari(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (index) => {
    console.log(index);
    PenalizareService.deletePenalizare(index)
      .then((response) => {
        console.log(response);
        getAllPenalizari();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container" style={{ marginTop: 15 }}>
      <h2 className="text-center">Penalizări</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Penalizare ID</th>
            <th>Nume</th>
            <th>Prenume</th>
            <th>Comanda ID</th>
            <th>Client ID</th>
            <th>Șterge</th>
          </tr>
        </thead>
        <tbody>
          {penalizari.map((penalizari, index) => (
            <tr key={penalizari.id_penalizare}>
              <td>{penalizari.id_penalizare}</td>
              <td>{penalizari.nume}</td>
              <td>{penalizari.prenume}</td>

              <td>{penalizari.id_comanda}</td>
              <td>{penalizari.id_client}</td>

              <td>
                <Link
                  // className="btn btn-danger"
                  onClick={() => handleDelete(penalizari.id_penalizare)}
                  // style={{ marginLeft: "30px" }}
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    style={{
                      color: "#264796",
                      fontSize: "20px",
                      // fontSize: "20px",
                      // width: "50px",
                      // display: "block",
                      // margin: "0 auto",
                    }}
                    // style={{ color: "#264796", fontSize: "20px" }}
                  />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Penalizari;
