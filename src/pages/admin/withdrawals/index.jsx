/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../layouts/DashboardLayout'
import './styles.css';
import { icons } from '../../../assets/icons/icons';
import { RavenButton, RavenInputField, RavenModal, RavenPagination, RavenTable, RavenTableRow } from 'raven-bank-ui';
import { useDispatch, useSelector } from 'react-redux';
import {DateTime} from 'luxon'
import { approveWithdrawal, getAllUsers, getAllWithdrawals } from '../../../redux/admin';
import { formatNumWithCommaNaira } from '../../../utils/Helpers';
import ErrorModal from '../../../components/modal/ErrorModal';

function Withdrawals() {

  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const [showAction, setShowAction] = useState()
  const [refresh, setRefresh] = useState(0)

  const [modal, setModal] = useState({
    approve: false,
    status: false,
    content: {},
  })
  const [selectedStatus, setSelectedStatus] = useState({
    value: modal?.content?.status,
    label: modal?.content?.status
  })

  useEffect(() => {
    setSelectedStatus({
      value: modal?.content?.status,
      label: modal?.content?.status
    })
  }, [modal?.content])

  useEffect(() => {
        let payload = {
          page: page,
          limit: 20
        }
        dispatch(getAllWithdrawals(payload))
  }, [page, refresh])

  const { withdrawals, loading } = useSelector((state) => state?.admin);

  let withdrawal = withdrawals?.results;
  const headerList = ["USER", "AMOUNT", "EMAIL", "CREATED AT", "STATUS"];

  const userVerification = (e, i) => {
    if (!i) return <div className="unverified">{e}</div>
    if (i && e === "pending") return <div className="approved">{"Approved"}</div>

     return  <div className="verified">{e}</div>
  }

  const approve = async(id) => {
    const payload = {
      id: id,
      approved: true
    }

  let response =  await dispatch(approveWithdrawal(payload))
  
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

  const update = async(id) => {
    const payload = {
      id: id,
      status: selectedStatus?.value
    }

  let response =  await dispatch(approveWithdrawal(payload))
  
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
    <div className="withdrawal_wrapper">
      <div className="page_top">
        <span className="page_title">
          <div className="title">
          <h6> Withdrawals</h6>
          <p>Take a quick overview at your withdrawals</p>
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
                {withdrawal?.map((chi, idx) => {
                  const { amount, created_at, status, approved, user, } =
                    chi;

                    // console.log(chi, 'this is')


                  return (
                    <RavenTableRow
                      key={idx}
                      one={user?.name}
                      style={{backgroundColor: 'black'}}
                      two={formatNumWithCommaNaira(String(amount))}
                      three={user?.email}
                      className={showAction === idx ? "zUp" : "zDown"}
                      four={DateTime.fromISO(created_at).toLocaleString(DateTime.DATE_MED)}
                      five={userVerification(status, approved)}
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
                            <span onClick={() => setModal({approve: true, content: chi})}>Approve Withdrawal</span>
                            <span onClick={() => setModal({status: true, content: chi})}>Update Status</span>
                            </div>
                          </div>
                        )
                      }} />
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
                  totalPage={withdrawals?.totalPages}
                />
              </div>
              {/* pagination end */}
      </div>
    </div>

          {/* caution modal */}
          <RavenModal
            loading={loading}
     visble={modal.approve}
    className="caution_modal"
    fillColor={'green'}
    effect={'fadeInRight'}
     onClose={() => setModal({
       view: false,
       edit: false,
     })}
     > 
  <ErrorModal 
  bigText={"Approve this Withdrawal"}
  smallText={`If you approve this withrawal request, this means you have agreed to pay the user the stipulated amount of ${formatNumWithCommaNaira(String(modal?.content?.amount))}, do you want to proceed ?`}
  onCancel={
    () => setModal({
      view: false,
      edit: false,
    })
  }
  onClick={() => approve(modal?.content?.id, !modal?.content?.approved)}
  btnText={"Yes, Approve"}
  >

  </ErrorModal>
    </RavenModal>
{/* end caution modal */}


 {/* caution modal */}
 <RavenModal
     visble={modal.status}
    className="caution_modal"
    effect={'fadeInRight'}
     onClose={() => setModal({
       view: false,
       edit: false,
     })}
     > 
  <ErrorModal
  loading={loading}
  bigText={`Update Withdrawal Status`}
  smallText={"Update the withrawal status from either pending, to processing or paid, be sure you have paid the user before marking as paid."}
  onCancel={
    () => setModal({
      view: false,
      edit: false,
    })
  }
  onClick={() => update(modal?.content?.id)}
  btnText={`Update`}
  >
    <RavenInputField 
    type="select"
    color={'black-light'}
    value={selectedStatus}
    menuPlacement={'top'}
    selectOption={[{value: 'pending', label: 'Pending'}, {value: 'processing', label: 'Processing'}, {value: 'paid', label: 'Paid'}, ]}
    onChange={(d) => setSelectedStatus(d)}
    />
  </ErrorModal>
    </RavenModal>
{/* end caution modal */}

    </DashboardLayout>
  )
}

export default Withdrawals