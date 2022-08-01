import port from "./../../data/port.json";
import axios from "axios";
import $ from "jquery";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const [cookies, setCookies, removeCookies] = useCookies(["userData"]);

  const [createReview, setCreateReview] = useState({
    img: "",
    title: "",
    content: "",
    email: cookies.userData.email,
  });

  useEffect(() => {
    console.log(createReview);
  }, [createReview]);

  const onChagneCreateReview = (e) => {
    setCreateReview({
      ...createReview,
      [e.target.name]: e.target.value,
    });
  };

  const onClickCreateReviewButton = () => {
    if (createReview.img === "") {
      alert("이미지 경로를 입력해주세요.");
      $("#img").focus();
      return;
    }

    if (createReview.title === "") {
      alert("제목을 입력해주세요.");
      $("#title").focus();
      return;
    }

    if (createReview.content === "") {
      alert("내용을 입력해주세요.");
      $("#content").focus();
      return;
    }

    sendCreateReview()
      .then((res) => {
        console.log(res);
        alert(res.data.result);
        navigate("/review/list");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const sendCreateReview = async () => {
    return await axios.post(`${port.url}/posts`, createReview, {
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
            {createReview.img !== "" ? (
              <img src={createReview.img} alt="Movie" />
            ) : (
              <></>
            )}
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
              onChange={onChagneCreateReview}
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
            onChange={onChagneCreateReview}
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
            onChange={onChagneCreateReview}
          ></textarea>
        </div>
        <button
          className="btn btn-primary"
          type="submit"
          style={{ marginRight: "2%" }}
          onClick={onClickCreateReviewButton}
        >
          Create
        </button>
        <button className="btn btn-outline-danger" type="submit">
          Back
        </button>
      </div>
    </div>
  );
};

export default Create;
