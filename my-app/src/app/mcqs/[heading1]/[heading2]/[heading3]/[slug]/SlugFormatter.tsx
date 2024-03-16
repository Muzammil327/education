
'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Props {
  slug: string | string[];
}

interface McqsData {
  // Define the structure of your data here
}

const SlugFormatter: React.FC<Props> = ({ slug }) => {
    const [formattedSlug, setFormattedSlug] = useState<string>('');
    const [data, setData] = useState<McqsData | null>(null);
    const [loader, setLoader] = useState<boolean>(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Format the slug based on its type
          const formatted = Array.isArray(slug)
            ? slug.join(' ').replace(/-/g, ' ')
            : slug.replace(/-/g, ' ');
  
          setFormattedSlug(formatted);
  
          // Construct URL based on formatted slug
          const URL = `${process.env.NEXT_PUBLIC_API_KEY}get/mcqs/${formatted}`;
          const response = await axios.get(URL);
          setData(response.data);
          setLoader(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoader(false);
        }
      };
  
      fetchData();
    }, [slug]);

  // You can return JSX elements here, or render them wherever you use this component
  return (
    <div>
      {/* Your JSX code here */}
    </div>
  );
};

export default SlugFormatter;
