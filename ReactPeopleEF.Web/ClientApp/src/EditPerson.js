import React from 'react';
import axios from 'axios';
import PersonForm from './PersonForm';
import { produce } from 'immer';

export default class EditPage extends React.Component
{

    state = {
        person: {
            firstName: '',
            lastName: '',
            age: ''
        },
        people: []
    }

    componentDidMount = () => {
        if (this.props.match.params.personId) {
            axios.get(`/api/people/getbyid/{this.props.match.params.personId}`)
                .then(({ data }) => {
                    this.setState({ person: data })
                });
        } else {
            axios.get(`api/people/getall`).then(({ data }) => {
                this.setState({ person: data })
            });
        }

    }

    onInputChange = e => {
        const nextState = produce(this.state, draft => {
            draft.person[e.target.name] = e.target.value;
        });
        this.setState(nextState);
    }

    //onsubmit....

    onSubmit = () => {

    }


}

