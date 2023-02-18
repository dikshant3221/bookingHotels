// import axios from 'axios';
// import { useEffect ,useState} from 'react'

// function useFetch(url) {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(false);

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(false);
//             try {
//                 const res = await axios.get(url).then((data) => {
//                     setData(data);
//                 })

//             } catch (err) {
//                 setError(err)
//             }
//             setLoading(false)
//         };
//         fetchData();
//     }, [url])

//     const reFetchData = async () => {
//         setLoading(false);
//         try {
//             const res = await axios.get(url).then((data) => {
//                 setData(data);
//             })

//         } catch (err) {
//             setError(err)
//         }
//         setLoading(false)
//     }

//     return (data,loading,error,reFetchData)
// };

// export default useFetch;