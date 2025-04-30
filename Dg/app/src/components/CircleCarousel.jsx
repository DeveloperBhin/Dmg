const CircleImage = () =>{

  const images=[
    '/public/vt.svg',
    '/public/dj.webp',
    '/public/fg.png',
    '/public/gt.png',
    '/public/ht.png',
    '/public/lr.png',
    '/public/ps.png',
    '/public/py.png',
    '/public/rt.png',
    '/public/sq.png',
    '/public/tl.png',
    '/public/vs.png',
  ];

  return(
    <div className="relative h-96 w-96 mx-auto">
      {images.map(
        (src, i) => {
          const angle = (360/images.length)*i;
        return (
          <div key={i} className="absolute w-10 h-10 rounded-full overflow-hidden border-2 border-b-blue-800 border-t-amber-500 border-l-green-400  shadow-lg" style={{top:'50%',left:'50%',transform:`rotate(${angle}deg) translate(140px) rotate(-${angle}deg)`,
          transformOrigin:'center center'
           }}>
            <img src={src} alt={`img -${i}`} className=" flex justify-center w-15 rounded-full "/>
           </div>
        );
 } )}
    </div>
  );
};
export default CircleImage;