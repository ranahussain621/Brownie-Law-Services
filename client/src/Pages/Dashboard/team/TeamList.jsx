import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import "../../../Styles/addteamModal.css"
import AddTeam from './AddTeam';
import empty from '../../../assets/trash.png'
import { useDispatch, useSelector } from 'react-redux';
import { getTeamMember, getFirmTeamMember } from '../../../_redux/features/firm/firmSlice';
import DeleteMember from './DeleteMember'
import './style.css'





const TeamList = () => {

  const data = JSON.parse(localStorage.getItem('user'));

  const [openDeleteMember, setOpenDeleteMember] = useState(false)
  const [selectedMemberId, setSelectedMemberId] = useState('');
  const [firmLayers, setFirmLawyers] = useState({})


  const deleteModalScreen = (newsId) => {
    setSelectedMemberId(newsId);
    setOpenDeleteMember(!openDeleteMember)
  }

 
  const dispatch = useDispatch()

  useEffect(() => {
    const getData = async () => {
      await dispatch(getTeamMember())
    }
    getData()
  }, [dispatch])

  useEffect(() => {
    const getData = async () => {
      await dispatch(getFirmTeamMember({ firm_id: data?.user?._id }))
        .then((res) => {
          setFirmLawyers(res?.payload?.data)
        })
    }
    getData()
  }, [])



  const [addpackageOpen, setaddpackageOpen] = useState(false);

  const showAddPacakgeScreen = () => {
    setaddpackageOpen(!addpackageOpen)
  }


  

  return (
    <>
    <div className="mx-5 mt-5">
      <div className="col-12">
              <p className='poppins-600 fw-bold' style={{fontSize:'30px'}}>Team</p>
            </div>

  <div className="card border-0 rounded-0  mt-4 px-0">
        <div className="card-body px-0">
          <div className="row justify-content-center">

            

            {openDeleteMember && (
              <div className="modalDeleteTeam">
                <div className="modal-modalDeleteTeam">


                  <DeleteMember closeWindow={deleteModalScreen} Id={selectedMemberId} />


                </div>
              </div>
            )}



            {

              firmLayers?.length > 0 ?
                firmLayers?.map((item, i) => {
                  
                  return (
                    <>
                      <div className="col-md-3 rounded-4  my-2 mx-3" style={{ backgroundColor: '#F5F5F5' }} key={i}>

                        <div className="d-flex justify-content-end">

                        <div className="dropdown pt-3">

<button className=" " id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <FontAwesomeIcon icon={faEllipsisVertical} />
</button>
<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
  <li><a className="dropdown-item" href="#" onClick={() => deleteModalScreen(item?._id)}>Remove User</a></li>
</ul>
</div>
                        </div>
                        <div>
                          <div className="d-flex justify-content-center">
                            <img className='img-fluid rounded'
                              style={{ width: '180px', height: '130px' }}
                              alt=''
                              src={item?.image ? item?.image : 'https://bootdey.com/img/Content/avatar/avatar7.png'} />
                          </div>

                          <div className="mb-4 mt-4 text-center">
                            <p className='poppins-600 fw-semibold d-flex justify-content-center mb-0'>{item?.name}</p>
                            <p className='poppins-500 mt-2 d-flex justify-content-center mb-0'>{item?.email}</p>
                            <p className='poppins-500 mt-2 d-flex justify-content-center mb-0'>{`+ ${item?.phone}`}</p>
                            <p className='poppins-500 mt-2 d-flex justify-content-center mb-3'>{item?.address}</p>

                          </div>
                          {/* <div className='text-center border-top'>
                            <p className='p-2 poppins-600 fw-semibold'>View Profile</p>
                          </div> */}
                        </div>
                      </div>
                    </>
                  )
                })
                :
                <div className='d-flex justify-content-center py-5'> 
                <div>
                   <img src={empty} alt='' className='img-fluid' style={{width:70,height:80}} /> 
                <h2 className='text-center pt-md-3' style={{fontWeight:500}}>No Data</h2></div>   
                </div>
            }

           
            {addpackageOpen && (
              <div className="modalForAddMember">
                <div className="modal-contentForAddMember">


                  <AddTeam closeWindow={showAddPacakgeScreen} />

                </div>
              </div>



            )}




          </div>

        </div>
      </div> 
           <div className="col-md-12 mt-md-5 rounded-4  my-2 mx-3 d-flex justify-content-center" style={{ backgroundColor: '#F5F5F5' }}>




              <div className='h-100 d-flex justify-content-center align-items-center '>
                <div className='text-center'>
                  <FontAwesomeIcon icon={faCirclePlus} style={{ fontSize: '50px', color: '#2E2829',cursor:'pointer' }} onClick={showAddPacakgeScreen}  />
                  <p className='poppins-700 fw-bold h3 mt-2' style={{ color: '#2E2829' }}> Add Member</p>
                </div>



              </div>





            </div>
    </div>
     

    </>
  )
}

export default TeamList