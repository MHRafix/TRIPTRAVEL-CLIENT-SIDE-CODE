import { useState } from "react";

const useDelete = (link) => {
      const [ showAlert, setShowAlert ] = useState(false);
      const [ deleting, setDeleting ] = useState(false);

        // Handle delete booked package with confirmation window alert 
        const handleDelete = (id) => {                      // Filter out rest data with deleted data and update state data
            //    const restData = getData.filter(data => data._id !== id);
            //    setGetData.push(restData);
               setDeleting(true);
               const url = `https://fathomless-thicket-49916.herokuapp.com/${link}/${id}`;
               fetch(url, {
                   method: 'DELETE'
               })
               .then(res => res.json())
               .then(data => {
                   if(data.deletedCount > 0){
                      setDeleting(false);
                      setShowAlert(true);
               }
            });
           }
           
    return { handleDelete, deleting, showAlert };
};

export default useDelete;