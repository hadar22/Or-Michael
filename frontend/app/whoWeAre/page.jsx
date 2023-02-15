import React from 'react';
import Image from 'next/image'
const page = () => {
  return (
    <div>
        <div className="block justify-center sm:flex sm:gap-5 mt-10 pt-6 sm:mt-20">
            <div className=" sm:w-1/4 mb-7 mt-6 sm:mb-0 lg:block hidden">
                 <Image src="/../public/assets/or_michael_heb.png"  width={200} height={200} alt='image-logo'/>
            </div>
            <div className="font-general-regular w-50 sm:w-3/4 text-center">
              <p className='py-5 px-8 leading-normal lg:text-xl xl:text-1xl '>
    עמותת אור מיכאל הוקמה בשנת תשע"ו (2016) ,לאחר הירצחו של הרב מיכי מרק לעיני אשתו וילדיו סמוך לישוב עתניאל. במטרה להוסיף אור על החושך החליטה אורית מרק - אטינגר ביתו של מיכי הי"ד להנציח את אביה ע"י הפצת אורו במקומות החשוכים והכואבים בחברה הישראלית, לאחר כשלוש שנים השכול התדפק שוב על דלתות משפחת מרק כשהאח הבכור שלומי מרק ז"ל נהרג בעת שהיה בדרכו לעבודתו במשרד רה"מ, לאחר השבעה החליטה אורית להעצים ולהגביר פעילות עמותת אור מיכאל על מנת להוסיף אור ושמחה לכל מקום.
        </p>
            </div>

        </div>
        <div className='bg-amber-400 py-14'>
          <h1 className='text-center font-bold pb-10'>הצוות שלנו</h1>
          <div className='grid grid-cols-3 text-center justify-center'>
            <div className='block p-3 '>
              <Image src='/../public/assets/man.jpg' width={100} height={100} className="rounded-full inline" alt="team"/>
              <p className='font-bold'>מימון בן דוד</p>
              <p>רואה חשבון</p>
              

            </div>
            <div className='block p-3'>
            <Image src='/../public/assets/man.jpg' width={100} height={100} className="rounded-full inline" alt="team"/>
              <p className='font-bold'>תהילה באט</p>
              <p>גרפיקאית</p>

            </div>
            <div className='block p-3'>
            <Image src='/../public/assets/man.jpg' width={100} height={100} className="rounded-full inline" alt="team"/>
              <p className='font-bold'>מתניה כהן</p>
              <p>חבר וועד</p>

            </div>
            <div className='block p-3'>
            <Image src='/../public/assets/man.jpg' width={100} height={100} className="rounded-full inline" alt="team"/>
              <p className='font-bold'>יהונתן אבידני</p>
              <p>חבר וועד</p>

            </div>
            
            <div className='block p-3'>
            <Image src='/../public/assets/man.jpg' width={100} height={100} className="rounded-full inline" alt="team"/>
              <p className='font-bold'>אורית מרק אטינגר</p>
              <p>מייסדת ומנכ"לית</p>

            </div>
            <div className='block p-3'>
            <Image src='/../public/assets/man.jpg' width={100} height={100} className="rounded-full inline" alt="team"/>
              <p className='font-bold'>שלומציון שירזי</p>
              <p>מנהלת גיוס משאבים</p>

            </div>
            <div className='block p-3'>
            <Image src='/../public/assets/man.jpg' width={100} height={100} className="rounded-full inline" alt="team"/>
              <p className='font-bold'>אורן יצחקוב</p>
              <p>מנהל האתר ורכז</p>

            </div>
            <div className='block p-3'>
            <Image src='/../public/assets/man.jpg' width={100} height={100} className="rounded-full inline" alt="team"/>
              <p className='font-bold'>שגיא וינוגרד</p>
              <p>חבר הנהלה</p>

            </div>
            <div className='block p-3'>
            <Image src='/../public/assets/man.jpg' width={100} height={100} className="rounded-full inline" alt="team"/>
              <p className='font-bold'>מוריה כהן</p>
              <p>מנהלת מתנדבים</p>

            </div>

          </div>
        </div>
       
    </div>
      
        
      
  );
};

export default page;