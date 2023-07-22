export const Model = ({ ChildComponent, id }) => {
    return (
        <div className={`modal fade bd-example-modal-xl`} id={id} aria-modal="true" role="dialog">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <ChildComponent />
                </div>
            </div>
        </div>
    )
}