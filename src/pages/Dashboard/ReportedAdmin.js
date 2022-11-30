import { useQuery } from "@tanstack/react-query";
import React from "react";

const ReportedAdmin = () => {
  const { data: reported = [], refetch } = useQuery({
    queryKey: ["bikesInfo"],
    queryFn: async () => {
      const res = await fetch(
        "https://first-sale-server.vercel.app/ProductReported?report=reported"
      );
      const data = await res.json();
      refetch();
      // setBikes(true)
      return data;
    },
  });
  console.log(reported);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you Delete this Items");
    console.log(id);
    if (proceed) {
      fetch(`https://first-sale-server.vercel.app/user/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successFully");

            refetch();
          }
        });
    }
  };

  return (
    <div>
      <h1 className="text-2xl">All users</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Email</th>
              <th>Price</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {reported.map((report, i) => (
              <tr key={report._id}>
                <th>{i + 1}</th>
                <td>{report.image_url}</td>
                <td>{report.email}</td>
                {report?.status !== "booked" ? (
                  <th>Available</th>
                ) : (
                  <th>Booked</th>
                )}
                <td>
                  <button
                    onClick={() => handleDelete(report._id)}
                    className="btn  bg-error text-white"
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
  );
};

export default ReportedAdmin;
