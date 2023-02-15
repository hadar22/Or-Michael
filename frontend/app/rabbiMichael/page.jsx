import React from 'react';
import Image from 'next/image';

const page = () => {
    return (
        <>
     <div className='flex py-32 item-center justify-center'>
     {/*   <div className=' text-center absolute '> */}

    
    <div className="max-w-3xl flex rounded overflow-hidden shadow-lg">
  <Image src="/../public/assets/rabbi.jpg" width={190} height={100} alt="rabbi"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">מיכאל (מיכי) מרק הי"ד</div>
    <p className="text-gray-700 text-base">
    בן 46 היה בהירצחו, איש משפחה אוהב, ידע לקבל כל אדם כמו שהוא באהבה גדולה ולתת לו את ההרגשה שהוא אהוב ויקר לו. אדם ישר ונאמן, איש חזון ועשייה בלתי פוסקת. עסק רבות בחסד, עשייה ציבורית ותרומה למען הכלל. בתוך כך ניהל גם את ישיבת ההסדר שביישוב עתניאל. ידע לשלב בין כל העולמות. שאף תמיד גבוה והצליח להגשים כל חלום שעלה במחשבתו. מפעל חייו למעשה היה להוסיף אור ולהפוך את העולם למקום טוב יותר. נרצח בקיץ תשע"ו, כ"ה בסיוון, על ידי מחבלים בפיגוע ירי בכביש 60 שבדרום הר חברון בו נכחו גם אשתו וילדיו שנפצעו גם הם. במותו ציווה לנו חיים של עשיית טוב והמשך האור הגדול שלו - "להיות טובים יותר"
    </p>
  </div>
  </div>
    </div></>);
};
export default page;
