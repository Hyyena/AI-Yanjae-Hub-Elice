const Create = () => {
  return (
    <div className="album">
      <div className="container">
        <div className="card mb-3">
          <div className="card-img-top" style={{ textAlign: "center" }}>
            <img
              src="https://search.pstatic.net/common?type=o&size=174x246&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20220720_283%2F1658284839003UzxoT_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2"
              alt="..."
            />
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
          ></textarea>
        </div>
        <button className="btn btn-primary" type="submit" style={{marginRight: "2%"}}>
          Submit
        </button>
        <button className="btn btn-outline-danger" type="submit">
          Back
        </button>
      </div>
    </div>
  );
};

export default Create;
