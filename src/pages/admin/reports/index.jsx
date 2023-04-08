import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../layouts/DashboardLayout'
import './styles.css';
import { icons } from '../../../assets/icons/icons';
import { formatNumWithCommaNaira } from '../../../utils/Helpers';
import { RavenPagination, RavenTable, RavenTableRow } from 'raven-bank-ui';
import { useDispatch, useSelector } from 'react-redux';
import { getSales } from '../../../redux/info';
import {DateTime} from 'luxon'
import { getTrx } from '../../../redux/transaction';

function Reports() {

  const dispatch = useDispatch()
  const [page, setPage] = useState(1)

  useEffect(() => {
        let payload = {
          page: page,
          limit: 20
        }
        dispatch(getTrx(payload))
  }, [page])

  const { transactions } = useSelector((state) => state?.transaction);

  console.log(transactions)
  let trx = transactions?.results;

  const headerList = ["SUMMARY", "AMOUNT", "TYPE", " DATE", "REF"];

  return (
    <DashboardLayout>
    <div className="sales_wrapper">
      <div className="page_top">
        <span className="page_title">
          <h6> Reports</h6>
          <p>Take a quick overview at your transactions</p>
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
                {trx?.map((chi, idx) => {
                  const { amount, created_at, trx_summary, trx_ref, purpose, buyer, status, type } =
                    chi;


                  return (
                    <RavenTableRow
                      key={idx}
                      one={trx_summary}
                      two={formatNumWithCommaNaira(String(amount))}
                      three={purpose}
                      four={DateTime.fromISO(created_at).toLocaleString(DateTime.DATE_MED)}
                      five={trx_ref}
                      ManualAddActions={() => {
                        return (
                          <div>{icons.dots}</div>
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
                  totalPage={transactions?.totalPages}
                />
              </div>
              {/* pagination end */}
      </div>
    </div>

    </DashboardLayout>
  )
}

export default Reports