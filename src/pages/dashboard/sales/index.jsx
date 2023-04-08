import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../layouts/DashboardLayout'
import './styles.css';
import { icons } from '../../../assets/icons/icons';
import { formatNumWithCommaNaira } from '../../../utils/Helpers';
import { RavenPagination, RavenTable, RavenTableRow } from 'raven-bank-ui';
import { useDispatch, useSelector } from 'react-redux';
import { getSales } from '../../../redux/info';
import {DateTime} from 'luxon'

function Sales() {

  const dispatch = useDispatch()
  const [page, setPage] = useState(1)

  useEffect(() => {
        let payload = {
          page: page,
          limit: 20
        }
        dispatch(getSales(payload))
  }, [page])

  const { sales } = useSelector((state) => state?.info);

  const sale = sales?.results
  

  const headerList = ["TITLE", "BUYER", "AMOUNT", " DATE"];

  return (
    <DashboardLayout>
    <div className="sales_wrapper">
      <div className="page_top">
        <span className="page_title">
          <h6> Sales Portal</h6>
          <p>Your sales portal gives you a bried overview of your dales and order statistics</p>
        </span>

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
        </div>
      </div>

      <div className="page_body">
                   {/* table start */}
                   <div className="table-wrap">
              <RavenTable headerList={headerList} action>
                {sale?.map((chi, idx) => {
                  const { amount, created_at, information, buyer, status, type } =
                    chi;

                    let info = JSON.parse(information);

                  return (
                    <RavenTableRow
                      key={idx}
                      one={info?.title}
                      two={buyer?.name}
                      three={formatNumWithCommaNaira(String(amount))}
                      four={DateTime.fromISO(created_at).toLocaleString(DateTime.DATE_MED)}
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
                  totalPage={sales?.totalPages}
                />
              </div>
              {/* pagination end */}
      </div>
    </div>

    </DashboardLayout>
  )
}

export default Sales