'use client'
import Link from 'next/link';
import React, { use, useEffect, useState } from 'react';

const Orders = ({ searchParams }) => {
    let { status } = use(searchParams)

    
    const groceryOrders = [
        {
            orderId: "ORD-1001",
            userId: 1,
            customerName: "Rahim Ahmed",
            status: "completed",
            totalAmount: 1250,
            orderDate: "2025-01-02",
            itemsCount: 4
        },
        {
            orderId: "ORD-1002",
            userId: 2,
            customerName: "Niloy Paul",
            status: "pending",
            totalAmount: 820,
            orderDate: "2025-01-04",
            itemsCount: 3
        },
        {
            orderId: "ORD-1003",
            userId: 3,
            customerName: "Sadia Khan",
            status: "upcomming",
            totalAmount: 460,
            orderDate: "2025-01-05",
            itemsCount: 2
        },
        {
            orderId: "ORD-1004",
            userId: 4,
            customerName: "Imran Hossain",
            status: "completed",
            totalAmount: 980,
            orderDate: "2025-01-06",
            itemsCount: 5
        },
        {
            orderId: "ORD-1005",
            userId: 5,
            customerName: "Nusrat Jahan",
            status: "pending",
            totalAmount: 670,
            orderDate: "2025-01-07",
            itemsCount: 3
        },
        {
            orderId: "ORD-1006",
            userId: 6,
            customerName: "Arif Islam",
            status: "upcomming",
            totalAmount: 1140,
            orderDate: "2025-01-08",
            itemsCount: 6
        },
        {
            orderId: "ORD-1007",
            userId: 7,
            customerName: "Tanvir Ahmed",
            status: "completed",
            totalAmount: 1520,
            orderDate: "2025-01-09",
            itemsCount: 7
        },
        {
            orderId: "ORD-1008",
            userId: 8,
            customerName: "Farzana Akter",
            status: "pending",
            totalAmount: 390,
            orderDate: "2025-01-10",
            itemsCount: 2
        },
        {
            orderId: "ORD-1009",
            userId: 9,
            customerName: "Mahmudul Hasan",
            status: "completed",
            totalAmount: 860,
            orderDate: "2025-01-11",
            itemsCount: 4
        },
        {
            orderId: "ORD-1010",
            userId: 10,
            customerName: "Jannatul Ferdous",
            status: "upcomming",
            totalAmount: 740,
            orderDate: "2025-01-12",
            itemsCount: 3
        },
        {
            orderId: "ORD-1011",
            userId: 11,
            customerName: "Sabbir Rahman",
            status: "pending",
            totalAmount: 1320,
            orderDate: "2025-01-13",
            itemsCount: 6
        },
        {
            orderId: "ORD-1012",
            userId: 12,
            customerName: "Ayesha Siddika",
            status: "completed",
            totalAmount: 560,
            orderDate: "2025-01-14",
            itemsCount: 2
        }

    ];


    const filterOrders = groceryOrders.filter(orde => {
        if (!status) {
            return groceryOrders
        }else{
            return orde.status == status
        }
        

    })






    //console.log(filterOrders);
    return (
        <div>
            <div className='my-3 flex gap-x-3'>
                <Link href={'/dashbord/orders?status=completed'} className='bg-green-900 cursor-pointer text-white px-4 py-1'>Completed</Link>
                <Link href={'/dashbord/orders?status=pending'} className='bg-yellow-900 cursor-pointer text-white px-4 py-1'>Pending</Link>
                <Link href={'/dashbord/orders?status=upcomming'} className='bg-yellow-500 cursor-pointer text-white px-4 py-1'>Upcomming</Link>
            </div>
            <table className='table-fixed w-full'>
                <thead>
                    <tr className='text-left text-lg'>
                        <th>Order ID</th>
                        <th>Customar Name</th>
                        <th>Blance</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        filterOrders.map(order => {
                            return (
                                <tr key={order.orderId}>
                                    <td>{order.orderId}</td>
                                    <td>{order.customerName}</td>
                                    <td>{order.totalAmount}</td>
                                    <td>{order.status}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    );
};

export default Orders;