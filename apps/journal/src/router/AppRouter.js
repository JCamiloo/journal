import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route
            path="/auth"
            component={AuthRouter}
          />

          <Route
            exact
            path="/"
            component={JournalScreen}
          />

          <Redirect to="/auth/login"/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}
