import Dropdown from "../Dropdown/dropdown"

function About(dataAbout) {
    const donnee = dataAbout.i
    
   
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

export default About