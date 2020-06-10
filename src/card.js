import React from "react";
import {Card,CardBody,CardTitle,CardText} from "reactstrap";
import {GiEnvelope,GiPhone,GiAges, GiCaesar} from "react-icons/gi";


const MyCard =({details}) =>{
    return (
        <Card>
            <CardBody className="text-center">
                <img height="150" width="150"
                className="rounded-circle img-thumbnail border-warning"
                src={details.picture?.medium}
                />
                <CardTitle className="text-danger">
                    <h1>
                        <GiCaesar className="pr-2"/>
                       <span className="pr-2">{details.name?.title}</span>
                       <span className="pr-2">{details.name?.first}</span>
                       <span>{details.name?.last}</span>
                    </h1>
                </CardTitle>
                <CardText>
                    <h4 className="text-success">
                            < GiEnvelope className="pr-2" />
                            {details.email}
                            <GiPhone className="pr-2" />
                            {details.phone}
                            <GiAges className="pr-2"/>
                            {details.dob?.age}                            
                    </h4>        
                </CardText>
            </CardBody>
        </Card>
    );
};
export default MyCard;