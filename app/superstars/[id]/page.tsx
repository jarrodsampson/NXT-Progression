"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ApiService } from "../../services/ApiService";
import { Superstar } from "../../types/interfaces";
import LoadingSpinner from "../../components/loadingSpinner/loadingSpinner";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Page = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const [superstar, setSuperstar] = useState<Superstar | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ApiService.fetchSuperstar(params.id);
        // console.log(data);
        setSuperstar(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };

    fetchData();
  }, [params.id]);

  useEffect(() => {
    document.title = `${superstar?.name || ""} - ${process.env.NEXT_PUBLIC_APP_NAME}`;
  }, [superstar]);

  return (
    <>
      <LoadingSpinner isLoading={isLoading} />
      <div className="flex flex-col items-center justify-between pt-24 px-12">
        <AliceCarousel
          mouseTracking
          disableDotsControls
          autoPlay
          infinite
          autoPlayInterval={6000}
          responsive={{
            0: {
              items: 4,
            },
            1024: {
              items: 5,
              itemsFit: "contain",
            },
          }}
          items={superstar?.videos.map(({ thumbnail, name, duration, link }, index) => (
            <div className="mx-2 relative" key={index} onDragStart={(e) => e.preventDefault()}>
              <a href={link} target="_blank">
                <Image
                  className="w-full h-76 object-cover object-center mb-4 rounded-lg shadow-md"
                  src={thumbnail}
                  alt={name}
                  width={200}
                  height={100}
                  priority={true}
                />
                <p className="text-gray-500 py-2 absolute top-0 right-0 bg-black bg-opacity-70 text-white px-2">
                  {duration}
                </p>
              </a>
            </div>
          ))}
        />
        <button type="button" onClick={() => router.back()}>
          Click here to go back
        </button>
        <div className="w-full">
          <h1>{superstar?.name}</h1>
          <Image
            className="w-full h-76 object-cover object-center mb-4 rounded-lg shadow-md
          transition-transform transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-[-5deg]"
            src={superstar?.bio_image || "/placeholder.png"}
            placeholder="blur"
            blurDataURL="/placeholder.png"
            alt={`Superstar ${superstar?.name}`}
            width={800}
            height={500}
            priority={true}
          />
          <div>
            {superstar?.bio_description.map((item, index) => {
              return (
                <p key={index} className="my-8">
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
