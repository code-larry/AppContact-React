import React, { Component } from 'react'
import Contact from '../Contact/Contact'
import { Consumer } from '../../Context'

export default class Liste extends Component {

	render() {

		return (
			<Consumer>
				{value => {
					return (
						<React.Fragment>
						<h1 className="display-4 my-4">Liste des contacts</h1>
						{value.contacts.map(contact => (
							<Contact
							key={contact.id}
							id={contact.id}
							nom={contact.nom}
							email={contact.email}
							tel={contact.tel}
							/>
						))}
						</React.Fragment>
					)
				}}
			</Consumer>
		)
	}
}
