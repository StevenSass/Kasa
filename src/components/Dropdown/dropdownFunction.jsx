import Dropdown from "./dropdown"

function DropdownFunction(dataAPropos) {
    const donnee = dataAPropos.i
    
   
    return (
        <div className="dropdown">
            {donnee.map((dropdown) => (
                <Dropdown
                    key={dropdown.id}
                    text={dropdown.text}
                    title={dropdown.title}
                />
            ))}
        </div>
    )
}

export default DropdownFunction