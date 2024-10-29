import { useState } from "react";

export default function EcomAdd()
{
    const [gadgetData, setGadgetData] = useState(
        {
            prodId: 0,
            prodName: "",
            prodCost: 0,
            prodImage: ""
        }
    )

    function handleFormSubmit(event)
    {
        event.preventDefault();
        console.log(gadgetData);
    }

    return (
        <>
        <div className="container">
            <div className="card">
                <form onSubmit={(e) => handleFormSubmit(e)}>
                    <div className="card-header bg-success text-light">
                        <h3>Add a New Gadget</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-control-group m-1">
                            <label htmlFor="gName" className="form-label">
                                Gadget Name:
                            </label>
                            <input 
                            type="text" 
                            id="gName" 
                            placeholder="Enter Gadget Name" 
                            className="form-control"
                            onChange={(e)=>setGadgetData({...gadgetData, prodName: e.target.value})}>
                            </input>
                        </div>
                        <div className="form-control-group m-1">
                            <label htmlFor="gCost" className="form-label">
                                Gadget Cost:
                            </label>
                            <input 
                            type="text" 
                            id="gCost" 
                            placeholder="Enter Gadget Cost" 
                            className="form-control"
                            onChange={(e)=>setGadgetData({...gadgetData, prodCost: e.target.value})}>
                            </input>
                        </div>
                        <div className="form-control-group m-1">
                            <label htmlFor="gImage" className="form-label">
                                Gadget Image Url:
                            </label>
                            <input 
                            type="text" 
                            id="gImage" 
                            placeholder="Enter Gadget Image Url" 
                            className="form-control"
                            onChange={(e)=>setGadgetData({...gadgetData, prodImage: e.target.value})}>
                            </input>
                        </div>
                    </div>
                    <div className="card-footer bg-success text-light">
                        <button type="submit" className="btn btn-light text-success">Add
                        </button>
                        <button 
                        type="reset" 
                        className="btn btn-light text-success mx-5"
                        >Clear</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}