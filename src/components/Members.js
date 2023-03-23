import React from 'react';

const Members = () => {
    let members = [
        { name: 'Harish', age : 11 },
        { name: 'Santhosh', age: 10},
        { name: 'Sakthivel', age: 8},
        { name: 'Logesh', age: 9},
        { name: 'Gokul', age: 16},
        { name: 'Chandru', age : 5 },
        { name: 'Logith', age: 6},
        { name: 'Rohith', age: 6},
        { name: 'Naveen Pattayar', age: 12},
        { name: 'MP Dharmar', age: 36},
        { name: 'Ajith', age: 25},
        { name: 'P Koneri', age: 40},
        { name: 'Naveen Thawaan', age: 16},
      ]
    return (
        <div>
            Member List
            <table style={{widows: "100%"}}>
                <th style={{widows: "100%"}}>
                    <td style={{widows: "50%"}}>பெயர்</td>
                    <td style={{widows: "50%"}}>வயது</td>
                </th>
                {members.map(function(member, index){
                    return <tr key={ index }>
                        <td>{member.name}</td>
                        <td>{member.age}</td>
                        </tr>;
                })}
            </table>
        </div>
    )
}

export default Members;