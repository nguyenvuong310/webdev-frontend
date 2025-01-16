import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';

import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';

import DefaultLayout from './layout/DefaultLayout';
import SearchScores from './pages/SearchScore';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Dashboard | GScores" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/search-score"
          element={
            <>
              <PageTitle title="Seach Scores | GScores" />
              <SearchScores />
            </>
          }
        />

        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Reports | GScores" />
              <Chart />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
