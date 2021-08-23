import React from 'react';
import Ricks from './components/Ricks/Ricks';
import Episodes from './components/Episodes/Episodes';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';

interface RouterProps {
  // type for `match.params`
  rickId: string; // must be type `string` since value comes from the URL
}

export interface EpisodesDetailProps extends RouteComponentProps<RouterProps> {}

function App() {
  return (
    <Switch>
      <Route exact path='/' render={(props) => <Ricks {...props} />}></Route>
      <Route path='/episodes' component={Episodes}></Route>
    </Switch>
  );
}

export default App;
