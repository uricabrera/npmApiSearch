import { useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";


const RepositoriesList: React.FC = () => {
    const [term,setTerm] = useState("");
    const { searchRepositories } = useActions();
    const {data,error,loading} = useSelector((state: any) => state.repositories)
    console.log(data);

    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchRepositories(term);
    }

    return (<div>
        <form onSubmit={onSubmit}>
            <input value={term} onChange={e => setTerm(e.target.value)}/>
            <button>Search</button>
        </form>
        <div>
            <ul>
                {
                    data.map((item: any) => {
                        return <li>{item}</li>
                    })
                }
            </ul>
        </div>
    </div>)
}

export default RepositoriesList;