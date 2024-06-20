import React, { useEffect, useState } from 'react'
import DoneIcon from '@mui/icons-material/Done';
import './subscription.css' 
import { useDispatch } from 'react-redux';
import { CreateSessionForSubscription, CreateUserForSubscription, getAllPlans } from '../../_redux/features/PaymentSlice';
import { UpdateClientProfile } from '../../_redux/features/auth/authSlice';
import { useNavigate } from 'react-router';
import UnSubscribe from '../UnSubcribeModal/UnSubscribeModal';
import { useActiveItem } from '../../ActiveItemContext';
import { useParams } from 'react-router-dom';


 const advanceOptions = ['Profile Listing (Advanced)','Priority of Listing (Alphabetical Order)', 
 ' Intro Lawyers/firm(Limited intro size and history)',
  'Contact details (Address, Phone.no, Email and website Link)', "Client's Comment (All)", 
  ' No. of specialty areas (3)','Display advertising (Available, Display Banner)','Ad tracking & Engagement (N/A)']

 const EliteOPtions = ['Profile Listing(Elite)','Priority of Listing (Ranked Higher)', 
 'Intro Lawyers/firm (Full intro size, history, experience, specialties and old cases)', 
 'Contact details (Address, phone.no, Email, website link)', "Client's Comment (All)",'No. of specialty areas (Unlimited)',
 'Display advertising (Available, Display, Banner, Upload judgment, Photos & Video)','Ad tracking & Engagement (Available)']


 const starterOPtions = ['Profile Listing (starter)','Priority of Listing (Alphabetical Order)', 
  'Intro Lawyers/firm (basic Information)',
  'Contact details (Address, Phone.no)', "Client's Comment (Limited)",'No. of specialty areas (1)',
  'Display advertising(N/A)','Ad tracking & Engagement (N/A)']


const SubScriptionScreen = () => {


  const { id } = useParams();
   console.log("🚀 ~ SubScriptionScreen ~ id:", id)
   
    
 
 
    const dispatch = useDispatch()

    const user = JSON.parse(localStorage.getItem("user"));
   
    const  [data,setData] = useState()

       //update user subscription id
  // const update = async(id,type)=>{
  //   const formData = new FormData();
    
  //   formData.append("id",user_id);
    
  //   formData.append("subId",id)
  //   formData.append("subPlan",type)
  
  //   await dispatch(UpdateClientProfile(formData))
  // }

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await dispatch(getAllPlans());
        const plans = result.payload?.plans || []; 
        setData(plans);
      } catch (error) {
      }
    };
    
    getData();
  }, [dispatch]);

    // const buyPlan = async(type)=>{
     


    //     if(SubID){
    // await dispatch(CreateSessionForSubscription({
    // priceId:`${type==='starter'? 'price_1NxlagSJCWz1ZtfgeZn5HK3s':
    // type ==='advanced'? 'price_1NxlcgSJCWz1ZtfgzBo1zDob':
    //  type ==='elite'? 'price_1NxleBSJCWz1ZtfgonJsleii':''}`,
    //             stripeCustomerId : SubID,
               
    //           }))
    //           .then((res)=>{
    //             if(res.payload.success===true){
          
    //          update(SubID,type)
         
    //          window.open(res.payload?.session?.url, '_blank')
    //             }
            
    //            })
    //     return

    //     }else{

    //  await dispatch(CreateUserForSubscription({
    //         email:userEmail,
    //         name:userName
    //       })) 
    //    .then(async(data)=>
      
    //    { 
       
        
      
          
         
    //          await dispatch(CreateSessionForSubscription({
    //              priceId:`${type==='starter'? 'price_1NxlagSJCWz1ZtfgeZn5HK3s':
    //             type ==='advanced'? 'price_1NxlcgSJCWz1ZtfgzBo1zDob':
    //         type ==='elite'? 'price_1NxleBSJCWz1ZtfgonJsleii':''}`,
    //              stripeCustomerId : data.payload.stripeCustomerId,
                
    //            }))
    //            .then((res)=>{
    //             if(res.payload.success===true){

    //                 update(data.payload.stripeCustomerId,type)
            
         
    //          window.open(res.payload?.session?.url, '_blank')
    //             }
            
    //            })
    //           return
          
            
       
          
      
    //    })
    //     }

   
    // }

    const {resetActive} = useActiveItem()
  const navigate = useNavigate()


  const buyPlan = (ID) => {
    
  //  if(!user){
  //   navigate('/auth/register')
  //   resetActive(null)
  //  }
   if(user){
    navigate('/checkout',{state:{user_id:user?.user?._id,planId:ID}})
    resetActive(null)
   }
  if(id) navigate('/checkout',{state:{user_id:id,planId:ID}})

  }

  const [modalShow,setModalShow] = useState(false)
  const showUnSub= ()=>{
    setModalShow(!modalShow)
    }

  return (
   <>

{
  modalShow && (
       <div className="modalForUnsubscribed">
          <div className="modal-contentForUnsubscribed">
            <UnSubscribe closeWindow={showUnSub} />
          </div>
        </div>
  )
}




  <div className="container mt-5 mb-5">
{
  user?.user?._id ? (
     <div className="row mx-4 mb-4">
          <div className="col-md-6"><h2 className='fs-2 fw-bold'> Subscription Plans</h2></div>
           {/* {
            user?.user?.plan_id === null ? ''               :  */}
      <div className="col-md-6 text-end"><button className='btn btn-dark px-4 py-2' style={{fontWeight:'600'}} disabled={user.user.plan_id === null || !user.user.plan_id} onClick={showUnSub} >Cancel Subscription</button></div>
          {/* } */}
         </div>
  ) :""
}
 

    <div className="row mt-md-5 mx-md-5 mx-3">
        <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card shadow rounded-4 subscription-card">
            <div className="card-body" style={{padding:'30px 40px'}}>
            <p className='fs-2 poppins-600'>Starter</p>
            <p className='poppins-500 my-2' style={{fontSize:'18px'}}>For Individuals </p>
            {/* pricing */}
            <div className="price">
                <div className="d-flex align-items-center">
                    <div className="doller">
                        <p className='poppins-700 ' style={{fontSize:"42px"}}>$</p>
                    </div>
                    <div className="">
                    <p className='poppins-600 px-1' style={{fontSize:"48px"}}>50</p>
                    </div>
                    <div className="d-flex align-items-end mt-3">
                    <p className='poppins-500 text-dark m-0'>Per month</p>
                    </div>
                </div>
            </div>
            {/* plan status */}
            <div className='my-3'>
                <button className='btn poppins-400 px-5' style={{color:'white',background:'#ff7a06'}}>
                   {user?.user[0]?.subPlan==='starter'? "Current Plan":"Basic Plan"}
                </button>
            </div>
           {/* package options  */}
           <div className='mt-3'>
           <p className='fs-2 poppins-600 my-2'>Features</p>
           
           <p className='text-dark poppins-500 my-3'>Everything you get in this plan</p>
           <div className="items-include mt-4">
            {
                 starterOPtions.map((item, i) => {
                    // Split the string at the opening and closing parentheses
                    const parts = item.split('(');
                    const textBeforeBracket = parts[0]; // Text before the opening parenthesis
                    const textInBracket = parts[1] ? parts[1].replace(')', '') : ''; // Text within the brackets
                
                    return (
                      <div className="d-flex my-3" key={i}>
                      <div>
                            {textInBracket==='N/A'? <DoneIcon style={{ color: 'white', fontSize: '28px' }} />:  <DoneIcon style={{ color: '#ff7a06', fontSize: '28px' }} />}
                        </div>  
                        <p className='poppins-500 mx-2 text-dark'>
                          {textBeforeBracket}
                          <strong style={{color:'#ff7a06'}}> ({textInBracket})</strong>
                        </p>
                      </div>
                    );
                  })
            }
          
          <div className='mt-md-5 pt-md-5'>
            <div className="pt-md-3">
                <button className='btn btn-lg poppins-400 w-100 mt-md-4'
                disabled={user?.user?.plan_id?.length > 0}
                style={{color:'white',background:'#ff7a06'}}
                onClick={()=>buyPlan(data?.length > 0 ? data[2]?.id : null)}
          >
                    Buy Now
                </button>
            </div>
              
            </div>

           </div>
           </div>


            </div>
        </div>
        </div>



     <div className="col-lg-4 col-md-4 col-sm-12 mt-md-0 mt-5">
        <div className="card h-100 shadow rounded-4 subscription-card" style={{background:"rgb(13, 14, 15)"}}>
            <div className="card-body" style={{padding:'30px 40px'}}>
            <p className='fs-3 poppins-600 ' style={{color:'white'}}>Advanced</p>
            <p className='poppins-500  my-3'style={{color:'white'}} >For Individuals and Small Business</p>
            {/* pricing */}
            <div className="price my-3">
                <div className="d-flex align-items-center">
                    <div className="doller">
                        <p className='poppins-700 ' style={{fontSize:"42px",color:'white'}}>$</p>
                    </div>
                    <div className="">
                    <p className='poppins-600 px-1' style={{fontSize:"48px",color:'white'}}>100</p>
                    </div>
                    <div className="d-flex align-items-end mt-4">
                    <p className='poppins-500 text-white m-0'>Per month (Recommeded)</p>
                    </div>
                </div>
            </div>
            {/* plan status */}
            <div className='my-3'>
                <button className='btn poppins-400 px-4' style={{color:'white',background:'#ff7a06'}}>
                {user?.user[0]?.subPlan==='advanced'? "Current Plan":"Upgraded Plan"}
                </button>
            </div>
           {/* package options  */}
           <div className='mt-3'>
           <p className='fs-2 poppins-600 my-2' style={{color:'white'}}>Features</p>
           
           <p className='text-white poppins-500 my-3'>Everything you get in this plan</p>
           <div className="items-include mt-4">
            {
                 advanceOptions.map((item, i) => {
                    // Split the string at the opening and closing parentheses
                    const parts = item.split('(');
                    const textBeforeBracket = parts[0]; // Text before the opening parenthesis
                    const textInBracket = parts[1] ? parts[1].replace(')', '') : ''; // Text within the brackets
                
                    return (
                      <div className="d-flex my-3" key={i}>
                        <div>
                            {textInBracket ==='N/A' ? <DoneIcon style={{ color: 'rgb(13, 14, 15)', fontSize: '28px' }} />:  <DoneIcon style={{ color: '#ff7a06', fontSize: '28px' }} />}
                        </div>    
                    
                      
                        <p className='poppins-500 mx-2 text-white'>
                          {textBeforeBracket}
                          <strong style={{color:'#ff7a06'}}>({textInBracket})</strong>
                        </p>
                      </div>
                    );
                  })
            }
          
          <div className='mt-md-5 pt-md-5'>
                <button className='btn btn-lg poppins-400 w-100' 
                style={{color:'white',background:'#ff7a06'}}
                disabled={user?.user?.plan_id?.length > 0}
                onClick={()=>buyPlan(data?.length > 0 ? data[1]?.id : null)}
                  
                >
                    Buy Now
                </button>
            </div>

           </div>
           </div>


            </div>
        </div>
        </div>



        <div className="col-lg-4 col-md-4 col-sm-12 mt-md-0 mt-5">
        <div className="card h-100 shadow rounded-4 subscription-card">
            <div className="card-body" style={{padding:'30px 40px'}}>
            <p className='fs-2 poppins-600 my-3'>Elite</p>
            <p className='poppins-500 text-dark' >For All level of businesses </p>
            {/* pricing */}
            <div className="price my-3">
                <div className="d-flex align-items-center">
                    <div className="doller">
                        <p className='poppins-700 ' style={{fontSize:"42px"}}>$</p>
                    </div>
                    <div className="">
                    <p className='poppins-600 px-1' style={{fontSize:"48px"}}>170</p>
                    </div>
                    <div className="d-flex align-items-end mt-2">
                    <p className='poppins-500 text-dark m-0'>Per month</p>
                    </div>
                </div>
            </div>
            {/* plan status */}
            <div className='my-3'>
                <button className='btn poppins-400 px-4' style={{color:'white',background:'#ff7a06'}}>
                {user?.user[0]?.subPlan==='elite'? "Current Plan":"Upgraded Plan"}
                </button>
            </div>
           {/* package options  */}
           <div className='mt-3'>
           <p className='fs-2 poppins-600 my-2'>Features</p>
           
           <p className='text-dark poppins-500 my-3'>Everything you get in this plan</p>
           <div className="items-include mt-4">

        {
  EliteOPtions.map((item, i) => {
    // Split the string at the opening and closing parentheses
    const parts = item.split('(');
    const textBeforeBracket = parts[0]; // Text before the opening parenthesis
    const textInBracket = parts[1] ? parts[1].replace(')', '') : ''; // Text within the brackets

    return (
      <div className="d-flex my-3" key={i}>
       <div>
                            {textInBracket==='N/A'? <DoneIcon style={{ color: 'white', fontSize: '28px' }} />:  <DoneIcon style={{ color: '#ff7a06', fontSize: '28px' }} />}
                        </div>  
        <p className='poppins-500 mx-2 text-dark'>
          {textBeforeBracket}
          <strong style={{color:'#ff7a06'}}> ({textInBracket})</strong>
        </p>
      </div>
    );
  })
}
          
          <div className='my-md-4'>
                <button className='btn btn-lg poppins-400 w-100'
                 style={{color:'white',background:'#ff7a06'}}
                 disabled={user?.user?.plan_id?.length > 0}
                 onClick={()=>buyPlan(data?.length > 0 ? data[0]?.id : null)}
                                    
                    
                 >
                    Buy Now
                </button>
            </div>

           </div>
           </div>


            </div>
        </div>
        </div>
    </div>
</div>



   </>
  )
}

export default SubScriptionScreen