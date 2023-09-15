import PropTypes from 'prop-types';
import { FiDollarSign,FiBookOpen } from 'react-icons/fi';
import './Card.css'
const Card = ({card,handelListName}) => {
    const {id,cover_img,title,description,price,credit}=card;
    return (
        <div id={id} className='shadow-xl rounded-lg bg-white p-5'>
            <div className="">
                <div className='flex justify-center'><img className='w-full' src={cover_img} alt="not found!!!" /></div>
                <div className="space-y-3">
                    <div className=''><h2 className="text-xl font-bold mt-2 mb-2">{title}</h2></div>
                    <div className=''><p className='font-thin text-sm text-gray-700 text-justify'>{description}</p></div>
                    <div className='flex gap-1 lg:gap-7 font-thin text-base justify-center'>
                        <div className='flex items-center mt-2'>
                            <FiDollarSign></FiDollarSign>
                            <p>Price: <span className='text-[#2F80ED]'>{price}</span></p>
                        </div>
                        <div className='flex items-center mt-2'>
                            <FiBookOpen></FiBookOpen>
                            <p>Credit: <span className='text-[#2F80ED]'>{credit}</span>Hr</p>
                        </div>
                    </div>
                    <div className="text-center mt-2">
                        <button onClick={()=>handelListName(card)} className="text-xl rounded-lg px-14 lg:px-20 py-1 bg-[#443fe3] text-white font-semibold">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
Card.propTypes = {
    card: PropTypes.object,
    handelListName:PropTypes.func
  };
export default Card;