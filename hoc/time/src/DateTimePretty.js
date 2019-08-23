import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';

function withLogger(Component) {
    return class extends React.Component {
        state = {
            date: ``,
        };

        componentDidMount() {
            this.count(this.props.date);
        }
        count(dateRaw) {
            const diffDays = moment().diff(moment(dateRaw), 'd');
            const diffHours = moment().diff(moment(dateRaw), 'H');
            const diffMinutes = moment().diff(moment(dateRaw), 'minutes');

            let date;

            if (diffDays > 1) {
                date = `${diffDays} дней назад`;
            } else if (diffHours > 1) {
                date = `${diffHours} часов назад`;
            } else if (diffHours < 1) {
                date = `${diffMinutes} минут назад`;
            }

            this.setState({ date });
        }

        render() {
            return <Component {...this.props} date={this.state.date} />;
        }
    };
}

const DateTimePretty = withLogger(({ date }) => <p className='date'>{date}</p>);
export default DateTimePretty;
