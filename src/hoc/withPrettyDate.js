import moment from 'moment'

const withPrettyDate = (Component) => {
  return (props) => {
    return (
      <Component {...props} date={moment(props.date, "YYYY-MM-DD hh:mm:ss").fromNow()} />
    );
  }
}

export default withPrettyDate;