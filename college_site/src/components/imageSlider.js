import gcet_1 from '../Assets/Garden.jpg';
import gcet_2 from '../Assets/Lab1.jpg';
import gcet_3 from '../Assets/Mechanical1.jpg';
import gcet_4 from '../Assets/gcet_3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


const imageslider = (props) => {
    return (
        <div className='carousel_div'>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    {
                        props.href.slice(1).map((e,index) =>
                            <li data-target="#carouselExampleIndicators" data-slide-to={""+(index+1)}></li>
                        )
                    }
                    {/* <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> */}
                </ol>
                <div class="carousel-inner">
                            <div class="item active">
                                <img class="d-block" src={props.href[0]} alt="First slide" />
                            </div>
                    {
                        props.href.slice(1).map(e =>
                            <div class="item">
                                <img class="d-block" src={e} alt="First slide" />
                            </div>
                        )
                    }
                    {/* <div class="item active">
                        <img class="d-block" src={props.href} alt="First slide" />
                    </div>
                    <div class="item">
                        <img class="d-block" src={props.href} alt="Second slide" />
                    </div>
                    <div class="item">
                        <img class="d-block" src={props.href} alt="Third slide" />
                    </div> */}

                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )

}

export default imageslider;