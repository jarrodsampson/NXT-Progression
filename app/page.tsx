"use client";
import { useEffect } from "react";
const Home: React.FC = () => {
  useEffect(() => {
    document.title = `Home - ${process.env.NEXT_PUBLIC_APP_NAME}`;
  }, []);
  return <div className="flex flex-col items-center justify-between p-24"></div>;
};

export default Home;
