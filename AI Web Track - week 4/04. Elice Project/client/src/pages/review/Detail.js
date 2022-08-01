import port from "./../../data/port.json";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

const Detail = () => {
  const params = useParams();

  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);

  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    console.log(params.id);
    findDetailData()
      .then((res) => {
        console.log(res);
        setDetailData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const findDetailData = async () => {
    return await axios.get(`${port.url}/posts/${params.id}/find`, {
      headers: {
        accessToken: cookies.userData.accessToken,
      },
    });
  };

  return (
    <div className="album">
      <div className="container">
        <div className="card mb-3">
          <div className="card-img-top" style={{ textAlign: "center" }}>
            <img src={detailData.img} alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">Movie Image</h5>
            <p className="card-text">Image Example</p>
            <p className="card-text">
              <small className="text-muted">{detailData.img}</small>
            </p>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <div className="card">
            <p className="card-body">{detailData.title}</p>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <div className="card">
            <p className="card-body">{detailData.content}</p>
          </div>
        </div>
        <button
          className="btn btn-outline-danger"
          type="submit"
          onClick={() => {
            window.history.back();
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Detail;
