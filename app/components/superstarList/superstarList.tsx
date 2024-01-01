"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ApiService } from "../../services/ApiService";
import { Superstar } from "../../types/interfaces";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingSpinner from "../loadingSpinner/loadingSpinner";

const SuperstarList: React.FC<{ selectedOption: string }> = ({ selectedOption }) => {
  const [superstarData, setSuperstarData] = useState<Superstar[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await ApiService.fetchSuperstars(24, 0, selectedOption);
        // console.log(data);
        setSuperstarData(data);
        setHasMore(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };

    fetchData();
  }, [selectedOption]);

  const fetchMoreData = async () => {
    setIsLoading(true);
    try {
      const newData = await ApiService.fetchSuperstars(10, superstarData.length, selectedOption);
      if (newData.length === 0) {
        setHasMore(false);
      } else {
        setSuperstarData((prevData) =>
          Array.isArray(newData) ? [...prevData, ...newData] : prevData
        );
      }
    } catch (error) {
      console.error("Error fetching more superstar data:", error);
      setHasMore(false);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  return (
    <div data-cy="superstar-div">
      <LoadingSpinner isLoading={isLoading} />
      <InfiniteScroll
        dataLength={superstarData.length}
        style={{
          overflow: "hidden",
        }}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<LoadingSpinner isLoading={isLoading} />}
      >
        <div className="flex flex-wrap -m-4 p-12">
          {superstarData.map((superstar) => (
            <div key={superstar.id} className="relative p-4 w-1/4">
              <Link href={`/superstars/${superstar.id}`}>
                <div className="group">
                  <Image
                    className="w-full h-76 object-cover object-center mb-4 rounded-lg shadow-md
          transition-transform transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-[-5deg]"
                    src={superstar?.image || "/image"}
                    alt={`Superstar ${superstar?.name}`}
                    width={400}
                    height={300}
                  />
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end p-6 rounded-lg">
                    <div className="w-full bg-black bg-opacity-50 rounded-lg p-4">
                      <h2 className="text-l font-bold mb-2 text-white text-center">
                        {superstar.name}
                      </h2>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default SuperstarList;
