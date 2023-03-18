import Link from 'next/link';
import React from 'react';
import styles from "./ProjectCard.module.css"
// import firstwebsites from "../img/firstwebsites.png"
// import secondwebsites from "../img/secondwebsites.png"
// import thirdwebsites from "../img/thirdwebsites.png"
// import fourthwebsite from "../img/fourthwebsite.png"
// import fifthwebsite from "../img/fifthwebsite.png"
// import sixthwebsite from "../img/sixthwebsite.png"


const ProjectCard = ({item}) => {
  
     // const {  description, name, technology,image, link} = itemforcard;
  return (

    <div className={styles.pllist} key={item.id}>

       <div className={styles.p}>
           <div className={styles.pbrowser}>
                  <div className={styles.pcircle}></div>
                  <div className={styles.pcircle}></div>
                  <div className={styles.pcircle}></div>
            </div>
            {/* <Link href={`${item.link}`} target='_blank' rel='noreferrer'>
                 <img src={`${item.img}`}  alt=' ' className={styles.pimg}/>
 
              
             </Link> */}
             {
               console.log(item.id)
             }

             

      
        </div>

        
        
        
       
        
       
     
        
        
    </div>
   
  );
}

export default ProjectCard;
