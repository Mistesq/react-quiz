import React, { Component } from 'react';
import classes from './QuizCreator.module.scss';
import Button from '../../components/UI/Button/Button';
import {createControl} from '../../form/formFramework';
import Input from '../../components/UI/Input/Input';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

function createOptionControl(number) {
    return createControl({
        label: `Variant ${number}`,
        errorMessage: 'The value cannot be empty',
        id: number
    }, {required: true})
}

function createFormControls() {
    return {
        question: createControl({
            label: 'Enter your question',
            errorMessage: 'The question cannot be empty'
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4)
    }
}

class QuizCreator extends Component {

    state = {
        quiz: [],
        formControls: createFormControls()
    }

    submitHandler = (event) => {
        event.preventDefault();
    }

    addQuestionHandler = () => {

    }

    createQuizHandler = () => {
        
    }

    ChangeHandler = (value, controlName) => {
        // console.log(`${controlName}: `, value);

        // const formControls = { ...this.state.formControls };
        // const control = { ...formControls[controlName] };

        // control.value = value;
        // control.touched = true;
        // control.valid = this.validateControl(control.value, control.validation);

        // formControls[controlName] = control;

        // let isFormValid = true;

        // Object.keys(formControls).forEach(name => {
        //     isFormValid = formControls[name].valid && isFormValid;
        // });

        // this.setState({
        //     formControls, isFormValid
        // });
    }

    renderControls = () => {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];

            return (
                <Auxiliary key={controlName + index}>
                    <Input                     
                        label={control.label}
                        value={control.value}
                        valid={control.valid}
                        touched={control.touched}
                        shouldValidate={!!control.validation}
                        errorMessage={control.errorMessage}
                        onChange={event => this.ChangeHandler(event.target.value, controlName)}
                    />

                    { index === 0 ? <hr /> : null }
                </Auxiliary>
            )
        })
    }

    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>QuizCreator</h1>

                    <form onSubmit={this.submitHandler} action="">

                        { this.renderControls() }

                        <select></select>
                        <Button type="primary" onClick={this.addQuestionHandler}>Add Question</Button>
                        <Button type="success" onClick={this.createQuizHandler}>Create Quiz</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default QuizCreator;
