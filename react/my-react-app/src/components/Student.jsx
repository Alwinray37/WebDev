import PropTypes from 'prop-types'

function Student(props) {
    const handleClick = (e) => e.target.style.display = "none";

    return(
        <div className='student' onClick={ (e) => handleClick(e)}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "NO"}</p>
            <hr />
        </div>
    );
};

Student.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: true
}
export default Student