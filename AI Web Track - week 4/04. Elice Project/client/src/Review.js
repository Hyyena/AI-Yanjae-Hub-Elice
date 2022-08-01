// import reviewData from "./data/review.json";
import port from "./data/port.json";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

// Redux
import { useDispatch } from "react-redux";
import { setData } from "./app/reducer/Data";

const Review = () => {
  // aciton을 사용하기 위해 값을 보내주는 역할
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [cookies, setCookies, removeCookies] = useCookies(["userData"]);

  const [reviewData, setReviewData] = useState([]);

  // 렌더링이 되었다면 한 번만 실행됨.
  useEffect(() => {
    getReviewData();
  }, []);

  const getReviewData = () => {
    try {
      axios
        .get(`${port.url}/posts`, {
          headers: {
            accessToken: cookies.userData.accessToken,
          },
        })
        .then((res) => {
          console.log(res);
          setReviewData(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      navigate("/");
    }
  };

  // ------------------------------Delete------------------------------
  const deleteReview = async (shortId) => {
    return await axios.get(`${port.url}/posts/${shortId}/delete`, {
      headers: {
        accessToken: cookies.userData.accessToken,
      },
    });
  };

  const onClickDeleteButton = (shortId) => {
    if (window.confirm("삭제하시겠습니까?")) {
      // Yes
      console.log(shortId);
      deleteReview(shortId)
        .then((res) => {
          console.log(res);
          let getNewDeleteAfterData = reviewData.filter(
            (it) => it.shortId !== shortId,
          );
          setReviewData(getNewDeleteAfterData);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      // No
      return;
    }
  };
  // ------------------------------------------------------------------

  // ------------------------------Update------------------------------
  const onClickUpdateButton = (shortId) => {
    dispatch(setData(shortId));
    navigate(`/review/${shortId}/update`);
  };
  // ------------------------------------------------------------------

  // ------------------------------Detail------------------------------
  const onClickDetailButton = (shortId) => {
    console.log(shortId);
    navigate(`/review/${shortId}/detail`);
  };
  // ------------------------------------------------------------------

  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Movie</h1>
            <p className="lead text-muted">
              리뷰하고 싶은 영화를 선택하고 평가를 해주세요.
              <br />
              삭제와 수정은 자유롭게 가능합니다.
            </p>
            <p>
              <button
                className="btn btn-primary my-2 m-1"
                onClick={() => {
                  navigate("/review/create");
                }}
              >
                Create Review
              </button>
            </p>
          </div>
        </div>
      </section>
      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {reviewData.map((it, index) => (
              <div className="col" key={index}>
                <div className="card shadow-sm">
                  <div className="card-img-top" style={{ textAlign: "center" }}>
                    <img
                      className="bd-placeholder-img"
                      width="50%"
                      height="225"
                      src={it.img}
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    />
                  </div>
                  <div className="card-body">
                    <h5
                      className="card-title"
                      onClick={() => {
                        onClickDetailButton(it.shortId);
                      }}
                    >
                      {it.title}
                    </h5>
                    <p className="card-text">
                      {it.content.substring(0, it.content.length / 2)}
                      <p
                        style={{ color: "green" }}
                        onClick={() => {
                          onClickDetailButton(it.shortId);
                        }}
                      >
                        ...더보기
                      </p>
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => {
                            onClickUpdateButton(it.shortId);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => {
                            onClickDeleteButton(it.shortId);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Review;
