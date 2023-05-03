export default function RestaurantPage() {

    return (
        <div className="RestaurantPage" >
            <h2>Restaurant Page</h2>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <div>
                    <img style={{border:'2px dotted black', height:"200px", width:"200px"}}src="" alt="" placeholder="Restaurant Picture" />
                    <div style={{maxWidth:"500px"}}>
                        <p>Reviews: <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus veniam molestiae tenetur sapiente quibusdam labore ipsum quam quasi perferendis magni nostrum adipisci ad facilis, vel illum sequi?</p></p>
                    </div>
                </div>
                <div>
                    <h4>Restaurant Name</h4>
                    <h4>Restaurant URL</h4>  
                    <button onClick={()=>alert('This button will call a list of beers from the restaurant"s beers list')}>Beer List</button>              
                </div>
            </div>  
        </div>
    )
}