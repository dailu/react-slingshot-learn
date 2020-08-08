import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import ProcessesList from './containers/ProcessesList';
import DoScience from './containers/DoScience';
import ServerSettings from './containers/ServerSettings';
import DatabaseGraph from './containers/DatabaseGraph';
const router =  () => (
  <App>
    <Switch>
      <Route path="/database-graph" component={DatabaseGraph} />
      <Route path="/server-settings" component={ServerSettings} />
      <Route path="/process-list" component={ProcessesList} />
      <Route path="/" component={DoScience} />
       </Switch>
  </App>
);
router.displayName = 'MyComponent';

export default router;