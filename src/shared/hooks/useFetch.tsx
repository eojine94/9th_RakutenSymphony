import React, { useEffect, useState } from "react";
import axios from "axios";
import { LinkData } from "shared/types";
import { useParams } from "react-router";

const useFetch = (url: string, needFilter: boolean = false) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<LinkData[] & LinkData>();
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${PROXY}${url}`);
        if (!needFilter) {
          setData(response.data);
        } else {
          const data = response.data;
          const filteredData = data.find((el: LinkData) => el.key === id);
          setData(filteredData);
        }
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return data;
};

export default useFetch;
