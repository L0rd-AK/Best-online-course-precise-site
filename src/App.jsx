import { useState } from 'react'
import './App.css'
import Cards from './components/cards/Cards'
import Sidebar from './components/sidebar/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify1 = () => toast.error("You have reached your limit!!!");
  const notify2 = () => toast.warn("You've already selected this course!!!");
  let newList=[];
  const [listName, setListName] = useState([]);
  const [hour,setHour]=useState(20);
  const [credit,setCredit]=useState(0);
  const [price,setPrice]=useState(0);

  const handelListName=Name=>{
    const temp = listName.find(i =>i.id === Name.id);
    if(!temp){
      const newCredit=credit+Name.credit;
      if(newCredit<=20)setCredit(newCredit);

      const newHour=hour-Name.credit;
      if(newHour<0) notify1();
      else setHour(newHour);
      
      newList=[...listName,Name];
      if(newHour>=0 && newCredit<=20)setListName(newList);

      const newPrice=(price+Name.price);
      if(newHour>=0 && newCredit<=20) setPrice(newPrice);
    }else{
      // alert('');
      notify2();
    }

  }

  return (
    <>
      <h1 className='text-3xl lg:text-6xl md:text-5xl text-center font-bold mt-10 mb-16'>Choose from our best courses</h1>
      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className='grid grid-cols-1 lg:flex gap-5 mx-auto justify-items-center'>
        <Cards handelListName={handelListName}></Cards>
        <div className='lg:w-1/4'>
          <Sidebar listName={listName} hour={hour} credit={credit} price={price}></Sidebar>
        </div>
      </div>
    </>
  )
}

export default App
