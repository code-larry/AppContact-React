import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header'
import Liste from './components/Liste/Liste'
import { Provider } from './Context'
import AddContact from './components/AddContact/AddContact'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import APropos from './components/APropos/APropos'
import Error from './components/Error/Error'

function App() {
  return (
	<Provider>
		<Router>
			<div>
				<Header />
				<div className="container">
					<Switch>
						<Route exact path="/" component={Liste}/>
						<Route exact path="/liste" component={Liste}/>
						<Route exact path="/ajout" component={AddContact}/>
						<Route exact path="/apropos" component={APropos}/>
						<Route component={Error}/>
					</Switch>			
				</div>
			</div>
		</Router>
	</Provider>
  );
}

export default App;
