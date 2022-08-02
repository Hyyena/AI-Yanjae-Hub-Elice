import $ from "jquery";
import port from "./../../data/port.json";
import axios from "axios";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();

  const params = useParams();

  const [updateData, setUpdateData] = useState({});
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);

  useEffect(() => {
    console.log(params.id);
    findGetReviewData()
      .then((res) => {
        console.log(res);
        setUpdateData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const findGetReviewData = async () => {
    return await axios.get(`${port.url}/posts/${params.id}/find`, {
      headers: {
        accessToken: cookies.userData.accessToken,
      },
    });
  };

  const onChangeUpdateData = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
  };

  const onClickChangeUpdateData = () => {
    if (updateData.img === "") {
      alert("이미지 경로를 입력해주세요.");
      $("#img").focus();
      return;
    }

    if (updateData.title === "") {
      alert("제목을 입력해주세요.");
      $("#title").focus();
      return;
    }

    if (updateData.content === "") {
      alert("내용을 입력해주세요.");
      $("#content").focus();
      return;
    }

    sendUpdateData()
      .then((res) => {
        console.log(res);
        alert(res.data.result);
        navigate("/review/list");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const sendUpdateData = async () => {
    return await axios.post(
      `${port.url}/posts/${params.id}/update`,
      updateData,
      {
        headers: {
          accessToken: cookies.userData.accessToken,
        },
      },
    );
  };

  return (
    <div className="album">
      <div className="container">
        <div className="card mb-3">
          <div className="card-img-top" style={{ textAlign: "center" }}>
            <img src={updateData.img} alt="Movie" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Movie Image</h5>
            <p className="card-text">Image Example</p>
            <input
              type="text"
              className="form-control"
              name="img"
              id="img"
              placeholder="사진 URL을 입력해주세요."
              defaultValue={updateData.img}
              onChange={onChangeUpdateData}
              // 404 error 방지
              disabled
            />
            <p className="card-text">
              <small className="text-muted">url...</small>
            </p>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="title"
            className="form-control"
            name="title"
            id="title"
            placeholder="제목을 입력해주세요."
            defaultValue={updateData.title}
            onChange={onChangeUpdateData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            className="form-control"
            name="content"
            id="content"
            rows="3"
            placeholder="내용을 입력해주세요."
            defaultValue={updateData.content}
            onChange={onChangeUpdateData}
          ></textarea>
        </div>
        <button
          className="btn btn-warning"
          type="submit"
          style={{ marginRight: "2%" }}
          onClick={onClickChangeUpdateData}
        >
          Edit
        </button>
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

export default Update;
