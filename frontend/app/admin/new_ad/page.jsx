import React from 'react';
import Input from '@/components/Input';
import Selector from '@/components/Selector';

const page = () => {
  return (
    <div className="w-full h-full flex flex-col	items-center">
      <div>
        <h1 className="text-red-400 text-3xl mb-4 mt-4">Admin</h1>
      </div>

      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Input placeholder_text="כותרת" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <Input placeholder_text="כמות מתנדבים" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <Input placeholder_text="אודות" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <Input placeholder_text="קישור לתמונה" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Input placeholder_text="תאריך" />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Selector options={['תל-השומר', 'הלל-יפה', 'איכילוב']} />
          </div>
        </div>
      </form>
      <button type="submit">שלח</button>
    </div>
  );
};

export default page;
