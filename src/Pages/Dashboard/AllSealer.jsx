import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Loading from "../Shared/Loading";

const AllSealer = () => {
  const {
    data: sealer,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["userSealer"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/userSealer?role=Sealer`
      );
      const data = await res.json();
      return data;
    },
  });
  const handelDeleteSealer = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast("Delete Successfully");
        }
        refetch();
      });
  };



  
  if (isLoading) {
    <Loading />;
  }


  const handelMakeAdmin = (_id) => {
    fetch(`http://localhost:5000/users/admin/${_id}`, {
      method: "PUT",
      headers:{
        authorization:`bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.modifyCount){
        toast('Make Admin Successfully')
        refetch()
      }
    })
    
  };

  return (
    <div className="m-4">
      <h3 className="text-3xl">All Sealer</h3>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Admin</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sealer?.map((seler, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{seler?.name}</td>
                  <td>{seler?.email}</td>
                  <td>
                    {
                      <button onClick={() => handelMakeAdmin(seler?._id)} className="bg-green-500 text-white p-1 rounded-md">Make Admin</button>
                      }
                    
                  </td>
                  <td>
                  <button
                      onClick={() => handelDeleteSealer(seler?._id)}
                      className="bg-red-500 text-white p-1 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllSealer;
