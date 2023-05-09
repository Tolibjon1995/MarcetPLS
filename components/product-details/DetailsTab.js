import React from 'react'

const DetailsTab = ({ producti }) => {
    return (
        <div className='container'>
            <table className="table product_detail">
                <tbody>
                    {
                        producti?.details?.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.value1}</td>
                                    <td>{item.value2}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default DetailsTab