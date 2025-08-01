'use client';
import React, { useEffect } from 'react';
import Taple_SHared from '../../shared/Taple_SHared';
import {
 
  FaPlus,
} from "react-icons/fa";
import { axiosInstance } from '@/services/api';
import { GroupService } from '@/services/group.service';
import { useAppSelector } from '@/store/hooks';
import axios from 'axios';


const Groups = () => {
  const dummyRows = [
    {
      id: 1,
      name: "Product 1",
      image: "https://via.placeholder.com/150",
      price: "$10",
      description: "This is the first product",
      category: [{ name: "Category A" }]
    },
    {
      id: 2,
      name: "Product 2", 
      image: "https://via.placeholder.com/150",
      price: "$20",
      description: "This is the second product",
      category: [{ name: "Category B" }]
    },
    {
      id: 3,
      name: "Product 2", 
      image: "https://via.placeholder.com/150",
      price: "$20",
      description: "This is the second product",
      category: [{ name: "Category B" }]
    }
  ];

 
  const handleView = (item: any) => {
    console.log("View:", item);
  };
  const handleEdit = (item: any) => {
    console.log("Edit:", item);
  };
  const handleFavorite = (item: any) => {
    console.log("Favorite:", item);
  };
  let [stateExams, setStateExams] = React.useState<any[]>([]);
  let T_Head=['name','max_students','status','_id','instructor','students'];
const token = useAppSelector((state) => state.auth.user?.token);
 const FunGetAll = async () => {
    try {
      const tokenn = localStorage.getItem("tokenn");
      if (!tokenn) {
        console.warn("No token found in localStorage");
        return;
      }
      const res = await axios.get('https://upskilling-egypt.com:3005/api/group', {
        headers: {
          Authorization: `Bearer  ${tokenn}`,
        },
      }
      )
      console.log("res", res.data);
        setStateExams(res.data);
      
    } catch (error) {
      console.error("Error fetching groups:", error);
    }
  };
useEffect(() => {
  FunGetAll()
}, []);
 console.log(stateExams , "stateExams")




  return (
    <div >
      <div  >
        <div className="flex justify-end">
           <button className="flex items-center gap-2 border border-gray-300 px-3 md:px-4 py-1.5 rounded-full hover:bg-gray-100 transition text-xs md:text-sm font-medium">
                <FaPlus className="w-4 h-4 text-end flex" />
                <span className="hidden sm:inline">New quiz</span>
              </button>
        </div>
       
        <div className='mt-10' >
          <Taple_SHared
         
            rows={stateExams ? stateExams : dummyRows}
            funView={handleView}
            funEdit={handleEdit}
            funDelete={handleFavorite}
           T_Head={T_Head}
          />
        </div>
      </div>
    </div>
  );
};

export default Groups;