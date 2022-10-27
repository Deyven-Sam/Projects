import "./movie.css"

const MV=(props)=>{
return (
  <div>

      <div class="movie">

        <img class="movie-img" src={props.image}/>
        <div class="text-movie-cont">
          <div class="mr-grid">
            <div class="col1">
              <h1>{props.title}</h1>
              <ul class="movie-gen">
                <li>{props.rate}  /</li>
                <li>{props.duration}  /</li>
                <li>{props.genre} </li>
              </ul>
            </div>
          </div>
          <div class="mr-grid summary-row">
            <div class="col2">
              <h5>SUMMARY</h5>
            </div>
            <div class="col2">
               <ul class="movie-likes">
                <li><i class="material-icons">&#xE813;</i>124</li>
                <li><i class="material-icons">&#xE813;</i>3</li>
              </ul>
            </div>
          </div>
          <div class="mr-grid">
            <div class="col1">
              <p class="movie-description">{props.summary} </p>
            </div>
          </div>
          <div class="mr-grid actors-row">
            <div class="col1">
              <p class="movie-actors">{props.actors} </p>
            </div>
          </div>
          <div class="mr-grid action-row">
            <div class="col2"><div class="watch-btn"><h3><i class="material-icons">&#xE037;</i>WATCH TRAILER</h3></div>
            </div>
            <div class="col6 action-btn"><i class="material-icons">&#xE161;</i>
            </div>
            <div class="col6 action-btn"><i class="material-icons">&#xE866;</i>
            </div>
            <div class="col6 action-btn"><i class="material-icons">&#xE80D;</i>
            </div>
          </div>
        </div>
      </div>





  </div>
)
}


export default MV;
