"use client";
import React from 'react'
import Sidebar from '../components/sidenav';
import Dashheader from '../components/dashheader';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import { data } from '../data/data';
import TopCards from '../components/topcards';
import BarChart from '../components/barchart';
import RecentOrders from '../components/recentorders';


export default function Dashboard (){
  return (
   
   
  <Sidebar>
    
    <Dashheader/>
    
<TopCards />
<div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
  <BarChart />
  <RecentOrders />
</div>
   
  </Sidebar>

  )
}
