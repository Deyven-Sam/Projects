import MV from "./mv"



const CreateMV=(film)=>{
return (<MV
key={film.id}
title={film.title}
duration={film.duration}
genre={film.genre}
summary={film.summary}
rate={film.rate}
actors={film.actors}
img={film.img}
  />)
}


export default CreateMV;
