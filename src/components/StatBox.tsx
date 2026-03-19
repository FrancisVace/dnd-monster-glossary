import React from "react";

function StatBox(props: {className?: string, children: React.ReactNode}) {
    return <div className={`${props.className ?? ""} bg-secondary shadow-sm p-4 rounded-xl
     border-secondary-content border-2`}>
        {props.children}
    </div>
}

export default StatBox