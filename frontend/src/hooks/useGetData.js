import { useContacts } from '../context/contactContext'
const useGetData=() => {
    const {contacts, setContacts} = useContacts();
    const fetchData=async()=>{
        try{
            const response=await fetch('http://localhost:5000/contacts');
            const data=await response.json();
            setContacts(data);
            console.log(data);
           
        }
        catch(error){
            console.log(error);
           
        }
       

    }
    return {contacts, fetchData};

}
export default useGetData