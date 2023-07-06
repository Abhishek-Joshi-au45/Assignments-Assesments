import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from './SearchPage';
import ListingPage from './ListingPage';
import DetailsPage from './DetailsPage';
import BookmarksPage from './BookmarksPage';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SearchPage setSearchTerm={setSearchTerm} />
        </Route>
        <Route path="/listing">
          <ListingPage searchTerm={searchTerm} />
        </Route>
        <Route path="/details/:id">
          <DetailsPage />
        </Route>
        <Route path="/bookmarks">
          <BookmarksPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
