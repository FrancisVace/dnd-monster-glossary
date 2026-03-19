import {type JSX, useEffect, useRef, useState} from "react";

interface SearchFieldProps {
    placeHolder: string,
    onSearch: (searchTerm: string) => void,
}

function SearchField(props: SearchFieldProps): JSX.Element {
    const [searchTerm, setSearchTerm] = useState("")

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const input = inputRef.current
        const handleSearch = () => props.onSearch(input?.value ?? "")
        input?.addEventListener("search", handleSearch)
        return () => input?.removeEventListener("search", handleSearch)
    }, [props])

    return <div>
        <div className="join">
            <label className="join-item input">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input
                    ref={inputRef}
                    type="search"
                    className="grow"
                    placeholder={props.placeHolder}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && props.onSearch(searchTerm)}
                />
            </label>
            <button className="join-item btn btn-accent" onClick={() => props.onSearch(searchTerm)}>Search</button>
        </div>

    </div>
}

export default SearchField