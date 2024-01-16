import styles from './Header.module.scss';
import PropTypes from 'prop-types'; // Corrected import

const Header = ({ title }) => {
    return (
        <header className={styles.header}> {/* Use className for CSS modules */}
            <h1>{title}</h1>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired // Corrected prop type validation
}

export default Header;