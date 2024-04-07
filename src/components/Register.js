import { useState } from "react";

const Register = () => {
    let [newAdmission, setNewAdmission] = useState([]);
    let [name, setName] = useState('');
    let [Class, setClass] = useState('');
    let [sub, setSub] = useState('');
    let [fees, setFees] = useState('');

    const saveFormData = () => {
        let inputFields = { name: name, Class: Class, sub: sub, fees: fees };
        setNewAdmission([...newAdmission, inputFields]);
        setName('');
        setClass('');
        setSub('');
        setFees("");
    }

    const deleteOnclick = (index) => {
        newAdmission.splice(index, 1)
        setNewAdmission([...newAdmission]);
    }

    const editOnclick = (index, studentDetails) => {
        setName(studentDetails.name);
        setClass(studentDetails.Class);
        setFees(studentDetails.fees);
        setSub(studentDetails.sub);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h1 align="center">Entry Form</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Class</th>
                                <th>Subjects</th>
                                <th>Fees</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {newAdmission.map((studentDetails, index) => (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{studentDetails.name}</td>
                                    <td>{studentDetails.Class}</td>
                                    <td>{studentDetails.sub}</td>
                                    <td>{studentDetails.fees}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => editOnclick(index, studentDetails)}>Edit</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => deleteOnclick(index)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-md-4">
                    <form>
                        <h2 align="center">New students are: {newAdmission.length}</h2>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} value={name} />
                        </div>
                        <div className="form-group">
                            <label>Class</label>
                            <input type="text" className="form-control" onChange={(e) => setClass(e.target.value)} value={Class} />
                        </div>
                        <div className="form-group">
                            <label>Subjects</label>
                            <input type="text" className="form-control" onChange={(e) => setSub(e.target.value)} value={sub} />
                        </div>
                        <div className="form-group">
                            <label>Fees</label>
                            <input type="text" className="form-control" onChange={(e) => setFees(e.target.value)} value={fees} />
                        </div>
                        <button type="button" className="btn btn-success btn-block" onClick={saveFormData}>Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
