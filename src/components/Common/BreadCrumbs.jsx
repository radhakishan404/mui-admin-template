import { Link } from "react-router-dom";

const BreadCrumbs = ({ crumbs, title }) => {
    return (
        <section className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1>{title}</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            {
                                crumbs.map(function (val, key) {
                                    return (
                                        <li key={key} className={`breadcrumb-item ${val.active ? "active" : ""}`}>
                                            {
                                                val.link ?
                                                    <Link to="/">{val.title}</Link>
                                                    :
                                                    val.title
                                            }
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BreadCrumbs;