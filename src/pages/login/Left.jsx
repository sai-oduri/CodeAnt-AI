import SubtractIcon from '../../assets/Subtract.png';
import SubtractLargeIcon from '../../assets/SubtractLarge.png';
import PieChart from '../../assets/ant-design_pie-chart-filled.png';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

const Left = () => {
  return (
    <div className="bg-white relative h-screen w-full border-r-[1px] flex items-center justify-center">
      <div className="w-[474px]">
        {/* top */}
        <div className="w-[447px] rounded-2xl bg-white drop-shadow-custom">
          <div className="flex items-center px-5 py-4 border-b-[1px]">
            <img
              className="mr-2"
              src={SubtractIcon}
              alt="subtract-icon"
              width={28}
              height={31}
            />
            <p className="font-bold text-secondary">
              AI to Detect & Autofix Bad Code
            </p>
          </div>
          <div className="flex items-center justify-between px-5 py-6">
            <div className="flex flex-col items-center justify-center">
              <p className="font-bold text-secondary">30+</p>
              <p className="text-sm text-primary">Language Support</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-bold text-secondary">10K+</p>
              <p className="text-sm text-primary">Devleopers</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-bold text-secondary">100K+</p>
              <p className="text-sm text-primary">Hours Saved</p>
            </div>
          </div>
        </div>

        {/* down */}
        <div className="w-[265px] bg-white px-6 py-4 rounded-2xl drop-shadow-custom relative left-52 bottom-3 z-20">
          <div className="flex items-center justify-between mb-2">
            <div className="bg-[#9D90FA]/25 flex items-center justify-center rounded-full h-14 w-14">
              <img src={PieChart} alt="pie-chart" height="28" width="28" />
            </div>
            <div>
              <div className="flex gap-1 text-blue-700">
                <ArrowUpIcon className="size-5" />
                <p className="font-bold text-sm">14%</p>
              </div>
              <p className="text-xs text-primary">This Week</p>
            </div>
          </div>
          <div className="font-bold p-2">
            <p className="text-xs text-primary">Issues Fixed</p>
            <p className="text-2xl text-secondary">500K+</p>
          </div>
        </div>
      </div>

      {/* IAMGE */}
      <div className="absolute left-0 bottom-0 opacity-40">
        <img src={SubtractLargeIcon} alt="subtract-large-icon" width="214" />
      </div>
    </div>
  );
};

export default Left;
