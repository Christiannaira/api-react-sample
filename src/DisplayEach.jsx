function DisplayEach({ title, firstname, lastname, gender, picture }) {
    return (
        <>
            <div className="row border">
                <h3>{title} {firstname} {lastname} {gender}</h3>

            </div>

        </>
    )
}

export default DisplayEach;