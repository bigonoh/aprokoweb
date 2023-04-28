/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../layouts/DashboardLayout'
import './styles.css';
import { icons } from '../../../assets/icons/icons';
import { RavenButton, RavenModal, RavenPagination, RavenTable, RavenTableRow } from 'raven-bank-ui';
import { useDispatch, useSelector } from 'react-redux';
import {DateTime} from 'luxon'
import { getAllUsers, updateUser } from '../../../redux/admin';

function Users() {

  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const [showAction, setShowAction] = useState()
  const [refresh, setRefresh] = useState(0)
  const [modal, setModal] = useState({
    edit: false,
    view: false,
    content: {},
  })

  useEffect(() => {
        let payload = {
          page: page,
          limit: 20
        }
        dispatch(getAllUsers(payload))
  }, [page, refresh])

  const { users } = useSelector((state) => state?.admin);

  let user = users?.results;
  const headerList = ["NAME", "EMAIL", "PHONE", " JOINED", "STATUS"];

  const userVerification = (e) => {
    if (e === false) return <div className="unverified">unverified</div>
    
     return  <div className="verified">verified user</div>
  }

  const verifyUser = async (user) => {
    const payload = {
      userId: user,
      isEmailVerified: true,
    }

  await  dispatch(updateUser(payload))
    setRefresh(refresh + 1)
  }

  const suspend = async(user, e) => {
    const payload = {
      userId: user,
      account_active: e,
    }

    await dispatch(updateUser(payload))
    setRefresh(refresh + 1)
  }


  
  return (
    <DashboardLayout>
    <div className="users_wrapper">
      <div className="page_top">
        <span className="page_title">
          <div className="title">
          <h6> Users</h6>
          <p>Take a quick overview at your users</p>
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
                {user?.map((chi, idx) => {
                  const { name, created_at, isEmailVerified, phone, email, account_active } =
                    chi;

                  return (
                    <RavenTableRow
                      onRowClick={()=> setShowAction()}
                      key={idx}
                      className={showAction === idx ? "zUp" : "zDown"}
                      one={name}
                      // showDropAction
                      style={{backgroundColor: 'black'}}
                      two={email}
                      three={phone}
                      four={DateTime.fromISO(created_at).toLocaleString(DateTime.DATE_MED)}
                      five={userVerification(isEmailVerified)}
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
                            <span onClick={() => setModal({view: true, edit: false, content: chi})}>View User</span>
                            <span onClick={() => setModal({view: false, edit: true})}>Edit User</span>
                            <span style={{pointerEvents: isEmailVerified ? 'none' : '', opacity:isEmailVerified ?  0.5 : 1, cursor: 'grab'}} onClick={() => verifyUser(chi?.id)}>Verify User</span>
                            <span onClick={() => suspend(chi?.id, !account_active)}>{account_active ? 'Suspend User' : 'Unsuspend User'}</span>
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
                  totalPage={users?.totalPages}
                />
              </div>
              {/* pagination end */}
      </div>

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
      <div className="title">User Details</div>

      <div className="content table-responsive">
        <table className="table">
          <colgroup>
          <col />
          <col />
          </colgroup>
          <tbody style={{fontSize: "80%"}}>
  <tr>
    <td>Name</td>
    <td>{modal.content?.name}</td>
  </tr>
  <tr>
    <td>Email</td>
    <td>{modal.content?.email}</td>
  </tr>
  <tr>
    <td>Phone</td>
    <td>{modal.content?.phone}</td>
  </tr>
  <tr>
    <td>User ID</td>
    <td>{modal.content?.id}</td>
  </tr>
  <tr>
    <td>Role</td>
    <td>{modal.content?.role}</td>
  </tr>
  <tr>
    <td>Email Status</td>
    <td> <div className={modal.content?.isEmailVerified ? "verified" : "unverified"}>
    {modal.content?.isEmailVerified ? 'Verified' : 'Not Verified'}
      </div> </td>
  </tr>
  <tr>
    <td>Account Status</td>
    <td> <div className={modal.content?.account_active ? "verified" : "unverified"}>
    {modal.content?.account_active ? 'Active' : 'Suspended'}
      </div> </td>
  </tr>
  <tr>
    <td>Payout Bank</td>
    <td>{modal.content?.bank_details?.bank}</td>
  </tr>
  <tr>
    <td>Payout Account No</td>
    <td>{modal.content?.bank_details?.account_number}</td>
  </tr>
  <tr>
    <td>Payout Account Name</td>
    <td>{modal.content?.bank_details?.account_name}</td>
  </tr>

  <tr>
    <td>Joined Date</td>
    <td>
      <time dateTime={modal.content?.createdAt }>{DateTime.fromISO(modal.content?.created_at).toLocaleString(DateTime.DATE_MED)}</time>
    </td>
  </tr>
</tbody>
        </table>

      </div>

    </div>
      </RavenModal>
    </div>

    

    </DashboardLayout>
  )
}

export default Users