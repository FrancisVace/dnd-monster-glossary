function AttributeCard (props: {attributeName: string, score: number, className?: string}) {
    const combinedClassname = `${props.className ?? ""} bg-secondary shadow-sm p-4 
    border-secondary-content border-solid border-2`
    return <div className={combinedClassname}>
        <h1 className="text text-md text-secondary-content">{props.attributeName}: {props.score}</h1>
    </div>
}

export default AttributeCard
