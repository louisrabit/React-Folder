import './banner.css'

function Banner(){
    //JSX --> parece HTML --> Como react trabalha com parte visual 
    // o que o react esta a fazer dentro do return é perceber o que tem 
    // e por seguinte append os elementos respectivos no dom --> 
    //  em vanilla -> document.createElement(`img`)
return(
  <header className="banner">
     <img src="/images/banner.png" alt="default banner"/>
  </header>
   
)


}

export default Banner;