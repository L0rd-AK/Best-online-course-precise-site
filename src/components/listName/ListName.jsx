import PropTypes from 'prop-types';

const ListName = ({names,index}) => {
    const {title}=names;
    return (
        <div>
            <h3>{index+1}. {title}</h3>
        </div>
    );
};
ListName.propTypes = {
    names:PropTypes.object,
    index:PropTypes.number
};
export default ListName;