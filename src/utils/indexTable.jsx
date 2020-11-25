import React from "react";
import { NavLink } from "react-router-dom";

import LinearThumb from "./thumbs/linear.jpg";
import BinaryThumb from "./thumbs/binary.jpg";
import PathThumb from "./thumbs/path.jpg";
import SortingThumb from "./thumbs/sorting.jpg";

import "./bootstrap.min.css";

export default class IndexTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container mt-2">
                <div style={{padding: 20}}className="text-center text-muted add-space">
                    <h1 style={{color: "crimson"}}>Algorithm Design and Analysis Project</h1>
                    <h5 style={{color: "#f46386"}}>quote</h5>
                </div>

                <center>
                    <div style={{padding: 50}} className="row mt-2">

                        <div className="col-sm-3 col-6">
                            <NavLink to="/pathfinder">
                                <img
                                    className="img-fluid w-20 shadowB"
                                    src={PathThumb}
                                    alt="Path Finding"
                                />
                                <p className="text-dark thumb-title">
                                    Path Finding
                                </p>
                            </NavLink>
                        </div>
                        <div className="col-sm-3 col-6">
                            <NavLink to="/sorting">
                                <img
                                    className="img-fluid w-20 shadowB"
                                    src={SortingThumb}
                                    alt="Sorting"
                                />
                                <p className="text-dark thumb-title">
                                    Sorting Visualiser
                                </p>
                            </NavLink>
                        </div>

                        <div className="col-sm-3 col-6">
                            <NavLink to="/linear-search">
                                <img
                                    className="img-fluid w-20 shadowB"
                                    src={LinearThumb}
                                    alt="Linear Search"
                                />
                                <p className="text-dark thumb-title">
                                    Linear Search
                                </p>
                            </NavLink>
                        </div>
                        <div className="col-sm-3 col-6">
                            <NavLink to="/binary-search">
                                <img
                                    className="img-fluid w-20 shadowB"
                                    src={BinaryThumb}
                                    alt="Binary Search"
                                />
                                <p className="text-dark thumb-title">
                                    Binary Search
                                </p>
                            </NavLink>
                        </div>

                    </div>
                </center>
            </div>
        );
    }
}
