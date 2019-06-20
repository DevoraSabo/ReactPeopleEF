import React from 'react';
import AddPerson from './AddPerson';
import { produce } from 'immer';
import axios from 'axios';
import PeopleTable from './PeopleTable';
import HeaderRow from './HeaderRow';

class PeoplePage extends React.Component {
    state = {
        people: []
    }

    componentDidMount = () => {
        axios.get('/api/people/getall').then(({ data }) => {
            data.forEach(p => p.markedForDeletion = false);
            this.setState({ people: data });
        });
    }

    onDeleteCheckChanged = person => {
        const nextState = produce(this.state, draftState => {
            const personThatChanged = draftState.people.find(p => p.id === person.id);
            personThatChanged.markedForDeletion = !personThatChanged.markedForDeletion;
        });

        this.setState(nextState);
    }

    onDeleteClicked = () => {
        axios.post('/api/people/delete',
            { personIds: this.state.people.filter(p => p.markedForDeletion).map(p => p.id) })
            .then(() => {
                axios.get('/api/people/getall').then(({ data }) => {
                    data.forEach(p => p.markedForDeletion = false);
                    this.setState({ people: data });
                });
            });
    }

    onCheckAllClicked = () => {
        const nextState = produce(this.state, draftState => {
            draftState.people.forEach(p => p.markedForDeletion = true);
        });
        this.setState(nextState);
    }

    onClearAllClicked = () => {
        const nextState = produce(this.state, draftState => {
            draftState.people.forEach(p => p.markedForDeletion = false);
        });
        this.setState(nextState);
    }

    render() {
        const { person, people } = this.state;
        return (
            <div className="container" style={{ marginTop: 40 }}>
                <HeaderRow/>
                <PeopleTable
                    onDeleteCheckChanged={this.onDeleteCheckChanged}
                    people={people}
                    onDeleteClicked={this.onDeleteClicked}
                    onCheckAllClicked={this.onCheckAllClicked}
                    onClearAllClicked={this.onClearAllClicked} />
            </div>
        )
    }

}

export default PeoplePage;
