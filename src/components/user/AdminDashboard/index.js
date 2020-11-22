import React, { useEffect, useState } from 'react';
import AdminBase from '../../core/AdminBase';
import { ResponsiveLine } from '@nivo/line';
import { isAuth } from '../../auth/helpers/auth';
import { getOrdersGrouped } from '../../admin/helpers/adminApicalls';
import { OrderChartWrapper, ChartWrapper, CardsWrapper, ChartTitle } from './AdminElements';

const SalesChart = ({ data }) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 25, right: 50, bottom: 50, left: 50 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        colors={{ scheme: 'category10' }}
        lineWidth={1}
        pointSize={2}
        pointBorderWidth={4}
        pointBorderColor={{ from: 'serieColor' }}
        enableArea={true}
        theme={{
          textColor: "#e6e6e6"
        }}
        areaBaselineValue={1}
        axisLeft={{
            tickSize: 5,
            legendOffset: -40,
        }}
    />
)

const EarningsChart = ({ data }) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 25, right: 50, bottom: 50, left: 50 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: '0', max: 'auto', stacked: true, reverse: false }}
        colors={{ scheme: 'category10' }}
        curve="natural"
        lineWidth={3}
        pointSize={0}
        pointBorderWidth={4}
        pointBorderColor={{ from: 'serieColor' }}
        enableArea={true}
        theme={{
          textColor: "#ccc"
        }}
        areaBaselineValue={0}
        axisLeft={{
            tickSize: 5,
            legendOffset: -40,
        }}
    />
)

const AdminDashboard = () => {

  const [saleData, setSaleData] = useState([]);
  const [earningData, setEarningData] = useState([]);
  const {user: {_id: userId, name}, token} = isAuth();

  useEffect(() => {
    getOrdersGrouped(userId, token).then(result => {
      console.log(result);
      setSaleData([{
        id: "products",
        data: (result.map(data => ({ x: data._id, y: data.sold }))).sort((a, b) => {
          const prev = parseInt(a.x.split("-")[2]);
          const next = parseInt(b.x.split("-")[2]);
          return prev - next;
        })
      }]);

      setEarningData([{
        id: "Earnings",
        data: (result.map(data => ({ x: data._id, y: data.totalAmount }))).sort((a, b) => {
          const prev = parseInt(a.x.split("-")[2]);
          const next = parseInt(b.x.split("-")[2]);
          return prev - next;
        })
      }])

    }).catch(err => {
      console.log(err);
    });
    // eslint-disable-next-line
  }, [])


  return (
    <AdminBase title="Dashboard" desc={`Good Morning ${name}!`}>
      <OrderChartWrapper>
        <ChartWrapper>
          <ChartTitle>Sales Stastics</ChartTitle>
          <SalesChart data={saleData} />
        </ChartWrapper>
        <CardsWrapper>
          <div className="">

          </div>
        </CardsWrapper>
      </OrderChartWrapper>
      <OrderChartWrapper>
        <CardsWrapper>

        </CardsWrapper>
        <ChartWrapper>
          <ChartTitle>Earnings Stastics</ChartTitle>
          <EarningsChart data={earningData} />
        </ChartWrapper>
      </OrderChartWrapper>
    </AdminBase>
  )
}

export default AdminDashboard
