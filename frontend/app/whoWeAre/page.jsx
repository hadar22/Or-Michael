import React from 'react';
import Image from 'next/image'
const page = () => {
  return <div className='w-full h-screen'>
    
      <Image className="object-center" src="/../public/assets/or_michael_heb.png"  width={400} height={140} alt='image-logo'/>
    
    
    <p className='text-about box-border h-22 w-62 p-5 m-5 border-2 '>
    עמותת אור מיכאל הוקמה בשנת תשע"ו (2016) ,לאחר הירצחו של הרב מיכי מרק לעיני אשתו וילדיו סמוך לישוב עתניאל. במטרה להוסיף אור על החושך החליטה אורית מרק - אטינגר ביתו של מיכי הי"ד להנציח את אביה ע"י הפצת אורו במקומות החשוכים והכואבים בחברה הישראלית, לאחר כשלוש שנים השכול התדפק שוב על דלתות משפחת מרק כשהאח הבכור שלומי מרק ז"ל נהרג בעת שהיה בדרכו לעבודתו במשרד רה"מ, לאחר השבעה החליטה אורית להעצים ולהגביר פעילות עמותת אור מיכאל על מנת להוסיף אור ושמחה לכל מקום.
    </p>
  </div>;
};

export default page;