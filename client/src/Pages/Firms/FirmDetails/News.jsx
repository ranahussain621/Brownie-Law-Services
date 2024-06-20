import React, { useEffect } from 'react';
import new1 from '../../../assets/firmsDetail-assets/new1.png';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../../_redux/features/firm/firmSlice';

export default function News({ data }) {
  const { newsList } = useSelector((state) => state.firm);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      await dispatch(getNews({ id: data }));
    };
    getData();
  }, []);

  return (
    <>
      <div className="col-md-12">
        {newsList?.data?.length > 0 ? (
          newsList.data
            .slice() // Create a shallow copy of the array
            .reverse() // Reverse the order
            .map((item, i) => {
              const formattedDate = new Date(item.updatedAt).toLocaleString();
              const description = item?.description.endsWith('.') ? item.description : item.description + '.';
              return (
                <div className="card mb-3 border-0" key={i}>
                  <img
                    src={item.image?.length > 0 ? item.image : new1}
                    className="rounded-5 img-fluid border news-details-img"
                    alt="..."
                    style={{ width: '100%', height: 'auto' }}
                    
                  />
                  <div className="card-body ">
                    <h5 className="fw-bold poppins-600 h3 details-text">
                      {item.name?.slice(0, 20)}
                    </h5>
                    <p className=" poppins-500 details-desc" style={{ color: '#000' }}>
                      {description}
                    </p>
                    <p className="card-text mt-3">
                      <small className="fs-6" style={{ color: '#000' }}> {formattedDate} </small>
                    </p>
                    <hr className="mt-md-2 mt-sm-2" />
                  </div>
                </div>
              );
            })
        ) : (
          <h2 className='p-5 text-danger poppins-500 d-flex justify-content-center' style={{textTransform:'capitalize',fontSize:'18px'}}>We will provide shortly</h2>
        )}
      </div>
    </>
  );
}
