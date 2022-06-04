import React, { useState }  from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardsData from "./cartdata";
import { border } from "@mui/system";
import "./style.css";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/action/Action";

const Cards = () => {

    const[data, setdata] = useState(CardsData);
    // console.log(data);

    const dispatch = useDispatch();

    const send = (e) => {
        // console.log(e);

        dispatch(ADD(e));
    }

    return (
        <>
            <div className="containee mt-3 ">
                <h2 className="text-center">Add to cart project</h2>
                <div className="row d-flex justify-content-center align-item-center">

                {
                    data.map((element, id) => {
                        return(
                            <>
                                <Card style={{ width:'22rem', border:"none" }} className=" mx:2 mt-4 card_style">
                                <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className="mt-4" />
                                <Card.Body>
                                    <Card.Title>{element.rname}</Card.Title>
                                    <Card.Text>
                                        Price : ₹{element.price}
                                    </Card.Text>
                                    <div className="button_div d-flex justify-content-center">
                                        <Button variant="primary"
                                        onClick={() => send(element)}
                                        className="col-lg-12">Add to cart</Button>
                                    </div>
                                </Card.Body>
                                </Card>
                            </>
                        )
                    })
                }

                </div>
            </div>
        </>
    )
}

export default Cards