import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ComandaService from "../../services/ComandaService";
import HeaderComponent from "../HeaderComponent";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { faFolderMinus } from "@fortawesome/free-solid-svg-icons";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
const Comenzi = () => {
  const [comenzi, setComenzi] = useState([]);

  useEffect(() => {
    getAllComenzi();
  }, []);
  const getAllComenzi = () => {
    ComandaService.getAllComenzi()
      .then((response) => {
        setComenzi(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const saveComanda = (e) => {
    e.preventDefault();
  };

  const handleDelete = (index) => {
    console.log(index);
    ComandaService.deleteComanda(index)
      .then((response) => {
        console.log(response);
        getAllComenzi();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container" style={{ marginTop: 15 }}>
      <h2 className="text-center">Comenzi</h2>
      {/* <Link to="/add-item">
        <button className="btn btn-primary mb-2">Adaugă</button>
      </Link> */}
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Comanda ID</th>
            <th>Nume</th>
            <th>Prenume</th>
            <th>Client ID</th>
            <th>Produs</th>
            <th>Cantitate</th>
            <th>Ziua curenta</th>
            <th>Interval orar</th>
            <th>Pret total</th>
            <th>Operator ID</th>
            <th>Reducere aplicata</th>
            <th>Acceptă</th>
            <th>Refuză</th>
            <th>Penalizare</th>
          </tr>
        </thead>
        <tbody>
          {comenzi.map((comenzi, index) => (
            <tr key={comenzi.id_comanda}>
              <td>{comenzi.id_comanda}</td>
              <td>{comenzi.nume}</td>
              <td>{comenzi.prenume}</td>
              <td>{comenzi.id_client}</td>
              {console.log(comenzi)}
              <td>{comenzi.produs}</td>
              <td>{comenzi.cantitate}</td>
              <td>{comenzi.ziua_curenta}</td>
              <td>{comenzi.interval_orar}</td>
              <td>{comenzi.pret_total}</td>
              <td>{comenzi.reducere_aplicata}</td>
              <td>{comenzi.id_operator}</td>
              <td>
                {comenzi.status}
                <Link
                  //accepta
                  //className="btn btn-success"
                  onClick={saveComanda}
                  style={{
                    marginLeft: "20px",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faClipboardCheck}
                    style={{ color: "#264796", fontSize: "20px" }}
                  />
                </Link>
              </td>
              <td>
                <Link
                  //refuza
                  // className="btn btn-danger"
                  onClick={() => handleDelete(comenzi.id_comanda)}
                  style={{
                    marginLeft: "20px",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faFolderMinus}
                    style={{ color: "#264796", fontSize: "20px" }}
                  />
                </Link>
              </td>
              <td>
                <Link
                  //penalizare
                  //className="btn btn-info"
                  onClick={saveComanda}
                  style={{ marginLeft: "30px" }}
                >
                  <FontAwesomeIcon
                    icon={faExclamation}
                    style={{
                      color: "#264796",
                      fontSize: "20px",
                    }}
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

export default Comenzi;
