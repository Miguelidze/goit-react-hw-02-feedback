import React from "react";
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import Section from  '../Section/Section';

export default class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleChangeStats = (event) => {
        this.setState((prevState) => {return {[event.target.name]: prevState[event.target.name] +1}})}
    
    countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good+neutral+bad
    }
    countPositiveFeedbackPercentage = () => {
        return !this.countTotalFeedback() ? "0" : Math.round(this.state.good/this.countTotalFeedback()*100) 
    }
    render() {
        return (
            <div>
                Please leave feedback
                <FeedbackOptions onLeaveFeedback={this.handleChangeStats} />
                <Section title="Statistics">
                {this.countTotalFeedback() ? <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()}
                />
                :
                <Notification message="There is no feedback"/>
                    }
                </Section>
            </div>
        )
    }
}