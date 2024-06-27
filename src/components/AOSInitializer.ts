"use client";

import { useEffect } from "react";
import AOS from "aos";

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

  return null;
};

export default AOSInitializer;
