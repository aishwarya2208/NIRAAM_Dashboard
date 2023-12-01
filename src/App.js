import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, ThemeSettings, Login } from './component';
import {
  Dashboard,
  Orders,
  Calendar,
  Milkparameters,
  Stacked,
  Pyramid,
  Rumen,
  Kanban,
  Area,
  Pregnancy,
  Line,
  Financial,
  Wellness,
  ColorMapping,
  Editor,
} from './pages';
import { useStateContext } from './contexts/ContextProvider';

import './App.css';
import Sidebar from './component/Sidebar';

const App = () => {
  const { activeMenu } = useStateContext();
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {authenticated && (
            <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
              <TooltipComponent content="Settings" positions="Top">
                <button
                  type="button"
                  className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
                  style={{ background: 'blue', borderRadius: '50% ' }}
                >
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>
          )}
          {authenticated?(
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white" >
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? 'md:ml-72' : 'flex-2'
            }`}
          >
            {authenticated && (
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                <Navbar />
              </div>
            )}
            <Routes>
              <Route
                path="/login"
                element={
                  authenticated ? (
                    <Navigate to="/dashboard" />
                  ) : (
                    <Login onLogin={() => setAuthenticated(true)} />
                  )
                }
              />
              {authenticated && (
                <>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/milk-parameters" element={<Milkparameters />} />
                  <Route path="/stacked" element={<Stacked />} />
                  <Route path="/pyramid" element={<Pyramid />} />
                  <Route path="/rumen" element={<Rumen />} />
                  <Route path="/kanban" element={<Kanban />} />
                  <Route path="/area" element={<Area />} />
                  <Route path="/pregnancy" element={<Pregnancy />} />
                  <Route path="/lineChart" element={<Line />} />
                  <Route path="/financial" element={<Financial />} />
                  <Route path="/wellness" element={<Wellness />} />
                  <Route path="/color-mapping" element={<ColorMapping />} />
                 
                </>
              )}
              <Route
                path="/"
                element={
                  authenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
                }
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;