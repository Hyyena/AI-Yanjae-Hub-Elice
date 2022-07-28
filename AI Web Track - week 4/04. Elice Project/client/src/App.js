import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Review from "./Review";
import ReviewCreate from "./ReviewCreate";
import ReviewDetail from "./ReviewDetail";
import ReviewUpdate from "./ReviewUpdate";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* url -> http://localhost:3002/ */}
        <Route path="/" element={<Main />} />
        {/* url -> http://localhost:3002/review */}
        <Route path="review">
          {/* url -> http://localhost:3002/review/list */}
          <Route path="list" element={<Review />} />
          {/* url -> http://localhost:3002/review/create */}
          <Route path="create" element={<ReviewCreate />} />
          <Route path=":id">
            {/* url -> http://localhost:3002/review/:id/detail */}
            <Route path="detail" element={<ReviewDetail />} />
            {/* url -> http://localhost:3002/review/:id/update */}
            <Route path="update" element={<ReviewUpdate />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
