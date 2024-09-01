import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate()
    const error  = useRouteError();
    const handelNavigate = ()=>{
        navigate(-1);
    }
    if(error.status === 404){
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500 text- text-red-700">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the home page.
          </p>
          <button
           onClick={handelNavigate}
            className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4 bg-red-700 hover:bg-green-700 hover:duration-700"
          >
            Back to Homepage
          </button>
        </div>
      </div>
    </section>
  );
};
};

export default Error;