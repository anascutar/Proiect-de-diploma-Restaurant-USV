import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemService from "../services/ItemService";
import { Link } from "react-router-dom";
import Icon from "@mui/material/Icon";
const AdditemComponent = () => {
  const [denumire, setDenumire] = useState("");
  const [pret, setPret] = useState("");
  const [descriere, setDescriere] = useState("");
  const [activ, setActiv] = useState(false);
  const [stoc, setStoc] = useState("");
  const [imagine, setImagine] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const handleCheck = (e) => {
    if (e.target.checked) {
      setActiv(true);
    } else {
      setActiv(false);
    }
  };

  function handleImageChange(evt) {
    const selectedfile = evt.target.files;
    if (selectedfile.length > 0) {
      const [imageFile] = selectedfile;
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const srcData = fileReader.result;
        const encodedImage = srcData.substring(srcData.indexOf(",") + 1);
        setImagine(encodedImage);
      };
      fileReader.readAsDataURL(imageFile);
    }
  }

  const saveItem = (e) => {
    e.preventDefault();

    // console.log(e)
    const item = { denumire, pret, descriere, activ, imagine };
    // console.log(imagine);
    const item2 = {
      denumire: denumire,
      pret: pret,
      descriere: descriere,
      activ: activ,
      stoc_portii: stoc,
      img: imagine,
    };
    //    console.log(item2)

    ItemService.createItem(item2)
      .then((response) => {
        // console.log(response.data)
        navigate("/itemi");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editItem = (e) => {
    //insert code for edit
    e.preventDefault();
    console.log(e);
    const item = { denumire, pret, descriere, activ, stoc, imagine };
    const item2 = {
      denumire: denumire,
      pret: pret,
      descriere: descriere,
      activ: activ,
      stoc_portii: stoc,
      img: imagine, //trimisa in base64//ca dincolo?
    };
    ItemService.updateItem(id, item2)
      .then((response) => {
        // console.log(response.data)
        navigate("/itemi");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    ItemService.getItemById(id)
      .then((response) => {
        setDenumire(response.data.denumire);
        setPret(response.data.pret);
        setDescriere(response.data.descriere);
        setActiv(response.data.activ === "true" ? true : false);
        setStoc(response.data.stoc_portii);
        setImagine(response.data.img);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const title = () => {
    if (id) {
      return <h2 className="text-center">Actualizează meniul</h2>;
    } else {
      return <h2 className="text-center">Adaugă în meniu</h2>;
    }
  };

  return (
    <div>
      <br></br>
      <div className="container - d-flex justify-content-center ">
        <div className="row w-50 p-3 ">
          <div className="card col-md-8 offset-md-2"></div>
          {title()}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Denumire :</label>
                <input
                  type="text"
                  placeholder="Scrie denumirea produsului"
                  name="denumire"
                  className="form-control"
                  value={denumire}
                  onChange={(e) => setDenumire(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Pret :</label>
                <input
                  type="text"
                  placeholder="Scrie pretul produsului"
                  name="pret"
                  className="form-control"
                  value={pret}
                  onChange={(e) => setPret(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Descriere :</label>
                <input
                  type="text"
                  placeholder="Scrie descrierea produsului"
                  name="descriere"
                  className="form-control"
                  value={descriere}
                  onChange={(e) => setDescriere(e.target.value)}
                ></input>
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Stoc portii :</label>
                <input
                  type="text"
                  placeholder="Scrie stocul produsului"
                  name="stoc"
                  className="form-control"
                  value={stoc}
                  onChange={(e) => {
                    setStoc(e.target.value);
                  }}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Activ:</label>
                <input
                  type="checkbox"
                  onChange={handleCheck}
                  checked={activ}
                ></input>
              </div>
              <div className="player-image">
                <label>Imagine*</label>
                <input
                  type="file"
                  name="imagine"
                  accept="image/png, image/jpg, image/jpeg"
                  defaultValue={imagine}
                  onChange={handleImageChange}
                />
              </div>

              {id ? (
                <button onClick={editItem} className="btn btn-success">
                  Actualizează
                </button>
              ) : (
                <button className="btn btn-success" onClick={saveItem}>
                  Salvează
                </button>
              )}
              <Link to="/itemi" className="btn btn-danger">
                Anulează
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditemComponent;
