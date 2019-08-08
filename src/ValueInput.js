import React from 'react';

export class ValueInput extends React.Component {
    state = {
        fieldValue: null,
    };

    handleChange = (ev) => {
        this.setState(
            {
                fieldValue: ev.target.value
            },
            ()=>this.props.changeCallback(this.props.id, this.state.fieldValue)
        );

    };

    render() {
        return <div className="form-group p-2">
            <label>Value #{this.props.id}</label>
            <input
                className="form-control"
                value={this.state.fieldValue}
                onChange={this.handleChange}
            />
        </div>
    }
}