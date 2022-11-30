import React from "react"
import "./widgetLg.css"

export default function WidgetLg() {
    const Button = ({type} ) => {
        return <button className={"widgetLgBtn " + type}>{type}</button>
    }

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transacitons</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img className="widgetLgImg" alt="" src="https://images.unsplash.com/photo-1517630800677-932d836ab680?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
                        <span className="widgetLgName">Sarah Compbell</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2022</td>
                    <td className="widgetLgAbout">$122</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img className="widgetLgImg" alt="" src="https://images.unsplash.com/photo-1517630800677-932d836ab680?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
                        <span className="widgetLgName">Sarah Compbell</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2022</td>
                    <td className="widgetLgAbout">$122</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img className="widgetLgImg" alt="" src="https://images.unsplash.com/photo-1517630800677-932d836ab680?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
                        <span className="widgetLgName">Sarah Compbell</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2022</td>
                    <td className="widgetLgAbout">$122</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img className="widgetLgImg" alt="" src="https://images.unsplash.com/photo-1517630800677-932d836ab680?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
                        <span className="widgetLgName">Sarah Compbell</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2022</td>
                    <td className="widgetLgAbout">$122</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved"/>
                    </td>
                </tr>
            </table>
        </div>
    )
}