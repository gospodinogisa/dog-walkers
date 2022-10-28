import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import routes from './config/routes';
import { Fragment, useEffect } from 'react';
import PrivateRoute from './SharedComponents/PrivateRoute';
import { useTranslation } from 'react-i18next';

function App() {
  useTranslation()

  return (
    <Fragment>
      <Router>
        <Routes>
          {
            routes.map((route) => {
              return (
                <Route key={route.index} path={route.path} element={<PrivateRoute route={route} />} />
              );
            })
          }
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;