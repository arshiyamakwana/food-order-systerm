import React from 'react'

const Dashboard = () => {
  return (
    <div>
    <h1 style={{textAlign:"center",color:"red"}}>Dashboard</h1>
    <div style={{display:"flex"}}>
  <img src="/card_total_order.png" alt="dsd" />
  <img src="/card_total_delivered.png" alt="" />
  <img src="/card_total_delivered.png" alt="" />
  </div>
  <div style={{display:"flex"}}>
    <img src="/pieChart.png" alt=""  style={{width:"550px"}}/>
    <img src="/card_chart_order.png" alt="" style={{width:"600px"}}/>
  </div>
<div style={{display:"flex"}}>
  <img src="/card_total_revenue.png" alt=""style={{width:"800px"}} />
  <img src="/card_customer_map.png" alt=""style={{width:"300px"}}  />
</div>
    </div>
  )
}

export default Dashboard