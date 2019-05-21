import React, { Component } from 'react';
import dl from './dulieu.json';
import NewsRelated from './NewsRelated.js';

class NewsDetail extends Component {
    render() {
        var dem = 1;
        return (
            <div>
                <div>
                <header className="masthead tintuc">
                    <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-12 my-auto">
                        <div className="header-content mx-auto">
                            <h1 className="mb-5 text-center">Trang chi tiet tin</h1>
                        </div>
                        </div>
                    </div>
                    </div>
                </header>
                {/* begin chitiet */}
                
                {
                    dl.map((value, key) => {
                        if(value.id === parseInt(this.props.match.params.id,20)){
                            return (
                                <div className="jumbotron jumbotron-fluid" key={key}>
                                    <div className="container">
                                    <img src={value.anh} className="img-fluid" alt="router for react" />
                                    <p className="lead">{value.tieuDe}</p>
                                    <hr className="my-2" />
                                    {
                                        value.noiDung
                                    }
                                    </div>
                                </div>
                            )
                        }else
                            return true;
                    })
                }

                <div className="container">
                    <h4 className="card-title text-center">Tin lien quan</h4>
                    <div className="card-deck mt-3 mb-5">
                    {
                        dl.map((value, key) => {
                            if(value.id !== parseInt(this.props.match.params.id,20)){
                                if(dem <= 4){
                                    dem++;
                                    return (
                                        <NewsRelated key={key} tinId={value.id} anh={value.anh} tieuDe={value.tieuDe} trichDan={value.trichDan}/>
                                    )
                                }
                            }
                            return true;
                        })
                    }
                        
                    </div>
                </div>
                {/* end  chitiet */}
                </div>

            </div>
        );
    }
}

export default NewsDetail;