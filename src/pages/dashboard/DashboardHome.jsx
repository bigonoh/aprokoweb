import React, { useEffect } from 'react'
import MainDashboard from '../../layouts/maindashboard/MainDashboard'
import DashboardLayout from '../../layouts/DashboardLayout'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../redux/user'
import { getInfos } from '../../redux/info'
import { getTrx } from '../../redux/transaction'

function DashboardHome() {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)
  const { transactions } = useSelector((state) => state.transaction)

  useEffect(() => {
    dispatch(getInfos({ limit: '5' }))
    dispatch(getTrx({ limit: '5', sort: 'asc' }))
  }, [])

  useEffect(() => {
    dispatch(getUser())
  }, [])

  return (
    <DashboardLayout>
      <MainDashboard user={user} trx={transactions} />
    </DashboardLayout>
  )
}

export default DashboardHome
