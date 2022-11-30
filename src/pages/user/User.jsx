import React from "react"
import "./user.css"
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish }  from '@material-ui/icons';
import { Link } from "react-router-dom"

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddBtn">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img
                            className="userShowImg" 
                            alt=""
                            src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Ken Huang</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>

                    <div className="userShowBottom">
                            <span className="userShowTitle">Account Details</span>
                            <div className="userShowInfo">
                                <PermIdentity className="userShowIcon" />
                                <span className="userShowInfoTitle">kenhuang</span>
                            </div>
                            <div className="userShowInfo">
                                <CalendarToday className="userShowIcon" />
                                <span className="userShowInfoTitle">1974.10.22</span>
                            </div>

                            <span className="userShowTitle">Contact Details</span>

                            <div className="userShowInfo">
                                <PhoneAndroid className="userShowIcon" />
                                <span className="userShowInfoTitle">0948302814</span>
                            </div>
                            <div className="userShowInfo">
                                <MailOutline className="userShowIcon" />
                                <span className="userShowInfoTitle">kenhuang@gmail.com</span>
                            </div>
                            <div className="userShowInfo">
                                <LocationSearching className="userShowIcon" />
                                <span className="userShowInfoTitle">Taipei City, Xhuang Sin Road</span>
                            </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input 
                                    className="userUpdateInput"
                                    type="text" 
                                    placeholder="kenhuang" 
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input 
                                    className="userUpdateInput"
                                    type="text" 
                                    placeholder="Ken Huang" 
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input 
                                    className="userUpdateInput"
                                    type="text" 
                                    placeholder="kenhuang@gmail.com" 
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input 
                                    className="userUpdateInput"
                                    type="text" 
                                    placeholder="0948302814" 
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input 
                                    className="userUpdateInput"
                                    type="text" 
                                    placeholder="Taipei City, Xhuang Sin Roads" 
                                />
                            </div>
                        </div>

                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img
                                    className="userUpdateImg"  
                                    alt=""
                                    src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                />
                                <label htmlFor="file">
                                    <Publish className="userUpdatIcon"/>
                                </label>
                                <input type="file" id="file" style={{display: "none"}} />
                            </div>

                            <button className="userUpdateBtn">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}