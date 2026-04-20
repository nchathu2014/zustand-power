import { useEffect } from "react";
import { useImageStore } from "../store/imageStore";

export function ImageStore() {
  const { images, loading, error, fetchImages } = useImageStore();

  //     useEffect(() => {
  //     fetchImages();
  //   }, [fetchImages]);

  if (error) return <div className="text-red-600">{error?.message}</div>;
  if (loading) return <div className="text-blue-700">Loading...</div>;

  console.log(images);

  return (
    <div className="bg-amber-200 mt-5 p-4">
      <h2>My Image Store</h2>
      <button
        onClick={fetchImages}
        className="bg-red-800 text-white py-2 px-3 rounded hover:bg-red-500"
      >
        {images?.length === 0 ? "Show My Images" : "Refresh"}
      </button>
      {/* <div className={`flex flex-wrap w-125`}>
        <div className="w-1/5 p-1">
             {images?.map(image=>(
            <div key={image?.id}>
            <img src={image?.download_url} className=" w-full h-full object-cover rounded-xl"/>
        </div>
        ))}
        </div>
       
      </div> */}

      <div className="flex flex-wrap mb-20">
        {images?.map((image) => (
          <div
            key={image?.id}
            className="w-1/1 justify-center  md:w-1/5 p-1 m-6"
          >
            <div>
              <span className="text-sm">
                <span className="font-semibold">Author: </span>
                {image?.author}
              </span>
            </div>
            <img
              className="w-full h-full object-cover rounded-xl"
              src={image?.download_url}
            />
            <a
              href={image?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 text-white py-2 px-3 rounded hover:bg-blue-500"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
