import React from 'react';

const Categories = ({ data }) => {
  return (
    <section className="bg-white px-6 sm:px-12 lg:px-32 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Chairs Card */}
        <div className="bg-gray-50 rounded-2xl px-8 flex items-center text-left relative overflow-hidden w-full min-h-[400px]">
          <div className="flex-1 flex flex-col mt-5 h-full ">
            <div className="inline-flex items-center px-3 py-1 bg-white rounded-full shadow-sm w-fit text-sm mb-2">
  <span className="text-yellow-500 font-bold">{data[0].items}+</span>&nbsp;
  <span className="text-gray-500">Items</span>
</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{data[0].name}</h2>
            <p className="text-gray-500 text-sm mb-2">{data[0].description}</p>
            <ul className="text-gray-700 text-base space-y-1 mb-2">
              {data[0].products.map((product, index) => (
                <li key={index}>{product}</li>
              ))}
            </ul>
          </div>
          <div className="flex-shrink-0 flex items-center justify-center mt-12h-full">
            <img src={data[0].image} alt={data[0].name} className="w-56 h-[340px] object-contain" />
          </div>
        </div>

        {/* Right Side: Sofa and Lighting */}
        <div className="flex flex-col gap-6 w-full">
          {/* Sofa Card */}
      <div className="bg-gray-50 rounded-2xl px-8 p-2 flex items-center text-left relative overflow-hidden w-full min-h-[180px]">
  <div className="flex-1 flex flex-col justify-center h-full">
    <div className="inline-flex items-center px-3 py-1 bg-white rounded-full shadow-sm w-fit text-sm mb-2">
      <span className="text-yellow-500 font-bold">{data[1].items}+</span>&nbsp;
      <span className="text-gray-500">Items</span>
    </div>
    <h2 className="text-2xl font-bold text-gray-800 mb-2">{data[1].name}</h2>
    <ul className="text-gray-700 text-base space-y-1">
      {data[1].products.map((product, index) => (
        <li key={index}>{product}</li>
      ))}
    </ul>
  </div>

  {/* Image pushed to far right */}
  <div className="flex ml-auto items-end">
  <img 
    src={data[1].image} 
    alt={data[1].name} 
    className="h-52 w-full max-w-[280px] object-contain" 
  />
</div>

</div>

          {/* Lighting Card */}
       <div className="bg-gray-50 rounded-2xl px-8 p-4 flex items-center text-left relative overflow-hidden w-full min-h-[200px]">
  {/* Text Content */}
  <div className="flex-1 flex flex-col h-full z-10">
    <div className="inline-flex items-center px-3 py-1 bg-white rounded-full shadow-sm w-fit text-sm mb-2">
      <span className="text-yellow-500 font-bold">{data[2].items}+</span>&nbsp;
      <span className="text-gray-500">Items</span>
    </div>
    <h2 className="text-2xl font-bold text-gray-800 mb-2">{data[2].name}</h2>
    <ul className="text-gray-700 text-base space-y-1">
      {data[2].products.map((product, index) => (
        <li key={index}>{product}</li>
      ))}
    </ul>
  </div>

  {/* Hanging Lamp Image */}
  <div className="absolute top-0 right-6 h-full flex items-start justify-end z-0">
    <img 
      src={data[2].image} 
      alt={data[2].name} 
      className="w-72 h-auto object-contain" 
    />
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Categories;
