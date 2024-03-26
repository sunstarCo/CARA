import React from 'react';

export default function AboutPaymentSecondBanner() {
  return (
    <div className=" py-[8.75rem]  bg-[url('/banner/about/BGDeco.png')] bg-cover">
      <div className="w-full md:px-32 px-10 xl:px-[16.375rem] flex flex-col items-center">
        <main className="text-center">
          <p className="text-[3.125rem] uppercase lg:text-nowrap break-keep">
            For informational purposes only, you can access the
          </p>
          <p className="text-[3.125rem] uppercase lg:text-nowrap break-keep">
            federalCenters for Medicare and Medicaid Services (CMS)
          </p>
          <p className="text-[3.125rem] uppercase lg:text-nowrap break-keep">
            Open Payments web page through this{' '}
            <a href="https://openpaymentsdata.cms.gov/" target="_blank" className="text-[#1C40FF] underline">
              link
            </a>
            .
          </p>
        </main>
        <div className="w-[6.25rem] h-2 bg-[#BDB5AA] mt-10 mb-[3.125rem]"></div>
        <sub className="text-2xl leading-[2.8125rem] text-center">
          The federal Physician Payments Sunshine Act mandates the disclosure ofcomprehensive information on payments
          and other items of value exceeding tendollars ($10) from manufacturers of drugs, medical devices, and
          biologics tophysicians and teaching hospitals, ensuring transparency for the public.
        </sub>
      </div>
    </div>
  );
}
