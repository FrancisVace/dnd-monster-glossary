import type {JSX} from "react";

interface PagingButtonProps {
    currentPage: number,
    onPageChange: (page: number) => void,
}

function PagingButtons(props: PagingButtonProps): JSX.Element {
    return <div className="join">
        <button className="join-item btn" onClick = {() => {props.onPageChange(-1)}}>«</button>
        <button className="join-item btn">Page {props.currentPage}</button>
        <button className="join-item btn" onClick = {() => {props.onPageChange(1)}}>»</button>
    </div>
}

export default PagingButtons