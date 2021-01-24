import PropTypes from 'prop-types'
import Button from "./Button"

const Header = ({title}) => {
    const onClick = () => {
        alert("hello world!!");
    }

    return (
        <header className="header">
            <h1>Get: {title}</h1>
            <Button color="green" text="Hello" onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
