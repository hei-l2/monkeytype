import PropTypes from 'prop-types';

export function Key({ letter = ''}) {
    const className = letter === " " ? "key space" : "key";
    return (
        <div className={className}>
            { letter.toLocaleLowerCase() }
        </div>
    )
}

Key.propTypes = {
    letter: PropTypes.string.isRequired
}