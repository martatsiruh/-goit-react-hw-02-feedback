import React from 'react';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

class FeedbackTable extends React.Component {
  static totalFeedback = 0;
  static percentPositivFeedback = 0;

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    this.totalFeedback = good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    this.percentPositivFeedback = Math.round(
      (100 / this.totalFeedback) * this.state.good
    );
  }

  render() {
    
    const buttons = Object.keys(this.state);
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={buttons}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.totalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.totalFeedback}
              positivePercentage={this.percentPositivFeedback}
            />
          )}
        </Section>
      </div>
    );
  }
}
export default FeedbackTable;



/*export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};*/
