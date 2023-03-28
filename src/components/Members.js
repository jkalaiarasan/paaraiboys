import React from 'react';
import members from '../data/members.json';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage } from 'mdb-react-ui-kit';

const Members = () => {
    function importAll(r) {
        return r.keys().map(r);
    }

    const images = importAll(require.context('../photos', false, /\.(png|jpe?g|svg)$/));
    console.log('images ', images)
    members.forEach(member => {
        if(member.whatsapp){
            member.whatsapp = 'https://wa.me/' +  member.whatsapp + '?text=Hi%20' + member.name + ',%20FROM%20பாறை%20பாய்ஸ்!';
        }
        if(member.photo){
            member.photoPath = `/static/media/${member.photo}.${member.photoId}.${member.photoType}`;
        } else {
            member.photoPath = 'https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-20.jpg';
        }
    })
    return (
        <div>
            <div className="vh-100">
                {members.map((member) => {
                    return <MDBContainer key={member.Id}>
                        <MDBRow className="justify-content-center">
                        <MDBCol md="9" lg="7" xl="5" className="mt-5">
                            <MDBCard style={{ borderRadius: '15px' }}>
                            <MDBCardBody className="p-4">
                                <div className="d-flex text-black">
                                <div className="flex-shrink-0">
                                    <MDBCardImage
                                    style={{ width: '180px', borderRadius: '10px', height: '200px' }}
                                    src={member.photoPath}
                                    alt='Member image'
                                    fluid />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <MDBCardTitle>{member.name}</MDBCardTitle>
                                    <MDBCardText>{member.title}</MDBCardText>
                                    <div className="d-flex pt-1">
                                        <button type="button" className="btn btn-primary" style={{width: "150px"}}>
                                            <a rel="noreferrer" style={{color : "white"}} target="_blank" href={member.whatsapp}>
                                                Chat
                                            </a>
                                        </button>
                                    </div>
                                </div>
                                </div>
                            </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                })}
            </div>
        </div>
    )
}

export default Members;