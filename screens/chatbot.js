import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';

class Review extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			title: '',
			type: '',
			description: '',
		};
	}
	
	componentWillMount() {
		const { steps } = this.props;
		const { title, type, description } = steps;
		
		this.setState({ title, type, description });
	}
	
	render() {
		const { title, gender, description } = this.state;
		return (
			<div style={{ width: '100%' }}>
				<h3>Summary</h3>
				<table>
					<tbody>
					<tr>
						<td>Titre</td>
						<td>{title.value}</td>
					</tr>
					<tr>
						<td>Type</td>
						<td>{type.value}</td>
					</tr>
					<tr>
						<td>description</td>
						<td>{description.value}</td>
					</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

Review.propTypes = {
	steps: PropTypes.object,
};

Review.defaultProps = {
	steps: undefined,
};

class SimpleForm extends Component {
	render() {
		return (
			<ChatBot
				steps={[
					{
						id: '1',
						message: 'vous chercher quel type de fiche?',
						trigger: 'title',
					},
					{
						id: 'title',
						user: true,
						trigger: '3',
					},
					{
						id: '3',
						message: 'des fruits ou légumes ?',
						trigger: 'type',
					},
					{
						id: 'type',
						options: [
							{ value: 'fruit', label: 'fruit', trigger: '5' },
							{ value: 'légumes', label: 'légumes', trigger: '5' },
						],
					},
					{
						id: '5',
						message: 'Vous voulez une description ?',
						trigger: 'Description',
					},
					{
						id: 'description',
						user: true,
						trigger: '7',
						validator: (value) => {
							if (isNaN(value)) {
								return 'value must be a number';
							} else if (value < 0) {
								return 'value must be positive';
							} else if (value > 120) {
								return `${value}? Come on!`;
							}
							
							return true;
						},
					},
					{
						id: '7',
						message: 'Great! Check out your summary',
						trigger: 'review',
					},
					{
						id: 'review',
						component: <Review />,
						asMessage: true,
						trigger: 'update',
					},
					{
						id: 'update',
						message: 'Would you like to update some field?',
						trigger: 'update-question',
					},
					{
						id: 'update-question',
						options: [
							{ value: 'yes', label: 'Yes', trigger: 'update-yes' },
							{ value: 'no', label: 'No', trigger: 'end-message' },
						],
					},
					{
						id: 'update-yes',
						message: 'What field would you like to update?',
						trigger: 'update-fields',
					},
					{
						id: 'update-fields',
						options: [
							{ value: 'name', label: 'Name', trigger: 'update-name' },
							{ value: 'gender', label: 'Gender', trigger: 'update-gender' },
							{ value: 'age', label: 'Age', trigger: 'update-age' },
						],
					},
					{
						id: 'update-name',
						update: 'name',
						trigger: '7',
					},
					{
						id: 'update-gender',
						update: 'gender',
						trigger: '7',
					},
					{
						id: 'update-age',
						update: 'age',
						trigger: '7',
					},
					{
						id: 'end-message',
						message: 'Thanks! Your data was submitted successfully!',
						end: true,
					},
				]}
			/>
		);
	}
}

export default SimpleForm;
