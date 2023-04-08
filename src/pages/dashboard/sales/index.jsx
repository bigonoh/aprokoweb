import React from 'react'
import DashboardLayout from '../../../layouts/DashboardLayout'

function Sales() {
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
              <h6>{formatNumWithCommaNaira('5000')}</h6>
            </span>
            <figure>
              {icons.chart}
            </figure>
          </div>

          <div className="stat">
            <span>
              <p>Total Income</p>
              <h6>{formatNumWithCommaNaira('5000')}</h6>
            </span>
            <figure>
              {icons.chart}
            </figure>
          </div>

          <div className="stat_minimal">
            <span>
              <p>Informations Sold:</p>
              <h6>{`23`}</h6>
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
                {bodyList.map((chi, idx) => {
                  const { amount, date, direction, narration, status, type } =
                    chi;
                  return (
                    <RavenTableRow
                      onEdit={() => {
                        setShowModal(true);
                      }}
                      action
                      key={idx}
                      one={rowTypeText(direction, narration)}
                      two={amount}
                      three={batchTypeWrap(type)}
                      four={date}
                      five={formatTypeWrap(status)}
                    />
                  );
                })}
                
              </RavenTable>
              {/* pagination start */}
              <div className="table-pagination-box">
                <RavenPagination
                  color={`black-light`}
                  blackHover
                  currentPage={1}
                  totalPage={7}
                />
              </div>
              {/* pagination end */}
            </div>
            {/* table end */}
      </div>
    </div>

    </DashboardLayout>
  )
}

export default Sales