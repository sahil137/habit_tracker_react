import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Habits from './pages/Habits';
import AddHabits from './pages/AddHabits';
import EditHabits from './pages/EditHabits';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Habits />} />
          <Route exact path="/addHabits" element={<AddHabits />} />
          <Route exact path="/editHabits" element={<EditHabits />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
