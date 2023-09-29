import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemService from "../../services/ItemService";
import HeaderComponent from "../HeaderComponent";
const MeniulZilei = () => {
  const [itemiActivi, setItemiActivi] = useState([]);
  useEffect(() => {
    getItemiActivi();
  }, []);
  const getItemiActivi = () => {
    ItemService.getItemiActivi()
      .then((response) => {
        setItemiActivi(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ziuaSaptamanii = [
    "Duminica",
    "Luni",
    "Marți",
    "Miercuri",
    "Joi",
    "Vineri",
    "Saturday",
  ];

  const d = new Date();
  let zi_saptamana = ziuaSaptamanii[d.getDay()];
  const zi = d.getDate().toString().padStart(2, "0");
  const luna = (d.getMonth() + 1).toString().padStart(2, "0");
  const an = d.getFullYear();

  const formatZi = `${zi}.${luna}.${an}`;
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "Center",
          alignItems: "Center",
          height: "5vh",
          marginTop: 15,
        }}
      >
        <h1>Meniul zilei</h1>
      </div>

      <div className="wrapper">
        <div
          className="title"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4>
            <span>
              {zi_saptamana} {formatZi}
            </span>
          </h4>
        </div>
        <div
          className="section-center"
          style={{
            display: "flex",
            width: "90%",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
            marginLeft: "70px",
            marginTop: "20px",
          }}
        >
          {itemiActivi.map((item) => {
            return (
              <div
                className="single-menu"
                key={item.id_item}
                style={{
                  display: "flex",
                  width: "30%",
                  // border: "1px solid black",
                  height: "200px",
                  margin: "10px",
                  boxShadow: "4px 4px 4px 4px rgba(0.2, 0.2, 0.2, 0.2)",
                  borderRadius: "5%  5% 5% 5%",
                }}
              >
                {/* de aici te joci cu design-ul la grid, il faci cum vrei */}
                <img
                  src={`data:image/png;base64,${item.img}`}
                  style={{
                    width: "50%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    marginTop: "45px",
                  }}
                />
                <div
                  className="menu-content"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <h4 style={{ margin: "0px" }}>{item.denumire}</h4>
                  <h5>{item.pret} lei</h5>
                  <h5 style={{ margin: "0px" }}>{item.descriere}</h5>
                  {/* style={{ margin: "0px" }} */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MeniulZilei;
