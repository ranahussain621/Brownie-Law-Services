import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

export default function Section2() {
    const dateList = [

        {
            date: "March 18,2023",
            tasks: "Opening New Office",



        },
        {
            date: "Jun 5, 2023",
            tasks: "We are a best company of the year",

        },
        {
            date: "Dec 25, 2022",
            tasks: "Lawyers Attorneys Opening",


        },
        {
            date: "March 18, 2023",
            tasks: "Client Success determines",

        },

    ];

    const progressList = [
        {
            title: "Development",
            progressValue: 90,
        },
        {
            title: "Banking & Financial",
            progressValue: 100,
        }
        ,
        {
            title: "Family Law",
            progressValue: 75,
        }
        ,
        {
            title: "Real Estate",
            progressValue: 100,
        }
        ,
        {
            title: "Marketing",
            progressValue: 80,
        }
        ,
        {
            title: "Sale ",
            progressValue: 100,
        }


    ]
    return (
        <>
            <div className="container">


                <div className="row mt-5">
                    <div className="col-md-6">
                        {
                            dateList.map((item, i) => {
                                return (
                                    <>
                                        <div className="card shadow shadow-sm mb-2"
                                            style={{ backgroundColor: "#EEEEEE" }}
                                            key={i}>
                                            <div className="card-body d-flex justify-content-center align-items-center">
                                                <div className='p-3 text-center'>
                                                    <div className="d-flex">
                                                        <div className='px-2'><FontAwesomeIcon icon={faCalendarDays} /></div>
                                                        <div><p className='poppins-600 h3'>{item.date}</p></div>
                                                    </div>

                                                    <small className='text-muted '>{item.tasks}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                    <div className="col-md-6">
                        {
                            progressList.map((item, i) => {
                                return (
                                    <>
                                        <div className='mt-5' key={i}>
                                            <p className='poppins-500 h6 fs-5 text-muted'>{item.title}</p>
                                            <div className="progress "
                                                role="progressbar"
                                                aria-label="Example 8px high"
                                                aria-valuenow="25"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                                style={{ maxHeight: '12px' }}
                                            >
                                                <div className="progress-bar bg-secondary" style={{ width: `${item.progressValue}%` }}>{item.progressValue}</div>



                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}
