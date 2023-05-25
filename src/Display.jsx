import { useState, useEffect } from "react";
import DisplayEach from "./DisplayEach";

function Display() {

    const [students, setStudents] = useState([

    ])

    const [count, setCount] = useState(0);

    const [student, setStudent] = useState({

    })

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const eachStudent = students.map(each => (
        <DisplayEach title={each.title} firstname={each.firstname} lastname={each.lastname} gender={each.gender} picture={each.picture} />
    ))

    useEffect(() => {
        fetch("https://randomuser.me/api/", requestOptions)
            .then(response => response.json())
            .then(result => {
                setStudent({
                    title: result.results[0].name.title,
                    firstname: result.results[0].name.first,
                    lastname: result.results[0].name.last,
                    gender: result.results[0].gender,
                    picture: result.results[0].picture.large
                })
            })
            .catch(error => console.log('error', error));

        setStudents(prevStudents => {
            return [
                ...prevStudents, student
            ]
        })
    }, [count])


    return (
        <>
            {eachStudent}
            <button className="btn btn-dark" onClick={() => {
                setCount(count + 1);
            }}>New Student</button>
        </>
    )
}

export default Display;