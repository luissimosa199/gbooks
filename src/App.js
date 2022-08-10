// COMPONENTS
import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";

import Home from "./components/views/Home/Home";
import Results from "./components/views/Results/Results";
import BookDetail from "./components/views/BookDetail/BookDetail";
const Error404 = lazy(() => import("./components/views/404/404"));

// FUNCTIONS

// page transition
const pageTransition = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

function App() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              className="page"
              initial="out"
              animate="in"
              exit="out"
              variants={pageTransition}
            >
              <Home />
            </motion.div>
          }
        />

        <Route
          path="results/:searchterm"
          element={
            <motion.div
              className="page"
              initial="out"
              animate="in"
              exit="out"
              variants={pageTransition}
            >
              <Results />
            </motion.div>
          }
        />

        <Route
          path=":bookId"
          element={
            <motion.div
              className="page"
              initial="out"
              animate="in"
              exit="out"
              variants={pageTransition}
            >
              <BookDetail />
            </motion.div>
          }
        />

        <Route
          path="*"
          element={
            <motion.div
              className="page"
              initial="out"
              animate="in"
              exit="out"
              variants={pageTransition}
            >
              <Suspense fallback={<>...</>}>
                <Error404 />
              </Suspense>
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
