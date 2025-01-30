import './App.css'
import { Provider } from 'react-redux'
import store from './features/store'
import Cake from './components/Cake'
import Milk from './components/Milk'
import UserList from './components/UserList'

function App() {

  return (
    <Provider store={store}>
      <Milk />
      <Cake />
      <UserList />
    </Provider>
  )
}

export default App
