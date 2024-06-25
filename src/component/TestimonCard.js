

const TestimonCard = ({ name, designation, review }) => { 
  return (
    <div className="max-w-[400px] min-h-[296px] mb-10  rounded bg-slate-50 mr-4">
      <div className="mt-[-5px]">
      <div className="text-start font-medium ml-2 sm:ml-4 text-lg whitespace-nowrap overflow-hidden text-ellipsis">
        {name}
      </div> 
      <div className="text-start font-medium ml-2 sm:ml-4 mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
        {designation}
      </div> 
      <div className="pb-2 text-start mx-2 sm:mx-4 text-sm sm:text-base mb-2 font-semibold text-gray-600">
        {review}
      </div>
      </div>
      
    </div>
  );
};
export default TestimonCard;
