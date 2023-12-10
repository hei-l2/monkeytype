import PropTypes from 'prop-types';
import { useActiveKey } from '../../useActiveKey';

export function Key({ letter = ''}) {
    const { key } = useActiveKey()
    let className = letter !== " " ? "key" : "key space";
    
    if(letter.toLocaleLowerCase() === key.toLocaleLowerCase()){
        className += " active"
    }
    
    return (
        <div className={className}>
            { letter.toLocaleLowerCase() }
        </div>
    )
}

Key.propTypes = {
    letter: PropTypes.string.isRequired
}