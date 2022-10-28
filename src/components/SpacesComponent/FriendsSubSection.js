import React from "react";

function FriendsSubSection({ name, noOfSteak, lastOnline, noOfCoin }) {
  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            className="w-8 h-8 rounded-full"
            src="https://picsum.photos/100"
            alt={name}
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {name}
            <span className="mx-2">{lastOnline}</span>
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          <p className="text-sm text-gray-500 truncate dark:text-gray-400 p-2">
            {noOfSteak} steak
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400 p-2">
            {noOfCoin} coin
          </p>
        </div>
      </div>
    </li>
  );
}

export default FriendsSubSection;
