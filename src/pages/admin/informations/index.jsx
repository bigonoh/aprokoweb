/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../layouts/DashboardLayout'
import './styles.css';
import { icons } from '../../../assets/icons/icons';
import { RavenButton, RavenModal, RavenPagination, RavenTable, RavenTableRow } from 'raven-bank-ui';
import { useDispatch, useSelector } from 'react-redux';
import {DateTime} from 'luxon'
import { deleteInformation, getAllInformations, updateInformation } from '../../../redux/admin';
import { formatNumWithCommaNaira } from '../../../utils/Helpers';
import ErrorModal from '../../../components/modal/ErrorModal';

function Informations() {

  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const [showAction, setShowAction] = useState()
  const [refresh, setRefresh] = useState(0)

  const [modal, setModal] = useState({
    edit: false,
    view: false,
    content: {},
    delete: false,
  })
  useEffect(() => {
        let payload = {
          page: page,
          limit: 20
        }
        dispatch(getAllInformations(payload))
  }, [page, refresh])

  const { informations } = useSelector((state) => state?.admin);

  let information = informations?.results; 
  const headerList = ["TITLE", "PRICE", "LOCATION", "AUTHOR", "CREATED AT", "STATUS"];
 
  const userVerification = (e) => {
    if (e === false) return <div className="unverified">unverified</div>
    
     return  <div className="verified">verified information</div>
  }

  const deleteInfo = async(id, e) => {
    const payload = {
      id: id,
    }

  let response =  await dispatch(deleteInformation(payload))
  
  if (response?.payload?.success === "success"){
    setModal({
      view: false,
      edit: false,
      content: false,
      delete: false
    })

  } else {
    setModal({
      view: false,
      edit: false,
      content: false,
      delete: false
    }) 

    setRefresh(refresh + 1)
  }
    
  }

  const verifyInfo = async(id, e) => {
    const payload = {
      id: id,
      verified: e
    }

  let response =  await dispatch(updateInformation(payload))
  
  if (response?.payload?.success === "success"){
    setModal({
      view: false,
      edit: false,
      content: false,
      delete: false
    })

  } else {
    setModal({
      view: false,
      edit: false,
      content: false,
      delete: false
    }) 

    setRefresh(refresh + 1)
  }
    
  }

  
  return (
    <DashboardLayout>
    <div className="information_wrapper">
      <div className="page_top">
        <span className="page_title">
          <div className="title">
          <h6> Informations</h6>
          <p>Take a quick overview at your informations</p>
          </div>

          <div>
            <RavenButton label="Add New User" size="small" color={"orange-dark"} />
          </div>
        
        </span>
{/* 
        <div className="stats_card">
          <div className="stat">
            <span>
              <p>Total Income</p>
              <h6>{formatNumWithCommaNaira(String(sales?.amount))}</h6>
            </span>
            <figure>
              {icons.chart}
            </figure>
          </div>

          <div className="stat">
            <span>
              <p>Total Withdrawal</p>
              <h6>{formatNumWithCommaNaira('5000')}</h6>
            </span>
            <figure>
              {icons.chart2}
            </figure>
          </div>

          <div className="stat_minimal">
            <span>
              <p>Informations Sold:</p>
              <h6>{sales?.totalResults}</h6>
            </span>
            <span>
              <p>Informations Bought:</p>
              <h6>{`10`}</h6>
            </span>
          </div>
        </div> */}
      </div>

      <div className="page_body">
                   {/* table start */}
                   <div className="table-wrap">
              <RavenTable headerList={headerList} action>
                {information?.map((chi, idx) => {
                  const { title, created_at,user, verified, phone, price, location, } =
                    chi;

                    // console.log(chi, 'this is')


                  return (
                    <RavenTableRow
                      key={idx}
                      one={`${title.length > 30 ? title.slice(0, 30) + '...' : title}`}
                      two={price}
                      three={phone}
                      onRowClick={() => setShowAction(false)}
                      four={location?.city + ' - ' + location?.state }
                      five={user?.name}
                      className={showAction === idx ? "zUp" : "zDown"}
                      six={DateTime.fromISO(created_at).toLocaleString(DateTime.DATE_MED)}
                      seven={userVerification(verified)}
                      ManualAddActions={() => {
                        return (
                          <div className='action_contain'>
                            <div onClick={() => {
                             if (showAction === idx) setShowAction()
                             else setShowAction(idx)

                            }}>
                            {icons.dots}
                            </div>
                            
                            <div className={`action_drop ${showAction === idx && 'show'}`}>
                            <span onClick={() => setModal({view: true, edit: false, content: chi})}>View Info</span>
                            <span>Edit Info</span>
                            <span onClick={() => setModal({view: false, edit: false, verify: true, content: chi})}>{chi?.verified ? "Unverify Info": "Verify Info"}</span>
                            <span onClick={() => setModal({view: false, edit: false, delete: true, content: chi})}>Destroy Info</span>
                            </div>
                          </div>
                        )
                      }}
                    />
                  );
                })}
                
              </RavenTable>
             
            </div>
            {/* table end */}
             {/* pagination start */}
             <div className="table-pagination-box">
                <RavenPagination
                  color={`black-light`}
                  blackHover
                  onNumView={(d) => setPage(d)}
                  currentPage={page}
                  totalPage={informations?.totalPages}
                />
              </div>
              {/* pagination end */}
      </div>

{/* view info modal */}
      <RavenModal
      visble={modal.view}
      btnColor="orange-dark"
      btnLabel={'Close'}
      onClose={() => setModal({
        view: false,
        edit: false,
      })}
      onBtnClick={() => setModal({
        view: false,
        edit: false,
      })}
      >
    <div className="modal_content_wrapper">
      <div className="title">Information Details</div>

      <div className="content table-responsive">
        <table className="table">
          <colgroup>
          <col />
          <col />
          </colgroup>
          <tbody style={{fontSize: "80%"}}>
  <tr>
    <td>Title</td>
    <td>{modal.content?.title}</td>
  </tr>
  <tr>
    <td>Description</td>
    <td>{modal.content?.description}</td>
  </tr>
  <tr>
    <td>Location</td>
    <td>{modal.content?.city + " - " + modal.content?.state}</td>
  </tr>
  <tr>
    <td>Info ID</td>
    <td>{modal.content?.id}</td>
  </tr>
  <tr>
    <td>Price</td>
    <td>{formatNumWithCommaNaira (String(modal.content?.price))}</td>
  </tr>
  <tr>
    <td>Author</td>
    <td> { modal.content?.user?.name}  </td>
  </tr>
  <tr>
    <td>Verified</td>
    <td> <div className={modal.content?.verified ? "verified" : "unverified"}>
    {modal.content?.verified ? "Verified" : "Unverified"}
      </div> </td>
  </tr>
  <tr>
    <td>Status</td>
    <td>{modal.content?.status}</td>
  </tr>
  <tr>
    <td>Probation</td>
    <td>{String(modal.content?.probation)}</td>
  </tr>
  <tr>
    <td>Reported</td>
    <td>{String(modal.content?.reported)}</td>
  </tr>

  <tr>
    <td>Created</td>
    <td>
      <time dateTime={modal.content?.created_at }>{DateTime.fromISO(modal.content?.created_at).toLocaleString(DateTime.DATE_MED)}</time>
    </td>
  </tr>
</tbody>
        </table>

      </div>

    </div>
      </RavenModal>
{/* end view info modal */}


    </div>

      {/* caution modal */}
    <RavenModal
     visble={modal.delete}
    className="caution_modal"
    effect={'fadeInRight'}
     onClose={() => setModal({
       view: false,
       edit: false,
     })}
     > 
  <ErrorModal 
  bigText={"Destroy this information"}
  smallText={"If you destroy this information, it will be permanently deleted and will no longer be available on this platform, and this action cannot be reversed."}
  onCancel={
    () => setModal({
      view: false,
      edit: false,
    })
  }
  onClick={() => deleteInfo(modal?.content?.id)}
  btnText={"Destroy"}
  >

  </ErrorModal>
    </RavenModal>
{/* end caution modal */}


 {/* caution modal */}
 <RavenModal
     visble={modal.verify}
    className="caution_modal"
    effect={'fadeInRight'}
     onClose={() => setModal({
       view: false,
       edit: false,
     })}
     > 
  <ErrorModal 
  bigText={`${modal?.content?.verified ? "Unverify this information" : "Verify this information"}`}
  smallText={"If you verify this information, it means you have checked and confirmed that the information contained is correct and legit, do you want to proceed ?."}
  fillColor={'green'}
  onCancel={
    () => setModal({
      view: false,
      edit: false,
    })
  }
  onClick={() => verifyInfo(modal?.content?.id, !modal?.content?.verified)}
  btnText={`${modal?.content?.verified ? "Yes, Unverify": "Yes, Verify"}`}
  >

  </ErrorModal>
    </RavenModal>
{/* end caution modal */}

    </DashboardLayout>
  )
}

export default Informations