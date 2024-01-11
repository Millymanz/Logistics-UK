import PropTypes from 'prop-types';

function Menu({ menuItems }) {
    return (
        <nav>
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.url}>{item.title}</a>
                    </li>

                ))}
            </ul>
        </nav>
    );
}

Menu.propTypes = {
    menuItems: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Menu;


