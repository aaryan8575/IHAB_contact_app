import styles from './styles.module.css';

const Header = ({ title }) => {
  return <header className={styles.Header}>{title}</header>;
};

const PlanSection = ({ plan }) => {
  return (
    <div className={styles.textGray500}>
      <h3>Current Plan</h3>
      <h3 className={styles.textBlue600}>{plan}</h3>
    </div>
  );
};

const ImageSection = ({ src, alt, width, height }) => {
  return (
    <div className={`${styles.roundedMd} ${styles.ml10}`}>
      <img className={`${styles.roundedMd}`} src={src} alt={alt} width={width} height={height} /> 
    </div>
  );
};

const PageTemplate = () => {
  return (
    <div className={styles.PageTemplate}>
      <main>
        <Header title="Settings" />
        <div className={`${styles.bgWhite} ${styles.roundedLg} ${styles.text2242D8} ${styles.flex} ${styles.gap64} ${styles.hoverBorder2} ${styles.borderBlue700} ${styles.fontBold} ${styles.p4} ${styles.ml3}`}>
          <ImageSection src="/images/a.jpg" alt="settingsimages" width={82} height={64} />
          <div>
            <h1>ihab pro</h1>
            <h3>ihab pro for infinite experience</h3>
          </div>
          <PlanSection plan="free" />
        </div>
        {/* 
        <div className={styles.bgBlue300}>rngidcvljkfvm</div>
        <div className={styles.bgGreen300}>o;iwinuegmsjfkld</div> 
        */}
      </main>
    </div>
  );
}

export default PageTemplate;



// import React from 'react'
// import clsx from "clsx";
// import PageTemplate from "@/components/PageTemplate";
// import styles from "./setting1.module.css";
// import Accordion from "@/components/accordion";
// import BarChart from '../BarChart';
// import Header from '../Header';
// import EditCard from '../../../public/icons/editcard.svg';
//  import Image from 'next/image';


//  export default function Setting1() {
//   return (

// <div>
// <PageTemplate>
//                 <main>
//                   <Header title="Settings"/>
//                   <div className='bg-white rounded-lg text-[#2242D8] flex  gap-64 hover:border-2 border-blue-700 font-bold p-4 ml-3' >
//                     <div className='rounded-md ml-10'>
//                    <Image className='rounded-md' alt="settingsimgaes" src="/images/a.jpg" width={82} height={64} /> 
//                    </div>
//                     <div>
//                     <h1>ihab pro</h1>
//                     <h3>ihab pro for infinite experience </h3>
//                     </div>
//                   <div className='text-gray-500'>
//                    <h3> current plan</h3>
//                    <h3 className='text-blue-600'>free</h3>
//                   </div>
//                   </div>
//                   {/* <div className='bg-blue-300'>rngidcvljkfvm</div>
//                   <div className='bg-green-300'>o;iwinuegmsjfkld</div> */}
//                 </main>
//                </PageTemplate>
// </div>
 
//   )
// }



//     <div>
//        <>
       
       
              //  <PageTemplate>
              //   <main>
              //     <Header title="Settings"/>
              //     <div className='bg-white rounded-lg text-[#2242D8] flex  gap-64 hover:border-2 border-blue-700 font-bold p-4 ml-3' >
              //       <div className='rounded-md ml-10'>
              //      <Image className='rounded-md' alt="settingsimgaes" src="/images/a.jpg" width={82} height={64} /> 
              //      </div>
              //       <div>
              //       <h1>ihab pro</h1>
              //       <h3>ihab pro for infinite experience </h3>
              //       </div>
              //     <div className='text-gray-500'>
              //      <h3> current plan</h3>
              //      <h3 className='text-blue-600'>free</h3>
              //     </div>
              //     </div>
              //     {/* <div className='bg-blue-300'>rngidcvljkfvm</div>
              //     <div className='bg-green-300'>o;iwinuegmsjfkld</div> */}
              //   </main>
              //  </PageTemplate>
              
           
             
           
//            </>
//     </div>

// // import React from 'react'
// // import PageTemplate from "@/components/PageTemplate";
// // import styles from "./setting1.module.css";
// import Accordion from "@/components/accordion";
// import BarChart from '../BarChart';
// import Header from '../Header';

// import EditCard from '../../../public/icons/editcard.svg';
// import Image from 'next/image';
// const accordianData = [
//   {
//     id: 1,
//     images:``,
//     title:
//       "Free and finest digital 1 HFJHG KJGKJH KHJGJ SDFGLKJGLKSDFG ,SJDFGNSDFKLGNSDF,M.G SDFGH",
//     desc:`ihab pro for infinite experience`,
//     plan:`current plan`,
//     type:`free`
//   },
//   {
//     id: 2,
//     title: "Free and finest digital 2",
//     desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
//     atque minus adipisci hic laborum, aliquid, mollitia at rem aliquam
//     dolore porro! Recusandae tempore doloremque molestias dolor. In
//     facilis deserunt qui voluptatum, fuga sapiente laboriosam tenetur eius
//     ad nam quisquam, perspiciatis saepe atque , quam dolorum accusamus
//     omnis adipisci natus. Voluptas, fuga.`,
//   },
//   {
//     id: 3,
//     title: "Free and finest digital 3",
//     desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
//     atque minus adipisci hic laborum, aliquid, mollitia at rem aliquam
//     dolore porro! Recusandae tempore doloremque molestias dolor. In
//     facilis deserunt qui voluptatum, fuga sapiente laboriosam tenetur eius
//     ad nam quisquam, perspiciatis saepe atque , quam dolorum accusamus
//     omnis adipisci natus. Voluptas, fuga.`,
//   },
// ];

// export default function Setting1() {
//   return (
//    
//   )
// }

{/* <div
className={clsx(styles.wrapper, {
  [wrapperStyle]: !!wrapperStyle,
})}
>
{data.map((x) => (
  <details
    key={x.id}
    className={clsx(styles.details, {
      [detailsStyle]: !!detailsStyle,
    })}
  >
    <summary
      className={clsx({
        [summaryStyle]: !!summaryStyle,
      })}
    >
      <p>{x.title}</p>
    </summary>
    <p
      className={clsx({
        [descStyle]: !!descStyle,
      })}
    >
      {x.desc}
    </p>
  </details>
))}
</div> */}