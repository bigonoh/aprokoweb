/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react'

import './styles.css'
import { icons } from '../../../../assets/icons/icons'
import {

  RavenModal,
  RavenPagination,
  RavenTable,
  RavenTableRow,
  toast,
} from 'raven-bank-ui'
import { useDispatch, useSelector } from 'react-redux'
import { DateTime } from 'luxon'
import {
  deleteInformation,

  updateInformation,
} from '../../../../redux/admin'
import { formatNumWithCommaNaira } from '../../../../utils/Helpers'
import ErrorModal from '../../../../components/modal/ErrorModal'
import {  acceptRejectProposal, getProposal } from '../../../../redux/info'

function Proposal() {
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const [showAction, setShowAction] = useState()
  const [refresh, setRefresh] = useState(0)

const loggedIn = useSelector((state) => state.user)?.user

  const [modal, setModal] = useState({
    edit: false,
    view: false,
    content: {},
    delete: false,
  })
  useEffect(() => {
    let payload = {
      page: page,
      limit: 20,
    }
    dispatch(getProposal(payload))
  }, [page, refresh])

  useEffect(() => {
    let payload = {
      page: page,
      limit: 20,
      asker: loggedIn?.id
    }
    dispatch(getProposal(payload))
  }, [])

  const { proposals } = useSelector((state) => state?.info)

  let infos = proposals?.results
  const headerList = [
    'REQUESTED INFO',
    'PROPOSAL PRICE',
    'LOCATION',
    'AUTHOR',
    'CREATED AT',
    'STATUS',
  ]

  const userVerification = (e) => {
    return <div className={e}>{e && e?.toUpperCase()}</div>

  }

  const deleteInfo = async (id, e) => {
    const payload = {
      id: id,
    }

    let response = await dispatch(deleteInformation(payload))

    if (response?.payload?.success === 'success') {
      setModal({
        view: false,
        edit: false,
        content: false,
        delete: false,
      })
    } else {
      setModal({
        view: false,
        edit: false,
        content: false,
        delete: false,
      })

      setRefresh(refresh + 1)
    }
  }

  const updateProposal = async (id, e) => {
    const payload = {
      proposal_id: id,
      status: e,
    }

    let response = await dispatch(acceptRejectProposal(payload))

    if (response?.payload?.success === 'success') {
      setModal({
        view: false,
        edit: false,
        content: false,
        delete: false,
      })
    } else {
      setModal({
        view: false,
        edit: false,
        content: false,
        delete: false,
      })

      setRefresh(refresh + 1)
    }
  }


  console.log(proposals, 'prps')

  return (
    <div className="purchased_info_wrapper">
      <div className="information_wrapper">
        <div className="page_body">
          {/* table start */}
          <div className="table-wrap">
            <RavenTable headerList={headerList} action>
              {infos?.map((chi, idx) => {
                const {
                  createdAt,
                  status,
                } = chi

                // console.log(JSON.parse(information), 'this is')

                return (
                  <RavenTableRow
                    key={idx}
                    one={`${
                      chi?.ask_info_id?.title?.length > 30
                        ?  chi?.ask_info_id?.title?.slice(0, 30) + '...'
                        :  chi?.ask_info_id?.title
                    }`}
                    two={formatNumWithCommaNaira(
                      String(chi?.answered_info_id?.price ? chi?.answered_info_id?.price : 0)
                    )}
                    three={(chi?.answered_info_id?.location?.city || '--') + ' - ' + (chi?.answered_info_id?.location?.state || '--')}
                    onRowClick={() => setShowAction(false)}
                    four={chi?.answerer?.name}
                    five={chi?.answered_info_id?.verified}
                    className={showAction === idx ? 'zUp' : 'zDown'}
                    six={DateTime.fromISO(createdAt).toLocaleString(
                      DateTime.DATE_MED
                    )}
                    seven={userVerification(status)}
                    ManualAddActions={() => {
                      return (
                        <div className="action_contain">
                          <div
                            onClick={() => {
                              if (showAction === idx) setShowAction()
                              else setShowAction(idx)
                            }}
                          >
                            {icons.dots}
                          </div>

                          <div
                            className={`action_drop ${
                              showAction === idx && 'show'
                            }`}
                          >
                            <span
                              onClick={() =>
                               { chi.accepted ? setModal({
                                  view: true,
                                  edit: false,
                                  content: chi,
                                }): toast.error('You must accept the proposal before you can view the information')
                              } 
                              }
                            >
                              View Proposal Info
                            </span>

                            <span
                              onClick={() =>
                                {chi.accepted ?  toast.info('You already accepted this proposal') :  setModal({
                                  view: false,
                                  edit: false,
                                  verify: true,
                                  content: chi,
                                })}
                              }
                            >
                              Accept Proposal
                            </span>
                            <span
                              onClick={() =>
                                { chi.accepted ?  toast.info('You already accepted this proposal') : setModal({
                                  view: false,
                                  edit: false,
                                  delete: true,
                                  content: chi,
                                })}
                              }
                            >
                              Decline Proposal
                            </span>
                          </div>
                        </div>
                      )
                    }}
                  />
                )
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
              totalPage={proposals?.totalPages}
            />
          </div>
          {/* pagination end */}
        </div>

        {/* view info modal */}
        <RavenModal
          visble={modal.view}
          btnColor="orange-dark"
          btnLabel={'Close'}
          onClose={() =>
            setModal({
              view: false,
              edit: false,
            })
          }
          onBtnClick={() =>
            setModal({
              view: false,
              edit: false,
            })
          }
        >
          <div className="modal_content_wrapper">
            <div className="title">Information Details</div>

            <div className="content table-responsive">
              <table className="table">
                <colgroup>
                  <col />
                  <col />
                </colgroup>
                <tbody style={{ fontSize: '80%' }}>
                  <tr>
                    <td>Title</td>
                    <td>{modal.content?.answered_info_id?.title}</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>{modal.content?.answered_info_id?.description}</td>
                  </tr>
                  <tr>
                    <td>Location</td>
                    <td>
                      {modal.content?.answered_info_id?.location?.city +
                        ' - ' +
                        modal.content?.answered_info_id?.location?.state}
                    </td>
                  </tr>
                  <tr>
                    <td>Info ID</td>
                    <td>{modal.content?.answered_info_id?.id}</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>
                      {formatNumWithCommaNaira(
                        String(modal.content?.answered_info_id?.price)
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Author</td>
                    <td> {modal.content?.answerer?.name} </td>
                  </tr>
                  <tr>
                    <td>Author Phone No.</td>
                    <td> {modal.content?.answerer?.phone} </td>
                  </tr>
                  <tr>
                    <td>Author Email.</td>
                    <td> {modal.content?.answerer?.email} </td>
                  </tr>
                  <tr>
                    <td>Verified</td>
                    <td>
                      {' '}
                      <div
                        className={
                          modal.content?.answered_info_id?.verified ? 'verified' : 'unverified'
                        }
                      >
                        {modal.content?.answered_info_id?.verified ? 'Verified' : 'Unverified'}
                      </div>{' '}
                    </td>
                  </tr>
                  <tr>
                    <td>Status</td>
                    <td>{modal.content?.answered_info_id?.status}</td>
                  </tr>
                  <tr>
                    <td>Probation</td>
                    <td>{String(modal.content?.answered_info_id?.probation)}</td>
                  </tr>
                  <tr>
                    <td>Reported</td>
                    <td>{String(modal.content?.answered_info_id?.reported)}</td>
                  </tr>

                  <tr>
                    <td>Created</td>
                    <td>
                      <time dateTime={modal.content?.answered_info_id?.createdAt}>
                        {DateTime.fromISO(
                          modal.content?.answered_info_id?.createdAt
                        ).toLocaleString(DateTime.DATE_MED)}
                      </time>
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
        onClose={() =>
          setModal({
            view: false,
            edit: false,
          })
        }
      >
        <ErrorModal
          bigText={'Decline this proposal'}
          smallText={
            'Are you sure you want to decline this proposal, declining this proposal will remove it from your list of proposals'
          }
          onCancel={() =>
            setModal({
              view: false,
              edit: false,
            })
          }
          onClick={() =>  updateProposal(modal?.content?.id, 'rejected')}
          btnText={'Yes, Decline'}
        ></ErrorModal>
      </RavenModal>
      {/* end caution modal */}

      {/* caution modal */}
      <RavenModal
        visble={modal.verify}
        className="caution_modal"
        effect={'fadeInRight'}
        onClose={() =>
          setModal({
            view: false,
            edit: false,
          })
        }
      >
        <ErrorModal
          bigText={`Accept Proposal`}
          smallText={
            'If you accept this proposal the proposal price will be deducted from your account balance are you sure you want to proceed?'
          }
          fillColor={'green'}
          onCancel={() =>
            setModal({
              view: false,
              edit: false,
            })
          }
          onClick={() =>
            updateProposal(modal?.content?.id, 'accepted')
          }
          btnText={`Yes, Accept`}
        ></ErrorModal>
      </RavenModal>
      {/* end caution modal */}
    </div>
  )
}

export default Proposal
