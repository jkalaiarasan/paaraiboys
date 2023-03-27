import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

const Members = () => {
    let members = [
        { name: 'V.லோகேஷ்', age: 9, title: 'தலைவர்'},
        { name: 'ஹரிஷ்', age : 11, title: 'உறுப்பினர்'},
        { name: 'சந்தோஷ்', age: 10, title: 'உறுப்பினர்'},
        { name: 'சக்திவேல் ', age: 8, title: 'உறுப்பினர்'},
        { name: 'கோகுல்', age: 16, title: 'உறுப்பினர்'},
        { name: 'சந்துரு', age : 5, title: 'உறுப்பினர்'},
        { name: 'லோகித்', age: 6, title: 'உறுப்பினர்'},
        { name: 'ரோஹித்', age: 6, title: 'உறுப்பினர்'},
        { name: 'நவீன் பட்டயார்', age: 12, title: 'உறுப்பினர்'},
        { name: 'MP தர்மர்', age: 36, title: 'உறுப்பினர்'},
        { name: 'அஜித்', age: 25, title: 'உறுப்பினர்'},
        { name: 'சிவா', age: 24, title: 'உறுப்பினர்'},
        { name: 'சிவ குமார்', age: 27, title: 'உறுப்பினர்'},
        { name: 'P கோனேரி', age: 40, title: 'உறுப்பினர்'},
        { name: 'நவீன் தவான்', age: 16, title: 'உறுப்பினர்'},
        { name: 'மோகன்', age: 10, title: 'உறுப்பினர்'},
        { name: 'T.பிரசன்னா', age: 10, title: 'உறுப்பினர்'},
        { name: 'K.பிரசன்னா', age: 10, title: 'உறுப்பினர்'},
        { name: 'திருப்பதி', age: 15, title: 'உறுப்பினர்'},
      ]
    return (
        <div>
            <div className="vh-100">
                {members.map((member) => {
                    return <MDBContainer>
                        <MDBRow className="justify-content-center">
                        <MDBCol md="9" lg="7" xl="5" className="mt-5">
                            <MDBCard style={{ borderRadius: '15px' }}>
                            <MDBCardBody className="p-4">
                                <div className="d-flex text-black">
                                <div className="flex-shrink-0">
                                    <MDBCardImage
                                    style={{ width: '180px', borderRadius: '10px' }}
                                    src='https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-20.jpg'
                                    alt='Member image'
                                    fluid />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <MDBCardTitle>{member.name}</MDBCardTitle>
                                    <MDBCardText>{member.title}</MDBCardText>
                                    <div className="d-flex pt-1">
                                    <MDBBtn outline className="me-1 flex-grow-1">Chat</MDBBtn>
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