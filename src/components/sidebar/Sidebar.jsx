import PropTypes from 'prop-types';
import ListName from '../listName/ListName';
const Sidebar = ({listName,hour,credit,price}) => {
    // const [price, setPrice] = useState(0);
    // const rem=20;
    
    return (
        <div className="rounded-lg bg-white p-4">
            <h2 className="text-lg font-bold text-[#2F80ED] border-b-2 border-[#b3b3b3] mt-5">Credit Hour Remaining {hour} hr</h2>
            <h3 className="text-xl font-semibold text-black my-5">Course Name:</h3>
            <div className="border-b-2 border-[#b3b3b3]">
                {
                    listName.map((name,index) => <ListName key={name.id} names={name} index={index}></ListName>)
                }
            </div>
            <h3 className="border-b-2 border-[#b3b3b3] my-5">Total Credit Hour : {credit}</h3>
            <h3 className='font-semibold text-black'>Total Price : {price.toFixed(2)} USD</h3>
        </div>
    );
};
Sidebar.propTypes = {
    listName:PropTypes.array,
    hour:PropTypes.number,
    credit:PropTypes.number,
    price:PropTypes.number
};
export default Sidebar;