import axios from "axios";
import { useState } from "react";

const usePost = () => {
    const [ posting, setPosting ] = useState(false);
    const [ success, setSuccess ] = useState(false);


    const handlePost = (data, url) => {
        setPosting(true);
        axios.post(`https://fathomless-thicket-49916.herokuapp.com/${url}`, data)
        .then(res => {
          if(res.data.insertedId){
            setPosting(false);
            setSuccess(true);
           }
        })
  
  };

    return { handlePost, posting, success };
};

export default usePost;