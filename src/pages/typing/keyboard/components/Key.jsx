import PropTypes from 'prop-types';
import { useActiveKey } from '../../useActiveKey';

export function Key({ letter = ''}) {
    const { active } = useActiveKey()
    let className = letter !== " " ? "key" : "key space";
    
    if(letter.toLocaleLowerCase() === active.toLocaleLowerCase()){
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