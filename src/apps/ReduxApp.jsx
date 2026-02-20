import { Provider } from 'react-redux';
import store from '../store';
import ReduxAppContent from './ReduxAppContent';
import './ReduxApp.css';

export default function ReduxApp() {
  return (
    <Provider store={store}>
      <ReduxAppContent />
    </Provider>
  );
}
