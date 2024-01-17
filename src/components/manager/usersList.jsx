import { useDispatch, useSelector } from "react-redux"
import { deleteUser, getAllUser } from "../../redux/axios/userAxios"
import { FillUser } from "../../redux/action/userAction"
import React, { useEffect } from "react"

export const UsersList = () => {
    let d= useDispatch()
    const allUsers = useSelector(x => x.UserReducer.listUser)
    const obj = allUsers[0]// ?? {}
    const keys = Object.keys(obj).filter(x => x != "userIsDelete")
    
    // useEffect(() => {
    //     getAllUser().then(x => { d(FillUser(x.data)); debugger })
    // }, [])


    const toDell = (userId) => {
        deleteUser(userId).then(x => {
            // const updatedUsers = allUsers.filter((user) => user.userId !== userId);
            d(FillUser(x.data))
        })
    }
    
    return (<>

        <table className="table">
            <tbody>
                <tr>
                    {
                        keys.map((x, index) => {
                            return <th key={index}>{x}</th>
                        })
                    }
                </tr>
                {
                    allUsers.map((user, index) => (
                        <tr key={index}>
                            {
                                keys.map((key, i) => (
                                    <td key={i}>{user[key]}</td>
                                ))
                            }
                            <button onClick={()=>toDell(user.userId)}>to delete</button>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>)
} 