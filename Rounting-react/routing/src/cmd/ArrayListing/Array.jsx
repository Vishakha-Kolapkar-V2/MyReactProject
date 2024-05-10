import React from 'react'

export default function Array() {
    const students = [{ name: "Kirti", email: "kirti@gmail.com", contact: '220989' },
    { name: "Nisha", email: "nisha@gmail.com", contact: '240989' },
    { name: "Prachi", email: "prachi@gmail.com", contact: '250989' }
    ]
    return (
        <div>
            <h1 style={{ backgroundColor: 'skyblue' }}>Array Listing Using Map Function</h1>
                
                <table border="1" align='center'>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                    </tr>
                    {
                        students.map((item) =>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.contact}</td>
                            </tr>
                        )
                    }
                </table>
        </div>
    )
}
