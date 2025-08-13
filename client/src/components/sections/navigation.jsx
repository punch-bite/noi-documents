import { useState } from "react";

export default function Navigation() {
    const [search, setSearch] = useState('')

    const searchSomething = (e) => {
        e.preventDefault();
        console.log('Newsletter a été envoyé: ' + search);

    }
    return (
        <section className="container-fluid">
            <div className="row py-3 sticky-top bg-dark">
                <div className="col-6">
                    <button type="button" className='btn btn-sm bi bi-layout-text-sidebar-reverse text-white d-md-none d-block'></button>
                </div>
                <div className="col-6 d-flex justify-content-end align-items-end">
                    <img src="/noi.ico" width={40} alt="" className="img-fluid me-1" />
                    <div className="d-block">
                        <strong className="fw-bolder text-white p-2">Jhon Doe.</strong><br />
                        <span className="bg-success bg-opacity-25 text-success px-2 py-1 rounded-2">Premium</span>
                    </div>
                </div>
            </div>
            <div className="container py-5 my-5 bg-dark rounded-3">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-3 col-3"></div>
                    <div className="col-md-6 col-3">
                        <form onSubmit={searchSomething} action="" method="get" className="form-inline">
                            <div className="input-group border-black bg-black rounded-5 px-2">
                                <label htmlFor="search" className="input-group-text bg-transparent text-white bi bi-search border-0"></label>
                                <input type="search" name="search" id="search"
                                    className="form-control py-2 bg-transparent border-0 d-md-block d-none"
                                    placeholder="Type something..." value={search}
                                    onChange={(e) => { setSearch(e.target.value) }} />

                                <button type="submit" className="btn btn-transparent text-white px-3 d-md-none d-block border-0 bi bi-search"></button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-3 col-3"></div>
                </div>
            </div>
            <div className="container"></div>
        </section>
    )
}