import pic from '../assets/IMG_0031.JPG'

function Card() {

    return(
        // 'class' is reserved keyword in .jsx, use className for css class
        <div className="card"> 
            <img src={pic} alt="card image" />
            <h2>Title</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, officia!</p>
        </div>
    );
}

export default Card