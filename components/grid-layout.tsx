type GridBoxProps = {
    top?: boolean
    bottom?: boolean
    left?: boolean
    right?: boolean
    children?: React.ReactNode
}

function GridBox({
    top,
    bottom,
    left,
    right,
    children,
}: GridBoxProps) {
    return (
        <div
            className={`
        relative w-full h-fit 
        ${top ? "border-t border-black" : ""}
        ${bottom ? "border-b border-black" : ""}
        ${left ? "border-l border-black" : ""}
        ${right ? "border-r border-black" : ""}
      `}
        >
            {children}
        </div>
    );
}

export default GridBox