import { Fragment } from "react"

export const RoleEdit = () => {
    return (
        <Fragment>
            <div className="modal-header">
                <h4 className="modal-title">Edit Role</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <div className="form-group">
                    <span htmlFor="exampleSelectBorder"><code>Access Roles</code></span>
                    <br></br>
                    <select className="custom-select form-control-border" multiple="multiple" id="exampleSelectBorder">
                        <option value="L">Learner</option>
                        <option value="DPM">Dedicated Placement manager (DPM)</option>
                        <option value="GMDPM">General Manager - DPM</option>
                        <option value="AM">Account Manager (AM)</option>
                        <option value="GM-AM">General Manager - Account Manager (GM - AM)</option>
                        <option value="QA">Quality Assessor (QA)</option>
                        <option value="HP">Head - Placements</option>
                        <option value="PPC">Post Placement Call Team (PPC)</option>
                        <option value="Recruiter">Recruiter (public)</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleSelectBorder"><code>ssc Roles</code></label>
                    <select className="custom-select form-control-border" id="exampleSelectBorder">
                        <option>Value 1</option>
                        <option>Value 2</option>
                        <option>Value 3</option>
                    </select>
                </div>
            </div>
            <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </Fragment>
    )
}