import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Habits from './components/Habits';
import AddHabits from './components/AddHabits';
import EditHabits from './components/EditHabits';

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
