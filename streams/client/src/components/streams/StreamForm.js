import React from 'react';
import {Field, reduxForm} from 'redux-form';

class StreamForm extends React.Component{

    renderError=({error, touched})=>{
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    input=({input, label,meta})=>{
        let className = `field ${meta.touched && meta.error? 'error':''}`
        return (
                <div className={className}>
                    <label >{label}</label>
                    <input {...input}></input>
                    {this.renderError(meta)}
                </div>
        );
    }

    onSubmit=(formData)=>{
       this.props.onSubmit(formData);
    }

    render(){
        return (
            <div>
               <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="title" component={this.input} label="Title"></Field>
                    <Field name="description" component={this.input} label="Description"></Field>
                    <button className="ui button primary">Submit</button>
               </form>
            </div>
        );
    }

}

const validate=(formValues)=>{
    let errors ={};
    if(!formValues.title){
        errors.title='Title is required';
    }
    if(!formValues.description){
        errors.description='Description is required';
    }
    return errors;
};

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);