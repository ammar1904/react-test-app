import { useEffect, useState } from "react";
import userService, { Users } from "../services/user-service";
import { CanceledError } from "../services/api-client";

const useUsers = () => {
    const [users, setUsers] = useState<Users[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  
  useEffect(() => {
      setLoading(true);
      
      const { request, cancel } = userService.getAll<Users>();
      request
      .then((res) => {
          setUsers(res.data);
          setLoading(false);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setErrors(err.message);
            setLoading(false);
        });
        
        return () => cancel();
    }, []);

    return { users, errors, isLoading, setUsers, setErrors }
}

export default useUsers



// useEffect(() => {
//   const fetchUsers = async () => {
//     try {
//       const res = await axios.get<Users[]>(
//         "https://jsonplaceholder.typicode.com/xusers"
//       );
//       setUsers(res.data);
//     } catch (err) {
//       setErrors((err as AxiosError).message);
//     }
//   };
//   // .then((res) => setUsers(res.data))
//   // .catch((err) => setErrors(err.message));
//   fetchUsers();
// }, []);