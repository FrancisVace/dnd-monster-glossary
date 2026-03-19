import {useState} from 'react'
import MonsterGrid from "./components/MonsterGrid.tsx";
import PagingButtons from "./components/PagingButtons.tsx";
import SearchField from "./components/SearchField.tsx";
import MonsterDetails from "./components/MonsterDetails.tsx";

function App() {
    const [page, setPage] = useState(0)
    const [searchTerm, setSearchTerm] = useState("")
    const [detailID, setDetailID] = useState("")

    const trySetPage = (diff: number) => {
        setPage(Math.max(page + diff, 0))
    }

    const itemsPerPage = 12

    return (
        <>
            <div className="p-2 flex justify-center">
                <h1 className="text-3xl text-base-content">DnD Monster Glossary</h1>
            </div>
            <div className="relative flex items-center justify-center m-2">
                <span>
                    <PagingButtons currentPage={page + 1} onPageChange={trySetPage}/>
                </span>
                <span className="absolute inset-e-0">
                    <SearchField placeHolder="Search" onSearch={setSearchTerm}/>
                </span>
            </div>
            <div className="relative flex items-center justify-center m-2">
                {detailID === "" ?
                    <MonsterGrid monsterDetails={{skip: page * itemsPerPage, searchTerm: searchTerm}} onCardClicked={setDetailID}/> :
                    <MonsterDetails id={detailID} onClose={() => setDetailID("")}/>
                }
            </div>
        </>
    )
}

export default App
