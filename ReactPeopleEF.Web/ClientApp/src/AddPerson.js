import React from 'react';
import { produce } from 'immer';
import axios from 'axios';
import PersonForm from './PersonForm'

class AddPerson extends React.Component {

    state = {
        person: {
            firstName: '',
            lastName: '',
            age: '',
        }
    }

    onInputChange = e => {
        const newState = produce(this.state, draftState => {
            const { person } = draftState;
            person[e.target.name] = e.target.value;
        });
        this.setState(newState);
    }

    onAddClick = () => {
        axios.post('/api/people/add', this.state.person).then(() => {
            this.props.history.push('/');

        
        //axios.post('/api/people/add', this.state.person).then(({ data }) => {
        //    const nextState = produce(this.state, draftState => {
        //        draftState.people.push(data);
        //        draftState.person = {
        //            firstName: '',
        //            lastName: '',
        //            age: ''
        //        }
        //    });
        //    this.setState(nextState);
        });

        
    }

    render() {
        const {
            firstName,
            lastName,
            age
        } = this.state.person;
        return (
            <div className="row">
                <h2>Add Person</h2>
                <PersonForm
                    firstName={firstName}
                    lastName={lastName}
                    age={age}
                    onInputChange={this.onInputChange}
                    onAddClick={this.onAddClick}
                />
            </div>);
    }
}

export default AddPerson;